
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const LocationSearch = ({ value, onChange, placeholder, className }: LocationSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularDestinations = [
    'Swiss Alps, Switzerland',
    'Bali, Indonesia',
    'Yellowstone, USA',
    'Tokyo, Japan',
    'Sahara, Morocco',
    'Lake District, UK',
    'Tuscany, Italy',
    'Maldives',
    'Iceland',
    'New Zealand',
    'Costa Rica',
    'Norway'
  ];

  useEffect(() => {
    if (value.length > 0) {
      const filtered = popularDestinations.filter(dest =>
        dest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setIsOpen(filtered.length > 0);
    } else {
      setSuggestions(popularDestinations.slice(0, 6));
      setIsOpen(false);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
        />
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl z-50 max-h-64 overflow-y-auto">
          <div className="p-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-3 text-white hover:bg-orange-500/20 hover:text-orange-400 rounded-xl transition-all duration-200 flex items-center space-x-3"
              >
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
