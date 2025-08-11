import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='inner-content'>

                <div className='left-side'>
                    <h2>Dê um novo estilo ao seu trabalho!</h2>
                    <p>
                        Transforme sua maneira de trabalhar com nossas soluções inovadoras.
                        Descubra como nossos produtos podem aumentar sua produtividade e conforto no dia a dia.
                    </p>

                    <Link to="/products" className='see-btn'><span>
                        Ver Produtos
                    </span>

                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>

                <div className='right-side'>
                    <img src="/images/header-image.png" alt="Produtos" />
                </div>

            </div>
        </header>
    );
}
