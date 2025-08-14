import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function SidebarProduct({ id, image, name, price, rate, removeProductCart }) {

    const [quantidade, setQuantidade] = useState(1);
    const [precoSoma, setPrecoSoma] = useState(price);

    const changePriceSum = () => {


    }

    return (
        <div className='sidebar-product'>
            <div className='left-side'>
                <button className='btn-remove-product' onClick={() => removeProductCart(id)}>
                    <FontAwesomeIcon icon={faRemove} />
                </button>
                <div className='details'>
                    <h4>{name}</h4>
                    <p>{price} R$</p>
                    <input type='number' min={1} max={100} value={quantidade} onChange={e => {
                        setQuantidade(e.target.value)
                        setPrecoSoma(price * e.target.value)
                    }} />
                    {
                        precoSoma > price &&
                        <>
                            <p className='price-sum'>
                                <b>Soma: </b> {precoSoma}$
                            </p>
                        </>
                    }
                </div>
            </div>

            <div className='right-side'>
                <img src={image} alt={name}></img>
            </div>

        </div >
    )
}
