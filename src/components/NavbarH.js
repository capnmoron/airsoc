import React from "react";
import './NavbarH.css'
import {Link} from "react-scroll";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarH() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="about" offset={-10} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="team" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="projects" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="milestones" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Milestones</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="gallery" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="contact" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarH
