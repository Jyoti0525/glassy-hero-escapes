
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
    { id: 'all', label: 'All Adventures' },
    { id: 'beach-homes', label: 'Beach Escapes' },
    { id: 'family-stays', label: 'Family Adventures' },
    { id: 'cabins', label: 'Mountain Cabins' },
    { id: 'pet-friendly', label: 'Pet Adventures' }
  ];

  // Mock listings data (in a real app, this would come from an API)
  const allListings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      name: 'Oceanfront Adventure Villa',
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
      name: 'Coastal Adventure Lodge',
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
      name: 'Family Adventure Resort',
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
      name: 'Mountain Adventure Cabin',
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
      name: 'Pet Adventure Paradise',
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

  const handleCardClick = (listingId: number) => {
    navigate(`/property/${listingId}`);
  };

  const handleBookmark = (e: React.MouseEvent, listingId: number) => {
    e.stopPropagation();
    console.log('Bookmarked listing:', listingId);
    // Add bookmark functionality here
  };

  const handleShare = (e: React.MouseEvent, listingId: number) => {
    e.stopPropagation();
    console.log('Shared listing:', listingId);
    // Add share functionality here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Search Summary */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent mb-4">
              {location ? `Adventures in ${location}` : 'Explore Adventures'}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300">
              {location && (
                <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-700">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>{location}</span>
                </div>
              )}
              {checkIn && checkOut && (
                <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-700">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>{checkIn} - {checkOut}</span>
                </div>
              )}
              {guests && (
                <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-700">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>{guests} adventurers</span>
                </div>
              )}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 bg-gray-800/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-700/50 animate-fadeInUp">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 rounded-full border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
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
                  className="max-w-xs rounded-full border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700 focus:border-orange-500 transition-all duration-300"
                />
              </div>
              <div className="text-sm text-gray-300 bg-gray-700/80 px-3 py-1 rounded-full">
                {filteredListings.length} adventures found
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-2xl p-2 h-auto border border-gray-700/50">
              {filterTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-700"
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
                onClick={() => handleCardClick(listing.id)}
                className="group relative overflow-hidden bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-3xl animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Icons */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button 
                      onClick={(e) => handleBookmark(e, listing.id)}
                      className="p-2 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 border border-gray-600"
                    >
                      <Bookmark className="w-4 h-4 text-gray-300" />
                    </button>
                    <button 
                      onClick={(e) => handleShare(e, listing.id)}
                      className="p-2 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 border border-gray-600"
                    >
                      <Share className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 left-3 bg-orange-500/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-sm font-bold text-white">
                      ${listing.price}/night
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                      {listing.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex text-orange-400">
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
                      <span className="text-sm text-gray-300 font-medium">
                        {listing.rating} ({listing.reviews})
                      </span>
                    </div>

                    {/* Location */}
                    <p className="text-gray-400 text-sm font-medium">
                      {listing.location}
                    </p>

                    {/* Guests */}
                    <p className="text-gray-500 text-xs">
                      Up to {listing.guests} adventurers
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredListings.length === 0 && (
            <div className="text-center py-16 animate-fadeInUp">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-2">No adventures found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button 
                onClick={() => {
                  setSearchParams(new URLSearchParams());
                  setActiveFilter('all');
                }}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
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
