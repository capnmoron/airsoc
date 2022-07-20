import React from "react";
import './NavbarP.css'
import { NavLink } from "react-router-dom";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarP() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbarP">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/" className="nav-link" offset={-110} href="#">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/teampage" offset={-110} className="nav-link" href="#">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/workpage" offset={-110} className="nav-link" href="#">Work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/milestonespage" offset={-110} className="nav-link" href="#">Milestones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/gallerypage" offset={-110} className="nav-link" href="#">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink smooth={true} duration={100} to="/contactpage" offset={-110} className="nav-link" href="#">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarP
