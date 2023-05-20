import React, { useContext }  from 'react'
import { ShopContext } from '../../Shop-Context/ShopContext'
import { Link } from 'react-router-dom'
import './Cart.css'

export default function Cart() {

  const {cartItems, removeItemFromCart} = useContext(ShopContext)
 
  return (
    <div className='cart-container'>
      {cartItems?.map((item)=>
        <div className='cart-item' key={item.id}>
          <Link to={`/products/${item.id}`} >
            <img className='item-img' src={item.image} alt={item.title}></img>
          </Link >
          <Link to={`/products/${item.id}`} >
            <p className='item-title'>{item.title}</p>
            </Link >
            <p className='item-price'>£ {item.price}</p>
            <button className='remove-button'
              onClick={ ()=> removeItemFromCart(item.id)}>
              Remove
            </button>   
        </div>)}
    </div>
  )
}
