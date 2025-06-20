import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bookmark, Share, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get search parameters
  const location = searchParams.get('location') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const guests = searchParams.get('guests') || '';

  const filterTabs = [
    { id: 'all', label: 'All Properties' },
    { id: 'beach-homes', label: 'Beach Homes' },
    { id: 'family-stays', label: 'Family Stays' },
    { id: 'cabins', label: 'Cabins' },
    { id: 'pet-friendly', label: 'Pet-Friendly' }
  ];

  // Mock listings data (in a real app, this would come from an API)
  const allListings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      name: 'Oceanfront Villa',
      rating: 4.9,
      location: 'Malibu, CA',
      price: 450,
      reviews: 127,
      category: 'beach-homes',
      guests: 6
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
      name: 'Beachside Cottage',
      rating: 4.8,
      location: 'Santa Monica, CA',
      price: 320,
      reviews: 89,
      category: 'beach-homes',
      guests: 4
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      name: 'Family Resort Villa',
      rating: 4.8,
      location: 'Orlando, FL',
      price: 295,
      reviews: 234,
      category: 'family-stays',
      guests: 8
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
      name: 'Mountain Log Cabin',
      rating: 4.8,
      location: 'Aspen, CO',
      price: 280,
      reviews: 112,
      category: 'cabins',
      guests: 6
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      name: 'Pet Paradise Villa',
      rating: 4.8,
      location: 'Portland, OR',
      price: 260,
      reviews: 201,
      category: 'pet-friendly',
      guests: 4
    }
  ];

  // Filter listings based on active filter and search params
  const filteredListings = allListings.filter(listing => {
    const matchesCategory = activeFilter === 'all' || listing.category === activeFilter;
    const matchesLocation = !location || listing.location.toLowerCase().includes(location.toLowerCase());
    const matchesGuests = !guests || listing.guests >= parseInt(guests);
    return matchesCategory && matchesLocation && matchesGuests;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Search Summary */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {location ? `Stays in ${location}` : 'Explore Stays'}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
              {checkIn && checkOut && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{checkIn} - {checkOut}</span>
                </div>
              )}
              {guests && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{guests} guests</span>
                </div>
              )}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
                <Input
                  placeholder="Search destinations..."
                  value={location}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value) {
                      newParams.set('location', e.target.value);
                    } else {
                      newParams.delete('location');
                    }
                    setSearchParams(newParams);
                  }}
                  className="max-w-xs"
                />
              </div>
              <div className="text-sm text-gray-600">
                {filteredListings.length} properties found
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-2 h-auto">
              {filterTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredListings.map((listing, index) => (
              <Card
                key={listing.id}
                className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Icons */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                      <Bookmark className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                      <Share className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-sm font-bold text-gray-900">
                      ${listing.price}/night
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {listing.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(listing.rating) ? 'opacity-100' : 'opacity-30'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {listing.rating} ({listing.reviews})
                      </span>
                    </div>

                    {/* Location */}
                    <p className="text-gray-600 text-sm font-medium">
                      {listing.location}
                    </p>

                    {/* Guests */}
                    <p className="text-gray-500 text-xs">
                      Up to {listing.guests} guests
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredListings.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={() => {
                setSearchParams(new URLSearchParams());
                setActiveFilter('all');
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
