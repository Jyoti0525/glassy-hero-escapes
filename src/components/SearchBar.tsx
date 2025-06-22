
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocationSearch from './LocationSearch';
import DatePicker from './DatePicker';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log('Searching:', { location, checkInDate, checkOutDate, guests });
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Animated border effect */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 animate-pulse">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 via-orange-500 to-red-500 opacity-75 blur-sm animate-pulse"></div>
        <div className="relative bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-6 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Where are you going?
              </label>
              <LocationSearch 
                value={location} 
                onChange={setLocation}
                placeholder="Search destinations..."
                className="w-full"
              />
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Check-in
              </label>
              <DatePicker
                date={checkInDate}
                onDateChange={setCheckInDate}
                placeholder="Select check-in date"
                className="w-full"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Check-out
              </label>
              <DatePicker
                date={checkOutDate}
                onDateChange={setCheckOutDate}
                placeholder="Select check-out date"
                className="w-full"
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num} className="bg-gray-800 text-white">
                      {num} Guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 font-bold text-lg"
            >
              <Search className="w-6 h-6 mr-3" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
