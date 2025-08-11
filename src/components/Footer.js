import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='pager-inner-content content'>
                <div className='download-options'>
                    <p>Baixe o nosso app</p>
                    <p>Baixe nosso app para Android e IOS</p>
                    <div>
                        <img src="images/app-store.png" alt="App Store download" />
                        <img src="images/play-store.png" alt="Play Store download" />
                    </div>
                </div>

                <div className='logo-footer'>
                    <h1 className="logo">Techno<span>Store</span></h1>
                    <p>Nosso objetivo é trazer a melhor experiência pra você.</p>
                </div>

                <div className='links'>
                    <h3>Links úteis</h3>
                    <ul>
                        <li><Link to="">Cupons</Link></li>
                        <li><Link to="">Blog posts</Link></li>
                        <li><Link to="">Políticas</Link></li>
                        <li><Link to="">Torne-se</Link></li>
                    </ul>
                </div>
            </div>
            <div className='page-inner'>
                <hr />
                <p className='copyright'>© Copyright 2030 - Todos os Direitos Reservados</p>
            </div>

        </footer>
    )
}
