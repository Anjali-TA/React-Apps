import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from './components/Cart/Cart';
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import CartProvider from "./store/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
