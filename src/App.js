import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className='inner-content'>

            <h1 className="logo">Virtual <span>Store</span></h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className='navbar-icon-container'>
              <div className="search-input-container">
                <input type="search" placeholder="Pesquise..." />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <button className='cart-button'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className='cart-count'>15</div>
              </button>
              <button className='menu-button'>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
