import { useState, useEffect } from 'react'
import axios from 'axios'
// import ItemCard from '../ItemCard/ItemCard'
import './ItemsList.css'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {ShopContext} from '../../Shop-Context/ShopContext'
import { BsHeart } from 'react-icons/bs';
import '../ItemCard/ItemCard.css'



export default function ItemsList() {
  const {addItemToCart} = useContext(ShopContext)
  const [itemCard, setItemCard] = useState()
  
  const fetchItemCard = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setItemCard(response.data))
  }

  useEffect(() => {
    fetchItemCard()
  }, []);
  
  console.log(itemCard)

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
        {itemCard?.map(item => <div className='card'>
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
