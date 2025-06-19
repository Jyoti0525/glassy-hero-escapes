
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Find Your Perfect</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-float">
              Getaway
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover unique accommodations and unforgettable experiences around the world
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center animate-fadeInUp">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/80 text-sm md:text-base">Properties</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2M+</div>
            <div className="text-white/80 text-sm md:text-base">Happy Guests</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-white/80 text-sm md:text-base">Countries</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroSection;
