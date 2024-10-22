import { act } from "react";

export function reducerFunction(state , action){
    const {type , value} = action ; 
    switch (type) {
        case "ADD":
            return {...state , cart: [...state.cart , value ]};
        case "REMOVE":
            return {...state , cart: state.cart.filter((pro)=> pro.id !== value)};
    
        default:
            break;
    }


    return state ;
}