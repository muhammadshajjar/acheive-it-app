import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
import DashboardRoot from "./Pages/DashboardRoot";
import DashboardHome from "./Pages/DashboardHome";
import DashboardCreateProject from "./Pages/DashboardCreateProject";
import AddProfileInfo from "./Components/AddProfileInfo";
import AddTeamMember from "./Components/AddTeamMember";
import AddTodo from "./Components/AddTodo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "auth",
    element: <Authentication />,
  },
  {
    path: "admin",
    element: <DashboardRoot />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "createproject",
        element: <DashboardCreateProject />,
        children: [
          { index: true, element: <AddProfileInfo /> },
          { path: "add-team", element: <AddTeamMember /> },
          { path: "add-todo", element: <AddTodo /> },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
