
import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Here you would typically send the email to your backend
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/30">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Stay Updated with <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Adventures</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive deals, travel tips, and discover new destinations before anyone else
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                />
              </div>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-white mb-2">50K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">Weekly</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Updates</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">Exclusive</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Deals</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">Free</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Always</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
