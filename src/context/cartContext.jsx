import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(items, count) {
    let newCart = [...cart];
    let newItem = { ...items, count };
    newCart.push(newItem);
    setCart(newCart);
  }

  function getTotalItemCount() {
    let total = 0 ;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
