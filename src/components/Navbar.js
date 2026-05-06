import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Navigation bar component with logo and cart count
const Navbar = ({ theme, onToggleTheme }) => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💪</span>
          SupplyMart
        </Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link nav-cart">
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
