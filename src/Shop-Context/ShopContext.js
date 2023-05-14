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

        const addItemToFav = (productToBeAdded) => {
            let cartItem = window.localStorage.getItem('FavItems')
            if(cartItem){
                cartItem = JSON.parse(cartItem)
                const index = cartItem.findIndex(item => item.id === productToBeAdded.id);
                console.log(index)

                if (index > -1) {
                    cartItem[index].quantity += productToBeAdded.quantity;
                    
                } else {
                    cartItem.push(productToBeAdded);
                }
            }
            else{
                cartItem = [productToBeAdded]
            }
            
            console.log(cartItem)
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
        cartItems, favItems, addItemToCart, removeItemFromCart, removeItemFromFav, addItemToFav, setCartItems, setFavItems
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider