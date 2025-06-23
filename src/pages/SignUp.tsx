
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden animate-fadeInUp">
          <CardHeader className="text-center py-8 px-8">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              Join StayScape
            </CardTitle>
            <p className="text-gray-500 text-lg">Create your account to start exploring</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full h-12 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-300">
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
