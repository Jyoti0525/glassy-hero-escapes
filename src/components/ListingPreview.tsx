import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Bookmark, Share } from 'lucide-react';

const ListingPreview = () => {
  const [activeFilter, setActiveFilter] = useState('beach-homes');
  const navigate = useNavigate();

  const filterTabs = [
    { id: 'beach-homes', label: 'Beach Homes' },
    { id: 'family-stays', label: 'Family Stays' },
    { id: 'cabins', label: 'Cabins' },
    { id: 'pet-friendly', label: 'Pet-Friendly' }
  ];

  const listings = {
    'beach-homes': [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
        name: 'Oceanfront Villa',
        rating: 4.9,
        location: 'Malibu, CA',
        price: 450,
        reviews: 127
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
        name: 'Beachside Cottage',
        rating: 4.8,
        location: 'Santa Monica, CA',
        price: 320,
        reviews: 89
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?q=80&w=800&auto=format&fit=crop',
        name: 'Coastal Retreat',
        rating: 4.7,
        location: 'Big Sur, CA',
        price: 380,
        reviews: 156
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        name: 'Sunset Beach House',
        rating: 4.9,
        location: 'Carmel, CA',
        price: 520,
        reviews: 203
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
        name: 'Modern Beach Loft',
        rating: 4.6,
        location: 'Venice Beach, CA',
        price: 280,
        reviews: 74
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
        name: 'Luxury Waterfront',
        rating: 5.0,
        location: 'Laguna Beach, CA',
        price: 650,
        reviews: 98
      }
    ],
    'family-stays': [
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
        name: 'Family Resort Villa',
        rating: 4.8,
        location: 'Orlando, FL',
        price: 295,
        reviews: 234
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
        name: 'Spacious Family Home',
        rating: 4.7,
        location: 'Austin, TX',
        price: 220,
        reviews: 167
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
        name: 'Kids Paradise House',
        rating: 4.9,
        location: 'San Diego, CA',
        price: 340,
        reviews: 189
      },
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
        name: 'Family Compound',
        rating: 4.6,
        location: 'Phoenix, AZ',
        price: 380,
        reviews: 145
      }
    ],
    'cabins': [
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
        name: 'Mountain Log Cabin',
        rating: 4.8,
        location: 'Aspen, CO',
        price: 280,
        reviews: 112
      },
      {
        id: 12,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
        name: 'Forest Retreat',
        rating: 4.7,
        location: 'Lake Tahoe, CA',
        price: 195,
        reviews: 78
      },
      {
        id: 13,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
        name: 'Lakeside Cabin',
        rating: 4.9,
        location: 'Big Bear, CA',
        price: 240,
        reviews: 156
      },
      {
        id: 14,
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop',
        name: 'Rustic Getaway',
        rating: 4.5,
        location: 'Mammoth Lakes, CA',
        price: 165,
        reviews: 93
      }
    ],
    'pet-friendly': [
      {
        id: 15,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
        name: 'Pet Paradise Villa',
        rating: 4.8,
        location: 'Portland, OR',
        price: 260,
        reviews: 201
      },
      {
        id: 16,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
        name: 'Dog-Friendly Retreat',
        rating: 4.7,
        location: 'Seattle, WA',
        price: 185,
        reviews: 134
      },
      {
        id: 17,
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
        name: 'Pet Haven House',
        rating: 4.9,
        location: 'Denver, CO',
        price: 210,
        reviews: 167
      },
      {
        id: 18,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        name: 'Animal Lovers Lodge',
        rating: 4.6,
        location: 'Nashville, TN',
        price: 175,
        reviews: 98
      }
    ]
  };

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

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xs ${
              i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-xs text-gray-600 ml-1">
          {rating} ({listings[activeFilter as keyof typeof listings].find(l => l.rating === rating)?.reviews})
        </span>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Discover Your Perfect Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collection of exceptional vacation rentals
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-2 h-auto">
            {filterTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-200 hover:bg-gray-50"
              >
                {tab.label}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 data-[state=active]:w-3/4 animate-glow" />
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Listings Grid */}
          {filterTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {listings[tab.id as keyof typeof listings].map((listing, index) => (
                  <Card
                    key={listing.id}
                    onClick={() => handleCardClick(listing.id)}
                    className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer rounded-3xl animate-fadeInUp"
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
                        <button 
                          onClick={(e) => handleBookmark(e, listing.id)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        >
                          <Bookmark className="w-4 h-4 text-gray-700" />
                        </button>
                        <button 
                          onClick={(e) => handleShare(e, listing.id)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        >
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
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ListingPreview;
