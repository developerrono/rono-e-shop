import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/UI/button';
import { Card, CardContent, CardFooter } from '@/components/UI/card';
import { Badge } from '@/components/UI/badge';
import { ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'sonner';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success('Added to cart', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in bg-card/50 backdrop-blur">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {product.badge}
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              handleLike();
            }}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'
              }`}
            />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Ksh {product.price.toFixed(2)}
          </p>
        </div>
        <Button
          onClick={handleAddToCart}
          size="sm"
          className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
