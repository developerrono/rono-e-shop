import { Link, useNavigate } from 'react-router-dom'; // <-- 1. Import useNavigate
// Import the custom hook
import { useCart } from '@/pages/CartContext'; // ADJUST PATH AS NEEDED

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

// Remove the CartItem interface here, it's defined in CartContext.tsx

const Cart = () => {
  const navigate = useNavigate(); // <-- 2. Initialize useNavigate
  
  // Use the hook to get all cart data and functions
  const { cartItems, updateQuantity, removeItem, cartCount } = useCart(); 

  // The rest of your logic remains the same, but now operates on the context state
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // 3. CHANGE: Navigate to the actual checkout route
    if (cartItems.length > 0) {
      navigate('/checkout'); 
    } else {
      toast.error('Your cart is empty!', { description: 'Please add items before checking out.' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Use cartCount from context for Navbar */}
      <Navbar cartItemsCount={cartItems.length} /> 
      
      {/* ... (rest of your component rendering) ... */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-foreground">Shopping Cart ({cartCount})</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">Your cart is empty!</h2>
            <Link to="/" className="text-primary hover:text-primary-glow font-semibold flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1 & 2: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4 flex items-center space-x-4">
                  {/* Item Image */}
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-md"
                      onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src='https://placehold.co/80x80/6366f1/white?text=Product';
                      }}
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold truncate">{item.name}</h3>
                    <p className="text-primary font-bold">Ksh{item.price.toFixed(2)}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 border rounded-lg p-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center font-medium">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Remove Button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-destructive hover:text-destructive/80"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </Card>
              ))}
              
              <Link to="/" className="text-primary hover:text-primary-glow font-semibold flex items-center mt-4">
                <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
              </Link>
            </div>

            {/* Column 3: Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 pb-4 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({cartCount} items)</span>
                      <span className="font-medium">Ksh{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping (Flat Rate)</span>
                      <span className="font-medium">Ksh{shipping.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      Ksh{total.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                    onClick={handleCheckout} // <-- Now navigates to /checkout
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-2">We Accept:</p>
                    <div className="flex gap-2">
                      <div className="px-3 py-2 bg-muted rounded text-xs font-medium">
                        M-Pesa
                      </div>
                      <div className="px-3 py-2 bg-muted rounded text-xs font-medium">
                        PayPal
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;