import React, { useState, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar'; // FIX: Reverted to alias path, which is standard across other files (e.g., index.tsx, Cart.tsx)
import { Button } from '@/components/UI/button';
import { Card, CardContent } from '@/components/UI/card';
import { Star, Truck, ShieldCheck, Plus, Minus } from 'lucide-react';
import { useCart } from './CartContext'; // FIX: Corrected to the simple relative path for a sibling file
import { toast } from 'sonner';

// --- MOCK DATA AND TYPES (Should be imported from '@/lib/products.ts' in a real app) ---

// Define the core product interface used across the app
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
}

// Mock ALL_PRODUCTS data for the component to be self-contained and runnable
const ALL_PRODUCTS: Product[] = [
    {
      id: "bot-001",
      name: "Quantum Algo Trader",
      price: 299.99,
      image: "https://placehold.co/400x400/1e293b/ffffff?text=Trading+Bot",
      category: "Trading Bots",
      description: "A high-frequency trading bot powered by advanced machine learning models for optimal market entry and exit. Requires minimal configuration.",
      stock: 50,
      rating: 4.8,
      reviews: 124
    },
    {
      id: "perfume-005",
      name: "Midnight Scent",
      price: 65.00,
      image: "https://placehold.co/400x400/505050/ffffff?text=Midnight+Perfume",
      category: "Perfumes",
      description: "An elegant and mysterious blend of dark amber, vanilla, and night-blooming jasmine, perfect for evening wear.",
      stock: 300,
      rating: 4.2,
      reviews: 88
    },
    // Add more mock products if needed for testing, but these two cover the logic
];

// --- END MOCK DATA ---


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const { cartItems, addToCart } = useCart(); // Get cart functions and state
  const [quantity, setQuantity] = useState(1);

  // Find the product using the ID from the URL
  const product = useMemo(() => {
    return ALL_PRODUCTS.find(p => p.id === id);
  }, [id]);

  // Handle case where product is not found
  if (!product) {
    // Navigate to a 404 page or index if the product ID is invalid
    return <Navigate to="/404" replace />;
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => {
      const newQty = prev + delta;
      // Prevent quantity from going below 1 or exceeding stock
      if (newQty < 1) return 1;
      if (newQty > product.stock) {
        toast.warning(`Maximum stock is ${product.stock}.`);
        return product.stock;
      }
      return newQty;
    });
  };

  const handleAddToCart = () => {
    // The product object structure is compatible with the CartItem interface (which extends Product)
    addToCart(product, quantity);
  };

  const currentCartCount = cartItems.reduce((acc, item) => item.id === product.id ? acc + item.quantity : acc, 0);
  const maxPurchaseLimit = product.stock - currentCartCount;

  return (
    <div className="min-h-screen bg-background">
      {/* Assuming Navbar automatically gets cart count from context if props are missing, 
          but best practice is to pass it if available. */}
      <Navbar cartItemsCount={cartItems.length} /> 

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb/Back link */}
          <Link to="/" className="text-sm text-primary hover:text-primary-glow transition-colors mb-6 inline-flex items-center">
            &larr; Back to Products
          </Link>

          {/* Product Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
            {/* Left Column: Image */}
            <div className="lg:sticky lg:top-24 h-fit">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform hover:scale-[1.01] duration-300"
              />
            </div>

            {/* Right Column: Details and CTA */}
            <div>
              <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4 capitalize">{product.category}</p>

              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-500' : 'fill-transparent stroke-yellow-500'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  {product.rating.toFixed(1)}/5.0 ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                Ksh{product.price.toFixed(2)}
              </p>

              {/* Description */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Product Description</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-8">
                <h3 className="text-lg font-semibold">Quantity:</h3>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    // Disable if quantity is already at stock limit or max purchase limit
                    disabled={quantity >= product.stock || maxPurchaseLimit <= 0 || quantity >= maxPurchaseLimit}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {product.stock > 0 ? (
                  <span className={`text-sm ${product.stock < 10 ? 'text-orange-500' : 'text-green-600'}`}>
                    {product.stock} in stock
                  </span>
                ) : (
                  <span className="text-sm text-destructive">Out of Stock</span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button
                size="xl"
                className="w-full text-lg h-14 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity disabled:opacity-50"
                onClick={handleAddToCart}
                disabled={product.stock <= 0 || quantity > maxPurchaseLimit}
              >
                Add {quantity} {quantity > 1 ? 'items' : 'item'} to Cart - Ksh{(product.price * quantity).toFixed(2)}
              </Button>
              {maxPurchaseLimit > 0 && quantity > maxPurchaseLimit && (
                 <p className="text-sm text-destructive mt-2 text-center">
                    You already have items in your cart. You can only add {maxPurchaseLimit} more.
                 </p>
              )}


              {/* Additional Information */}
              <div className="mt-8 space-y-4 border-t border-border pt-6">
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <Truck className="h-5 w-5 text-primary" />
                  <p>Free Shipping & Returns on all orders.</p>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p>Secure payment via M-Pesa & PayPal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
