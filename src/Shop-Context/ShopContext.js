import { createContext, useState, useEffect } from "react";
import React from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(window.localStorage.getItem("cartItems")));
    setFavItems(JSON.parse(window.localStorage.getItem("favItems")));
  }, []);

  const addItemToCart = (productToBeAdded) => {
    let newItem;
    newItem = window.localStorage.getItem("cartItems");
    if (newItem) {
      newItem = JSON.parse(newItem);
      newItem = [...newItem, productToBeAdded];
    } else {
      newItem = [productToBeAdded];
    }
    window.localStorage.setItem("cartItems", JSON.stringify(newItem));
    setCartItems(newItem);
  };

<<<<<<< HEAD
    const removeItemFromCart = (productToBeRemovedId) =>{
        let newItem = JSON.parse(window.localStorage.getItem('cartItems'))
        newItem = newItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('cartItems', JSON.stringify(newItem));
        setCartItems(newItem);
        }
=======
  //   remover the curly braces from the parameter
  const removeItemFromCart = ({ productToBeRemovedId }) => {
    let newItem = JSON.parse(window.localStorage.getItem("cartItems"));
    newItem = newItem.filter((product) => product.id !== productToBeRemovedId);
    window.localStorage.setItem("cartItems", JSON.stringify(newItem));
    setCartItems(newItem);
  };
>>>>>>> f41100daf4c17ae8f9be98c40e28375cce5c815e

  const addItemToFavourites = (productToBeAdded) => {
    let newItem = window.localStorage.getItem("favItems");
    if (newItem) {
      newItem = JSON.parse(newItem);
      newItem = [...newItem, productToBeAdded];
    } else {
      newItem = [productToBeAdded];
    }
<<<<<<< HEAD
    const removeItemFromFav = (productToBeRemovedId) =>{
        let newItem = JSON.parse(window.localStorage.getItem('favItems'))
        newItem = newItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('favItems', JSON.stringify(newItem));
        setFavItems(newItem);

    }
    
=======
    window.localStorage.setItem("favItems", JSON.stringify(newItem));
    setFavItems(newItem);
  };
>>>>>>> f41100daf4c17ae8f9be98c40e28375cce5c815e

  //   remover the curly braces from the parameter
  const removeItemFromFav = ({ productToBeRemovedId }) => {
    let newItem = JSON.parse(window.localStorage.getItem("favItems"));
    newItem = newItem.filter((product) => product.id !== productToBeRemovedId);
    console.log(newItem);
    window.localStorage.setItem("favItems", JSON.stringify(newItem));
    setFavItems(newItem);
    // You are missing the state update here like in the add to favorites
  };

  const contextValue = {
    cartItems,
    favItems,
    addItemToCart,
    removeItemFromCart,
    removeItemFromFav,
    addItemToFavourites,
    setCartItems,
    setFavItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
