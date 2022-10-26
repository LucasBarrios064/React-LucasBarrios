import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function CartView() {
  const {
    cart,
    removeItem,
    getTotalSingleProduct,
    getTotalPrice,
  } = useContext(cartContext);

  if (getTotalPrice())
  return (
    <>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h4>{product.price}</h4>
          <h4>{getTotalSingleProduct(product.count, product.stock)}</h4>
          <h4>
            Precio Total de Productos: $
            {product.price *
              getTotalSingleProduct(product.count, product.stock)}
          </h4>
          <button
            onClick={() => {
              removeItem(product.id);
            }}
          >
            X
          </button>
        </div>
      ))}
      <h2>PRECIO TOTAL A PAGAR: $ {getTotalPrice()}</h2>
    </>
  );
  return(
    <>
      <h1>El carrito esta vacio.</h1>
      <Link to="/">Seguir Comprando</Link>
    </>
  )
}

export default CartView;
