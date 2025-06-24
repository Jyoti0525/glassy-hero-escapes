
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { HeroImageTrail } from './HeroImageTrail';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Very light minimal background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 via-transparent to-white/10"></div>
      </div>

      {/* Image Trail Effect */}
      <HeroImageTrail />

      {/* Navigation - Absolutely positioned */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navigation />
      </div>

      {/* Minimal Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="text-center mb-16 animate-fadeInUp max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4 leading-relaxed tracking-wide select-none">
            <span className="block">Find your perfect</span>
            <span className="block">vacation rental</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-light mb-16 select-none">
            Discover unique places to stay and create unforgettable memories
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl relative z-20">
          <SearchBar />
        </div>

        {/* Minimal Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center animate-fadeInUp w-full max-w-3xl">
          {[
            { number: '10M+', label: 'Happy Guests' },
            { number: '2M+', label: 'Unique Stays' },
            { number: '200+', label: 'Countries' }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-5 border border-gray-100 hover:bg-white/60 hover:border-gray-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="text-xl md:text-2xl font-light text-gray-700 mb-2 group-hover:scale-105 transition-transform duration-200 select-none">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-xs md:text-sm font-light select-none">
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
