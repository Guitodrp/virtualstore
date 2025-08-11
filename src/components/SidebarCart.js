import { faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import SidebarProduct from "./SidebarProduct"

export default function SidebarCart({ showSideCart, setShowSideCart }) {
    return (
        <aside className={`sidebar-cart ${showSideCart && "show"}`}>
            <div className='top'>
                <h3>Seu carrinho</h3>
                <button onClick={() => setShowSideCart(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            <div className='sidebar-products'>
                <SidebarProduct />
                <SidebarProduct />
                <SidebarProduct />
            </div>

            <div className='total-container'>
                <b>Total: </b> 1000 R$
            </div>

            <Link to="/cart/checkout" className='btn-icon'>
                <span>Pagar Agora</span>
                <FontAwesomeIcon icon={faMoneyBill} />
            </Link>

            <i>Seu carrinho está vazio!</i>
        </aside>
    )
}

