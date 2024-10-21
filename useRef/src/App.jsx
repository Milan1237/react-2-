import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

export default App
