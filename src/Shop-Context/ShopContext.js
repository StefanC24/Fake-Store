import { createContext, useState, useEffect } from "react"
import React   from 'react'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState()
    
    useEffect(() => {
        setCartItems(JSON.parse(window.localStorage.getItem('cartItems')))
    }, [])
    
    const addItemToCart = (productToBeAdded) =>{
        let newItem;
        newItem = window.localStorage.getItem('cartItems')
        if(newItem){
            newItem = JSON.parse(newItem)
            newItem = [...newItem, productToBeAdded]
        }
        else{
            newItem = [productToBeAdded]
        }
        window.localStorage.setItem('cartItems', JSON.stringify(newItem))
        setCartItems(newItem);
    }

    const removeItemFromCart = ({productToBeRemovedId}) =>{
        let newItem = JSON.parse(window.localStorage.getItem('cartItems'))
        newItem = newItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('cartItems', JSON.stringify(newItem));
        setCartItems(newItem);

        }

    const contextValue = {cartItems, addItemToCart, removeItemFromCart, setCartItems}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider