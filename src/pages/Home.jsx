import React from 'react'
import Imageslider from '../components/home-component/Imageslider/Imageslider'
import Features from '../components/home-component/Features/Features'
import Sampleplace from '../components/home-component/Sampleplace/Sampleplace'
import Addsection from '../components/home-component/Addsection/Addsection'

const Home = () => {
  return (
    <div className='home'>
        <Imageslider />
        <Features />
        <Sampleplace />
        <Addsection />
    </div>
  )
}

export default Home