import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatINR } from '../utils';

// Product card component - displays individual product with add to cart button
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    // Visual feedback - could be replaced with a toast notification
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-category">{product.category}</span>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* Price and Button */}
        <div className="product-footer">
          <span className="product-price">{formatINR(product.price)}</span>
          <button
            className="btn-add-to-cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
