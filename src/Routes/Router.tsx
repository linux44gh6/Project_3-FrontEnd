import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { routeGenarator } from "../Utils/RouterGenarator";
import userPath from "./UserRoute";
import DashBoradLayout from "@/myComponents/DashBoard/DashBoradLayout";
import OrderPage from "@/myComponents/DashBoard/UserDashBoard/OrderPage";
import Profile from "@/myComponents/DashBoard/UserDashBoard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenarator(userPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoradLayout />, 
    children: [
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
  },
]);

export default router;
