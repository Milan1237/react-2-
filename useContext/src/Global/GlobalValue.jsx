import { useState , useContext , createContext } from "react";

//step 1 create the context

const context = createContext();

//step 2 : create a provider component
export function Global({children}){
    const [count , setCount] = useState(0) ; 

    return(
        <context.Provider value={{count , setCount}}>
            {children}
        </context.Provider>
    )
}

//step 3: create the hoook which will provide the exact value

export const useCount =()=> useContext(context);