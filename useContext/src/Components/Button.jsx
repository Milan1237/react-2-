import React from 'react'
import { useCount } from '../Global/GlobalValue'
const Button = () => {
    const {setCount} = useCount();
  return (
    <button onClick={()=> setCount((value)=> value+1)}>Click</button>
  )
}

export default Button