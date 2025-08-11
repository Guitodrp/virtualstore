import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function ExclusiveSection() {
    return (
        <div className='exclusive-section'>
            <div className='page-inner-content'>
                <div className='content'>
                    <div className='left-side'>
                        <h2>Smart Band 4</h2>
                        <p>
                            A Mi Band 4 bateu a marca de 1 milhão de pulseiras comercializadas apenas oito dias após o lançamento. Sucessor da Mi Band 3, o wearable da Xiaomi chama a atenção por ser a primeira da linha a contar com tela colorida. O dispositivo, porém, ainda não possui previsão de data e preço de lançamento no Brasil, sendo uma opção para viajantes com passagem comprada para o exterior
                        </p>
                        <Link to="/products" className='see-btn'><span>
                            Ver Produtos
                        </span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                    <div className='right-side'>
                        <img src="/images/exclusive.png" alt="Smart Band 4" />
                    </div>
                </div>

            </div>

        </div>
    )
}
