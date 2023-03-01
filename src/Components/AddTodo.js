import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./AddTodo.css";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/project-slice";

//firebase
import { auth, db } from "../firebase-config";

const AddTodo = () => {
  const [todo, setTodo] = useState();

  const project = useSelector((state) => state.projectDetail.projectDetail);

  const dispatch = useDispatch();
  console.log(project);

  const changeHandler = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItems(todo));
  };
  return (
    <div>
      <div className="todo-information">
        <h2>Add Todo</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="task-name">Task Name</label>
          <input
            type="text"
            placeholder="Enter the Task Name"
            name="TaskName"
            onChange={changeHandler}
          />
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            placeholder="Choose Date"
            name="Deadline"
            onChange={changeHandler}
          />
          <Button>Add</Button>
        </form>
      </div>
      <Link to="/admin/createproject/add-team" style={{ color: "red" }}>
        Back
      </Link>
    </div>
  );
};

export default AddTodo;
