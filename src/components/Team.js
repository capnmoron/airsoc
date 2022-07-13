import React from 'react'
import "./Team.css"
import Faculty1 from "../assets/AKD2.png"
import Faculty2 from "../assets/AK.png"
import { Link } from "react-router-dom";

function Team() {
    return (
        <div id='team' className='team'>
            <div className="titleHeader">Team</div>
                <div className="subHeader">Faculty Advisors</div> 
                <div className='facultyList'>
                    <div className='faculty'>
                        <img src={Faculty1} alt='' className="facultyImage" />
                        <div className="facultyName">Faculty 1</div>
                    </div>
                    <div className="faculty">
                        <img src={Faculty2} alt='' className="facultyImage" />
                        <div className="facultyName">Faculty 2</div>
                    </div>
                </div>
            <Link to="/teampage">
                <div className="button"><button className='submitButton'>See more</button></div>
            </Link>
        </div>
    )
}

export default Team