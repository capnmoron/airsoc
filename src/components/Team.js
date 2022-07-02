import React from 'react'
import "./Team.css"
import Faculty1 from "../assets/Faculty.png"
import { Link } from "react-router-dom";

function Team() {
    return (
        <div className='team'>
            <h1>Team</h1>
            <div className='team_list'>
                <div className="faculty1">
                    <img src={Faculty1} alt='' />
                    <h2>Faculty 1</h2>
                </div>
                <div className="faculty2">
                    <img src={Faculty1} alt='' />
                    <h2>Faculty 2</h2>
                </div>
                <Link to="/teampage">
                    <button>See more</button>
                </Link>
                <hr/>
            </div>
        </div>
    )
}

export default Team