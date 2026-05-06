import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// Products page with filtering capabilities
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">All Products</h1>
        <p className="page-subtitle">
          Browse our complete selection of premium supplements
        </p>
      </div>

      {/* Filter Section */}
      <section className="filter-section">
        <h3 className="filter-title">Filter by Category</h3>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        {filteredProducts.length > 0 ? (
          <>
            <p className="product-count">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
