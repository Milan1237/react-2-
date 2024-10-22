import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

//step 1 : create the context

const initialValue = {
  cart: [],
};

const Context = createContext(initialValue);

//step 2: create an provider component
export function ContextProvider({ children }) {
    const [{cart} , cartDispatch] = useReducer(reducerFunction , initialValue) ; 

  return <Context.Provider value={{cart , cartDispatch}}>{children}</Context.Provider>;
}

// step 3 : create an custom hook to access the global data anywhere 

export const useCart = ()=> useContext(Context);
