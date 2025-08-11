
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'

function App() {
  const [products, setProducts] = useState([]);
  const [showSideCart, setShowSideCart] = useState(false)

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar setShowSideCart={setShowSideCart} />
        <main>
          <Routes>
            <Route path='/' element={
              <HomePage products={products} setShowSideCart={setShowSideCart} showSideCart={showSideCart} />
            } />
            <Route path='/products' element={
              <ProductsPage products={products} />
            } />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
