import React from 'react'
import "./ItemListContainer.css"

function ItemListContaner(props) {
    return (
        <div className='tituloBienvenida'>
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContaner