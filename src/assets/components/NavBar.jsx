import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavBar = () => {

    


    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="active">Dashboard</NavLink>
            </li>
        </>
    );



    return (
        <nav className="container navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost text-xl">UCRUD</Link>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4">
                    <Link to="/login" className="btn btn-sm btn-success">Login</Link>
                    <Link to="/signup" className="btn btn-sm btn-success">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
