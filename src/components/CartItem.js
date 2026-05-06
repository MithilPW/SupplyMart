import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatINR } from '../utils';

// Cart item component - displays item in cart with quantity controls
const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      {/* Product Image */}
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">
          {formatINR(item.price)} each
        </p>
      </div>

      {/* Quantity Control */}
      <div className="cart-item-quantity">
        <label htmlFor={`qty-${item.id}`}>Qty:</label>
        <select
          id={`qty-${item.id}`}
          value={item.quantity}
          onChange={handleQuantityChange}
          className="quantity-select"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Item Total */}
      <div className="cart-item-total">
        <span className="total-label">Total:</span>
        <span className="total-price">{formatINR(itemTotal)}</span>
      </div>

      {/* Remove Button */}
      <button
        className="btn-remove"
        onClick={handleRemove}
        title="Remove from cart"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
