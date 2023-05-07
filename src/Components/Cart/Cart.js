import { ShopContext } from "../../Shop-Context/ShopContext";
import React, { useContext } from 'react'
import ItemCard from "../ItemCard/ItemCard";


const Cart = () => {
    const {cartItems} = useContext(ShopContext)
    return (
        <div>
          {cartItems.map((item) => <ItemCard {...item}/>)}
        </div>
  )
}

export default Cart