import React from 'react'
import './Features.css'
import pic1 from '../../../assets/feature-1.jpg'
import pic2 from '../../../assets/feature-2.jpeg'
import pic3 from '../../../assets/feature-3.jpg'
import pic4 from '../../../assets/feature-4.jpeg'

const Features = () => {
  return (
    <div className='features'>
        <div className="feature-title">
            Top values for you
            <hr />
        </div>
        <div className="feature-tag">
            Try variety of benefits when using our services
        </div>
        <div className="feature-cards">
            <div className="feature-card">
                <div className="feature-icon">
                    <img src={pic1} alt="" />
                </div>
                <div className="feature-description">
                    <h1>Luxury stay</h1>
                    <p>Your stay would be at 5 star hotel.</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="feature-icon">
                    <img src={pic2} alt="" />
                </div>
                <div className="feature-description">
                    <h1>Expert guide</h1>
                    <p>Our best tour guides are ready to guide you</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="feature-icon">
                    <img src={pic3} alt="" />
                </div>
                <div className="feature-description">
                    <h1>Topclass travel</h1>
                    <p>Your travelling in mumbai, would be in top class vehicles</p>
                </div>
            </div>
            <div className="feature-card">
                <div className="feature-icon">
                    <img src={pic4} alt="" />
                </div>
                <div className="feature-description">
                    <h1>Easy Booking</h1>
                    <p>We provide simplified booking service</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features