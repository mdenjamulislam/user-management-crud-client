import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider/AuthProvicer";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            console.log("Logged out");
        });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="active">
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="container navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost text-xl">
                    UCRUD
                </Link>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={user.displayName} className="h-8 w-8 rounded-full" />
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogOut}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="btn btn-success btn-sm">
                            Login
                        </Link>
                        <Link to="/signup" className="btn btn-success btn-sm">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
