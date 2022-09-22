import React from 'react'
import "./NavBar.css"

function CartWidget() {
    return (
        <li class="nav-item">
            <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="logo-carrito" className='carrito' />
            </a>
        </li>
    )
}

export default CartWidget