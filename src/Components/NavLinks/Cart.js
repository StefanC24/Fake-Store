import React, { useContext }  from 'react'
import { ShopContext } from '../../Shop-Context/ShopContext'
import { Link } from 'react-router-dom'

export default function Cart() {

  const {cartItems, removeItemFromCart} = useContext(ShopContext)
    
  return (
    <div>
      <h1 className='logo'>Store Cart</h1>
      {cartItems?.map((item)=> 
        <Link to={`/products/${item.id}`} key={item.id}>
          <img src={item.image} alt={item.title} style={{maxWidth: "100px"}}></img>
          {/* <button onClick={removeItemFromCart()}>Remove from cart</button>    */}
        </Link >)}
    </div>
  )
}
