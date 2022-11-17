import React from "react";
import { useState } from "react";
import InputForm from "./InputForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from "../../services/firebase";
import "./UserForm.css"

export default function UserForm({ cart, getTotalPrice, clearCart }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    
    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Gracias por su compra.",
        text: `Precio: $${orderData.total}`,
        icon: "success",
        confirmButtonText: "Finalizar",
        footer: `ID de compra: ${respuesta} <br>Fecha de compra: <br>${orderData.date} `,
      }).then((result) => {
        navigate("/");
        clearCart();
      });
    });
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit} className="UserForm-Formulario">
          <InputForm
            value={userData.name}
            title="Nombre"
            name="name"
            required={true}
            onChange={onInputChange}
          />
          <InputForm
            value={userData.email}
            title="Email"
            name="email"
            required={true}
            onChange={onInputChange}
          />
          <InputForm
            value={userData.phone}
            title="Telefono"
            name="phone"
            onChange={onInputChange}
          />
          <button type="submit">Finalizar compra</button>
        </form>
      </div>
    </>
  );
}