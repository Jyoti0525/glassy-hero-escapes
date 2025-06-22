
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              StayScape
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover unique stays and experiences around the world. Your next adventure is just a click away.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/explore" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Explore Stays
              </Link>
              <Link to="/host" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Become a Host
              </Link>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                About Us
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Support</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Safety Information
              </a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Cancellation Options
              </a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-gray-300">hello@stayscape.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 StayScape. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
