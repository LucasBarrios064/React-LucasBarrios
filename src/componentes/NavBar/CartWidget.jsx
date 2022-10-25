import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./NavBar.css";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  return (
    <Link to="/carrito">
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
          alt="logo-carrito"
          className="carrito"
        />
      </span>
      <span>{getTotalItemCount()}</span>
    </Link>
  );
}

export default CartWidget;
