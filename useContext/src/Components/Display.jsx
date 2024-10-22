import React from 'react'
import { useCount } from '../Global/GlobalValue'
const Display = () => {
    const {count} = useCount();
  return (
    <p>{count}</p>
  )
}

export default Display