// import {Link} from 'react-router-dom'
// import {useContext} from 'react'
// // import { BsHeart } from 'react-icons/bs';
// import './ItemCard.css'
// import {ShopContext} from '../../Shop-Context/ShopContext'
// export default function ItemCard(props) {

//   const {addItemToCart} = useContext(ShopContext)

//   console.log()
//   return (
//       <div className='card'>
//     <Link className='product-card' to={`/products/${props.id}`}>
//         <img className='card-image' 
//         src={props.image} 
//         alt={props.title}>
//       </img>
//       <p className='title card-details'>{props.title}</p>
//     </Link>
//       <p className='price card-details'>£{props.price}</p>
//         <button className='add-button' onClick={ () => addItemToCart() }>
//           Add to cart
//         </button>
//         <BsHeart className='fav-icon'/>
//       </div>
//   )
// }
