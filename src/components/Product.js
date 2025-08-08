import React from 'react'
import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function Product({ id, image, name, rate, price }) {
    return (
        <div className='product'>
            <img alt={name} src={image}></img>
            <p className='name'>{name}</p>
            <p className='rate'> &#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className='price'>{price}<span>Mzn</span></p>

            <div className='buttons'>

                <Link to={`/products/${id}/checkout`} className='btn-icon'>
                    <span>Comprar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                </Link>

                <button className='btn-icon add-to-cart-btn'>
                    <span>Adicionar ao carrinho</span>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    )
}
