import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CardDetails.css'
import { ShopContext } from '../../Shop-Context/ShopContext'

export default function CardDetails() {

    const {id} = useParams()
    const [productDetails, setProductDetails] = useState();
    const {addItemToCart, addItemToFav} = useContext(ShopContext)

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
        <div className='details'>
          <img className='details-img' src={productDetails?.image} alt={productDetails?.title}></img>
          <details>{productDetails?.description}</details>
        </div>
        <div className='product-details'>
          <p className='details-title'>{productDetails?.title}</p>
          <p className='details-price'>£{productDetails?.price}</p>
          <p className='product-rating'>{productDetails?.rating.rate} <span className='count-of-reviews'>({productDetails?.rating.count} reviews)</span></p>
          <button className="add-to-cart" onClick={()=>addItemToCart(productDetails)}>Add to cart</button>
          <br></br>
          <button className='add-to-wishlist' onClick={()=>addItemToFav(productDetails)}>Add to wishlist</button>
        </div>
    </div>
  )
}
