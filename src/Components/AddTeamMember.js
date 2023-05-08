import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./AddTeamMember.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../store/project-slice";

// firebase part
import { db } from "../firebase-config";
import { setDoc, collection, getDocs, query, addDoc } from "firebase/firestore";

const AddTeamMember = ({ gotoNextTab }) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataa, setDataa] = useState([]);

  const dispatch = useDispatch();
  const project = useSelector((state) => state.projectDetail.projectDetail);

  // getting user function
  useEffect(() => {
    const getUsersDataFromFireStore = async () => {
      try {
        const userRef = collection(db, "newUsers");
        const q = query(userRef);
        const usersSnapShot = await getDocs(q);
        const saveFireBaseStore = [];
        usersSnapShot.forEach((doc) => {
          saveFireBaseStore.push(doc.data());
        });
        setMembers(saveFireBaseStore);
      } catch (err) {
        alert(err);
      }
    };
    getUsersDataFromFireStore();
  }, []);

  // for the selected users
  const clickHandler = (e, selectedUser) => {
    const dataCopy = [...dataa];
    const isAlreadySelected = dataCopy.find(
      (user) => user.uid === selectedUser.uid
    );
    if (isAlreadySelected) {
      dataCopy.splice(dataCopy.indexOf(selectedUser), 1);
    } else {
      dataCopy.push(selectedUser);
    }
    setDataa(dataCopy);
  };

  // for searching the user
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm) {
      setMembers(
        members.filter((item) =>
          item.userName.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      );
    } else {
      setMembers(members);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      addItems({
        member: dataa,
      })
    );
    gotoNextTab("TODOS");
  };

  return (
    <div>
      <div className="team-information">
        <h2>Add Team Member</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="p-name">Enter Name or username</label>
          <input
            type="text"
            placeholder="@username"
            name="memberName"
            onChange={changeHandler}
          />
          <ul>
            {members.map((user) => {
              return (
                <li>
                  <div>
                    <img src={user.profileImg} />
                  </div>
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.userName}</span>
                    <h5>{user.email}</h5>
                  </div>
                  <div className="check-box">
                    <input
                      type="checkbox"
                      onChange={(e) => clickHandler(e, user)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <Button>Add</Button>
        </form>
      </div>
      <Link to="/admin/createproject" style={{ color: "red" }}>
        Back
      </Link>
      <Link to="/admin/createproject/add-todo" style={{ color: "red" }}>
        Forward
      </Link>
    </div>
  );
};

export default AddTeamMember;
