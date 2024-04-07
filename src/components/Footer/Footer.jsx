import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrolltop = () => {
    window.scrollTo({top:0, behaviour:'smooth'})
  }
  return (
    <div className='footer'>
      <div className="footer-logo">
        <Link to="/"><img onClick={scrolltop} src={logo} alt="" /></Link>
      </div>
      <ul className="footer-links">
          <li onClick={scrolltop}><Link to="/">Home</Link> </li>
          <li onClick={scrolltop}><Link to="/about">About</Link> </li>
          <li onClick={scrolltop}><Link to='/places'>Places</Link> </li>
          <li onClick={scrolltop}><Link to='/booknow'>Book Now</Link> </li>
      </ul>
          <hr />
          <div className="footer-copyright">
            <p>All rights reserved by Mumbai Wanderer <span>&#169;</span> 2024</p>
            <h4>Terms & Conditions</h4>
          </div>
    </div>
  )
}

export default Footer