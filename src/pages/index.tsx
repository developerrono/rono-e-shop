// src/pages/Index.tsx

import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import { ALL_PRODUCTS } from '@/lib/products.ts';
import { useCart } from '@/hooks/useCart'; // <--- 1. IMPORT the useCart hook

const Index = () => {
  // 1. READ CATEGORY FROM URL
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  // 2. USE the hook to get the cart functions
  const { addToCart } = useCart(); 
  
  // Define all available categories (must match the Navbar/Product data)
  const categories = ['Trading Bots', 'Perfumes', 'Men\'s Pants', 'Laptops & Tech'];

  // 3. IMPLEMENT CORE FILTERING LOGIC
  const filteredProducts = useMemo(() => {
    // If no category is selected, show all products
    if (!selectedCategory) {
      return ALL_PRODUCTS;
    }
    // Filter the products to match the selected category
    return ALL_PRODUCTS.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]); // Re-filter only when selectedCategory changes

  // 4. HANDLER FOR FILTER BUTTONS (passed to CategoryFilter)
  const handleSelectCategory = useCallback((category: string | null) => {
    if (category) {
      setSearchParams({ category }); // Set URL: ?category=Perfumes
    } else {
      setSearchParams({}); // Remove category parameter to show all
    }
    // Note: Navbar links already do this via <Link to="...">
  }, [setSearchParams]);
  
  // 5. UPDATE: Use the actual addToCart function from the context
  const handleAddToCart = (product) => {
    // This is the actual cart logic that updates the state
    addToCart(product, 1); 
    // The context handles the toast notification and state update
  };

  return (
    <>
      <Navbar /> 
      <main className="min-h-screen">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Our Collection</h2>
          
          {/* RENDER THE FILTER */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* RENDER THE FILTERED PRODUCTS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id ?? product.name} 
                product={product}
                onAddToCart={handleAddToCart} // This now calls the real cart logic
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">
              No products found in the selected category.
            </p>
          )}

        </div>
      </main>
      {/* Add Footer component here if applicable */}
    </>
  );
};

export default Index;