import React from "react";
//Used to navigate to different Pages on the site
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
//Navigation Bar used to go to different pages of the website
function Navbar() {
    return <div className="navbar" >
        
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/skills"> Skills </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>;
}

export default Navbar;