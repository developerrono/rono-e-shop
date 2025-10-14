import React, { useState, useEffect } from 'react';
// Corrected import paths to use the project alias (@/)
import { useAuth, getProfileData, saveProfileData, UserProfile } from '@/pages/AuthContext'; 
import Navbar from '@/components/Navbar'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { User, Mail, Clipboard, LogOut, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

/**
 * The Profile page allows a logged-in user to view their details
 * and update their display name, persisting the data in localStorage.
 */
const Profile = () => {
  // Get authentication state and functions from the local storage context
  const { currentUser, userId, isAuthReady, logout } = useAuth();

  // State for the user's mutable profile data
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [displayNameInput, setDisplayNameInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // 1. Fetch Profile Data from Local Storage on Load or User Change
  useEffect(() => {
    if (isAuthReady && userId && !currentUser?.isAnonymous) {
      // Get data using the helper function exported from AuthContext
      const storedProfile = getProfileData(userId);
      setProfile(storedProfile);
      if (storedProfile) {
        setDisplayNameInput(storedProfile.displayName);
      }
    } else if (currentUser?.isAnonymous) {
      // Clear data if user switches to anonymous
      setProfile(null);
    }
  }, [isAuthReady, userId, currentUser]);

  // Handle updating the display name
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile || !userId) return;

    const trimmedName = displayNameInput.trim();
    if (trimmedName === profile.displayName) {
      toast.info('No changes detected.');
      return;
    }

    if (trimmedName.length < 2) {
      toast.error('Display name must be at least 2 characters long.');
      return;
    }

    setIsSaving(true);
    
    // Simulate API delay
    setTimeout(() => {
        // 2. Persist updated data to Local Storage
        const updatedProfile: UserProfile = {
            ...profile,
            displayName: trimmedName,
        };
        saveProfileData(userId, updatedProfile);
        setProfile(updatedProfile);
        
        setIsSaving(false);
        toast.success('Profile Updated!', {
            description: `Your new display name is now "${trimmedName}".`
        });
    }, 800);
  };
  
  // Handle copying the User ID to the clipboard
  const handleCopyUserId = () => {
    if (userId) {
        // Note: document.execCommand('copy') is used here for compatibility
        document.execCommand('copy', false, userId);
        setIsCopied(true);
        toast.info('User ID copied to clipboard!');
        setTimeout(() => setIsCopied(false), 2000);
    }
  };


  // --- Render based on Auth State ---

  if (!isAuthReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Content for Anonymous Users or users not ready
  if (currentUser?.isAnonymous || !userId) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
            <Card className="w-full max-w-md p-6 bg-card shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Access Denied</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <User className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-lg text-muted-foreground">
                        You are currently signed in anonymously. Please log in or sign up to view your profile.
                    </p>
                    {/* The href should point to the correct route defined in App.tsx */}
                    <a href="/auth" className="block">
                        <Button className="w-full bg-primary hover:bg-primary-glow/90 transition-all">
                            Go to Login/Signup
                        </Button>
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    );
  }

  // Content for Logged-In Users
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-foreground">
          Your Profile
        </h1>

        <div className="max-w-xl mx-auto space-y-6">
          
          {/* Section 1: User Information */}
          <Card className="shadow-lg">
            <CardHeader className="border-b border-border/60">
              <CardTitle className="flex items-center space-x-2 text-xl">
                <User className="h-5 w-5 text-primary" />
                <span>Account Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              
              {/* User ID (Unique Identifier) */}
              <div className="space-y-1">
                <Label className="text-muted-foreground flex items-center">
                    <Clipboard className="h-4 w-4 mr-2" />
                    User ID
                </Label>
                <div className="flex items-center space-x-2">
                    <Input 
                        value={userId} 
                        readOnly 
                        className="font-mono bg-muted text-sm border-dashed text-foreground/80 cursor-default"
                        title="Your unique user identifier"
                    />
                    <Button 
                        onClick={handleCopyUserId} 
                        variant="secondary" 
                        size="icon"
                        className="flex-shrink-0"
                    >
                        {isCopied ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
                    </Button>
                </div>
                <p className='text-xs text-red-500'>
                    Note: Your full User ID is shared to allow collaboration or data management.
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label className="text-muted-foreground flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                </Label>
                <Input 
                    value={currentUser?.email || 'N/A'} 
                    readOnly 
                    className="bg-muted text-foreground/80 cursor-default" 
                />
              </div>
              
              {/* Logout Button */}
              <Button 
                onClick={logout} 
                variant="destructive" 
                className="w-full mt-4 flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
              
            </CardContent>
          </Card>
          
          {/* Section 2: Profile Update Form */}
          <Card className="shadow-lg">
            <CardHeader className="border-b border-border/60">
              <CardTitle className="flex items-center space-x-2 text-xl">
                <User className="h-5 w-5 text-primary" />
                <span>Update Display Name</span>
              </CardTitle>
            </CardHeader>
            <form onSubmit={handleUpdateProfile}>
              <CardContent className="pt-6 space-y-4">
                
                {/* Display Name Input */}
                <div className="space-y-1">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    type="text"
                    value={displayNameInput}
                    onChange={(e) => setDisplayNameInput(e.target.value)}
                    required
                    placeholder="Enter your new display name"
                    disabled={isSaving}
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                  disabled={isSaving || !profile || displayNameInput.trim() === profile.displayName}
                >
                  {isSaving ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
                
              </CardContent>
            </form>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Profile;