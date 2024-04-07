import React, { useId } from 'react'
import './Item.css'
import next from '../../assets/next-icon.png'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const id = useId();
    const scrolltop = () => {
        window.scrollTo({top:0, behaviour:'smooth'})
      }
  return (
    <div className='item' key={id} onClick={scrolltop}>
        <Link to={`/detail/${props.id}`}>
        <div className="item-image">
            <img src={props.img} alt="" />
        </div>
        <div className="item-description">
            <div className="item-content">
                <h2>{props.name} </h2>
                <div className="tags">
                    {
                        props.tags.slice(0,2).map((item,index) => (
                            <li className="tag">{item}</li>
                        ))
                    }
                </div>
            </div>
            <div className="item-arrow">
                <img src={next} alt="" />
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Item