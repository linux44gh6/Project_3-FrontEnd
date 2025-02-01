
import About from "../Pages/UsersPages/About";
import Home from "../Pages/UsersPages/Home";
import React from "react";
const userPath=[
    {
        name:"Home",
        path:'/',
        element:<Home/>
    },
    {
        name:"About",
        path:'/about',
        element:<About/>
    },
]
export default userPath