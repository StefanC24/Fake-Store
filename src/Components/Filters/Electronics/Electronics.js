import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ItemCard from '../../ItemCard/ItemCard'
import { BsHeart } from 'react-icons/bs';
import {ShopContext} from '../../../Shop-Context/ShopContext'

export default function Electronics() {

  const [itemCard, setItemCard] = useState()
  const {addItemToCart} = useContext(ShopContext)

  
    const fetchItemCard = () => {
      axios.get('https://fakestoreapi.com/products/category/electronics')
        .then(response => setItemCard(response.data))
    }
  
    useEffect(() => {
      fetchItemCard()
    }, []);

  return (
    <div className='cards-container'>
      <div className='filters-container'>
          <Link to='/'className='filter'>All</Link>
          <Link to='/electronics'className='filter'>Electronics</Link>
          <Link to='/mens-clothing'className='filter'>Men'sClothing</Link>
          <Link to='/jewelery'className='filter'>Jewelery</Link>
          <Link to='/womens-clothing'className='filter'>Women's Clothing</Link>
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
                Add to cart
            </button>
            <BsHeart className='fav-icon'/>
        </div>)}
      </div>    
    </div>
  )
}
