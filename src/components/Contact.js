import React from 'react'
import "./Contact.css"
import {IoLogoFacebook} from "react-icons/io"
import {MdEmail} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoLinkedin} from "react-icons/io"

function Contact() {
  return (
    <div id='contact' className='contacts'>
        <div className="contactsHeader">Contact</div>
        <div className="contactsContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum culpa voluptates quaerat enim fugiat, nihil laborum modi ea dolores nostrum! Repellendus totam ex veritatis nisi! Totam distinctio accusamus illo?
        </div>
        <div className='contactIcons'>
          <div className="contactIcon"><a href='mailto:airsociitr@gmail.com'><MdEmail className='icon'/></a></div>
          <div className="contactIcon"><a href='https://www.linkedin.com/company/airsoc-iit-roorkee/'><IoLogoLinkedin className='icon'/></a></div>
          <div className="contactIcon"><a href='https://instagram.com/airsoc_iitr?igshid=YmMyMTA2M2Y='><AiFillInstagram className='icon'/></a></div>
          <div className="contactIcon"><a href='https://www.facebook.com/airsociitr/'><IoLogoFacebook className='icon'/></a></div>            
        </div>
    </div>
  )
}

export default Contact  