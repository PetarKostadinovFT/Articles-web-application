import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/components/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import { ArticleProvider } from "./context/ArticlesContext";

function App() {
  return (
    <Router>
      <ArticleProvider>
        <Header />
        <Routes>
          <Route path="/articles/page/:pageNumber" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </ArticleProvider>
    </Router>
  );
}

export default App;
