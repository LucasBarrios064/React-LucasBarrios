import React, { useContext, useState } from "react";
import ItemCount from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { cartContext } from "../../context/cartContext";

function ItemDetail(props) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    addToCart(props, count);
    setCount(count);
  }

  return (
    <>
      <h1 className="itemDetail-title">{props.title}</h1>
      <div className="itemDetail-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="itemDetail-text">
        <h3>EL PRECIO DE ESTE PRDUCTO ES: $ {props.price}</h3>
        {count === 0 ? (
          <ItemCount
            onAddToCart={onAddToCart}
            stock={props.stock}
            initial={1}
            text="Añadir al carrito"
          />
        ) : (
          <Link to="/carrito"> Ver Carrito </Link>
        )}
        <h4>Detalles: {props.detail}</h4>
      </div>
    </>
  );
}

export default ItemDetail;
