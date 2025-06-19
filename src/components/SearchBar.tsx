
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className="w-full max-w-5xl mx-auto animate-fadeInUp">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Location */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white group-hover:border-blue-300"
            />
          </div>

          {/* Check-In */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check-In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white group-hover:border-blue-300"
            />
          </div>

          {/* Check-Out */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white group-hover:border-blue-300"
            />
          </div>

          {/* Guests */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-gray-50/50 hover:bg-white group-hover:border-blue-300 appearance-none cursor-pointer"
            >
              <option value="">How many?</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 animate-glow">
            <Search className="w-5 h-5" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
