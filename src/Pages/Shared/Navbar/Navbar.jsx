import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth();
    console.log(user);


    const navItems = <>
        <Link to='/'>Home</Link>
        <Link to='/allToys'>All Toys</Link>
        {
            user && <Link to='/dashboard'>Dashboard</Link>
        }
        <Link to='/blogs'>Blogs</Link>
    </>


    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }


    return (
        <div className='max-w-[1150px] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <button onClick={() => handelLogout()}>Log Out</button>
                        </> : <>

                            <Link to='/login'>Log In</Link>
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details>
                                        <summary>
                                            Create Account
                                        </summary>
                                        <ul className="p-2 bg-base-100">
                                            <li><Link to='/singup'>Traveller</Link></li>
                                            <li><Link to='/ownerSignup'>Hotel Owner</Link></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>

                        </>
                    }







                </div>
            </div>
        </div>
    );
};

export default Navbar;