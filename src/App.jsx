import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/into/Intro';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import { BrowserRouter } from 'react-router-dom'
import Toggle from './components/toggle/Toggle';
import useThemeContext from './context/ThemeContext';
function App() {
  const { dark } = useThemeContext();
  return (
    <div className="App" style={{ backgroundColor: dark ? "#222" : "white", color: dark ? "white" : "black" }}>
      <BrowserRouter>
        <Navbar />
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
