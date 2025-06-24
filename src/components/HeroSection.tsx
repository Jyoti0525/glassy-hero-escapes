
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { HeroImageTrail } from './HeroImageTrail';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Beautiful background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
      </div>

      {/* Image Trail Effect */}
      <HeroImageTrail />

      {/* Navigation - Absolutely positioned */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navigation />
      </div>

      {/* Hero Content with enhanced typography */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="text-center mb-16 animate-fadeInUp max-w-5xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 leading-[0.9] tracking-wider select-none drop-shadow-lg">
            <span className="block font-serif italic">Find your</span>
            <span className="block font-light">perfect</span>
            <span className="block font-thin text-white/90">vacation rental</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-16 select-none drop-shadow-md tracking-wide">
            Discover unique places to stay and create unforgettable memories
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl relative z-20">
          <SearchBar />
        </div>

        {/* Enhanced Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center animate-fadeInUp w-full max-w-3xl">
          {[
            { number: '10M+', label: 'Happy Guests' },
            { number: '2M+', label: 'Unique Stays' },
            { number: '200+', label: 'Countries' }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-light text-white mb-2 group-hover:scale-105 transition-transform duration-200 select-none tracking-wider">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base font-light select-none tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
