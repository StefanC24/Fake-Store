import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../Shop-Context/ShopContext'
const Favourites = () => {
  const {favItems} = useContext(ShopContext)
console.log(favItems)
  return (
       <div className='cart-container'>
      {favItems?.map((item)=>
        <div className='cart-item' key={item.id}>
          <Link to={`/products/${item.id}`} >
            <img className='item-img' src={item.image} alt={item.title}></img>
          </Link >
          <Link to={`/products/${item.id}`} >
            <p className='item-title'>{item.title}</p>
            </Link >
            <p className='item-price'>£ {item.price}</p>
        </div>)}
    </div>
  )
}

export default Favourites
