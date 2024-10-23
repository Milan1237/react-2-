import React, { useReducer } from "react";
import { products } from "./Database/products";
import { filterData } from "./filterData.js";

const Ecom = () => {
  const [{ budget, discount, rating }, dispatchFilter] = useReducer(
    filterData,
    { budget: "", discount: "", rating: "" }
  );

  let onBudgetChange =
    budget.length > 0
      ? products.filter(({ price }) => price <= budget)
      : products;
  let onDiscountChange =
    discount.length > 0
      ? onBudgetChange.filter(({ discountRate }) => discount < discountRate)
      : onBudgetChange;
  let onRatingChange =
    rating.length > 0
      ? onDiscountChange.filter(
          ({ rating: prorating }) => Number(rating) < Number(prorating)
        )
      : onDiscountChange;

  return (
    <>
      <div className="filterContainer">
        <input
          type="text"
          value={budget}
          onChange={(event) =>
            dispatchFilter({ type: "BUDGET", value: event.target.value })
          }
          placeholder="Enter your budget"
        />
        <input
          type="text"
          value={discount}
          onChange={(event) =>
            dispatchFilter({ type: "DISCOUNT", value: event.target.value })
          }
          placeholder="Enter discount"
        />
        <input
          type="text"
          value={rating}
          onChange={(event) =>
            dispatchFilter({ type: "RATING", value: event.target.value })
          }
          placeholder="Enter your rating"
        />
      </div>
      <div className="products d-flex">
        {onRatingChange.map((pro) => (
          <div className="product">
            <p>
              {pro.brandName} || Price: {pro.price} || rating: {pro.rating}{" "}
            </p>
            <p>Discount: {pro.discountRate}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ecom;
