import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const success = login(credentials.username, credentials.password);
      if (success) {
        toast({ title: "Login Successful!", description: "Welcome back, Admin." });
        navigate('/jobs');
      } else {
        toast({ title: "Login Failed", description: "Invalid credentials. Please try again.", variant: "destructive" });
      }
      setIsLoading(false);
    }, 1500);
  };

  if (isAuthenticated) {
    return (
      <PageWrapper>
        <Helmet><title>Admin Panel | Clarifox</title></Helmet>
        <div className="py-20 px-4 flex items-center justify-center">
          <Card className="w-full max-w-md glass-effect border-primary/30">
            <CardHeader className="text-center">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-white">Already Logged In</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-300">You are successfully logged in as Admin.</p>
              <Button onClick={() => navigate('/jobs')} className="w-full bg-gradient-to-r from-primary to-accent text-white">
                Manage Jobs
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet><title>Admin Login | Clarifox</title></Helmet>
      <div className="py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="w-full max-w-md glass-effect">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Admin Login</CardTitle>
              <CardDescription>Access the administrative panel.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <div className="relative mt-1">
                    <Input id="username" name="username" type="text" value={credentials.username} onChange={handleInputChange} required placeholder="Enter username" />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Input id="password" name="password" type={showPassword ? 'text' : 'password'} value={credentials.password} onChange={handleInputChange} required placeholder="Enter password" />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 text-lg">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <h4 className="text-sm font-semibold text-primary mb-2">Demo Credentials:</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p><span className="font-medium">Username:</span> admin</p>
                  <p><span className="font-medium">Password:</span> admin123</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;