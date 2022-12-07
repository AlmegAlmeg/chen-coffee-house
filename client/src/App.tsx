import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/components/NavBar";
import "./App.scss";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
