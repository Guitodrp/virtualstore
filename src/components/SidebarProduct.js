import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SidebarProduct() {
    return (
        <div className='sidebar-product'>
            <div className='left-side'>
                <button className='btn-remove-product'>
                    <FontAwesomeIcon icon={faRemove} />
                </button>
                <div className='details'>
                    <h4>Dualsense ps5</h4>
                    <p>1200 R$</p>
                    <input type='number' min={1} max={100} />
                    <p className='price-sum'>
                        <b>Soma: </b> 1000R$
                    </p>
                </div>
            </div>

            <div className='right-side'>
                <img src='/images/products/product-6.png' alt='Dualsense'></img>
            </div>

        </div>
    )
}
