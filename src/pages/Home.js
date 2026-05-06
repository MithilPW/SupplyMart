import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// Home page with hero section and "Shop by Goal" categories
const Home = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Filter products by selected goal
  const displayedProducts = selectedGoal
    ? products.filter(p => p.category === selectedGoal).slice(0, 3)
    : products.slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Build Your Fitness Goals</h1>
          <p className="hero-subtitle">
            Premium supplements for muscle growth, strength, and optimal health
          </p>
          <Link to="/products" className="btn-hero">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Shop by Goal Section */}
      <section className="shop-by-goal">
        <h2 className="section-title">Shop by Goal</h2>
        <div className="goal-buttons">
          <button
            className={`goal-btn ${selectedGoal === null ? 'active' : ''}`}
            onClick={() => setSelectedGoal(null)}
          >
            All Products
          </button>
          <button
            className={`goal-btn ${selectedGoal === 'Muscle Gain' ? 'active' : ''}`}
            onClick={() => setSelectedGoal('Muscle Gain')}
          >
            💪 Muscle Gain
          </button>
          <button
            className={`goal-btn ${selectedGoal === 'Strength' ? 'active' : ''}`}
            onClick={() => setSelectedGoal('Strength')}
          >
            ⚡ Strength
          </button>
          <button
            className={`goal-btn ${selectedGoal === 'Health' ? 'active' : ''}`}
            onClick={() => setSelectedGoal('Health')}
          >
            ❤️ Health
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">
          {selectedGoal ? `${selectedGoal} Products` : 'Featured Products'}
        </h2>
        <div className="products-grid">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Link to all products */}
        {!selectedGoal && (
          <div className="view-all-container">
            <Link to="/products" className="btn-view-all">
              View All Products →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
