import React from 'react'
import data from '../assets/Data'
import './css/Detail.css'
import { Link, useParams } from 'react-router-dom'
import next from '../assets/next-icon.png'

const Detail = () => {
  const {detailId} = useParams();
  const place = data.find((e)=> e.id === Number(detailId));
  return (
    <div className='detail'>
      <Link to='/places'>
      <div className="goback">
        <img src={next} alt="" />
        <h2>Go Back</h2>
      </div>
      </Link>
      <h1 className="detail-title">
        {place.name}
      </h1>
      <div className="detail-gallery">
        <div className="detail-image"><img src={place.image} alt="" /></div>
        <div className="detail-image"><img src={place.image} alt="" /></div>
        <div className="detail-image"><img src={place.image} alt="" /></div>
        <div className="detail-image"><img src={place.image} alt="" /></div>
        <div className="detail-image"><img src={place.image} alt="" /></div>
      </div>
      <div className="detail-tags">
        Tags :
        {
            place.tags.map((item,index) => (
                <li className="tag">{item}</li>
            ))
        }
      </div>
      <div className="detail-flex">
        <div className="detail-left">
          <h1>Some Description :- </h1>
            <div className="detail-paragraph">
                {place.paragraph}
            </div>
        </div>
        <div className="detail-right">
           <h1>Location :- </h1>
             <div className="detail-map">
             {
              place.map
             }
             </div>
        </div>
      </div>
    </div>
  )
}

export default Detail