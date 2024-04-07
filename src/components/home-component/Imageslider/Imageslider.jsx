import React from 'react'
import './Imageslider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/img-1.jpg'
import slide2 from '../../../assets/img-2.jpg'
import slide3 from '../../../assets/img-3.jpg'
import slide4 from '../../../assets/img-5.jpg'
import { Link } from 'react-router-dom';

const Imageslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoPlaySpeed:200,
        cssEase: "ease",
      };
  return (
    <div className='imageslider'>
        <div className="slider-content">
            <h1 className="slider-title">
                Discover Mumbai's Gems: <br />5 Day wander with us
            </h1>
            <p className="slider-tag">
                Embark on a journey where  Mumbai's<br />culture, heritage, spirituality awaits.
            </p>
            <Link to="/booknow">
            <button className="slider-button">
                Book Now
            </button>
            </Link>
            <div className="slider">
            <Slider {...settings}>
              <div className="slide">
                  <img src={slide1} alt="" />
              </div>
              <div className="slide">
                  <img src={slide2} alt="" />
              </div>
              <div className="slide">
                  <img src={slide3} alt="" />
              </div>
              <div className="slide">
                  <img src={slide4} alt="" />
              </div>
          </Slider>
            </div>
        </div>
    </div>
  )
}

export default Imageslider