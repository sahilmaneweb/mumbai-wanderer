import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialdata from '../../../assets/Testimonialdata'


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swipeToSlide :true,
    slidesToScroll: 2,
    autoplay:true,
    autoPlaySpeed:300,
    cssEase: "ease",
    responsive : [
      {
        breakpoint : 1024,
        settings : {
          rows : 1,
          slidesToShow : 2
        }
      },
      {
        breakpoint : 600,
        settings : {
              rows : 2 , 
              slidesToShow : 2
        }
      },
      {
        breakpoint : 480,
        settings : {
          rows : 2 , 
              slidesToShow : 1,
              slidesToScroll : 1,
        }
      }
    ]
  };
  return (
    <div className='testimonial'>
        <h1 className="testimonial-title">
            What our previous wanderer says ...
            <hr />
        </h1>
        <div className="testimonial-slider">
                <Slider {...settings}>
                      {
                        testimonialdata.map((item) => (
                          <div>
                            <div className="testimonial-card" id={item.id}>
                            <div className="testimonial-detail">
                              <img src={item.image} alt="" className="testimonial-image" />
                              <h2 className="testimonial-name">{item.name}</h2>
                            </div>
                            <div className="testimonial-post">
                                {item.post}
                            </div>
                          </div>
                          </div>
                        ))
                      }
                </Slider>
            </div>
    </div>
  )
}

export default Testimonial