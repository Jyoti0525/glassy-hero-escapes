
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { HeroImageTrail } from './HeroImageTrail';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-50">
      {/* Minimal Background with subtle gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-neutral-100 via-white to-neutral-200">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-100/30 via-transparent to-neutral-50/20"></div>
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-900 mb-6 leading-tight tracking-tight select-none">
            <span className="block">Find your perfect</span>
            <span className="block">vacation rental</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal mb-16 select-none">
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
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 hover:bg-white/80 hover:border-neutral-300/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <div className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 group-hover:scale-105 transition-transform duration-200 select-none">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm md:text-base font-medium select-none">
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
