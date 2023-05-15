import { useState, useEffect } from "react";
import axios from "axios";
// import ItemCard from '../ItemCard/ItemCard'
import "./ItemsList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Shop-Context/ShopContext";
import { BsHeart } from "react-icons/bs";
import "../ItemCard/ItemCard.css";

export default function ItemsList() {
  const { addItemToCart, addItemToFav } = useContext(ShopContext);
  const [itemCard, setItemCard] = useState();

  const fetchItemCard = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setItemCard(response.data));
  };

  useEffect(() => {
    fetchItemCard();
  }, []);

  return (
    <div className="cards-container">
      <div className="filters-container">
        {/* Instead of these being links to different pages they should be buttons that tap into the filtering directly from the api */}
        <Link to="/" className="filter">
          All
        </Link>
        <Link to="/electronics" className="filter">
          Electronics
        </Link>
        <Link to="/mens-clothing" className="filter">
          Men'sClothing
        </Link>
        <Link to="/jewelery" className="filter">
          Jewelery
        </Link>
        <Link to="/womens-clothing" className="filter">
          Women's Clothing
        </Link>
      </div>
      <div className="products">
        {itemCard?.map((item) => (
          <div className="card" key={item.id}>
            <Link className="product-card" to={`/products/${item.id}`}>
              <img
                className="card-image"
                src={item.image}
                alt={item.title}>
              </img>
              <p className="title card-details">{item.title}</p>
            </Link>
            <div className="price-cart-favourite">
              <p className="price card-details">£{item.price}</p>
              <button className="add-button" onClick={() => addItemToCart(item)}>
                Add to cart
              </button>
              <BsHeart
                style={{ cursor: "pointer" }}
                onClick={() => addItemToFav(item)}
                className="fav-icon"
              />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
