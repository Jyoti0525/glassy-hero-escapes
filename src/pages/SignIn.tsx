
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt:', { email, password });
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden animate-fadeInUp">
          <CardHeader className="text-center py-8 px-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </CardTitle>
            <p className="text-gray-500 text-lg">Sign in to your StayScape account</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                Sign In
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-300">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
