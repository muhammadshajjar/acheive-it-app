import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProfileInfo.css";
import Button from "../UI/Button";
const AddProfileInfo = () => {
  const [profile, setProfile] = useState({});
  const changeHandler = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(profile);
  };
  return (
    <div className="project-information">
      <h2>Add Project Information</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="p-name">Project Name</label>
        <input
          type="text"
          placeholder="Enter Project Name"
          name="pName"
          onChange={changeHandler}
        />
        <label htmlFor="p-desc">Project Description</label>
        <textarea
          type="text"
          placeholder="Some more information about project"
          name="pDesc"
          onChange={changeHandler}
        />
        <Button>Add</Button>
      </form>
      <Link to="/admin/createproject/add-team" style={{ color: "red" }}>
        Forward
      </Link>
    </div>
  );
};

export default AddProfileInfo;
