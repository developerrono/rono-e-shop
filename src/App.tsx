import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
// FIXED PATHS: Explicitly adding the .tsx extension to all local file imports to resolve persistent "Could not resolve" errors.
import { CartProvider } from "./pages/CartContext.tsx";
import { AuthProvider } from "./pages/AuthContext.tsx";
import Index from "@/pages/Index.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/CheckoutPage.tsx";
import AuthPage from "./pages/AuthPage.tsx"; 
import NotFound from "./pages/NotFound.tsx";
import Profile from "./pages/Profile.tsx"; 
import Transactions from "./pages/Transactions.tsx";

const queryClient = new QueryClient();

// PWA Metadata Component
// This component inserts PWA and favicon metadata for browser and mobile installation
const PWAMetaTags = () => (
  /* PWA Metadata for browser and installation icon/theme */
  <>
    {/* Favicon/App Icon (Replace with your actual 512x512 logo URL) */}
    <link rel="icon" href="assets/favicon/icon" />
    <link rel="apple-touch-icon" href="assets/favicon/logo.png" />
    
    {/* PWA/Theme Meta Tags */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content="#4F46E5" /> {/* Matches primary color */}
    <meta name="apple-mobile-web-app-title" content="Rono E-Shop" />
    <meta name="application-name" content="Rono E-Shop" />
    <meta name="description" content="The best place for all your e-commerce needs." />
  </>
);

/**
 * Footer Component for Branding
 */
const AppFooter = () => (
  <footer className="w-full bg-card border-t border-border mt-12 py-6">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rono E-Shop.
      </p>
      <p className="text-xs text-muted-foreground/70 mt-1">
        App created with <span className="text-primary">❤️</span> by Developer Rono
      </p>
    </div>
  </footer>
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
                <div className="flex flex-col min-h-screen">
                  {/* Main content area */}
                  <div className="flex-grow"> 
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
                  </div>
                  {/* Footer is outside the Routes, so it always appears at the bottom */}
                  <AppFooter />
                </div>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default App;