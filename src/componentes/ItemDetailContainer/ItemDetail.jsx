import React from "react";
import ItemCount from "../ItemCounter/ItemCounter";
import "./ItemDetail.css"

function ItemDetail(props) {
  return (
    <>
      <h1 className="itemDetail-title">{props.title}</h1>
      <div className="itemDetail-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="itemDetail-text">
        <h3>EL PRECIO DE ESTE PRDUCTO ES: $ {props.price}</h3>
        <ItemCount stock={props.stock} initial={1} text="Añadir al carrito" />
        <h4>Detalles: {props.detail}</h4>
      </div>
    </>
  );
}

export default ItemDetail;
