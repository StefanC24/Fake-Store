import React from 'react'

export default function CartItem(props) {
  return (
    <div>
      <img className='card-image' 
        src={props.image} 
        alt={props.title}>
      </img>
      <p className='title card-details'>{props.title}</p>
    </div>
  )
}
