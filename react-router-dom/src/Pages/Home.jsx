import React from 'react'
import Products from '../Components/Products'
import { useValue } from '../Context/ContextProvider'

const Home = () => {
    const {products} = useValue();
    console.log(products)
  return (
    <>
        <h1>This is my homepage</h1>
        <div className='d-flex'>
        <Products products={products} type={'Home'}/>
        </div>
    </>
  )
}

export default Home