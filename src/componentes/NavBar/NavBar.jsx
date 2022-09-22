import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"

function NavBar() {
    return (
    <nav class=" navPrincipal navbar navbar-expand-lg ">
        <div class="container-fluid">

            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Mangas</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Vestimenta</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Figuras</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Decoracion</a>
                </li>
                <CartWidget/>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </div>
    </nav>
    )
}

export default NavBar