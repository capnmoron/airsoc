import React from 'react'
import NavbarP from '../NavbarP'
import AeroInfo from './AeroInfo'
import DroneInfo from './DroneInfo'
import RocketInfo from './RocketInfo'
import './WorkPage.css'
import Banana from '../../assets/banana.png'


function WorkPage() {
  return (
    <div className='page'>
      <NavbarP />
      <div className="workDiv">
        <div className='pageTitle'>Projects</div>
        <div id='aeropart' className="subWork">
          <div className='workPageSubHeader'>Aero Work</div>
          <div className="workPage">
            {AeroInfo.map((aero) => (
              <div className="workPageInfo">
                <div className='workPageContent'>
                  <div className='workPageName'>{aero.name} <a href={aero.link}>[Link]</a></div>
                  <div className="desc">{aero.description}</div >
                </div>
                <div className="workImage"><img src={Banana} alt=""  className="workImage" /></div>
              </div>
            ))}
          </div>
        </div>
        <div id='dronepart' className="subWork">
          <div className='workPageSubHeader'>Drone Work</div>
          <div className="workPage">
            {DroneInfo.map((drone) => (
              <div className="workPageInfo">
                <div className='workPageContent'>
                  <div className='workPageName'>{drone.name} <a href={drone.link}>[Link]</a></div>
                  <div className="desc">{drone.description}</div >
                </div>
                <div className="workImage"><img src={Banana} alt=""  className="workImage" /></div>
              </div>
            ))}
          </div>
        </div>
        <div id='rocketpart' className="subWork">
          <div className='workPageSubHeader'>Rocket Work</div>
          <div className="workPage">
            {RocketInfo.map((rocket) => (
              <div className="workPageInfo">
                <div className='workPageContent'>
                  <div className='workPageName'>{rocket.name} <a href={rocket.link}>[Link]</a></div>
                  <div className="desc">{rocket.description}</div >
                </div>
                <div className="workImage"><img src={Banana} alt=""  className="workImage" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage