import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.scss";

function App(): JSX.Element {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
