
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
    title: 'Luxury Oceanfront Villa with Private Beach Access',
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
      { icon: Users, name: 'Family friendly' },
      { icon: MapPin, name: 'Great location' }
    ],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?q=80&w=150&auto=format&fit=crop',
      rating: 4.8,
      reviews: 89,
      joinedDate: 'Joined in 2018',
      responseRate: '100%',
      responseTime: 'Within an hour'
    },
    description: 'Experience luxury living in this stunning oceanfront villa with breathtaking panoramic views of the Pacific Ocean. This professionally designed home features floor-to-ceiling windows, a private beach access, and world-class amenities.',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8
  };

  const totalNights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = totalNights * property.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation spacer */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{property.rating}</span>
                  <span>({property.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
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
                      currentImageIndex === index ? "border-blue-500 opacity-100" : "border-gray-200 opacity-70"
                    )}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">About this place</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <div className="font-semibold text-lg">{property.bedrooms}</div>
                    <div className="text-gray-600 text-sm">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{property.bathrooms}</div>
                    <div className="text-gray-600 text-sm">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{property.maxGuests}</div>
                    <div className="text-gray-600 text-sm">Guests</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">What this place offers</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <amenity.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Host Profile */}
            <Card className="glass-effect border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={property.host.avatar}
                    alt={property.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Hosted by {property.host.name}</h3>
                    <p className="text-gray-600">{property.host.joinedDate}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{property.host.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{property.host.reviews} Reviews</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{property.host.responseRate}</div>
                    <div className="text-sm text-gray-600">Response rate</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{property.host.responseTime}</div>
                    <div className="text-sm text-gray-600">Response time</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Contact Host
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="glass-effect border-0 shadow-2xl">
                <CardHeader className="pb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${property.price}</span>
                    <span className="text-gray-600">night</span>
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
                            "justify-start text-left font-normal h-12",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd") : "Check-in"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal h-12",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd") : "Check-out"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Guest Selection */}
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Price Breakdown */}
                  {totalNights > 0 && (
                    <div className="space-y-2 py-4 border-t border-gray-100">
                      <div className="flex justify-between">
                        <span>${property.price} x {totalNights} nights</span>
                        <span>${totalPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>$89</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-100">
                        <span>Total</span>
                        <span>${totalPrice + 89}</span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold">
                    Reserve
                  </Button>

                  <p className="text-center text-sm text-gray-600">
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
