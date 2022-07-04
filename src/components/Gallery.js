import React from 'react'
import './Gallery.css'
import { Link } from "react-router-dom";
import GalleryCarousel from './GalleryCarousel';

function Gallery() {
    return (
        <div id='gallery' className='gallery'>
            <div className="galleryHeader">Gallery</div>
            <div className='galleryCarousel'>
                <GalleryCarousel />
            </div>
            <Link to="/gallerypage">
                <button className='galleryButton'>See more</button>
            </Link>
        </div>
    ) 
}

export default Gallery