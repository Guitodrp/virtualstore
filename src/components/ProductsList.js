import React from 'react'
import { Product } from './Product'

export function ProductsList({
    products
}) {
    return (
        <div className='product-list'>
            {products.map((product) => <Product key={product.id} {...product} />)}
        </div>
    )
}
