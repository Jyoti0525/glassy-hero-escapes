
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between p-4 rounded-3xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-2xl shadow-2xl border border-slate-700' 
            : 'bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-slate-600'
        }`}>
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className={`text-2xl md:text-3xl font-black transition-all duration-300 group-hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg'
            }`}>
              StayScape
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <Home className="w-5 h-5 transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-blue-400" />
              <span className="font-semibold text-lg transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-blue-400">
                Home
              </span>
            </Link>
            <Link 
              to="/explore" 
              className="font-semibold text-lg hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-blue-400"
            >
              Explore
            </Link>
            <Link 
              to="/host" 
              className="font-semibold text-lg hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-blue-400"
            >
              For Hosts
            </Link>
            <Link to="/signin">
              <Button variant="ghost" className="rounded-2xl px-6 py-3 font-semibold transition-all duration-300 text-white/90 hover:text-blue-400 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-600 hover:border-blue-500">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold border border-blue-400/20 hover:border-blue-300/30 backdrop-blur-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden p-3 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 hover:border-slate-500`}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700 md:hidden">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 text-white/90 hover:text-blue-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/explore" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-blue-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  Explore
                </Link>
                <Link 
                  to="/host" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-blue-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  For Hosts
                </Link>
                <Link 
                  to="/signin" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full text-white/90 hover:text-blue-400 hover:bg-slate-700/50 rounded-2xl px-6 py-3 font-semibold border border-slate-600 hover:border-blue-500 transition-all duration-300">
                    Sign In
                  </Button>
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
