import "./App.css";
import Login from "./Components/Login";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
