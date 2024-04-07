import React from 'react'
import './css/Places.css'
import data from '../assets/Data'
import Item from '../components/Item/Item'

const Places = () => {
  return (
    <div className='places'>
      <h1 className="places-title">
        These are the places, where you will wander...
      </h1>
      <div className="place-cards">
      {data.map((item)=>(
                <Item key={item.index} id={item.id} img={item.image} name={item.name} tags={item.tags}  />
            ))}
      </div>
    </div>
  )
}

export default Places