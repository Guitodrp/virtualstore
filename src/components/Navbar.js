import React, { useState } from 'react'
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function Navbar({ setShowSideCart, selectedProducts }) {

    const [show, setShow] = useState(false);

    return (
        <div className="navbar">
            <div className='inner-content'>
                <h1 className="logo">Techno<span>Store</span></h1>
                <nav className={`${show && "show"}`}>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li><Link to="/account">Minha Conta</Link></li>
                    </ul>
                </nav>
                <div className='navbar-icon-container'>
                    <div className="search-input-container">
                        <input type="search" placeholder="Pesquise..." />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <button className='cart-button' onClick={() => setShowSideCart(true)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className='cart-count'>{selectedProducts.length}</div>
                    </button>
                    <button className='menu-button' onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
    )
}
