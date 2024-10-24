import React from "react";
import { useValue } from "../Context/ContextProvider";
const Products = ({ products, type }) => {
  const { dispatchValue } = useValue();
  return (
    <>
      {products.map((pro, index) => (
        <div className="product" key={index}>
          <p>
            {pro.brandName} || Price: {pro.price} || rating: {pro.rating}{" "}
          </p>
          <p>Discount: {pro.discountRate}</p>
          {type == "Home" && (
            <button onClick={() => dispatchValue({ type: "ADD", value: pro })}>
              Add to cart
            </button>
          )}
          {type == "cart" && (
            <button
              onClick={() => dispatchValue({ type: "REMOVE", value:pro })}
            >
              Remove From cart
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Products;
