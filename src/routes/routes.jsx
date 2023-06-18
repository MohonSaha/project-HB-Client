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
import AddHotel from "../Pages/Dashboard/Owners/AddHotel/AddHotel";
import MyHotels from "../Pages/Dashboard/Owners/MyHotels/MyHotels";
import AddRooms from "../Pages/Dashboard/Owners/AddRooms/AddRooms";
import MyBookings from "../Pages/Dashboard/Users/MyBookings/MyBookings";

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
            {
                path: 'addHotel',
                element: <AddHotel></AddHotel>
            },
            {
                path: 'myHotels',
                element: <MyHotels></MyHotels>
            },
            {
                path: 'myHotels/addRoom',
                element: <AddRooms></AddRooms>

            }, 
            {
                path: 'myBookings',
                element: <MyBookings></MyBookings>
            }
        ]
    }
]);


export default router