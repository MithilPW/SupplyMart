import React, { createContext, useState, useCallback } from 'react';

// Create the cart context
export const CartContext = createContext();

// Cart provider component - wraps the app and provides cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart or increase quantity if already in cart
  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // If product already in cart, increase quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  // Update quantity of a cart item
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  }, [removeFromCart]);

  // Calculate total price of cart
  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  // Get total number of items in cart
  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
