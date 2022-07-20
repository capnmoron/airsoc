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
    <div className='page'>
      <NavbarP />
      <div className="teamDiv">
        <div className="pageTitle">Team</div>
        <div className='teamPagefaculty'>
          <div className="teamPageSubHeader">Faculty Advisors</div>
          <div className='teamPageFacultyList'>
            <div className='teamPageFaculty'>
              <img src={Faculty1} alt='' className="facultyImage" />
              <div className="facultyName">Faculty 1</div>
            </div>
            <div className="faculty">
              <img src={Faculty2} alt='' className="facultyImage" />
              <div className="facultyName">Faculty 2</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="teamDiv">
          <div className='teamPageSubHeader'>Members</div>
          <div className="teamPageName">
            {TeamInfo.map((team) => (
              <div className="teamPageInfo">
                <img src={Member} alt="" className='teamPageImage'/>
                <div className='teamMemberName'>{team.name}</div>
                <div className='teamMemberPosition'>{team.position}</div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="teamDiv">
          <div className='teamPageSubHeader'>Alumini</div>
          <div className="teamPageName">
            {AluminiInfo.map((alumini) => (
              <div className="teamPageInfo">
                <img src={Member} alt="" className='teamPageImage'/>
                <div className='teamMemberName'>{alumini.name}</div>
                <div className='teamMemberPosition'>{alumini.position}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage