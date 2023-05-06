import React, { useContext }  from 'react'
import { ShopContext } from '../../Shop-Context/ShopContext'

export default function Cart() {

  const {cartItems} = useContext(ShopContext)
  
  return (
    <div>
      <h1 className='logo'>Store Cart</h1>
      <>{cartItems}</>
    </div>
  )
}
