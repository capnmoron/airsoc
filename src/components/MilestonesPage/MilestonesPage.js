import React from 'react'
import NavbarP from '../NavbarP'
import './MilestonesPage.css'
import MilestonesInfo from './MilestonesInfo'
import Milestones from '../../assets/gallery1.png'

function MilestonesPage() {
  return (
    <div className='page'>
    <NavbarP />
    <div className="miletonesDiv">
        <div className='pageTitle'>Miletones</div>
        <div className="miletones">
          {MilestonesInfo.map((milestones) => (
            <div className="miletonesInfo">
              <div className='miletonesContent'>
                <div className='milestoneHeader'>{milestones.name}</div>
                <div className="milestoneBody">
                  <p><b>Description: </b>{milestones.description}</p>
                  <p><b>Performance: </b>{milestones.performance}</p>
                </div>
              </div>
              <div className="milestoneImage"><img src={Milestones} alt="" className='milestoneImage'/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MilestonesPage 