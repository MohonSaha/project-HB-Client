import { FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useOwner from "../hooks/UseOwner";
import useBooking from "../hooks/useBooking";


const DashBoard = () => {


    const [isOwner] = useOwner();
    const [bookedRoom] = useBooking();




    return (
        <>


            <div className="drawer lg:drawer-open max-w-[1250px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center mb-12">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side md:-mt">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-screen w-80 text-base-content bg-[#0C4B65] pt-16">
                        <li className="text-3xl mb-16 tracking-wides font-bold text-white">Dashboard : {isOwner ? 'Owner' : 'Traveller'}</li>
                        {
                            isOwner?.owner ? <>
                                <li><NavLink to='/dashboard/manageUsers'> <FaHome></FaHome>Manage Users</NavLink></li>
                                <li><NavLink to='/dashboard/addHotel'> <FaUsers></FaUsers>Add Hotel</NavLink></li>
                                <li><NavLink to='/dashboard/myHotels'> <FaUsers></FaUsers>My Hotels</NavLink></li>
                                <li><NavLink to='/dashboard/manageRooms'> <FaUsers></FaUsers>Manage Rooms</NavLink></li>

                            </> : <>

                                <li><NavLink to='dashboard/myBookings'><FaShoppingCart></FaShoppingCart> Selected Rooms
                                    <span className="badge badge-secondary  bg-[#0C4B65] text-white border-white">+{bookedRoom?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                        }

                        <hr className="mt-6" />

                        <li><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default DashBoard;