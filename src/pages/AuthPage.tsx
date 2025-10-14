import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/pages/AuthContext'; // FIX 1: Adjusted path to '../AuthContext'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '../components/Navbar'; // FIX 2: Adjusted path to '../components/Navbar'
import { Loader2, Key, Mail, UserPlus, LogIn } from 'lucide-react';
import { toast } from 'sonner';

// Define the component state type for clarity
type AuthMode = 'login' | 'signup';

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, signup, currentUser } = useAuth(); // Get auth functions and user state

  // Redirect if already authenticated with a real user (not anonymous)
  // We check if the user is authenticated AND if they are NOT anonymous
  if (currentUser && !currentUser.isAnonymous) {
    navigate('/profile', { replace: true });
    return null; 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast.error('Input Error', { description: 'Please fill in both email and password.' });
      setIsLoading(false);
      return;
    }

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        // Simple password check for signup
        if (password.length < 6) {
          toast.error('Security Warning', { description: 'Password must be at least 6 characters long.' });
          setIsLoading(false);
          return;
        }
        await signup(email, password);
      }
      
      // If successful, redirect to the home page or a specific route
      navigate('/', { replace: true });
    } catch (error) {
      // Error handling is done inside AuthContext, just ensure loading state is reset
      setIsLoading(false);
    }
  };

  const title = mode === 'login' ? 'Welcome Back!' : 'Create Account';
  const description = mode === 'login' ? 
    'Sign in to access your cart, profile, and order history.' :
    'Join Rono E-Shop today. It only takes a minute!';
  const submitButtonText = mode === 'login' ? 'Sign In' : 'Sign Up';
  const submitButtonIcon = mode === 'login' ? <LogIn className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />;
  const toggleText = mode === 'login' ? "Don't have an account?" : "Already have an account?";
  const toggleLinkText = mode === 'login' ? 'Sign Up' : 'Log In';

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={0} /> {/* Assuming Navbar takes cart count prop */}
      <div className="flex flex-col items-center justify-center p-4 pt-12">
        <Card className="w-full max-w-md shadow-2xl transition-all duration-300">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-extrabold text-primary">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full text-lg h-10 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  submitButtonIcon
                )}
                {submitButtonText}
              </Button>
              
              {/* Mode Toggle Link */}
              <Button 
                type="button" 
                variant="link" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors p-0"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                disabled={isLoading}
              >
                {toggleText} <span className="font-semibold ml-1">{toggleLinkText}</span>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
