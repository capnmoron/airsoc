import React from 'react'
import './Work.css'
import { Link } from "react-router-dom";
import drone from "../assets/Drone.png"
import plane from "../assets/aero.png"
import launch from "../assets/rocket.png"
import {BsArrowRight} from "react-icons/bs"

function Work() {
  return (
    <div id='work' className='work'>
      <div className="titleHeader">Work</div>
      <div className="workContent">
        <div className="intro">Our team has been divided into sub-teams that works on three categories-</div>
        <div className="aeroDesign">Aero-Design Team is the most experienced team that has performed well at many national level competitions and now
        they have been working more advanced and innovative designs such as box-wing aircraft.</div>
        <div className="UAVDrone">UAV/Drone Design Team has been built in 2021 and they are already successful at a few national competitions. The major focus of this team is to work on latest UAV design and control systems along with applications in different industries such as agriculture. They are equipped with ample technical skills like electronics, flight control systems, Computer Vision, and Artificial Intelligence.</div>        
        <div className="rocket">Rocket Design Team is completely research-based as of now and they have simulated numerous Stage-I model rockets.</div>
      </div>
      <div className='workImages'>
        <img src={drone} alt='Drone' className='workImage' />
        <BsArrowRight/>
        <img src={plane} alt='Plane' className='workImage' />
        <BsArrowRight/>
        <img src={launch} alt='Launch' className='workImage' />
        <BsArrowRight/>
      </div>
      <Link to="/workpage">
        <div className="button"><button className='submitButton'>See more</button></div>
      </Link>
    </div>
  )
}

export default Work