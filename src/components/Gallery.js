import React from 'react'
import './Gallery.css'
import { Link } from "react-router-dom";
import GalleryCarousel from './GalleryCarousel';

function Gallery() {
    return (
        <div id='gallery' className='gallery'>
            <div className="titleHeader">Gallery</div>
            <div className='galleryCarousel'>
                <GalleryCarousel />
            </div>
            <Link to="/gallerypage">
                <div className="button"><button className='submitButton'>See more</button></div>
            </Link>
        </div>
    ) 
}

export default Gallery