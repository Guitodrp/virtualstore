
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Account from './components/pages/Account';

function App() {
  const [products, setProducts] = useState([]);
  const [showSideCart, setShowSideCart] = useState(false)
  const [selectedProducts, setselectedProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  const addProductCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);

    if (selectedProducts.includes(productToAdd)) return;

    setselectedProducts(selectedProducts.concat(productToAdd));
    setTotalCart(totalCart + productToAdd.price);

  };

  const removeProductCart = (id) => {
    const newsProducts = selectedProducts.filter(product => product.id !== id);
    setselectedProducts(newsProducts);
  };

  return (
    <Router>
      <div className="App">
        <Navbar setShowSideCart={setShowSideCart} selectedProducts={selectedProducts} />
        <main>
          <Routes>
            <Route path='/'
              element={
                <HomePage products={products} removeProductCart={removeProductCart} totalCart={totalCart} selectedProducts={selectedProducts} setShowSideCart={setShowSideCart} showSideCart={showSideCart} addProductCart={addProductCart} />
              } />
            <Route path='/products'
              element={
                <ProductsPage products={products} addProductCart={addProductCart} />
              } />
            <Route path='/about'
              element={
                <About />
              } />
            <Route path='/contact'
              element={
                <Contact />
              } />
            <Route path='/account'
              element={
                <Account />
              } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
