
import Details from "@/Pages/UsersPages/Details";
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
    {
        name:"Details",
        path:'/details/:id',
        element:<Details/>
    },
]
export default userPath