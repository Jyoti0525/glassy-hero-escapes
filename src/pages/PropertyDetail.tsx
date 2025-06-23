
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Users, Heart, Share, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const PropertyDetail = () => {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock property data - in a real app, this would come from an API
  const property = {
    id: id,
    title: 'Luxury Adventure Villa with Epic Mountain Views',
    location: 'Malibu, California',
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Free parking' },
      { icon: Users, name: 'Adventure friendly' },
      { icon: MapPin, name: 'Epic location' }
    ],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?q=80&w=150&auto=format&fit=crop',
      rating: 4.8,
      reviews: 89,
      joinedDate: 'Adventure host since 2018',
      responseRate: '100%',
      responseTime: 'Within an hour'
    },
    description: 'Experience the ultimate adventure in this stunning luxury villa with breathtaking panoramic mountain views. This professionally designed home features floor-to-ceiling windows, epic outdoor spaces, and world-class amenities perfect for your next adventure.',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8
  };

  const totalNights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = totalNights * property.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation spacer */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                  <span className="font-semibold">{property.rating}</span>
                  <span>({property.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                <Share className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                <Heart className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                      currentImageIndex === index ? "border-orange-500 opacity-100" : "border-gray-600 opacity-70"
                    )}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">About this adventure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
                  <div className="text-center">
                    <div className="font-semibold text-lg text-white">{property.bedrooms}</div>
                    <div className="text-gray-400 text-sm">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-white">{property.bathrooms}</div>
                    <div className="text-gray-400 text-sm">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-white">{property.maxGuests}</div>
                    <div className="text-gray-400 text-sm">Adventurers</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-white">What this adventure offers</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <amenity.icon className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-300">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Host Profile */}
            <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-xl rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={property.host.avatar}
                    alt={property.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Hosted by {property.host.name}</h3>
                    <p className="text-gray-400">{property.host.joinedDate}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="font-semibold text-white">{property.host.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{property.host.reviews} Reviews</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white">{property.host.responseRate}</div>
                    <div className="text-sm text-gray-400">Response rate</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white">{property.host.responseTime}</div>
                    <div className="text-sm text-gray-400">Response time</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                  Contact Host
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl rounded-3xl">
                <CardHeader className="pb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">${property.price}</span>
                    <span className="text-gray-400">night</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date Selection */}
                  <div className="grid grid-cols-2 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal h-12 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600",
                            !checkIn && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd") : "Check-in"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          className="pointer-events-auto text-white"
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal h-12 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600",
                            !checkOut && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd") : "Check-out"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          className="pointer-events-auto text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Guest Selection */}
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="h-12 bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600">
                      <SelectValue placeholder="Adventurers" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="1">1 Adventurer</SelectItem>
                      <SelectItem value="2">2 Adventurers</SelectItem>
                      <SelectItem value="3">3 Adventurers</SelectItem>
                      <SelectItem value="4">4 Adventurers</SelectItem>
                      <SelectItem value="5">5+ Adventurers</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Price Breakdown */}
                  {totalNights > 0 && (
                    <div className="space-y-2 py-4 border-t border-gray-700">
                      <div className="flex justify-between text-gray-300">
                        <span>${property.price} x {totalNights} nights</span>
                        <span>${totalPrice}  </span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Service fee</span>
                        <span>$89</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-700 text-white">
                        <span>Total</span>
                        <span className="text-orange-400">${totalPrice + 89}</span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-2xl">
                    Reserve Adventure
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
