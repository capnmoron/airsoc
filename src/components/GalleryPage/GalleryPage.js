import React from 'react'
import NavbarP from '../NavbarP'
import './GalleryPage.css'
import gallery from '../../assets/Member.png'
import GalleryPics from './GalleryPics'

function GalleryPage() {
  return (
    <div className='page'>
    <NavbarP />
    <div className="pic-div">
            <div className='pageTitle'>Gallery</div>
            <div className="pic">
                {GalleryPics.map((pic) => (
                    <div className="pic-info">
                        <img src={gallery} alt=""/>
                        <div className='picName'>{pic.name}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GalleryPage  