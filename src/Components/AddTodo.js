import React from "react";
import { Link } from "react-router-dom";
const AddTodo = () => {
  return (
    <div>
      AddTodo
      <Link to="/admin/createproject/add-team" style={{ color: "red" }}>
        Back
      </Link>
    </div>
  );
};

export default AddTodo;
