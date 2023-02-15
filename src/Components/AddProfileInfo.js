import React from "react";
import { Link } from "react-router-dom";
const AddProfileInfo = () => {
  return (
    <div>
      AddProfileInfo
      <Link to="/admin/createproject/add-team" style={{ color: "red" }}>
        Forward
      </Link>
    </div>
  );
};

export default AddProfileInfo;
