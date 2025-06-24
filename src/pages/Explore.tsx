
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Wifi, Car, Coffee, Users, Search, Filter } from 'lucide-react';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Luxury Mountain Retreat',
      location: 'Aspen, Colorado',
      price: 450,
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
      amenities: ['Wifi', 'Parking', 'Coffee', 'Hot Tub'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 2,
      title: 'Beachfront Paradise Villa',
      location: 'Malibu, California',
      price: 650,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c223?w=500&h=300&fit=crop',
      amenities: ['Ocean View', 'Wifi', 'Parking', 'Pool'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: 3,
      title: 'Cozy Forest Cabin',
      location: 'Lake Tahoe, Nevada',
      price: 280,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      amenities: ['Fireplace', 'Wifi', 'Kitchen', 'Hiking'],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 4,
      title: 'Urban Loft Experience',
      location: 'New York, NY',
      price: 320,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      amenities: ['City View', 'Wifi', 'Gym', 'Rooftop'],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 5,
      title: 'Desert Oasis Retreat',
      location: 'Sedona, Arizona',
      price: 380,
      rating: 4.9,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop',
      amenities: ['Pool', 'Spa', 'Wifi', 'Hiking'],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 6,
      title: 'Lakeside Modern Home',
      location: 'Austin, Texas',
      price: 420,
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop',
      amenities: ['Lake Access', 'Wifi', 'Boat', 'BBQ'],
      guests: 10,
      bedrooms: 5,
      bathrooms: 3
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi': return <Wifi className="w-4 h-4" />;
      case 'Parking': return <Car className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      default: return <Coffee className="w-4 h-4" />;
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !priceRange || 
                        (priceRange === 'low' && property.price < 300) ||
                        (priceRange === 'medium' && property.price >= 300 && property.price < 500) ||
                        (priceRange === 'high' && property.price >= 500);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent mb-6">
              Explore Amazing Stays
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover unique vacation rentals that match your adventure spirit and create unforgettable memories
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 rounded-2xl h-14 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white rounded-2xl h-14 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="low" className="text-white hover:bg-gray-700">Under $300</SelectItem>
                  <SelectItem value="medium" className="text-white hover:bg-gray-700">$300 - $500</SelectItem>
                  <SelectItem value="high" className="text-white hover:bg-gray-700">Over $500</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white rounded-2xl h-14 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="cabin" className="text-white hover:bg-gray-700">Cabin</SelectItem>
                  <SelectItem value="villa" className="text-white hover:bg-gray-700">Villa</SelectItem>
                  <SelectItem value="apartment" className="text-white hover:bg-gray-700">Apartment</SelectItem>
                  <SelectItem value="house" className="text-white hover:bg-gray-700">House</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl h-14 font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                <Filter className="w-5 h-5 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <Card 
                key={property.id} 
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-3xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-105 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gray-900/80 text-white border-gray-700">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {property.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-orange-500/90 text-white font-bold text-lg px-3 py-1">
                      ${property.price}/night
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{property.guests} guests</span>
                    <span className="mx-2">•</span>
                    <span>{property.bedrooms} bed</span>
                    <span className="mx-2">•</span>
                    <span>{property.bathrooms} bath</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 4).map((amenity, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-700/50 text-gray-300 border-gray-600">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      {property.reviews} reviews
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
