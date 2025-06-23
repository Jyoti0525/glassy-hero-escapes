
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon, ArrowLeft, CreditCard, Shield, Users, MapPin, Star } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const propertyData = location.state?.property;
  
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [currentStep, setCurrentStep] = useState(1);

  // Mock property data if not passed
  const property = propertyData || {
    id: 1,
    name: 'Mountain Lodge Retreat',
    location: 'Swiss Alps, Switzerland',
    price: 299,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    guests: 6,
  };

  const totalNights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const subtotal = totalNights * property.price;
  const serviceFee = 89;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee + taxes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Complete Your Booking
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{property.name}</h3>
                    <div className="flex items-center gap-4 text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{property.rating}</span>
                        <span className="text-sm">({property.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Up to {property.guests} guests</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Details */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-orange-400" />
                  Your Trip Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block">Check-in</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50",
                            !checkIn && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-2 block">Check-out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50",
                            !checkOut && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
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
                </div>

                {/* Guest Selection */}
                <div>
                  <Label className="text-gray-300 mb-2 block">Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-300">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block">First Name</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="John" />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2 block">Last Name</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label className="text-gray-300 mb-2 block">Email</Label>
                  <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <Label className="text-gray-300 mb-2 block">Card Number</Label>
                  <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block">Expiry Date</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2 block">CVC</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-white">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {totalNights > 0 && (
                    <>
                      <div className="space-y-3">
                        <div className="flex justify-between text-gray-300">
                          <span>${property.price} × {totalNights} nights</span>
                          <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Service fee</span>
                          <span>${serviceFee}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Taxes</span>
                          <span>${taxes}</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-700 pt-3">
                        <div className="flex justify-between text-xl font-bold text-white">
                          <span>Total</span>
                          <span className="text-orange-400">${total}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/30 p-3 rounded-lg">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Your payment is protected by our secure booking guarantee</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 rounded-xl">
                    Confirm and Pay ${total}
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    Free cancellation for 48 hours
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

export default Booking;
