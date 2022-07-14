import React from 'react'
import NavbarP from '../NavbarP'
import './TeamPage.css'
import TeamInfo from "./TeamInfo";
import AluminiInfo from './AluminiInfo';
import Faculty1 from '../../assets/AKD2.png'
import Faculty2 from '../../assets/AK.png'
import Member from '../../assets/Member.png'

function TeamPage() {
  return (
    <div>
      <NavbarP />
      <h1>Team</h1>
      <div>
        <div className="subHeader">Faculty Advisors</div>
        <div className='facultyList'>
          <div className='faculty'>
            <img src={Faculty1} alt='' className="facultyImage" />
            <div className="facultyName">Faculty 1</div>
          </div>
          <div className="faculty">
            <img src={Faculty2} alt='' className="facultyImage" />
            <div className="facultyName">Faculty 2</div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="team-div">
        <h1>Member</h1>
        <div className="team">
          {TeamInfo.map((team) => (
            <div className="team-info">
              <img src={Member} alt="" />
              <h4>{team.name}</h4>
              <h6>{team.position}</h6>
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <div className="team-div">
        <h1>Alumini</h1>
        <div className="team">
          {AluminiInfo.map((alumini) => (
            <div className="team-info">
              <img src={Member} alt="" />
              <h4>{alumini.name}</h4>
              <h6>{alumini.position}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage