import React from 'react'
import './Sampleplace.css'
import data from '../../../assets/Data'
import Item from '../../Item/Item'
import { Link } from 'react-router-dom'

const Sampleplace = () => {
    const scrolltop = () => {
        window.scrollTo({top:0, behaviour:'smooth'})
      }
  return (
    <div className='sampleplace'>
        <h1 className="sampleplace-title">
            Some places you will see..
            <hr />
        </h1>
        <div className="sampleplace-cards">
            {data.slice(0,4).map((item,index)=>(
                <Item key={item.index} id={item.id} img={item.image} name={item.name} tags={item.tags}  />
            ))}
        </div>
        <Link to='/places'>
        <button onClick={scrolltop} className='samplebutton'>See All</button>
        </Link>
        <div className="stay">
            <h2 className="stay-title">
                Your Stay for this 5 days would be at <br /> Mumbai's Most Luxurious Taj Hotel
            </h2>
        </div>
    </div>
  )
}

export default Sampleplace