import React from 'react'
import './Milestones.css'
import { Link } from "react-router-dom";


function Milestones() {
    return (
        <div id='milestones' className='milestones'>
            <div className="milestonesHeader">Milestones</div>
            <div className='milestoneList'>
                <div className='milestone'>
                    <div className="rank">9<sup>th</sup></div>
                    <div className="name">Name</div>
                    <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, libero!</div>
                </div>
                <div className='milestone'>
                    <div className="rank">9<sup>th</sup></div>
                    <div className="name">Name</div>
                    <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, libero!</div>
                </div>
                <div className='milestone'>
                    <div className="rank">9<sup>th</sup></div>
                    <div className="name">Name</div>
                    <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, libero!</div>
                </div>
            </div>
            <Link to="/milestonespage">
                <button className='milestonesButton'>See more</button>
            </Link>
        </div>
    ) 
}

export default Milestones