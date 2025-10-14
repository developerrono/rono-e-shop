import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
// ADJUSTED PATHS: Simplifying import paths to resolve compilation errors
import { CartProvider } from "./pages/CartContext";
import { AuthProvider } from "@/pages/AuthContext"; // NEW: Import AuthProvider
import Index from "@/pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from ".//pages/CheckoutPage";
import AuthPage from "./pages/AuthPage"; // NEW: Import AuthPage for login/signup
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile"; // NEW: Import Profile page
import Transactions from "./pages/Transactions"; // NEW: Import Transactions page


const queryClient = new QueryClient();

// PWA Metadata Component
const PWAMetaTags = () => (
  /* PWA Metadata for browser and installation icon/theme */
  <>
    {/* Favicon/App Icon (Replace with your actual 512x512 logo URL) */}
    <link rel="icon" href="https://placehold.co/192x192/4F46E5/ffffff?text=E-Shop" />
    <link rel="apple-touch-icon" href="https://placehold.co/192x192/4F46E5/ffffff?text=E-Shop" />
    
    {/* PWA/Theme Meta Tags */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#4F46E5" /> {/* Matches primary color */}
    <meta name="apple-mobile-web-app-title" content="Rono E-Shop" />
    <meta name="application-name" content="Rono E-Shop" />
    <meta name="description" content="The best place for all your e-commerce needs." />
  </>
);


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider> {/* Wrap the whole app in AuthProvider for auth state access */}
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {/* NOTE: PWAMetaTags are documented above. The platform handles injecting them. */}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/auth" element={<AuthPage />} /> {/* Auth Route for Login/Signup */}
                  
                  {/* NEW USER ROUTES */}
                  <Route path="/profile" element={<Profile />} /> 
                  <Route path="/transactions" element={<Transactions />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default App;