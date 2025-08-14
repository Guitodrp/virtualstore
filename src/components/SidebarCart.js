import { faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import SidebarProduct from "./SidebarProduct"

export default function SidebarCart({ showSideCart, setShowSideCart, selectedProducts, totalCart, removeProductCart }) {
    return (
        <aside className={`sidebar-cart ${showSideCart && "show"}`}>
            <div className='top'>
                <h3>Seu carrinho</h3>
                <button onClick={() => setShowSideCart(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            <div className='sidebar-products'>
                {selectedProducts.map(product => (<SidebarProduct key={product.id} {...product} removeProductCart={removeProductCart} />))}
            </div>

            <div className='total-container'>
                <b>Total: </b>{totalCart} R$
            </div>

            <Link to="/cart/checkout" className='btn-icon'>
                <span>Pagar Agora</span>
                <FontAwesomeIcon icon={faMoneyBill} />
            </Link>

            {
                selectedProducts.length === 0 && <>
                    <i>Seu carrinho está vazio!</i>
                </>
            }

        </aside>
    )
}

