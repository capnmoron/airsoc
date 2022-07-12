import React from 'react'
import "./Team.css"
import Faculty1 from "../assets/Faculty.png"
import { Link } from "react-router-dom";

function Team() {
    return (
        <div id='team' className='team'>
            <div className="teamHeader">Team</div>
            <div className='teamList'>
                <div className='faculty'>
                    <img src={Faculty1} alt='' className="facultyImage" />
                    <div className="facultyName">Faculty 1</div>
                </div>
                <div className="faculty">
                    <img src={Faculty1} alt='' className="facultyImage" />
                    <div className="facultyName">Faculty 2</div>
                </div>
            </div>
            <Link to="/teampage">
                    <button className='teamButton'>See more</button>
            </Link>
        </div>
    )
}

export default Team