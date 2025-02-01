import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { routeGenarator } from "../Utils/RouterGenarator";
import userPath from "./UserRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/',
        element:<App/>,
        children:routeGenarator(userPath)
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])
export default router