import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ItemCard from '../../ItemCard/ItemCard'

export default function WomensClothing() {

    const [itemCard, setItemCard] = useState()
  
    const fetchItemCard = () => {
      axios.get('https://fakestoreapi.com/products/category/women%27s%20clothing')
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
        {itemCard?.map(item => <ItemCard {...item} key={item.id}/>)}
      </div>
    
    </div>
  )
}
