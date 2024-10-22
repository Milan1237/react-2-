import React from 'react'
import { useCart } from '../Global/ContextProvider'

const Product = ({product: pro}) => {
    const {cartDispatch} = useCart();
  return (
    <>
          <div className="product">
            <p>
              {pro.brandName} || Price: {pro.price} || rating: {pro.rating}{" "}
            </p>
            <p>Discount: {pro.discountRate}</p>
            <button onClick={()=> cartDispatch({type: "ADD" , value: pro})}>Add to cart</button>
            <button onClick={()=> cartDispatch({type: "REMOVE" , value: pro.id})}>Remove From cart</button>
          </div>
    </>
  )
}

export default Product