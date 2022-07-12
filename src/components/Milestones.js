import React from 'react'
import './Milestones.css'
import { Link } from "react-router-dom";


function Milestones() {
    return (
        <div id='milestones' className='milestones'>
            <div className="titleHeader">Milestones</div>
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
            <div className="button"><button className='submitButton'>See more</button></div>
            </Link>
        </div>
    ) 
}

export default Milestones