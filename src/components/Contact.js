import React from 'react'
import "./Contact.css"
import {FaFacebookSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

function Contact() {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className='contact_icons'>
            <a href='mailto:airsociitr@gmail.com'><MdEmail/></a>
            <a href='https://www.linkedin.com/company/airsoc-iit-roorkee/'><BsLinkedin/></a>
            <a href='https://instagram.com/airsoc_iitr?igshid=YmMyMTA2M2Y='><AiFillInstagram/></a>
            <a href='https://www.facebook.com/airsociitr/'><FaFacebookSquare/></a>
        </div>
    </div>
  )
}

export default Contact