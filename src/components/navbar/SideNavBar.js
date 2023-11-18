import React from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu, FiHome, FiShoppingCart, FiLogOut } from "react-icons/fi";

function SideNavBar(){
    
    return (
        <nav className="navbar">
            <div className="nav-upper">
            <Link to="/" className="nav-icons"><FiShoppingCart /></Link>
            <Link className="nav-icons"><FiMenu /></Link>
            <Link className="nav-icons"><FiHome /></Link>
            <Link className="nav-icons"><FaShoppingBag /></Link>
            </div>
            <div className="nav-lower">
                <Link className="nav-icons"><FiLogOut /></Link>
            </div>
        </nav>
	);
}

export default SideNavBar;