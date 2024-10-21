useRef: useRef hooks return an object with current value. It does not trigger re-rendering method. It is used store value between re-render. 
//in the code {const ref = useRef()} : do not use ref.current while rendering .

First useCase: 
1> suppose you need a value or change a value when a button is clicked. But in the same time you do not want to re-render the component when that value is changed. Using a simple variable with let and const won't serve the purpose because the value of the variable declared with let, const or var will be changed on each re-render. So , in order to preserve the value we use useRef;
```javascript
function App() {
  const [count , setCount] = useState(0);
  const timerRef = useRef(); //instead of using useRef if we have used normal variable then everytime the app is re-rendered the value of the normal variable is also re-rendered
  function startTimer(){
    timerRef.current = setInterval(()=>{
      setCount(count => count + 1) ; 
    } , 100) ; 

  }
  function stopTimer(){
    clearInterval(timerRef.current);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </>
  )
}
```

// we can also some manupulate dom without re-rendering using useRef
```javascript
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
```