
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedStays = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredStays = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
      place: 'Mountain Retreat',
      description: 'Cozy cabin with breathtaking alpine views and modern amenities',
      price: '$150',
      location: 'Aspen, Colorado'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop',
      place: 'Lakeside Haven',
      description: 'Peaceful waterfront escape surrounded by pristine nature',
      price: '$200',
      location: 'Lake Tahoe, California'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop',
      place: 'Coastal Paradise',
      description: 'Luxurious beachfront villa with private access to crystal waters',
      price: '$350',
      location: 'Malibu, California'
    }
  ];

  const FloatingIcon = ({ icon, delay, range }: { icon: string; delay: number; range: number }) => (
    <div
      className="absolute text-4xl opacity-20 pointer-events-none select-none animate-float"
      style={{
        transform: `translate(${mousePosition.x * range}px, ${mousePosition.y * range}px)`,
        animationDelay: `${delay}s`,
        transition: 'transform 0.5s ease-out'
      }}
    >
      {icon}
    </div>
  );

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcon icon="🌴" delay={0} range={0.3} />
      <FloatingIcon icon="🏔️" delay={1} range={0.5} />
      <FloatingIcon icon="🏖️" delay={2} range={0.4} />
      
      <div 
        className="absolute top-20 left-10 text-6xl opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.8s ease-out'
        }}
      >
        🌴
      </div>
      <div 
        className="absolute top-40 right-16 text-5xl opacity-15"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.6s ease-out'
        }}
      >
        🏔️
      </div>
      <div 
        className="absolute bottom-32 left-1/4 text-7xl opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * -0.3}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      >
        🏖️
      </div>
      <div 
        className="absolute top-60 right-1/3 text-4xl opacity-20"
        style={{
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.9s ease-out'
        }}
      >
        🌊
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Stays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked destinations that offer unforgettable experiences
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStays.map((stay, index) => (
            <Card 
              key={stay.id}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fadeInUp rounded-3xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={stay.image} 
                  alt={stay.place}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800 shadow-lg">
                  From {stay.price}/night
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-b-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stay.place}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm font-medium opacity-80">
                    {stay.location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {stay.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide snap-x snap-mandatory">
            {featuredStays.map((stay, index) => (
              <Card 
                key={stay.id}
                className="group relative flex-shrink-0 w-80 overflow-hidden bg-white/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 cursor-pointer rounded-3xl snap-center"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={stay.image} 
                    alt={stay.place}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-800 shadow-lg">
                    From {stay.price}/night
                  </div>
                </div>
                
                <CardContent className="p-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-b-3xl" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {stay.place}
                    </h3>
                    <p className="text-gray-600 mb-2 text-xs font-medium opacity-80">
                      {stay.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {stay.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default FeaturedStays;
