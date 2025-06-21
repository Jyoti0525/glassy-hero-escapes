
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between p-6 rounded-3xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/15 backdrop-blur-2xl shadow-2xl border border-white/20' 
            : 'bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15'
        }`}>
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              StayScape
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/explore" 
              className="text-white/90 hover:text-white transition-colors duration-300 font-semibold text-lg hover:scale-110 transform transition-transform"
            >
              Explore
            </Link>
            <Link 
              to="/host" 
              className="text-white/90 hover:text-white transition-colors duration-300 font-semibold text-lg hover:scale-110 transform transition-transform"
            >
              For Hosts
            </Link>
            <Link to="/signin">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 font-semibold border border-white/20 hover:border-white/30 transition-all duration-300">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold border border-white/20 hover:border-white/30 backdrop-blur-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
