import React from 'react'
import NavbarP from '../NavbarP'
import './MilestonesPage.css'
import MilestonesInfo from './MilestonesInfo'
import Milestones from '../../assets/gallery1.png'

function MilestonesPage() {
  return (
    <div>
    <NavbarP />
    <div id='aeropart' className="miletones-div">
        <h1>Miletones</h1>
        <div className="miletones">
          {MilestonesInfo.map((milestones) => (
            <div className="miletones-info">
              <div className='miletones-content'>
                <h1>{milestones.name}</h1>
                <p>Description: {milestones.description}</p>
                <p>Performance: {milestones.performance}</p>
              </div>
              <img src={Milestones} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MilestonesPage