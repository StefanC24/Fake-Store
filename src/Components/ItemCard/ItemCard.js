import React from 'react'
import './ItemCard.css'

export default function ItemCard(props) {
  return (
    <div className='product-card'>
      <img className='card-image' src={props.image} alt={props.title}></img>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  )
}
