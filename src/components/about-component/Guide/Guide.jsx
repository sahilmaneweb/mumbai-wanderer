import React from 'react'
import './Guide.css'
import guidedata from '../../../assets/Guidedata'
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Guide = () => {
  return (
    <div className='guide'>
        <h1 className="guide-title">
            Our Guides
        </h1>
        <hr />
        <div className="guide-box">
            {
                guidedata.map((item) => (
                    <div className="guide-profile" id={item.id}>
                        <img className='guide-image' src={item.image} alt="" />
                        <div className="guide-name">{item.name} </div>
                        <div className="guide-tag">{item.tag}</div>
                        <div className="guide-contact">
                        <div className="insta-logo">
                            <a href={item.insta} target="_blank"><FaInstagram size="3rem" /></a>
                            </div>
                            <div className="linked-logo">
                            <a href={item.linked} target="_blank" ><LiaLinkedin size="3.5rem" /></a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Guide