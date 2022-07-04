import React from 'react'
import './Milestones.css'
import { Link } from "react-router-dom";


function Milestones() {
    return (
        <div id='milestones' className='milestones'>
            <div className="milestonesHeader">Milestones</div>
            <div className='milestoneList'>
                <div className='milestone'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className='milestone'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className='milestone'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>
            <Link to="/milestonespage">
                <button className='milestonesButton'>See more</button>
            </Link>
        </div>
    ) 
}

export default Milestones