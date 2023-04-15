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
    <div>
        <img className='details-img' src={productDetails?.image} alt={productDetails?.title}></img>
        <p>{productDetails?.title}</p>
        <p>£{productDetails?.price}</p>
    </div>
  )
}
