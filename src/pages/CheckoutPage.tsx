// src/pages/Checkout.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- ADDED: Needed for navigation link when cart is empty
// Correct the useCart import to be named, assuming it's exported from CartContext
import { useCart } from './CartContext'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/card';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input'; // <-- ADDED: Needed for shipping details inputs
import Mpesa from './mpesa'; // <-- Corrected import path (assuming mpesa.tsx is in the same directory)
import Paypal from './paypal'; // <-- Corrected import path (assuming paypal.tsx is in the same directory)
import Navbar from '@/components/Navbar';
import { RadioGroup, RadioGroupItem } from '@/components/UI/radio-group'; // Corrected path to ui
import { Label } from '@/components/UI/label';
import { toast } from 'sonner';

// Ensure Mpesa.tsx and Paypal.tsx are placed in src/pages/ or adjust imports

const Checkout = () => {
  // Destructure the needed functions and data
  const { cartItems, removeItem } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<'mpesa' | 'paypal'>('mpesa');

  // Calculate totals (same logic as in Cart.tsx)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  const dummyOrderId = "ORD-" + Math.random().toString(36).substring(2, 9).toUpperCase(); // Replace with real ID

  const handlePaymentSuccess = () => {
      // **IMPORTANT**: Implement logic to clear the cart after payment
      // For demonstration, we'll clear all items and navigate home
      cartItems.forEach(item => removeItem(item.id));
      toast.success('Payment successful!', {
          description: `Thank you for your order (${dummyOrderId}). Your cart has been cleared.`,
          duration: 5000
      });
      // Optionally navigate to a confirmation page: navigate('/confirmation')
  };

  // Prevent accessing checkout if cart is empty
  if (cartItems.length === 0) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar cartItemsCount={0} />
            <div className="flex-1 flex items-center justify-center">
                <Card className="p-8 text-center">
                    <CardTitle className="mb-4">Cart is Empty</CardTitle>
                    <p className="mb-6">Please add items to your cart before proceeding to checkout.</p>
                    <Button asChild>
                        {/* Link is now imported and will work */}
                        <Link to="/">Go to Shopping</Link>
                    </Button>
                </Card>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={cartItems.length} /> 
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-foreground">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Shipping, Payment Method Selection, and Payment Component */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Shipping Information (Placeholder) */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Shipping Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Input is now imported and will work */}
                        <Input placeholder="Full Name" required />
                        <Input placeholder="Address Line 1" required />
                        <Input placeholder="City / Town" required />
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Phone Number" required />
                            <Input placeholder="Email Address" required />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 2. Payment Method Selection */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Select Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup 
                        defaultValue="mpesa" 
                        onValueChange={(value: 'mpesa' | 'paypal') => setSelectedMethod(value)} 
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                            <RadioGroupItem value="mpesa" id="mpesa" />
                            <Label htmlFor="mpesa" className="text-base font-medium">
                                M-Pesa (Kenya Mobile Money)
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="text-base font-medium">
                                PayPal (Secure Online Payment)
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            {/* 3. Payment Component RENDER */}
            {selectedMethod === 'mpesa' ? (
              <Mpesa 
                totalAmount={total} 
                orderId={dummyOrderId}
                onPaymentSuccess={handlePaymentSuccess} 
              />
            ) : (
              <Paypal 
                totalAmount={total} 
                orderId={dummyOrderId}
                onPaymentSuccess={handlePaymentSuccess} 
              />
            )}
          </div>

          {/* Column 3: Order Summary (Sticky) */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Display list of items here for a complete summary, or a count */}
                <h3 className="text-lg font-semibold border-b pb-2 border-border">Items ({cartItems.length})</h3>
                <div className="max-h-60 overflow-y-auto space-y-2">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-muted-foreground truncate">{item.name} x {item.quantity}</span>
                            <span className="font-medium">Ksh{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                
                <div className="space-y-2 py-4 border-y border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">Ksh{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Ksh{shipping.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold">
                  <span>Total Due</span>
                  <span className="text-primary text-2xl">
                    Ksh{total.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout