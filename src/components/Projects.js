import React from 'react'
import './Projects.css'
import { Link } from "react-router-dom";
import drone from "../assets/Drone.png"
import plane from "../assets/Plane.png"
import launch from "../assets/Launch.png"

function Projects() {
  return (
    <div id='projects' className='projects'>
        <div className="titleHeader">Projects</div>
        <div className='projectsImages'>
            <img src={drone} alt='Drone' className='projectsImage'/>
            <img src={plane} alt='Plane' className='projectsImage'/>
            <img src={launch} alt='Launch' className='projectsImage'/>
        </div>
        <div className="projectsContent">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <Link to="/projectspage">
        <div className="button"><button className='submitButton'>See more</button></div>
        </Link>
    </div>
  )
}

export default Projects