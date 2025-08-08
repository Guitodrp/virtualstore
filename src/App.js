
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  console.log('products', products)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className='page-inner-content'>

            <div className='section-title'>
              <h3>
                Produtos Selecionados
              </h3>
              <div className='underline'>

              </div>
            </div>

            <div className='main-content'>
              <ProductsList products={products} />
            </div>

          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
