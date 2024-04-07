import React from 'react'
import './Founder.css'
import fdimg from '../../../assets/founder.jpg'
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Founder = () => {
  return (
    <div className='founder'>
        <h1 className="founder-title">
            Founder's Insight
        </h1>
        <hr />
        <div className="founder-post">
            <div className="founder-profile">
                <img src={fdimg} alt="" />
                <div className="founder-detail">
                    <h2 className="founder-name">Mr.Sahil Mane</h2>
                    <h4>Founder of Mumbai Wanderer</h4>
                </div>
                <div className="guide-contact">
                            <div className="insta-logo">
                            <a target='_blank' href="https://www.instagram.com/sahil_mane_1304?igsh=bDBsNnE0bzBteWhj"><FaInstagram size="3rem" /></a>
                            </div>
                            <div className="linked-logo">
                            <a target='_blank' href="https://www.linkedin.com/in/sahil-mane-b113032ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LiaLinkedin size="3.5rem" /></a>
                            </div>
                        </div>
            </div>
            <div className="founder-content">
            Greetings from Sahil Mane, founder of Mumbai Wanderers! Having traversed the bustling streets and hidden gems of Mumbai for many years, I have delved deep into the city's captivating legacy. Now, it is my utmost pleasure to share this wealth of experience and knowledge with fellow enthusiasts of exploration.

Having studied Mumbai's legacy extensively, I am fueled by a passion to reveal the hidden treasures and untold tales that lie within its every nook and cranny. Join me on this exhilarating journey of discovery as we embark on a 5-day odyssey through 12 iconic destinations, each offering a glimpse into the soul of Mumbai. Together, let's unravel the mysteries, celebrate the triumphs, and embrace the diversity that defines this incredible city. Welcome aboard, and let Mumbai Wanderers be your guide to unlocking the secrets of Mumbai's timeless legacy.

            </div>
        </div>
    </div>
  )
}

export default Founder