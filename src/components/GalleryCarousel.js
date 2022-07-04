import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery1 from '../assets/gallery1.png'

const GalleryCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
                <img src={gallery1} alt="Ashutosh" className="galleryImage"/>
                <img src={gallery1} alt="Akshit" className="galleryImage"/>
                <img src={gallery1} alt="Dipti" className="galleryImage"/>
                <img src={gallery1} alt="Pravesh" className="galleryImage"/>
        </Carousel> 
    )
}

export default GalleryCarousel
