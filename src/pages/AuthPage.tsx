import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

// --- Simplified User/Auth Types for Local Storage ---
export interface LocalUser { // EXPORTED FOR USE IN PROFILE.TSX
  uid: string;
  email: string;
  isAnonymous: boolean;
}

export interface UserProfile { // EXPORTED FOR USE IN PROFILE.TSX
  email: string;
  displayName: string;
  createdAt: string;
}

interface AuthContextType {
  currentUser: LocalUser | null;
  userId: string | null;
  isAuthReady: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  // Database/App ID fields removed as they are no longer necessary
}

// 2. CONTEXT SETUP
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. CUSTOM HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// --- Helper Functions for Local Storage Simulation ---

// A simple map to simulate storing "hashed" passwords/user records
const USER_DATABASE_KEY = 'mockUserDB';
const PROFILE_DATA_KEY_PREFIX = 'userProfile_';

const getMockUserDB = (): Record<string, { password: string, email: string }> => {
  const data = localStorage.getItem(USER_DATABASE_KEY);
  return data ? JSON.parse(data) : {};
};

const saveMockUserDB = (db: Record<string, { password: string, email: string }>) => {
  localStorage.setItem(USER_DATABASE_KEY, JSON.stringify(db));
};

export const saveProfileData = (uid: string, profile: UserProfile) => { // EXPORTED
    localStorage.setItem(PROFILE_DATA_KEY_PREFIX + uid, JSON.stringify(profile));
};

export const getProfileData = (uid: string): UserProfile | null => { // EXPORTED
    const data = localStorage.getItem(PROFILE_DATA_KEY_PREFIX + uid);
    return data ? JSON.parse(data) : null;
};

// --- Profile Simulation: Create or check profile exists (for non-anonymous users) ---
const createProfileDocument = (user: LocalUser) => {
    if (user.isAnonymous) return;

    // Check if profile already exists in local storage
    if (getProfileData(user.uid)) return;

    // Create a new profile
    const newProfile: UserProfile = {
        email: user.email,
        displayName: user.email ? user.email.split('@')[0] : 'New User',
        createdAt: new Date().toISOString(),
    };
    saveProfileData(user.uid, newProfile);
    console.log("New mock user profile created for:", user.uid);
};


// 4. PROVIDER COMPONENT
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<LocalUser | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // --- Core Authentication State Management (Local Storage Check) ---
  useEffect(() => {
    // Check for existing logged-in user in Local Storage
    const storedUserJson = localStorage.getItem('currentUser');
    
    if (storedUserJson) {
        try {
            const storedUser: LocalUser = JSON.parse(storedUserJson);
            setCurrentUser(storedUser);
            if (!storedUser.isAnonymous) {
                createProfileDocument(storedUser);
            }
        } catch (error) {
            console.error('Error parsing stored user data:', error);
            // Fallback to anonymous if parsing fails
            handleAnonymousLogin();
        }
    } else {
        // If no user is stored, start anonymously
        handleAnonymousLogin();
    }
    
    setIsAuthReady(true);
  }, []);

  const handleAnonymousLogin = () => {
    // Generate a UUID for anonymous user
    const anonUser: LocalUser = {
      uid: `anon-${Math.random().toString(36).substring(2, 9)}`,
      email: '',
      isAnonymous: true,
    };
    setCurrentUser(anonUser);
    localStorage.setItem('currentUser', JSON.stringify(anonUser));
    toast.info('Signed in anonymously (Local Storage).');
  };

  const login = async (email: string, password: string) => {
    // Simulate a network/API call delay
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const userDB = getMockUserDB();
    const records = Object.values(userDB);
    const userRecord = records.find(r => r.email === email && r.password === password);

    if (userRecord) {
        // Simulate successful login
        const loggedInUser: LocalUser = {
            uid: userRecord.email, // Using email as mock UID for simplicity
            email: userRecord.email,
            isAnonymous: false,
        };
        setCurrentUser(loggedInUser);
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        createProfileDocument(loggedInUser); // Ensure profile exists
        toast.success('Welcome back! Logged in successfully.');
    } else {
        // Simulate failed login
        const error = new Error('Invalid email or password.');
        console.error('Login Error:', error);
        toast.error('Login Failed', {
            description: error.message,
        });
        throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const userDB = getMockUserDB();
    const isEmailTaken = Object.values(userDB).some(r => r.email === email);

    if (isEmailTaken) {
        const error = new Error('Email is already in use.');
        console.error('Signup Error:', error);
        toast.error('Sign Up Failed', { description: error.message });
        throw error;
    }
    if (password.length < 6) {
        const error = new Error('Password must be at least 6 characters long.');
        toast.error('Security Warning', { description: error.message });
        throw error;
    }

    // Simulate account creation
    userDB[email] = { password, email }; // Use email as mock UID key
    saveMockUserDB(userDB);

    const newUser: LocalUser = {
        uid: email,
        email: email,
        isAnonymous: false,
    };
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    createProfileDocument(newUser); // Create profile on sign up

    toast.success('Account created and logged in!');
  };

  const logout = async () => {
    await new Promise(resolve => setTimeout(resolve, 300)); 
    
    // Clear the current user data
    localStorage.removeItem('currentUser');
    
    // Fallback to anonymous state
    handleAnonymousLogin();
    toast.info('Logged out successfully.');
  };

  const userId = currentUser?.uid || null;

  const value: AuthContextType = {
    currentUser,
    userId,
    isAuthReady,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {isAuthReady ? children : (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-3 text-lg text-muted-foreground">Loading authentication...</p>
        </div>
      )}
    </AuthContext.Provider>
  );
};

// Add a default export for convenience, which often resolves generic "undefined component" errors.
export default AuthProvider;