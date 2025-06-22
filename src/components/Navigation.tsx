
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Menu, X, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'py-3' : 'py-8'}`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between px-8 py-6 rounded-3xl transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border border-orange-400/30' 
            : 'bg-black/20 backdrop-blur-xl shadow-2xl border border-orange-300/20'
        }`}>
          <Link to="/" className="flex items-center group cursor-pointer">
            <MapPin className="w-8 h-8 text-orange-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <div className={`text-3xl md:text-4xl font-black transition-all duration-300 group-hover:scale-110 ${
              isScrolled 
                ? 'bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg'
            }`}>
              StayScape
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <Home className="w-6 h-6 transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-orange-400" />
              <span className="font-bold text-xl transition-all duration-300 group-hover:scale-110 text-white/90 group-hover:text-orange-400">
                Home
              </span>
            </Link>
            <Link 
              to="/explore" 
              className="font-bold text-xl hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              Stays
            </Link>
            <a 
              href="#about" 
              className="font-bold text-xl hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="font-bold text-xl hover:scale-110 transform transition-all duration-300 text-white/90 hover:text-orange-400"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/signin">
              <Button variant="ghost" className="rounded-2xl px-8 py-4 font-bold text-lg transition-all duration-300 text-white/90 hover:text-orange-400 hover:bg-orange-900/30 backdrop-blur-sm border border-orange-400/30 hover:border-orange-300/50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg border border-orange-400/30 hover:border-orange-300/50 backdrop-blur-sm">
                Sign Up
              </Button>
            </Link>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className={`lg:hidden p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110 bg-orange-900/40 border border-orange-400/40 hover:bg-orange-800/50 hover:border-orange-300/60`}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-4 mx-6 p-8 bg-black/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-orange-400/40 lg:hidden">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-white/90 hover:text-orange-400 transition-colors duration-300 font-bold text-xl py-3"
                >
                  <Home className="w-6 h-6" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/explore" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-bold text-xl py-3"
                >
                  Stays
                </Link>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-bold text-xl py-3"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors duration-300 font-bold text-xl py-3"
                >
                  Contact
                </a>
                <Link 
                  to="/signin" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full text-white/90 hover:text-orange-400 hover:bg-orange-900/30 rounded-2xl px-8 py-4 font-bold text-lg border border-orange-400/30 hover:border-orange-300/50 transition-all duration-300">
                    Login
                  </Button>
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-bold text-lg">
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
