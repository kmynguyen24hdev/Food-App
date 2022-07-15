import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/cartProvider";


function App() {
  const [cartIdShown, setCartIsShow] = useState(false);
  
  const handleShowCart = () => {
    setCartIsShow(true);
  }

  const handleHideCart = () => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIdShown && <Cart onClose={handleHideCart}/>}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
