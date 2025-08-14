import React from 'react'
import { faCartShopping, faMoneyBill, faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function Product({ id, image, name, rating, price, addProductCart }) {
    const renderStars = () => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className="star full-star" />)
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="star half-star" />)
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="star empty-star" />)
        }

        return stars
    }

    //Formata preço
    const formatPrice = (value) =>
        Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <div className='product'>
            <img alt={name} src={image} />
            <p className='name'>{name}</p>
            <div className='rate'>
                {renderStars()}
            </div>
            <p className='price'>{formatPrice(price)}<span> R$</span></p>
            <div className='buttons'>
                <Link to={`/products/${id}/checkout`} className='btn-icon'>
                    <span>Comprar Agora</span>
                    <FontAwesomeIcon icon={faMoneyBill} />
                </Link>

                <button onClick={() => addProductCart(id)} className='btn-icon add-to-cart-btn'>
                    <span>Adicionar ao carrinho</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </div>
    )
}
