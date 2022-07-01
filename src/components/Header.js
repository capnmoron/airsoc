import React from 'react'
import './Header.css'
import airsoc_logo1 from "../assets/Airsoc logo.png"
import iitr_logo from "../assets/iitr-logo.png"
import airsoc_iitr from "../assets/AirSoc IIT Roorkee.png"

function Header() {
  return (
    <div className='header'>
    <img src={airsoc_logo1} alt='AirSoc' className='airsoc_logo1'/>
    <img src={airsoc_iitr} alt='AirSoc IITR' className='airsoc_iitr'/>
    <img src={iitr_logo} alt='IITR' className='iitr_logo'/>
    </div>
  )
}

export default Header