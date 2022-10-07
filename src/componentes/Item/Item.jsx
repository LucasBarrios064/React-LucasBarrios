import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="item-textBox">
        <h2>{props.title}</h2>
        <h4>$ {props.price}</h4>
      </div>
      <Link to={`/producto/${props.id}`}>
        <button className="boton">Ver Mas</button>
      </Link>
      
    </div>
  );
}

export default Item;
