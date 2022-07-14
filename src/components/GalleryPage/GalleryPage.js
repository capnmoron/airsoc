import React from 'react'
import NavbarP from '../NavbarP'
import './GalleryPage.css'
import gallery from '../../assets/Member.png'
import GalleryPics from './GalleryPics'

function GalleryPage() {
  return (
    <div>
    <NavbarP />
    <div className="pic-div">
            <h1>Gallery</h1>
            <div className="pic">
                {GalleryPics.map((pic) => (
                    <div className="pic-info">
                        <img src={gallery} alt=""/>
                        <h4>{pic.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GalleryPage