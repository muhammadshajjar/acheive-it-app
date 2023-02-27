import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "../UI/Button";
const DashboardCreateProject = () => {
  return (
    <div>
      <h1>Create New Project</h1>
      <Outlet />
    </div>
  );
};

export default DashboardCreateProject;
