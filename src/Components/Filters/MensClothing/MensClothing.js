import React from 'react'
import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ItemCard from '../../ItemCard/ItemCard'
import { BsHeart } from 'react-icons/bs';
import {ShopContext} from '../../../Shop-Context/ShopContext'


export default function MensClothing() {

  const [itemCard, setItemCard] = useState()
  const {addItemToFav} = useContext(ShopContext)

  
    const fetchItemCard = () => {
      axios.get('https://fakestoreapi.com/products/category/men%27s%20clothing')
        .then(response => setItemCard(response.data))
    }
  
    useEffect(() => {
      fetchItemCard()
    }, []);

  return (
    <div className='cards-container'>
      <div className="filters">
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
          <span className='price-and-favButton'>
            <p className='price'>£{item.price}</p>
            <BsHeart className='fav-icon' onClick={() => addItemToFav(item)}/>
          </span>
        </div>)}
      </div>    
    </div>
  )
}
