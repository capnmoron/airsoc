import React from 'react'
import './Work.css'
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import drone from "../assets/Drone.png"
import aero from "../assets/aero.png"
import rocket from "../assets/rocket.png"
import {BsArrowRight} from "react-icons/bs"

function Work() {
  return (
    <div id='work' className='work'>
      <div className="titleHeader">Work</div>
      <div className="workContent">
        <div className="intro wc">Our team has been divided into sub-teams that works on three categories-</div>
        <div className="aeroDesign wc"> <b><u>Aero-Design Team</u></b> is the most experienced team that has performed well at many national level competitions and now
        they have been working more advanced and innovative designs such as box-wing aircraft.</div>
        <div className="UAVDrone wc"><b><u>UAV/Drone Design Team</u></b> has been built in 2021 and they are already successful at a few national competitions. The major focus of this team is to work on latest UAV design and control systems along with applications in different industries such as agriculture. They are equipped with ample technical skills like electronics, flight control systems, Computer Vision, and Artificial Intelligence.</div>        
        <div className="rocketTeam wc"><b><u>Rocket Design Team</u></b> is completely research-based as of now and they have simulated numerous Stage-I model rockets.</div>
      </div>
      <div className='workImages'>
        <div className="workImage">
          <img src={drone} alt='Drone' className='drone'/>
          <HashLink to="/workpage#aeropart"><BsArrowRight className='arrow'/></HashLink>
        </div>
        <div className="workImage">
          <img src={aero} alt='Aero' className='aero'/>
          <HashLink to="/workpage#dronepart"><BsArrowRight className='arrow'/></HashLink>
        </div>
        <div className="workImage">
          <img src={rocket} alt='Rocket' className='rocket'/>
          <HashLink to="/workpage#rocketpart"><BsArrowRight className='arrow'/></HashLink>
        </div>
      </div>
      <Link to="/workpage">
        <div className="button"><button className='submitButton'>See more</button></div>
      </Link>
    </div>
  )
}

export default Work