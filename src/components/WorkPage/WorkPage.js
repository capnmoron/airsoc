import React from 'react'
import NavbarP from '../NavbarP'
import AeroInfo from './AeroInfo'
import DroneInfo from './DroneInfo'
import RocketInfo from './RocketInfo'
import './WorkPage.css'
import Banana from '../../assets/banana.png'


function WorkPage() {
  return (
    <div>
      <NavbarP />
      <h1>Projects</h1>
      <div id='aeropart' className="work-div">
        <h1>Aero Work</h1>
        <div className="work">
          {AeroInfo.map((aero) => (
            <div className="work-info">
              <div className='work-content'>
                <h1>{aero.name}</h1>
                <a href={aero.link}>[Link]</a>
                <p>{aero.description}</p>
              </div>
              <img src={Banana} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div id='dronepart' className="work-div">
        <h1>Drone Work</h1>
        <div className="work">
          {DroneInfo.map((drone) => (
            <div className="work-info">
              <div className='work-content'>
                <h1>{drone.name}</h1>
                <a href={drone.link}>[Link]</a>
                <p>{drone.description}</p>
              </div>
              <img src={Banana} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div id='rocketpart' className="work-div">
        <h1>Rocket Work</h1>
        <div className="work">
          {RocketInfo.map((rocket) => (
            <div className="work-info">
              <div className='work-content'>
                <h1>{rocket.name}</h1>
                <a href={rocket.link}>[Link]</a>
                <p>{rocket.description}</p>
              </div>
              <img src={Banana} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPage