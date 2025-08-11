import React from 'react'
import ProductsList from '../ProductsList'

export default function ProductsPage({ products }) {
    return (
        <div className='page-inner-content'>

            <div className='section-title'>
                <h3>
                    Nossos Produtos
                </h3>
                <div className='underline'>

                </div>
            </div>

            <div className='main-content'>
                <ProductsList products={products} />
            </div>
        </div>
    )
}
