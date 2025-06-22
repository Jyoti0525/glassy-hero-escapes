
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-900/50 to-black/80"></div>
        <div className="absolute inset-0 backdrop-blur-[0.5px]"></div>
        
        {/* Warm glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Enhanced Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center mb-16 animate-fadeInUp max-w-6xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tight">
            <span className="block drop-shadow-2xl">Find your perfect</span>
            <span className="block drop-shadow-2xl">vacation</span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              rental
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-lg mb-16">
            Discover unique places to stay and create unforgettable memories in beautiful destinations around the world
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <SearchBar />

        {/* Enhanced Stats with Warm Theme */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center animate-fadeInUp w-full max-w-4xl">
          {[
            { number: '10M+', label: 'Happy Guests', subtext: 'worldwide' },
            { number: '2M+', label: 'Unique Stays', subtext: 'available' },
            { number: '200+', label: 'Countries', subtext: 'to explore' }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/20 hover:bg-black/40 hover:border-orange-300/40 transition-all duration-500 hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-orange-500/30">
                <div className="text-5xl md:text-6xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-orange-200 text-lg md:text-xl font-bold uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="text-orange-300/70 text-sm font-medium">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements with Warm Colors */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-400/15 backdrop-blur-sm rounded-full animate-float border border-orange-300/20"></div>
      <div className="absolute top-1/3 right-16 w-40 h-40 bg-yellow-400/15 backdrop-blur-sm rounded-full animate-float border border-yellow-300/20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-red-400/15 backdrop-blur-sm rounded-full animate-float border border-red-300/20" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroSection;
