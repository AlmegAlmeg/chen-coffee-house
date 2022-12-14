import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import ProductPage from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import "./App.scss";
import "./main.scss";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/single" element={<SingleProduct />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
