import React from 'react'
import './Milestones.css'
import milestones from '../assets/milestone-icon.png'
import { Link } from "react-router-dom";


function Milestones() {
    return (
        <div id='milestones'>
            <h1>Milestones</h1>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <img src={milestones} alt='Milestones-Icon' />
            </div>
            <Link to="/milestonespage">
                <button>See more</button>
            </Link>
            <hr/>
        </div>
    )
}

export default Milestones