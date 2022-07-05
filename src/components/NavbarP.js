import React from "react";
import './NavbarP.css'
import { Link } from "react-router-dom";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarP() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/" offset={-110} className="nav-link" href="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/teampage" offset={-110} className="nav-link" href="#">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/projectspage" offset={-110} className="nav-link" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/milestonespage" offset={-110} className="nav-link" href="#">Milestones</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/gallerypage" offset={-110} className="nav-link" href="#">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="/contactpage" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarP
