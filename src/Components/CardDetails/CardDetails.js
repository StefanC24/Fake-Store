import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CardDetails.css'

export default function CardDetails() {

    const {id} = useParams()
    const [productDetails, setProductDetails] = useState();

    const fetchDetails = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
          .then(response => setProductDetails(response.data))
    }

    useEffect(() => {
        fetchDetails()
        // eslint-disable-next-line
    },[])

  return (
    <div className="product-preview">
        <img className='details-img' src={productDetails?.image} alt={productDetails?.title}></img>
        <div className='product-details'>
          <p className='details-title'>{productDetails?.title}</p>
          <p className='details-price'>£{productDetails?.price}</p>
          <p className='product-rating'>{productDetails?.rating.rate} <span className='count-of-reviews'>({productDetails?.rating.count} reviews)</span></p>
          <button className="add-to-cart">Add to cart</button>
          <br></br>
          <button className='add-to-wishlist'>Add to wishlist</button>
        </div>
    </div>
  )
}
