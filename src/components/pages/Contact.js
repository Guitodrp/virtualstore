import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className='page-inner-content'>

            <div className='section-title'>
                <h3>
                    Contatos
                </h3>
                <div className='underline'></div>

                <div className='painel-contact'>

                    <div className='item-contact'>
                        <img src='' alt='' />
                        <Link to="">Instagram</Link>
                    </div>

                    <div className='item-contact'>
                        <img src='' alt='' />
                        <Link to="">Whatsapp</Link>
                    </div>

                    <div className='item-contact'>
                        <img src='' alt='' />
                        <Link to="">E-mail</Link>
                    </div>

                    <div className='item-contact'>
                        <img src='' alt='' />
                        <Link to="">Telefones</Link>
                    </div>


                </div>
            </div>
        </div>

    )
}
