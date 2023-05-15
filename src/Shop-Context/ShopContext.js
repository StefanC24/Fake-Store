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
        let cartItem = window.localStorage.getItem('cartItems')
        if(cartItem){
            cartItem = JSON.parse(cartItem)
            
            const index = cartItem.findIndex(item => item.id === productToBeAdded.id);
            
            if (index > -1) {
                cartItem[index].quantity++;
            } else {
                cartItem.push(productToBeAdded);
            }
        }else{
            cartItem = [productToBeAdded]
            }
        
        console.log(cartItem)
        window.localStorage.setItem('cartItems', JSON.stringify(cartItem))
        setCartItems(cartItem);
    }

    const removeItemFromCart = (productToBeRemovedId) =>{
        let cartItem = JSON.parse(window.localStorage.getItem('cartItems'))
        cartItem = cartItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('cartItems', JSON.stringify(cartItem));
        setCartItems(cartItem);
        }

        const addItemToFav = (productToBeAdded) => {
            let favItem = window.localStorage.getItem('favItems')
            if(favItem){
                favItem = JSON.parse(favItem)
                const index = favItem.findIndex(item => item.id === productToBeAdded.id);
                
                console.log(index)
                if (index > -1) {
                console.log(index)

                    favItem[index].quantity += 1;
                } else {
                    favItem.push(productToBeAdded);
                }
            }
            else{
                favItem = [productToBeAdded]
            }
            
            console.log(favItem)
            window.localStorage.setItem('favItems', JSON.stringify(favItem))
            setFavItems(favItem);
    }
    const removeItemFromFav = (productToBeRemovedId) =>{
        let cartItem = JSON.parse(window.localStorage.getItem('favItems'))
        cartItem = cartItem.filter(product => product.id !== productToBeRemovedId)
        window.localStorage.setItem('favItems', JSON.stringify(cartItem));
        setFavItems(cartItem);
    }
    

    const contextValue = {
        cartItems, favItems, addItemToCart, removeItemFromCart, removeItemFromFav, addItemToFav, setCartItems, setFavItems
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider