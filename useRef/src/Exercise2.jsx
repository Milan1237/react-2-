import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Exercise2 = () => {
    const [count , setCount] = useState(0);
    const ref = useRef(null);
    function handleClick(){
        ref.current.focus();
        console.log(ref.current.value)
    }
    useEffect(()=>{
        console.log('rendering');
    })
  return (
    <>
    <p>{count}</p>
    <button onClick={()=> setCount(count + 1)}>++</button>
    <input ref={ref} type="text" onChange={handleClick}/>
    <button onClick={handleClick}>AddButon</button>
    </>
  )
}

export default Exercise2 ; 