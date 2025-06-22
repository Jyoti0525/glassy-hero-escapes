
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DatePicker from './DatePicker';
import LocationSearch from './LocationSearch';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    
    if (location) searchParams.set('location', location);
    if (checkIn) searchParams.set('checkIn', checkIn.toISOString());
    if (checkOut) searchParams.set('checkOut', checkOut.toISOString());
    if (guests) searchParams.set('guests', guests);

    navigate(`/explore?${searchParams.toString()}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fadeInUp">
      <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:bg-white/20 hover:border-white/30 overflow-hidden">
        {/* Animated border lights */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-[slide_3s_linear_infinite] transform -translate-x-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-[slide_3s_linear_infinite_1.5s] transform -translate-x-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Location Search */}
            <div className="group">
              <label className="block text-sm font-bold text-white/95 mb-3 uppercase tracking-wide">
                Location
              </label>
              <LocationSearch
                value={location}
                onChange={setLocation}
                className="group-hover:border-white/30"
              />
            </div>

            {/* Check-In Date */}
            <div className="group">
              <label className="block text-sm font-bold text-white/95 mb-3 uppercase tracking-wide">
                Check-In
              </label>
              <DatePicker
                date={checkIn}
                onDateChange={setCheckIn}
                placeholder="Select date"
                className="group-hover:border-white/30"
              />
            </div>

            {/* Check-Out Date */}
            <div className="group">
              <label className="block text-sm font-bold text-white/95 mb-3 uppercase tracking-wide">
                Check-Out
              </label>
              <DatePicker
                date={checkOut}
                onDateChange={setCheckOut}
                placeholder="Select date"
                className="group-hover:border-white/30"
              />
            </div>

            {/* Guests Selection */}
            <div className="group">
              <label className="block text-sm font-bold text-white/95 mb-3 uppercase tracking-wide">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 outline-none hover:bg-white/15 group-hover:border-white/30 appearance-none cursor-pointer font-medium"
              >
                <option value="" className="text-gray-900">How many?</option>
                <option value="1" className="text-gray-900">1 Guest</option>
                <option value="2" className="text-gray-900">2 Guests</option>
                <option value="3" className="text-gray-900">3 Guests</option>
                <option value="4" className="text-gray-900">4 Guests</option>
                <option value="5" className="text-gray-900">5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-16 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 flex items-center gap-4 border border-white/20 hover:border-white/30 backdrop-blur-sm"
            >
              <Search className="w-6 h-6" />
              Search Properties
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
