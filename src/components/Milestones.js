import React from 'react'
import './Milestones.css'
import { Link } from "react-router-dom";


function Milestones() {
    return (
        <div id='milestones'>
            <h1>Milestones</h1>
            <div>
                <div>
                    <h1>2<sup>nd</sup></h1>
                    <h2>Name</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div>
                    <h1>5<sup>th</sup></h1>
                    <h2>Name</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div>
                    <h1>13<sup>th</sup></h1>
                    <h2>Name</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <Link to="/milestonespage">
                <button>See more</button>
            </Link>
            <hr/>
        </div>
    )
}

export default Milestones