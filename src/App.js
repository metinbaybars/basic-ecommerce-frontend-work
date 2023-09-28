

import './App.css';
import ProductList from './components/Productlist';
import { useState } from 'react';
import Cart from './components/Cart';


const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  return (
    <div className="App">
      <title> My Shop  </title>
      <ProductList addToCart={addToCart} />
      <Cart cartItems = {cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;