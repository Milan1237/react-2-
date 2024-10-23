import {
    act
} from "react";
import {
    products
} from "../../public/Database/products";
export function reducerFunction(state, action) {
    const {
        type,
        value
    } = action;
    switch (type) {
        case "ADD":
            return {
                ...state, cart: [...state.cart, value]
            };
        case "REMOVE":
            return {
                ...state, cart: state.cart.filter((pro) => pro.id !== value)
            };
        case "BUDGET": {
            const updatedFilterProduct = {
                ...state.filteredProduct,
                budget: value
            };
            const updatedState = {
                ...state,
                filteredProduct: updatedFilterProduct,
                products: filterData(updatedFilterProduct)
            };
            return updatedState;
        }
        case "RATING": {
            const updatedFilterProduct = {
                ...state.filteredProduct,
                rating: value
            };
            const updatedState = {
                ...state,
                filteredProduct: updatedFilterProduct,
                products: filterData(updatedFilterProduct)
            };
            return updatedState;
        }

        case "DISCOUNT": {
            const updatedFilterProduct = {
                ...state.filteredProduct,
                discount: value
            };
            const updatedState = {
                ...state,
                filteredProduct: updatedFilterProduct,
                products: filterData(updatedFilterProduct)
            };
            return updatedState;
        }
        default:
            break;
    }


    return state;
}

function filterData({
    budget,
    rating,
    discount
}) {
    const onBudgetChange = budget.length > 0 ? products.filter((pro) => pro.price <= Number(budget)) : products;
    const onRatingChange = rating.length > 0 ? onBudgetChange.filter((pro) => pro.rating >= Number(rating)) : onBudgetChange;
    const onDiscountChange = discount.length > 0 ? onRatingChange.filter((pro) => pro.discountRate >= Number(discount)) : onRatingChange;
    

    return onDiscountChange;
}