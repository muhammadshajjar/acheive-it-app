import "./Authentication.css";
//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import useLoader from "../Hooks/useLoader";

//assets
import googleIcon from "../Assets/google.png";
import logo from "../Assets/logo.png";

//firebase
import { auth, db } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

//helper
import { generateUserName } from "../Helper/generateUserName";

const Authentication = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loader, isLoading, setIsLoading] = useLoader();

  const triggerSignInHandler = (e) => {
    e.preventDefault();
    setSignUpForm(false);
  };
  const triggerSignUpHandler = (e) => {
    e.preventDefault();
    setSignUpForm(true);
  };
  const signUpHandler = async (e) => {
    e.preventDefault();

    if (!userEmail.length || !userPassword.length || !userName.length) {
      alert("Please fill out the fields below");
      return;
    }

    if (userPassword.length < 6) {
      alert("Choose atleast six digit password");
      return;
    }

    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      try {
        await addDoc(collection(db, "users"), {
          userName: generateUserName(userEmail),
          name: userName,
          email: user.email,
          uid: user.uid,
          profileImg: user?.photoURL || null,
        });
      } catch (err) {
        alert(err);
        setIsLoading(false);
      }

      navigate("/admin");
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/admin");
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("reset Password by email");
      await sendPasswordResetEmail(auth, userEmail);
      alert("Email Sent successfully!");
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const signUpWithGoogleHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithPopup(auth, provider);

      try {
        await addDoc(collection(db, "users"), {
          userName: generateUserName(userEmail),
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          profileImg: user.photoURL,
        });
      } catch (err) {
        alert(err);
        setIsLoading(false);
      }
      navigate("/admin");
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  };

  const signInWithGoogleHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin");
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  };

  //conditionally render authenticaiton form to work for both login and signup

  const formTaglineTitle = `${
    signUpForm ? `Let’s get started!` : `Welcome Back`
  }`;

  const formTaglineDesc = `${
    signUpForm
      ? `Please Fill out the  details below`
      : `Welcome Back! Please Enter your details.`
  }`;

  return (
    <>
      <div className="header__logo" style={{ margin: 20 }}>
        <Link to="/">
          <img src={logo} alt="company logo" />
        </Link>
      </div>
      <div className="auth">
        <form className="form">
          <h2>{formTaglineTitle}</h2>
          <p className="form__desc">{formTaglineDesc}</p>
          {signUpForm && (
            <>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
          {!signUpForm && (
            <div className="form__action">
              <div>
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <button onClick={forgotPasswordHandler} className="action-btn">
                Forgot password
              </button>
            </div>
          )}
          {!signUpForm && (
            <button
              className="form__btn form__btn--signin"
              onClick={signInHandler}
            >
              Sign in
            </button>
          )}
          {signUpForm && (
            <button
              className="form__btn form__btn--signin"
              onClick={signUpHandler}
            >
              Sign up
            </button>
          )}
          {!signUpForm && (
            <button
              className="form__btn form__btn--google"
              onClick={signInWithGoogleHandler}
            >
              <img src={googleIcon} alt="google company icon" />
              <span>Sign up With Google</span>
            </button>
          )}
          {signUpForm && (
            <button
              className="form__btn form__btn--google"
              onClick={signUpWithGoogleHandler}
            >
              <img src={googleIcon} alt="google company icon" />
              <span>Sign up With Google</span>
            </button>
          )}
          <p className="form__signup">
            Don’t have an Account?{" "}
            {!signUpForm && (
              <button onClick={triggerSignUpHandler} className="action-btn">
                Sign Up
              </button>
            )}
            {signUpForm && (
              <button onClick={triggerSignInHandler} className="action-btn">
                Sign In
              </button>
            )}
          </p>
          {loader}
        </form>
      </div>
    </>
  );
};

export default Authentication;
