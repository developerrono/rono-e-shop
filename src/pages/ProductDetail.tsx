import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react';
import { ALL_PRODUCTS } from '@/lib/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ALL_PRODUCTS.find(p => p.id === id);
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success('Added to cart', {
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast.success('Redirecting to checkout...');
    setTimeout(() => navigate('/cart'), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Click and drag to view 360° (Coming soon)
            </p>
          </div>

          {/* Product Details */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                Ksh{product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Features */}
            {(product as any).features && (
              <div>
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {(product as any).features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleAddToCart}
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  setIsLiked(!isLiked);
                  toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites');
                }}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isLiked ? 'fill-primary text-primary' : ''
                  }`}
                />
              </Button>
            </div>

            {/* Payment Info */}
            <div className="border border-border rounded-lg p-4 bg-muted/50">
              <h4 className="font-semibold mb-2">Secure Payment Options</h4>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-background rounded border border-border text-sm font-medium">
                  M-Pesa
                </div>
                <div className="px-4 py-2 bg-background rounded border border-border text-sm font-medium">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_PRODUCTS
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      Ksh{relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2,
  }).format(price);
};

export default ProductDetail;
