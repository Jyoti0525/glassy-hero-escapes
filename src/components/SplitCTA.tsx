
import React from 'react';
import { Button } from '@/components/ui/button';
import { Suitcase, Home } from 'lucide-react';

const SplitCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Travelers Side */}
          <div className="relative group">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl lg:rounded-r-none animate-pulse opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-3xl lg:rounded-r-none opacity-0 group-hover:opacity-80 transition-opacity duration-700 animate-float" />
            
            {/* Glowing Edge Effect */}
            <div className="absolute inset-0 rounded-3xl lg:rounded-r-none shadow-2xl group-hover:shadow-blue-500/30 group-hover:shadow-3xl transition-all duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-12 lg:p-16 text-center lg:text-left h-full flex flex-col justify-center min-h-[400px]">
              {/* Floating Icon */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Suitcase className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Explore
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                  Unique Stays
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Discover extraordinary places to stay around the world. From cozy cabins to luxury villas.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="relative bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                >
                  <span className="relative z-10">Start Exploring</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Hosts Side */}
          <div className="relative group">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-500 rounded-3xl lg:rounded-l-none animate-pulse opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-600 rounded-3xl lg:rounded-l-none opacity-0 group-hover:opacity-80 transition-opacity duration-700 animate-float" />
            
            {/* Glowing Edge Effect */}
            <div className="absolute inset-0 rounded-3xl lg:rounded-l-none shadow-2xl group-hover:shadow-emerald-500/30 group-hover:shadow-3xl transition-all duration-500" />
            
            {/* Content */}
            <div className="relative z-10 p-12 lg:p-16 text-center lg:text-left h-full flex flex-col justify-center min-h-[400px]">
              {/* Floating Icon */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                List Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-200">
                  Property
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Turn your space into income. Join thousands of hosts earning with their properties.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="relative bg-white text-emerald-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitCTA;
