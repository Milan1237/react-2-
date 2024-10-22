import Product from './components/Product'
import { products } from '../public/Database/products'
import Cart from './components/Cart'
import './App.css'

function App() {

  return (
    <>
    <Cart />
    <h3>products</h3>
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
