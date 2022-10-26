import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./NavBar.css";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);
  return (
    <Link className="CartWidget-link" to="/carrito">
      <span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
          alt="logo-carrito"
          className="carrito"
        />
      </span>
      <span className="CartWidget-number">
        {getTotalItemCount() > 0 && getTotalItemCount()}
      </span>
    </Link>
  );
}

export default CartWidget;
