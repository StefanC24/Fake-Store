import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemCard from '../ItemCard/ItemCard'
import './ItemsList.css'

export default function ItemsList() {
  const [itemCard, setItemCard] = useState()
  
  const fetchItemCard = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setItemCard(response.data))
  }

  useEffect(() => {
    fetchItemCard()
  }, []);
  
  return (
  <div className='cards-container'>
      {itemCard?.map(item => <ItemCard {...item}/>)}
    </div>
  )
}
