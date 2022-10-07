import React, { useState } from "react";
import "./ItemCounter.css";

export default function ItemCount({ stock, initial, text }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="itemCounter-box">
      <h4 className="itemCounter-title">Comprar:</h4>
        <button onClick={handleSubstract}>-</button>
        <strong className="itemCounter-number">{count}</strong>
        <button onClick={handleAdd}>+</button>
      <button className="itemCounter-buttonAdd">{text}</button>
    </div>
  );
}
