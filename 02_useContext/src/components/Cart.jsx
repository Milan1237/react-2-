import React from 'react'
import { useCart } from '../Global/ContextProvider'
const Cart = () => {
    const {cart} = useCart() ; 
  return (
    <>
    <h2>My cart</h2>
    <p>Cart Count: {cart.length}</p>
    </>
  )
}

export default Cart