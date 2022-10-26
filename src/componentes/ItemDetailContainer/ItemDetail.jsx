import React, { useContext, useState } from "react";
import ItemCount from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { cartContext } from "../../context/cartContext";
import LoaderDetail from "../Loader/LoaderDetail";

function ItemDetail(product) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    addToCart(product, count);
    setCount(count);
  }

  if (product.img)
    return (
      <>
        <h1 className="itemDetail-title">{product.title}</h1>
        <div className="itemDetail-img">
          <img src={product.img} alt={product.title}></img>
        </div>
        <div className="itemDetail-text">
          <h3>EL PRECIO DE ESTE PRDUCTO ES: $ {product.price}</h3>
          {count === 0 ? (
            <ItemCount
              onAddToCart={onAddToCart}
              stock={product.stock}
              initial={1}
              text="Añadir al carrito"
            />
          ) : (
            <Link className="ItemDetail-carritoLink" to="/carrito">
              {" "}
              Ver Carrito{" "}
            </Link>
          )}
          <h4>Detalles: {product.detail}</h4>
        </div>
      </>
    );

  return (
    <>
      <LoaderDetail />
    </>
  );
}

export default ItemDetail;
