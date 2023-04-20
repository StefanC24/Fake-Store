import {Link} from 'react-router-dom'
import './ItemCard.css'

export default function ItemCard(props) {
  return (
      <div className='card'>
    <Link className='product-card' to={`/products/${props.id}`}>
        <img className='card-image' 
        src={props.image} 
        alt={props.title}>
      </img>
      <p className='title card-details'>{props.title}</p>
    </Link>
      <p className='price card-details'>£{props.price}</p>
        <button className='add-button'>Add to cart</button>
      </div>
  )
}
