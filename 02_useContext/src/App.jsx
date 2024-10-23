import Product from './components/Product'
import { products } from '../public/Database/products'
import Cart from './components/Cart'
import './App.css'
import { useCart } from './Global/ContextProvider'
import Filter from './components/Filter'

function App() {
  const {products} = useCart();
  return (
    <>
    <Cart />
    <h3>products</h3>
      <Filter />
      <div className="products d-flex">
        {
          products.map(product=>
            <Product  product={product} key={product.id}/>
          )
        }

      </div>
    </>
  )
}

export default App
