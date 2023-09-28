import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/components/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
