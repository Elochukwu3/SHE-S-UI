import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import WomenPage from "./components/WomenPage";
import Accessories from "./components/Accessories ";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="women" element={<WomenPage />} />
        <Route path="accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
}

export default App;
