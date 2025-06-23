
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up attempt:', formData);
    // Add registration logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <Card className="bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-700/50 rounded-3xl overflow-hidden animate-fadeInUp">
          <CardHeader className="text-center py-8 px-8">
            <CardTitle className="text-3xl font-bold text-white mb-2">
              Join StayScape
            </CardTitle>
            <p className="text-gray-300 text-lg">Start your adventure today</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full h-12 rounded-2xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full h-12 rounded-2xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-2xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full h-12 rounded-2xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/signin" className="text-orange-400 hover:text-orange-300 font-semibold hover:underline transition-all duration-300">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
