import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SidebarNav from "../../components/SidebarNav";

const Root = () => {
    return (
        <>
            <NavBar />
            {/* <SidebarNav/> */}
        </>
    );
};

export default Root;
