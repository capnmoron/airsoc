import React from 'react'
import './Work.css'
import { Link } from "react-router-dom";
import drone from "../assets/Drone.png"
import plane from "../assets/Plane.png"
import launch from "../assets/Launch.png"

function Work() {
  return (
    <div id='work' className='work'>
        <div className="workHeader">Work</div>
        <div className='workImages'>
            <img src={drone} alt='Drone' className='workImage'/>
            <img src={plane} alt='Plane' className='workImage'/>
            <img src={launch} alt='Launch' className='workImage'/>
        </div>
        <div className="workContent">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <Link to="/workpage">
            <button className='workButton'>See more</button>
        </Link>
    </div>
  )
}

export default Work