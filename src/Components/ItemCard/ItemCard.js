import {Link} from 'react-router-dom'
import './ItemCard.css'

export default function ItemCard(props) {
  return (
    <Link className='product-card' to={`/products/${props.id}`}>
  
      <img className='card-image' 
        src={props.image} 
        alt={props.title}>
      </img>
      <p className='title card-details'>{props.title}</p>
      <p className='price card-details'>£{props.price}</p>
    
    </Link>
  )
}
