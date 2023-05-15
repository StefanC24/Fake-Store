import React, { useContext } from 'react'
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../NavLinks/Logo';
import { ShopContext } from '../../Shop-Context/ShopContext';

export default function Navbar() {

  const {favItems, cartItems} = useContext(ShopContext)
  console.log(favItems)

  return (
    <div className='navbar'>
      <Logo />
      <Link to='/favourites' className='cart-button'>
        <BsFillHeartFill className='cart-img'/>
      </Link>
      <Link to='/cart' className='cart-button'>
        <BsFillCartFill className='cart-img'/>
        {cartItems.length > 0 
        ? 
        <div className='itemCount'>{cartItems.length}</div> 
        : 
        null}
      </Link>
    </div>
  )
}
