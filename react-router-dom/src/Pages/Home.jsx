import React from "react";
import Products from "../Components/Products";
import { useValue } from "../Context/ContextProvider";
import PageLayout from "./PageLayout";
import IsAuth from "./IsAuth";

const Home = () => {
  const { products } = useValue();
  console.log(products);
  return (
    <>
      <IsAuth>
        <PageLayout>
          <h1>This is my homepage</h1>
          <div className="d-flex">
            <Products products={products} type={"Home"} />
          </div>
        </PageLayout>
      </IsAuth>
    </>
  );
};

export default Home;
