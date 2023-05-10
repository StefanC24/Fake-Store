import React from 'react'
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../NavLinks/Logo';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <Link to='/favourites' className='cart-button'>
        <BsFillHeartFill className='cart-img'/>
      </Link>
      <Link to='/cart' className='cart-button'>
        <BsFillCartFill className='cart-img'/>
      </Link>
    </div>
  )
}
