import React from 'react'
import Info from '../components/about-component/info/Info';
import Founder from '../components/about-component/Founder/Founder';
import Guide from '../components/about-component/Guide/Guide';
import Testimonial from '../components/about-component/Testimonial/Testimonial';


const About = () => {
  
  return (
    <div className='about'>
      <Info />
      <Founder />
      <Guide />
      <Testimonial />
    </div>
  )
}

export default About