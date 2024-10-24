import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useValue } from '../Context/ContextProvider';
import Login from '../Components/Login';

const IsAuth = ({children}) => {
    const {isLogin} = useValue();
    const navigate = useNavigate();
  return (
   <>
   {isLogin ? children : <Login /> }
   </>
  )
}

export default IsAuth