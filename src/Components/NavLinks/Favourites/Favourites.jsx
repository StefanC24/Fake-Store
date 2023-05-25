import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../Shop-Context/ShopContext'
const Favourites = () => {

    const {favItems, removeItemFromFav} = useContext(ShopContext)

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
            <p>{item.quantity}</p>
            <p className='item-price'>£ {item.price}</p>
            <button className='remove-button'
                onClick={ ()=> removeItemFromFav(item.id)}> 
                <img className='remove-button-picture' src='./assets/remove.png' alt='remove button'></img>
            </button>   
        </div>)}
    </div>
  )
}

export default Favourites
