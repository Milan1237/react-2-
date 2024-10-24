import React from 'react'
import { useValue } from '../Context/ContextProvider'
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const {setLogin , isLogin} = useValue();
 const navigate = useNavigate();
  return (
    <>
    <input type="text" maxLength={10} />
    <button onClick={()=> {setLogin(!isLogin); navigate('/')}}>{isLogin ? "LogOut" : "Login" }</button>
    </>
  )
}

export default Login