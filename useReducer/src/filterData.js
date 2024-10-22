export function filterData(state,{type , value}){
    switch (type) {
        case "BUDGET":
            return {...state , budget: value}; 
        case "RATING":
            return {...state , rating: value}; 
        case "DISCOUNT":
            return {...state , discount: value}; 
    
        default:
            break;
    }

    return state ; 
}