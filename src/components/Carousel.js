import React from "react";
import './Carousel.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery1 from '../assets/gallery1.png'

 Carousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
                <img src={gallery1} alt="" className="galleryImage"/>
                <img src={gallery1} alt="" className="galleryImage"/>
                <img src={gallery1} alt="" className="galleryImage"/>
                <img src={gallery1} alt="" className="galleryImage"/>
        </Carousel> 
    )
}

export default Carousel
