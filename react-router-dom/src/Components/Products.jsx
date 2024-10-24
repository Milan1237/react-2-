import React from "react";
const Products = ({products , type}) => {
  return (
    <>
      {products.map((pro,index) => (
        <div className="product" key={index}>
        <p>
          {pro.brandName} || Price: {pro.price} || rating: {pro.rating}{" "}
        </p>
        <p>Discount: {pro.discountRate}</p>
        <button onClick={()=> cartDispatch({type: "ADD" , value: pro})}>Add to cart</button>
        {type == 'cart' &&
          <button onClick={()=> cartDispatch({type: "REMOVE" , value: pro.id})}>Remove From cart</button>
        }
        
      </div>
      ))}
    </>
  );
};

export default Products;
