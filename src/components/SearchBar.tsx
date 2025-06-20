import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    
    if (location) searchParams.set('location', location);
    if (checkIn) searchParams.set('checkIn', checkIn);
    if (checkOut) searchParams.set('checkOut', checkOut);
    if (guests) searchParams.set('guests', guests);

    navigate(`/explore?${searchParams.toString()}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fadeInUp">
      <div className="bg-white/15 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:bg-white/20 hover:border-white/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Enhanced Input Fields */}
          {[
            { label: 'Location', placeholder: 'Where are you going?', value: location, onChange: setLocation, type: 'text' },
            { label: 'Check-In', placeholder: '', value: checkIn, onChange: setCheckIn, type: 'date' },
            { label: 'Check-Out', placeholder: '', value: checkOut, onChange: setCheckOut, type: 'date' },
            { label: 'Guests', placeholder: 'How many?', value: guests, onChange: setGuests, type: 'select' }
          ].map((field, index) => (
            <div key={index} className="group">
              <label className="block text-sm font-bold text-white/95 mb-3 uppercase tracking-wide">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 outline-none hover:bg-white/15 group-hover:border-white/30 appearance-none cursor-pointer font-medium"
                >
                  <option value="" className="text-gray-900">{field.placeholder}</option>
                  <option value="1" className="text-gray-900">1 Guest</option>
                  <option value="2" className="text-gray-900">2 Guests</option>
                  <option value="3" className="text-gray-900">3 Guests</option>
                  <option value="4" className="text-gray-900">4 Guests</option>
                  <option value="5" className="text-gray-900">5+ Guests</option>
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 outline-none hover:bg-white/15 group-hover:border-white/30 font-medium"
                />
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Search Button */}
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
  );
};

export default SearchBar;
