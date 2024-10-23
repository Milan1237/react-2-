import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";
import { products } from "../../public/Database/products";

//step 1 : create the context

const initialValue = {
  cart: [],
  filteredProduct: {
    budget: '' , 
    rating: '', 
    discount: ''
  },
  products: products 
}
const Context = createContext(initialValue);

//step 2: create an provider component
export function ContextProvider({ children }) {
    const [{cart , filteredProduct , products } , cartDispatch] = useReducer(reducerFunction , initialValue) ; 
  return <Context.Provider value={{cart , cartDispatch , filteredProduct , products}}>{children}</Context.Provider>;
}

// step 3 : create an custom hook to access the global data anywhere 

export const useCart = ()=> useContext(Context);
