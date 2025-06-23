
import React, { useEffect, useRef } from 'react';

const PopularDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      id: 1,
      name: 'Swiss Alps',
      properties: '150+ properties',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      description: 'Mountain retreats with breathtaking views'
    },
    {
      id: 2,
      name: 'Tropical Bali',
      properties: '200+ properties',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop',
      description: 'Paradise beaches and luxury villas'
    },
    {
      id: 3,
      name: 'Cozy Cabins',
      properties: '120+ properties',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
      description: 'Rustic charm in nature settings'
    },
    {
      id: 4,
      name: 'City Escapes',
      properties: '300+ properties',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?q=80&w=800&auto=format&fit=crop',
      description: 'Urban adventures and skyline views'
    },
    {
      id: 5,
      name: 'Beach Houses',
      properties: '180+ properties',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop',
      description: 'Oceanfront properties with private access'
    },
    {
      id: 6,
      name: 'Desert Retreats',
      properties: '80+ properties',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop',
      description: 'Unique desert experiences under starlit skies'
    }
  ];

  // Duplicate destinations for seamless loop
  const duplicatedDestinations = [...destinations, ...destinations];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const cardWidth = 320; // approximate width of each card including gap
    const totalWidth = destinations.length * cardWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through all original items
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Popular <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most sought-after locations for your next adventure
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedDestinations.map((destination, index) => (
            <div 
              key={`${destination.id}-${index}`} 
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-3">
                    {destination.properties}
                  </p>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
