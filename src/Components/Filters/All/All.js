import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsHeart } from 'react-icons/bs';
import {ShopContext} from '../../../Shop-Context/ShopContext'
import './All.css'

export default function All() {

  const [itemCard, setItemCard] = useState()
  const {addItemToCart, addItemToFav} = useContext(ShopContext)

  
    const fetchItemCard = () => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => setItemCard(response.data))
    }
  
    useEffect(() => {
      fetchItemCard()
    }, []);

  return (
    <div className='cards-container'>
      <div className="filters-container">
        {/* Instead of these being links to different pages they should be buttons that tap into the filtering directly from the api */}
          <Link to='/all-items' className='filter'>All</Link>
          <Link to='/electronics' className='filter'>Electronics</Link>
          <Link to='/mens-clothing' className='filter'>Men'sClothing</Link>
          <Link to='/jewelery' className='filter'>Jewelery</Link>
          <Link to='/womens-clothing' className='filter'>Women's Clothing</Link>
      </div>
      <div className='products'>
        {itemCard?.map(item => 
        <div className='card' key={item.id}>
          <Link className='product-card' to={`/products/${item.id}`}>
            <img className='card-image' 
              src={item.image} 
              alt={item.title}>
            </img>
            <p className='title card-details'>{item.title}</p>
          </Link>
          <p className='price card-details'>£{item.price}</p>
            <button 
              className='add-button'  
              onClick={ () => addItemToCart(item) }>
                Buy
            </button>
            <BsHeart className='fav-icon' onClick={() => addItemToFav(item)}/>
        </div>)}
      </div>    
    </div>
  )
}
