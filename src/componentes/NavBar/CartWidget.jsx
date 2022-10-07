import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function CartWidget() {
    return (
            <Link to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="logo-carrito" className='carrito' />
            </Link>
    )
}

export default CartWidget