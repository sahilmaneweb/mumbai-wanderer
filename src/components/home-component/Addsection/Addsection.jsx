import React from 'react'
import './Addsection.css'
import { Link } from 'react-router-dom'

const Addsection = () => {
  const scrolltop = () => {
    window.scrollTo({top:0, behaviour:'smooth'})
  }
  return (
    <div className='addsection'>
        <h1 className="addsection-title">
            Let's get to know <br /> the Mumbai
        </h1>
        <Link to="/booknow">
        <button onClick={scrolltop} className="addsection-button">
            Book Now
        </button>
        </Link>
    </div>
  )
}

export default Addsection