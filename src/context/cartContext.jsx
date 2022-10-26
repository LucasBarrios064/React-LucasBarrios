import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(items, count) {
    let newCart;
    let productCart = cart.find((productCart) => productCart.id === items.id);
    if (productCart) {
      productCart.count += count;
      newCart = [...cart];
    } else {
      productCart = { ...items, count: count };
      newCart = [...cart, productCart];
    }
    setCart(newCart);
  }

  function removeItem(idRemove) {
    let newCart = cart.filter ((itemInCart) => itemInCart.id !== idRemove) 
    setCart(newCart)
    ;
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      if(itemInCart.count >= itemInCart.stock){
        total = total + itemInCart.stock
      }else{
        total = total + itemInCart.count;
      }
    });
    return total;
  }

  function getTotalSingleProduct(count , stock){
    let totalProduct = 0;
    if (count >= stock){
      totalProduct = totalProduct + stock
    }else{
      totalProduct = totalProduct + count
    }
    return totalProduct;
  }

  function getTotalPrice(){
    let total = 0;
    cart.map((product)=>{
      total = total + (getTotalSingleProduct(product.count, product.stock) * product.price)
      return total;
    })
    return total;
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem , getTotalSingleProduct, getTotalPrice}}>
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
