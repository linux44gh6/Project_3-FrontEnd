import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { routeGenarator } from "../Utils/RouterGenarator";
import userPath from "./UserRoute";
import DashBoradLayout from "@/myComponents/DashBoard/DashBoradLayout";
import OrderPage from "@/myComponents/DashBoard/UserDashBoard/OrderPage";
import Users from "@/myComponents/DashBoard/AdminDashBoard/Users";
import ProtectedProfile from "@/myComponents/DashBoard/ProtectedProfile";
import AdminOrderPage from "@/myComponents/DashBoard/AdminDashBoard/AdminOrderPage";
import AdminProduct from "@/myComponents/DashBoard/AdminDashBoard/AdminProducts";
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
          path: "AdminOrder",
          element: <AdminOrderPage />,
        },
        {
          path: "AdminProduct",
          element: <AdminProduct/>,
        },
        {
          index:true,
          element:<ProtectedProfile/>
        },
        {
          path:'users',
          element: <Users/>,
        },
      ],
  },
]);

export default router;
