import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const brand = [
  { id: 1, name: "Puma", count: 1 },
  { id: 2, name: "Adidas", count: 1 },
  { id: 3, name: "Nike", count: 1 },
  { id: 4, name: "Asian", count: 1 },
  { id: 5, name: "HRX", count: 1 },
  { id: 6, name: "Campus", count: 1 },
  { id: 7, name: "Wow", count: 1 },
];

function App() {
  const [products, setProducts] = useState(brand);
  const [cart, setCart] = useState([]);
  function handleChange(event) {
    const value = event.target.value;
    const array =
      value != "" ? brand.filter((pro) => pro.name.includes(value)) : brand;
    setProducts(array);
  }
  function addTocart(id) {
    if (id) {
      let itemCard = products.find((value) => value.id == id) ;
    
      if (cart.some((element) => element.id == id)) {
        setCart(cart.map((value)=>{
           return value.id == id ? {...value, count: value.count + 1} : value ;  
        }))
      } else {
        setCart([...cart, itemCard]);
      }
    }
  }
  function handleReomve(id) {
    if (id) {
      setCart((old) => old.filter((value) => value.id != id));
    }
  }

  return (
    <>
      <input type="text" placeholder="Search Here" onKeyUp={handleChange} />
      <div onClick={(event) => addTocart(event.target.dataset.id)}>
        {products.map((pro) => (
          <p key={pro.id} data-id={pro.id}>
            {pro.name} <button data-id={pro.id}>Add to cart</button>
          </p>
        ))}
      </div>
      <div onClick={(event) => handleReomve(event.target.dataset.id)}>
        <h1>Cart</h1>
        {cart.map((pro, index) => (
          <p key={index} data-id={pro.id}>
            {pro.name} {pro.count > 0 && pro.count}
            <button data-id={pro.id}>Remove</button>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
