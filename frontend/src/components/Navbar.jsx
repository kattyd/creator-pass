import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar()  {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                    <li>Home Page</li>
                    <li>NFT Gallery</li>
                    <li>Community Hub</li>
                    <li>More Info</li>
                </ul>
                </div>
                <div className="nav-btns">
                    <button className="btn1">Explore</button>
                    <button className="btn2">Sign Up</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;