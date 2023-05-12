import { createContext, useState, useEffect } from "react"
import React   from 'react'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState([])
    const [favItems, setFavItems] = useState([])
      
    useEffect(() => {
        setCartItems(JSON.parse(window.localStorage.getItem('cartItems')))
        setFavItems(JSON.parse(window.localStorage.getItem('favItems')))
    }, [])
        
    const addItemToCart = (productToBeAdded) =>{
        let cartItem;
        cartItem = window.localStorage.getItem('cartItems')
        if(cartItem){
            cartItem = JSON.parse(cartItem)
            // cartItem = [...cartItem, productToBeAdded]
            if(!cartItem.includes(productToBeAdded)){
                cartItem = [...cartItem, productToBeAdded]
            }
        }else{
            cartItem = [productToBeAdded]
        }

        window.localStorage.setItem('cartItems', JSON.stringify(cartItem))
        setCartItems(cartItem);

        //if product exists in cart increment qty property by 1
        //else add product to cart and set property qty to 1
    }

    const removeItemFromCart = (productToBeRemovedId) =>{
        let cartItem = JSON.parse(window.localStorage.getItem('cartItems'))
        cartItem = cartItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('cartItems', JSON.stringify(cartItem));
        setCartItems(cartItem);
        }

    const addItemToFavourites = (productToBeAdded) =>{
        let cartItem = window.localStorage.getItem('favItems')
        if(cartItem){
            cartItem = JSON.parse(cartItem)
            cartItem = [...cartItem, productToBeAdded]
        }
        else{
            cartItem = [productToBeAdded]
        }
        window.localStorage.setItem('favItems', JSON.stringify(cartItem))
        setFavItems(cartItem);
    }
    const removeItemFromFav = (productToBeRemovedId) =>{
        let cartItem = JSON.parse(window.localStorage.getItem('favItems'))
        cartItem = cartItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('favItems', JSON.stringify(cartItem));
        setFavItems(cartItem);
    }
    

    const contextValue = {
        cartItems, favItems, addItemToCart, removeItemFromCart, removeItemFromFav, addItemToFavourites, setCartItems, setFavItems
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider