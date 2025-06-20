
import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Enhanced Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block drop-shadow-2xl">Find Your Perfect</span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-float drop-shadow-lg">
              Getaway
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Discover extraordinary accommodations and unforgettable experiences around the world
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <SearchBar />

        {/* Enhanced Stats with Glassmorphism */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 text-center animate-fadeInUp">
          {[
            { number: '50K+', label: 'Properties' },
            { number: '2M+', label: 'Happy Guests' },
            { number: '200+', label: 'Countries' }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-white/20">
                <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full animate-float border border-white/20"></div>
      <div className="absolute top-1/3 right-16 w-36 h-36 bg-blue-400/20 backdrop-blur-sm rounded-full animate-float border border-blue-300/30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-purple-400/20 backdrop-blur-sm rounded-full animate-float border border-purple-300/30" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroSection;
