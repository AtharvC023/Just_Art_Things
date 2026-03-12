"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { cartService, Cart, CartItem } from '@/lib/firebase/cartService';
import { toast } from 'sonner';

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  addToCart: (productId: string, name: string, image: string, price: number, category: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getItemCount: () => number;
  getTotalAmount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setCart(null);
      setLoading(false);
      return;
    }

    const unsubscribe = cartService.subscribeToCart(user.uid, (cartData) => {
      setCart(cartData);
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  const addToCart = async (productId: string, name: string, image: string, price: number, category: string) => {
    if (!user) {
      toast.error('Please sign in to add items to cart');
      return;
    }

    try {
      await cartService.addToCart(user.uid, {
        productId,
        name,
        image,
        price,
        quantity: 1,
        category
      });
      toast.success('Added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add to cart');
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!user) return;

    try {
      await cartService.updateQuantity(user.uid, itemId, quantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!user) return;

    try {
      await cartService.removeFromCart(user.uid, itemId);
      toast.success('Removed from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to remove from cart');
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      await cartService.clearCart(user.uid);
      toast.success('Cart cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
    }
  };

  const getItemCount = () => {
    return cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  };

  const getTotalAmount = () => {
    return cart?.totalAmount || 0;
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getItemCount,
      getTotalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}