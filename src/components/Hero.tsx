import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Smart shopping made simple
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Premium{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Tech & Style
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              From cutting-edge trading bots to luxury perfumes, explore our curated collection of premium products. Fast checkout with M-Pesa and PayPal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/?category=Trading%20Bots">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/?category=Perfumes">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Collections
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Premium Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Fast Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Secure</div>
                <div className="text-sm text-muted-foreground">M-Pesa & PayPal</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-3xl rounded-full"></div>
            <img
              src={heroBanner}
              alt="Premium products showcase"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
