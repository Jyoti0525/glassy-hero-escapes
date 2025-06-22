
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Menu, X } from 'lucide-react';

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
            ? 'bg-gray-900/95 backdrop-blur-2xl shadow-2xl border border-gray-700/50' 
            : 'bg-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-600/30'
        }`}>
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className={`text-2xl md:text-3xl font-black transition-all duration-300 group-hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-lg'
            }`}>
              StayScape
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <Home className="w-5 h-5 transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-orange-400" />
              <span className="font-semibold text-lg transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-orange-400">
                Home
              </span>
            </Link>
            <Link 
              to="/explore" 
              className="font-semibold text-lg hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              Stays
            </Link>
            <a 
              href="#about" 
              className="font-semibold text-lg hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="font-semibold text-lg hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              Contact
            </a>
            <Link to="/signin">
              <Button variant="ghost" className="rounded-2xl px-6 py-3 font-semibold transition-all duration-300 text-white/90 hover:text-orange-400 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 hover:border-orange-500/50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold border border-orange-400/20 hover:border-orange-300/30 backdrop-blur-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden p-3 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 bg-gray-700/50 border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-700/50 md:hidden">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 text-white/90 hover:text-orange-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/explore" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  Stays
                </Link>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-semibold text-lg py-2"
                >
                  Contact
                </a>
                <Link 
                  to="/signin" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full text-white/90 hover:text-orange-400 hover:bg-gray-700/50 rounded-2xl px-6 py-3 font-semibold border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300">
                    Login
                  </Button>
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl font-bold">
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
