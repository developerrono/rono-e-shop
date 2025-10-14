import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// 1. IMPORT CART CONTEXT/PROVIDER from the correct file (CartContext.tsx)
import { CartProvider } from "./pages/CartContext"; 
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";

// 2. IMPORT CART UI component (Cart.tsx)
import Cart from "./pages/Cart";

// 3. IMPORT Checkout page
import Checkout from "./pages/CheckoutPage"; 
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Ensure the CartProvider wraps all components that need cart access */}
      <CartProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                {/* Cart component uses the data provided by CartProvider */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
export default App;
