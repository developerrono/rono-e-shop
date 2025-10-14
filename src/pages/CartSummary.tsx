import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '../pages/CartContext'; // Adjust path if needed

interface CartSummaryProps {
  // Optional flag to allow custom content (like a "Proceed to Checkout" button) in the footer
  children?: React.ReactNode; 
  title?: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ children, title = 'Order Summary' }) => {
  const { cartItems } = useCart();

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Simple shipping logic: Free if subtotal is over 1000, otherwise Ksh10
  const shipping = subtotal > 1000 ? 0 : (subtotal > 0 ? 10 : 0);
  const total = subtotal + shipping;
  const itemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-extrabold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        
        {/* Subtotal */}
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Subtotal ({itemsCount} {itemsCount === 1 ? 'item' : 'items'})</span>
          <span className="font-semibold text-foreground">Ksh{subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold text-foreground">
            {shipping === 0 ? 'FREE' : `Ksh${shipping.toFixed(2)}`}
          </span>
        </div>

        {/* Separator */}
        <div className="border-t border-border pt-4"></div>

        {/* Total */}
        <div className="flex justify-between text-2xl font-bold">
          <span>Order Total</span>
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Ksh{total.toFixed(2)}
          </span>
        </div>

        {/* Optional Children (e.g., Checkout Button) */}
        {children && (
          <div className="pt-4 border-t border-border">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CartSummary;