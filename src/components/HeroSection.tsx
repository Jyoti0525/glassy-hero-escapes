
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Campfire/Nature Theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-red-900/40 to-gray-900/80"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        
        {/* Warm glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Enhanced Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block drop-shadow-2xl filter">Take a break</span>
            <span className="block drop-shadow-2xl filter">from everyday life</span>
            <span className="block bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent animate-float drop-shadow-lg">
              in nature
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg mb-12">
            Spend your breaks away from the city hustle and immerse yourself in the unforgettable atmosphere of nature
          </p>
          
          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 mb-16">
            Explore Adventures
          </button>
        </div>

        {/* Enhanced Search Bar */}
        <SearchBar />

        {/* Enhanced Stats with Warm Theme */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 text-center animate-fadeInUp">
          {[
            { number: '800+', label: 'Adventures' },
            { number: '12+', label: 'Years Experience' },
            { number: '50K+', label: 'Happy Travelers' }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-orange-900/20 backdrop-blur-lg rounded-3xl p-6 border border-orange-400/30 hover:bg-orange-800/30 hover:border-orange-300/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-orange-500/20">
                <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-orange-200/90 text-sm md:text-base font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements with Warm Colors */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-orange-400/20 backdrop-blur-sm rounded-full animate-float border border-orange-300/30"></div>
      <div className="absolute top-1/3 right-16 w-36 h-36 bg-red-400/20 backdrop-blur-sm rounded-full animate-float border border-red-300/30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-yellow-400/20 backdrop-blur-sm rounded-full animate-float border border-yellow-300/30" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroSection;
