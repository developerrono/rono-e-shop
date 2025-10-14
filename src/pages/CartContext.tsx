// src/context/CartContext.tsx (Create this file)

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

// 1. Define the interfaces
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  // Add other necessary product details (e.g., color, size)
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  cartCount: number;
}

// Dummy initial context value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper functions for Local Storage
const loadCartFromStorage = (): CartItem[] => {
  try {
    const serializedCart = localStorage.getItem('shoppingCart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error('Could not load cart from local storage', error);
    return [];
  }
};

const saveCartToStorage = (cart: CartItem[]) => {
  try {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  } catch (error) {
    console.error('Could not save cart to local storage', error);
  }
};

// 2. Create the Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load initial state from Local Storage
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCartFromStorage());

  // Save cart to Local Storage whenever cartItems changes
  useEffect(() => {
    saveCartToStorage(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += quantity;
        toast.success(`Updated ${product.name} quantity in cart.`, { description: `New quantity: ${newItems[existingItemIndex].quantity}` });
        return newItems;
      } else {
        // Item is new, add it
        const newItem: CartItem = { ...product, quantity };
        toast.success(`${product.name} added to cart!`);
        return [...currentItems, newItem];
      }
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.error('Item removed from cart');
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    cartCount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};