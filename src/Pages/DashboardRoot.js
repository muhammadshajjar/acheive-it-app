import React, { useEffect, useState } from "react";
import "./DashboardRoot.css";

import { Outlet, Link, useNavigate } from "react-router-dom";
import useLoader from "../Hooks/useLoader";

//componets
import Button from "../UI/Button";
import ProfileModal from "../Components/ProfileModal";
import Profile from "../Components/Profile";

//assests
import logoSloganLess from "../Assets/Logowithslogan.png";
import shaniIllustration from "../Assets/shani.png";
import userProfile from "../Assets/user.jpg";

//icons form react-icons library
import { FaAngleDown } from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";
import {
  AiOutlineDashboard,
  AiOutlineFileAdd,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineLogout,
  AiOutlineSearch,
} from "react-icons/ai";

//firebase
import { auth, db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import PrayerTime from "../Components/PrayerTime";

const DashboardRoot = () => {
  const navigate = useNavigate();
  const [showProfileCard, setShowProfileCart] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({});
  const [loader, isLoading, setIsLoading] = useLoader();

  const user = auth?.currentUser;
  // console.log(user);

  //on reloading the page, the user gets undefined that's why redirect to authentication page

  useEffect(() => {
    if (user === null) {
      navigate("/auth");
    }
  }, [user]);

  //set the current authenticated user by perform query on users bucket in firebase

  useEffect(() => {
    const getUsersDataFromFireStore = async () => {
      setIsLoading(true);
      try {
        const userRef = collection(db, "newUsers");
        const q = query(userRef, where("uid", "==", user?.uid));
        const usersSnapShot = await getDocs(q);
        usersSnapShot.forEach((doc) => {
          setCurrentUserData(doc.data());
        });
      } catch (err) {
        alert(err);
      }
      setIsLoading(false);
    };
    getUsersDataFromFireStore();
  }, []);

  const showProfileCardHandler = () => {
    setShowProfileCart((preveState) => !preveState);
  };
  return (
    <>
      {isLoading && <div className="loading">{loader}</div>}
      <div className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header--logo">
            <img src={logoSloganLess} alt="comapnay logo " />
          </div>
          <div className="dashboard__header--actions">
            <AiOutlineSearch
              style={{ position: "absolute", marginLeft: 10, fontSize: 22 }}
            />
            <input type="text" placeholder="Search" />
            <VscBellDot />
            <div className="dashboard__header--profile">
              <img
                src={
                  currentUserData.profileImg
                    ? currentUserData.profileImg
                    : userProfile
                }
                alt="user profile"
              />
            </div>
            <button onClick={showProfileCardHandler}>
              <FaAngleDown />
            </button>
          </div>
        </div>
        <div className="menu__container">
          <div className="dashboard__menu">
            <Profile currentUserData={currentUserData} />

            <nav className="dashboard__menu--items">
              <ul>
                <li>
                  <Link to="/admin">
                    <AiOutlineDashboard style={{ marginRight: 8 }} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="createproject">
                    <AiOutlineFileAdd style={{ marginRight: 8 }} />
                    Create Project
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineTeam style={{ marginRight: 8 }} />
                    Teams
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineMessage style={{ marginRight: 8 }} />
                    Messages
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="project">
              <h3>Don’t have any new project?</h3>
              <img
                src={shaniIllustration}
                alt="this is shani because of his fair complextion"
              />
              <Button>Create now</Button>
            </div>
            <li onClick={() => signOut(auth)}>
              <Link to="/auth">
                <AiOutlineLogout style={{ marginRight: 8 }} />
                Log out
              </Link>
            </li>
          </div>

          <div className="dashboard__content">
            <Outlet />
          </div>

          {showProfileCard && (
            <ProfileModal currentUserData={currentUserData} />
          )}
        </div>
      </div>
      <PrayerTime />
    </>
  );
};

export default DashboardRoot;
