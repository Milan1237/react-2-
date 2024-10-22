
import { act, useReducer } from 'react'
import './App.css'

function App() {
  const [state , dispatch] = useReducer(reducerFunction , {name: '' , age: ''});
  function reducerFunction(state , action){
    const {type , value}= action ; 
    switch(type){
      case 'Name': 
        return {...state , name: value};
      case 'Age': 
        return {...state , age: value};
      case 'Increament':
        return {...state, age: state.age + 1}
      case 'Decreament':
        return {...state, age: state.age - 1}
    }
  

    return state ; 
  }

  return (
    <>
        <div className="container">
          <input type="text" placeholder='enter name' value={state.name} onChange={(event)=>dispatch({type: 'Name' , value: event.target.value})} />
          <input type="text" placeholder='enter age' value={state.age} onChange={(event)=>dispatch({type: 'Age' , value:event.target.value})}/>
        </div>
        <div className="display">
          <p>Your name is {state.name} </p>
          <p>your age is {state.age}</p>
          <button onClick={()=> dispatch({type: 'Increament'})}>Increase your age</button>
          <button onClick={()=> dispatch({type: 'Decreament'})}>Decrease your age</button>
        </div>
    </>
  )
}

export default App
