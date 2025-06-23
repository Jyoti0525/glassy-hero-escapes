
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Coffee, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedStays = () => {
  const stays = [
    {
      id: 1,
      name: 'Mountain Lodge Retreat',
      location: 'Swiss Alps, Switzerland',
      price: 299,
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      amenities: [Wifi, Car, Coffee],
      guests: 6,
      description: 'Luxury mountain lodge with panoramic Alpine views',
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Cozy Forest Cabin',
      location: 'Yellowstone, USA',
      price: 189,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
      amenities: [Wifi, Coffee],
      guests: 4,
      description: 'Rustic cabin surrounded by pristine wilderness',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Beachfront Villa',
      location: 'Bali, Indonesia',
      price: 459,
      rating: 5.0,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop',
      amenities: [Wifi, Car, Coffee],
      guests: 8,
      description: 'Tropical paradise with private beach access',
      badge: 'Luxury'
    },
    {
      id: 4,
      name: 'Desert Glamping',
      location: 'Sahara, Morocco',
      price: 229,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop',
      amenities: [Coffee],
      guests: 2,
      description: 'Luxury camping under the stars'
    },
    {
      id: 5,
      name: 'Lakeside Cottage',
      location: 'Lake District, UK',
      price: 159,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop',
      amenities: [Wifi, Coffee],
      guests: 4,
      description: 'Charming cottage with lake views'
    },
    {
      id: 6,
      name: 'Urban Loft',
      location: 'Tokyo, Japan',
      price: 189,
      rating: 4.8,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?q=80&w=800&auto=format&fit=crop',
      amenities: [Wifi, Car],
      guests: 3,
      description: 'Modern loft in the heart of the city'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-500/20">
            <Star className="w-4 h-4 fill-current" />
            Featured Properties
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Handpicked <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Stays</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exceptional accommodations that offer the perfect blend of comfort, adventure, and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div 
              key={stay.id}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/30 hover:border-orange-500/40 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 relative"
            >
              {/* Badge */}
              {stay.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {stay.badge}
                </div>
              )}
              
              {/* Heart Icon */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/60 hover:scale-110">
                <Heart className="w-5 h-5 text-white hover:fill-red-500 hover:text-red-500 transition-colors duration-300" />
              </button>

              <div className="relative h-72 overflow-hidden">
                <img 
                  src={stay.image} 
                  alt={stay.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-gray-900 font-bold text-sm">{stay.rating}</span>
                  <span className="text-gray-600 text-sm">({stay.reviews})</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                      {stay.name}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="text-sm line-clamp-1">{stay.location}</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      ${stay.price}
                    </div>
                    <div className="text-sm text-gray-400">per night</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                  {stay.description}
                </p>

                {/* Amenities */}
                <div className="flex items-center justify-between py-3 border-t border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    {stay.amenities.slice(0, 3).map((Amenity, index) => (
                      <div key={index} className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
                        <Amenity className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                    ))}
                    {stay.amenities.length > 3 && (
                      <span className="text-xs text-gray-500">+{stay.amenities.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{stay.guests}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Link to={`/property/${stay.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-orange-500/50 transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                  <Link 
                    to="/booking" 
                    state={{ property: stay }}
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-transparent to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/explore">
            <Button className="bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-orange-500/25">
              Explore All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
