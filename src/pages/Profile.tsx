import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, Lock, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    // Placeholder user data
    const user = {
        name: "Jina La Kwanza",
        email: "user@example.com",
        phone: "07XXXXXXXX",
        lastLogin: "2025-10-14 10:30 AM",
        userId: "USER-9283-A1B2C3D4" // This should come from Firebase Auth in a real app
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for update logic (e.g., calling an API to update user details)
        alert("Profile update functionality coming soon!"); 
    };

    const handleLogout = () => {
        // Placeholder for logout logic (e.g., calling Firebase signOut)
        alert("Logging out...");
        // In a real app, you would navigate to the login page
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Assuming Navbar can fetch cart count or takes 0 for profile page */}
            <Navbar cartItemsCount={0} /> 
            
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-extrabold mb-8 text-foreground flex items-center">
                    <User className="w-8 h-8 mr-3 text-primary" /> My Profile
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Column 1: Profile Details Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>Manage your contact details and settings.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleUpdate} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="font-semibold">Full Name</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input id="name" defaultValue={user.name} className="pl-10" required />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="font-semibold">Email Address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input id="email" type="email" defaultValue={user.email} className="pl-10" required disabled />
                                        </div>
                                        <p className="text-xs text-muted-foreground">Email is used for authentication and cannot be changed here.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input id="phone" type="tel" defaultValue={user.phone} className="pl-10" />
                                        </div>
                                    </div>
                                    
                                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
                                        Save Changes
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Column 2: Quick Links & Security */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Account Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button asChild variant="outline" className="w-full justify-start text-left">
                                    <Link to="/transactions">
                                        <Lock className="w-4 h-4 mr-3" /> View Order History
                                    </Link>
                                </Button>
                                <Button variant="secondary" onClick={handleLogout} className="w-full justify-start text-left text-destructive hover:bg-destructive/10">
                                    <LogOut className="w-4 h-4 mr-3" /> Log Out
                                </Button>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Security & Status</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">User ID:</span>
                                    <span className="font-mono text-xs bg-muted p-1 rounded-sm">{user.userId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Last Activity:</span>
                                    <span className="font-medium">{user.lastLogin}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;