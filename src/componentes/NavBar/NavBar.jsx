import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" navPrincipal navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand NavBar-logo" to="/">
          <img src="https://m.media-amazon.com/images/I/61XYn+rnXRL.jpg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/category/Mangas">
                Mangas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/category/Vestimenta">
                Vestimenta
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/category/Figuras">
                Figuras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/category/Decoracion">
                Decoracion
              </Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
