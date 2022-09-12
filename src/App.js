import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/into/Intro';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
