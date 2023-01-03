import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/NavBar";
import ProductPage from "./pages/Products/Products";
// import SingleProduct from "./pages/SingleProduct/SingleProduct";
import "./App.scss";
import "./main.scss";
import CartProvider from "./context/CartContext";

function App(): JSX.Element {
  return (
    <CartProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          {/* <Route path="/:slug/product" element={<SingleProduct />} /> */}
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
