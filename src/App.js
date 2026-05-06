import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";

// Main app component with routing and cart state management
function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <CartProvider>
      <Router>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
