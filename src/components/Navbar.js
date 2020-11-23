import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <img alt="Profile logo" className="img float-left" src="../images/Logo-Initials.png"></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars fa-1x"></i></span>
            </button>
            <nav className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
        </nav>

    )
}
export default Navbar;