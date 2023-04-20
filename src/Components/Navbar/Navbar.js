import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import './Navbar.css'
import Logo from '../NavLinks/Logo';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <button className='cart-button'>
        <BsFillCartFill className='cart-img'/>
        </button>
    </div>
  )
}
