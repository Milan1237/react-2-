import { useContext , createContext , useReducer } from "react";
import { products } from "../../public/Database/products";
import { reducerFunction } from "./reducerFunction";

//step 1 create the context with initial value 
const initialValue = {
    cart: [] , 
    products: products
}

const Context = createContext(initialValue);

//step 2 : create the context provider component

export function ContextComponent({children}){
    const [{cart , products} , dispatchValue] = useReducer(reducerFunction , initialValue );
    return (
        <>
        <Context.Provider value={{cart , products , dispatchValue}}>
            {children}
        </Context.Provider>
        </>
    )
}

// step 3 create an custom hook
export const useValue = ()=> useContext(Context);
