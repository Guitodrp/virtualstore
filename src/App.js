
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
        </main>
      </div>
    </Router>
  );
}

export default App;
