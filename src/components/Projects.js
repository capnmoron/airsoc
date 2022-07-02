import React from 'react'
import './Projects.css'
import { Link } from "react-router-dom";
import drone from "../assets/Drone.png"
import plane from "../assets/Plane.png"
import launch from "../assets/Launch.png"

function Projects() {
  return (
    <div id='projects' className='projects'>
        <h1>Projects</h1>
        <div className='project_images'>
            <img src={drone} alt='Drone' />
            <img src={plane} alt='Plane' />
            <img src={launch} alt='Launch' />
        </div>
        <div className="project_content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <Link to="/projectspage">
            <button>See more</button>
        </Link>
        <hr/>
    </div>
  )
}

export default Projects