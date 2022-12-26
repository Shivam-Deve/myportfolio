import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/into/Intro';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
