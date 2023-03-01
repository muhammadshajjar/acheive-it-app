import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProfileInfo.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../store/project-slice";


const AddProfileInfo = ({ gotoNextTab }) => {
  console.log(gotoNextTab);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItems(profile));
  };
  return (
    <div className="project-information">
      <h2>Add Project Information</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="p-name">Project Name</label>
        <input
          required
          type="text"
          placeholder="Enter Project Name"
          name="projectName"
          onChange={changeHandler}
        />
        <label htmlFor="p-desc">Project Description</label>
        <textarea
          required
          type="text"
          placeholder="Some more information about project"
          name="projectDesc"
          onChange={changeHandler}
        />
        <Button onClick={() => gotoNextTab("MEMBERS")}>Add</Button>
      </form>
      <Link to="/admin/createproject/add-team" style={{ color: "red" }}>
        Forward
      </Link>
    </div>
  );
};

export default AddProfileInfo;
