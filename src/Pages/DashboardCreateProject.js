import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ProjectDetail from "../Enum/enum";

const DashboardCreateProject = () => {
  const [state, setState] = useState("PROJECT");

  const gotoNextTab = (value) => {
    setState(value);
  };

  return (
    <div>
      <h1>Create New Project</h1>
      {React.createElement(
        ProjectDetail[state],
        { gotoNextTab: gotoNextTab },
        null
      )}
    </div>
  );
};

export default DashboardCreateProject;
