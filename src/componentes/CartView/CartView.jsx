import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import UserForm from "../UserForm/UserForm";
import "./CartView.css";

function CartView() {
  const { cart, removeItem, getTotalSingleProduct, getTotalPrice, clearCart } =
    useContext(cartContext);
  if (getTotalPrice())
    return (
      <>
        {cart.map((product) => (
          <div key={product.id} className="CartView-Box">
            <h2>{product.title}</h2>
            <div className="CartView-Cart">
              <div className="CartView-Img-Box">
                <img
                  src={product.img}
                  alt={product.title}
                  className="CartView-Img"
                />
              </div>
              <div className="CartView-Price-Box">
                <h4>
                  {getTotalSingleProduct(product.count, product.stock)} X $
                  {product.price}
                </h4>
                <h4>
                  Precio Total de Productos: $
                  {product.price *
                    getTotalSingleProduct(product.count, product.stock)}
                </h4>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeItem(product.id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div>
          <button
            onClick={() => {
              clearCart();
            }}
            className="CartView-Button"
          >
            Vaciar Carrito
          </button>
          <UserForm
            cart={cart}
            getTotalPrice={getTotalPrice}
            clearCart={clearCart}
          ></UserForm>
          <h2>PRECIO TOTAL A PAGAR: $ {getTotalPrice()}</h2>
        </div>
      </>
    );
  return (
    <>
      <h1>El carrito esta vacio.</h1>
      <Link to="/">Seguir Comprando</Link>
    </>
  );
}

export default CartView;
