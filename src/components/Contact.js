import React from 'react'
import "./Contact.css"
import {FaFacebookSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

function Contact() {
  return (
    <div id='contact' className='contacts'>
        <div className="contactsHeader">Contact</div>
        <div className="contactsContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum culpa voluptates quaerat enim fugiat, nihil laborum modi ea dolores nostrum! Repellendus totam ex veritatis nisi! Totam distinctio accusamus illo?
        </div>
        <div className='contactIcons'>
            <a href='mailto:airsociitr@gmail.com' className='contactsIcon'><MdEmail/></a>
            <a href='https://www.linkedin.com/company/airsoc-iit-roorkee/' className='contactsIcon'><BsLinkedin/></a>
            <a href='https://instagram.com/airsoc_iitr?igshid=YmMyMTA2M2Y=' className='contactsIcon'><AiFillInstagram/></a>
            <a href='https://www.facebook.com/airsociitr/' className='contactsIcon'><FaFacebookSquare/></a>
        </div>
    </div>
  )
}

export default Contact 