
import React from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Users } from 'lucide-react';
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
      description: 'Luxury mountain lodge with panoramic Alpine views'
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
      description: 'Rustic cabin surrounded by pristine wilderness'
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
      description: 'Tropical paradise with private beach access'
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Featured <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Stays</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Handpicked accommodations that offer the perfect blend of comfort, adventure, and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div 
              key={stay.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={stay.image} 
                  alt={stay.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{stay.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {stay.name}
                    </h3>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{stay.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-400">${stay.price}</div>
                    <div className="text-sm text-gray-400">per night</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {stay.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {stay.amenities.map((Amenity, index) => (
                      <div key={index} className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                        <Amenity className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{stay.guests} guests</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {stay.reviews} reviews
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
