import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';
import ProductPage from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import './App.scss';
import './main.scss';
import CartProvider from './context/CartContext';

function App(): JSX.Element {
  return (
    <CartProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/:id" element={<SingleProduct />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
