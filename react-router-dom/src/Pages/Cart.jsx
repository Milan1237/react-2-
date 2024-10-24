import React from 'react'
import { useValue } from '../Context/ContextProvider'
import Products from '../Components/Products';
import PageLayout from './PageLayout';
import IsAuth from './IsAuth';

const Cart = () => {
    const {cart} = useValue();
  return (
    <>
    <IsAuth>
    <PageLayout>
        <h1>This is my cart page</h1>
        <div className="d-flex">
          <Products products={cart} type={"cart"} />
        </div>
      </PageLayout>
      </IsAuth>
    </>
  )
}

export default Cart