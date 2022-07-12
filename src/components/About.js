import React from 'react'
import "./About.css"
import airsoc_logo2 from "../assets/Airsoc logo.png"
import AboutCarousel from './AboutCarousel'

function About() {
  return (
    <div id='about' className='about'>
        <AboutCarousel/>
        <div className='titleHeader'>About Us</div> 
        <div className='upper_part'>
          <p>AirSoc IIT Roorkee is the official campus group that actively works on Aircraft, Drone, and Rocket Design. We are a bunch of enthusiastic geeks who are passionate about developments in the aircraft industry and continuously working in the same to thrive for excellence. Our aim is to inculcate the culture of airborne vehicles among IIT Roorkee junta and bring glory to IITR through national and international competitions.</p>
            <div><img src={airsoc_logo2} alt='' className='aboutImage'/></div>
        </div>
    </div>
  )
}

export default About