import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "../src/components/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";
import Protected from "./helpersComponent/Protected";

function App() {
  return (
    <Router>
      <Header />
      <Toaster
        data-testid="toaster-mock"
        position="bottom-right"
        toastOptions={{ duration: 3500 }}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/articles/page/1" />} />
        <Route path="/articles/page/:pageNumber" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/login"
          element={
            <Protected>
              <Login />
            </Protected>
          }
        />
        <Route
          path="/register"
          element={
            <Protected>
              <Register />
            </Protected>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
