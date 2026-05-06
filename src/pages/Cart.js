import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';
import { formatINR } from '../utils';

// Cart page - displays all cart items and total
const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const cartTotal = getCartTotal();
  const tax = cartTotal * 0.1;
  const totalWithTax = cartTotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <Link to="/products" className="btn-continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="cart-content">
        {/* Cart Items */}
        <section className="cart-items-section">
          <div className="cart-items-header">
            <span className="item-count">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="cart-items-list">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Cart Summary */}
        <section className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{formatINR(cartTotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span className="shipping-free">FREE</span>
            </div>

            <div className="summary-row">
              <span>Tax:</span>
              <span>{formatINR(tax)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total:</span>
              <span>{formatINR(totalWithTax)}</span>
            </div>

            {/* Checkout Button */}
            <button className="btn-checkout">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <Link to="/products" className="btn-continue-shopping-secondary">
              Continue Shopping
            </Link>

            {/* Clear Cart */}
            <button
              className="btn-clear-cart"
              onClick={() => {
                if (window.confirm('Clear entire cart?')) {
                  clearCart();
                }
              }}
            >
              Clear Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
