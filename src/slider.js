import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import './slider.css';



function Slider() {
    return (
        <div className="slider">
            <OwlCarousel className="owl-theme"
            items="1"
            autoplay
            nav
            dots
            loop
            >
                <div className="slider-item">
                    <img className="slider-image" src={img1} />
                </div>
                <div className="slider-item">
                    <img className="slider-image" src={img2} />
                </div>
                <div className="slider-item">
                    <img className="slider-image" src={img3} />
                </div>
                <div className="slider-item">
                    <img className="slider-image" src={img4} />
                </div>
                <div className="slider-item">
                    <img className="slider-image" src={img5} />
                </div>
            </OwlCarousel>
        </div>
    )
}



export default Slider;