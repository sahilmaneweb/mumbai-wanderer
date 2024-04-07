import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'

const Navbar = () => {
  const [mobile,setMobile] = useState(false);
  const togglemenu = () => {
    mobile ? setMobile(false) : setMobile(true);
  }
  return (
    <div className={`nav ${mobile ? 'extend' : ' '}`}>
      <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <ul className="nav-links">
        <NavLink to="/" onClick={togglemenu}>Home</NavLink>
        <NavLink to="/about" onClick={togglemenu}>About</NavLink>
        <NavLink to="/places" onClick={togglemenu}>Places</NavLink>
      </ul>
      <Link to="/booknow" onClick={togglemenu}><button className="nav-button">Book Now</button></Link>
       <img src={menu} onClick={togglemenu} className='menu' alt="" />
    </div>
  )
}

export default Navbar