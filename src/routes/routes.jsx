import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import OwnerSignUp from "../Pages/Authentication/OwnerSignUp/OwnerSignUp";
import DashBoard from "../layouts/Dashboard";
import ManageUsers from "../Pages/Dashboard/Owners/ManageUsers/ManageUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'singup',
                element: <SignUp></SignUp>
            },
            {
                path: 'ownerSignup',
                element: <OwnerSignUp></OwnerSignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
        ]
    }
]);


export default router