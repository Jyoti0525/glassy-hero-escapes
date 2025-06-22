
import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationSearch = ({ value, onChange, className }: LocationSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock location data - in real app, this would come from an API
  const mockLocations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA',
    'Austin, TX',
    'Jacksonville, FL',
    'Fort Worth, TX',
    'Columbus, OH',
    'Charlotte, NC',
    'San Francisco, CA',
    'Indianapolis, IN',
    'Seattle, WA',
    'Denver, CO',
    'Washington, DC',
    'Boston, MA',
    'Miami, FL',
    'Nashville, TN',
    'Las Vegas, NV',
    'Portland, OR'
  ];

  useEffect(() => {
    if (value.length > 0) {
      const filtered = mockLocations.filter(location =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setIsOpen(filtered.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Where are you going?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pl-12 pr-5 py-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 outline-none hover:bg-white/15 font-medium ${className}`}
        />
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-60 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left text-gray-800 hover:bg-blue-50 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl flex items-center space-x-3"
            >
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
