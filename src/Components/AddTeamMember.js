import React from "react";
import { Link } from "react-router-dom";

const AddTeamMember = () => {
  return (
    <div>
      AddTeamMember
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
