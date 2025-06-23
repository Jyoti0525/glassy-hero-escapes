
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
    name: 'Mountain Adventure Retreat',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="bg-gray-800/90 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-gray-300 hover:text-white hover:bg-gray-700 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Complete Your Adventure Booking
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
            <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-3xl animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-24 h-24 rounded-2xl object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{property.name}</h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-orange-400" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-orange-400 fill-current" />
                        <span className="text-sm font-semibold">{property.rating}</span>
                        <span className="text-sm">({property.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">Up to {property.guests} adventurers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Details */}
            <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-3xl animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-orange-400" />
                  Your Adventure Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">Check-in</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600 hover:border-orange-500 rounded-2xl h-12",
                            !checkIn && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600 shadow-xl rounded-2xl" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          className="pointer-events-auto text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">Check-out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600 hover:border-orange-500 rounded-2xl h-12",
                            !checkOut && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-600 shadow-xl rounded-2xl" align="start">
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
                </div>

                {/* Guest Selection */}
                <div>
                  <Label className="text-gray-300 mb-2 block font-medium">Adventurers</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white hover:bg-gray-600 hover:border-orange-500 rounded-2xl h-12">
                      <SelectValue placeholder="Select adventurers" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 shadow-xl rounded-2xl">
                      <SelectItem value="1">1 Adventurer</SelectItem>
                      <SelectItem value="2">2 Adventurers</SelectItem>
                      <SelectItem value="3">3 Adventurers</SelectItem>
                      <SelectItem value="4">4 Adventurers</SelectItem>
                      <SelectItem value="5">5+ Adventurers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-3xl animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">First Name</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="John" />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">Last Name</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label className="text-gray-300 mb-2 block font-medium">Email</Label>
                  <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <Label className="text-gray-300 mb-2 block font-medium">Card Number</Label>
                  <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">Expiry Date</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2 block font-medium">CVC</Label>
                    <Input className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-orange-500 rounded-2xl h-12" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-xl rounded-3xl animate-fadeInUp">
                <CardHeader>
                  <CardTitle className="text-white">Adventure Summary</CardTitle>
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
                      <div className="border-t border-gray-600 pt-3">
                        <div className="flex justify-between text-xl font-bold text-white">
                          <span>Total</span>
                          <span className="text-orange-400">${total}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-green-900/50 p-3 rounded-2xl border border-green-700/50">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Your adventure is protected by our secure booking guarantee</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    Confirm Adventure ${total}
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
