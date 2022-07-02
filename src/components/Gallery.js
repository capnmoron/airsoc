import React from 'react'
import './Gallery.css'
import { Link } from "react-router-dom";
import GalleryCarousel from './GalleryCarousel';

function Gallery() {
    return (
        <div id='gallery'>
            <h1>Gallery</h1>
            <div className='gallery_carousel'>
                <GalleryCarousel />
            </div>
            <Link to="/gallerypage">
                <button>See more</button>
            </Link>
            <hr />
        </div>
    )
}

export default Gallery