export function reducerFunction(state, {
    type,
    value
}) {
    switch (type) {
        case "ADD":
            if (!state.cart.includes(value)) {
                return {
                    ...state,
                    cart: [...state.cart, value]
                };
            }
            break;
        case "REMOVE":
            const filteredArray = state.cart.filter(({id})=> id != value.id ) ; 
            return {...state , cart: filteredArray }
        
    }

    return state;
}