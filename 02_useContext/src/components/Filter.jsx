import React, { useContext } from 'react'
import { useCart } from '../Global/ContextProvider';

const Filter = () => {
    const {filteredProduct: {discount , rating , budget} , cartDispatch} = useCart();
    console.log({discount:discount , rating: rating , budget: budget })
  return (
    <div>
        <input value={budget} onChange={(event)=> cartDispatch({type:"BUDGET" , value: event.target.value})} type="text"  placeholder='Enter your Budget' />
        <input value={rating} onChange={(event)=> cartDispatch({type:"RATING" , value: event.target.value})} type="text" placeholder='Enter rating' />
        <input value={discount} onChange={(event)=> cartDispatch({type:"DISCOUNT" , value: event.target.value})} type="text" placeholder='Enter Discount' />
    </div>
  )
}

export default Filter