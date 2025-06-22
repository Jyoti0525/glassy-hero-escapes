
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Star, Users, Award, Ribbon, Shield, Clock } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Amazing experience! The cabin was exactly as described and the host was incredibly welcoming. Perfect getaway!",
    location: "Mountain Cabin, Colorado"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Beautiful beachfront property with stunning views. Clean, comfortable, and great communication from the host.",
    location: "Beach House, California"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Family-friendly space with everything we needed. Kids loved the pool and we appreciated the thoughtful amenities.",
    location: "Family Villa, Florida"
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "/placeholder.svg",
    rating: 4,
    text: "Cozy apartment in the heart of the city. Walking distance to everything and very well maintained.",
    location: "City Loft, New York"
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Verified Hosts",
    description: "All hosts are background-checked and verified for your safety"
  },
  {
    icon: Award,
    title: "Secure Booking",
    description: "Your payment is protected with 256-bit SSL encryption"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for peace of mind"
  }
];

const TestimonialTrust = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Dark Background with Adventure Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full opacity-50 animate-float" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of happy travelers who have found their perfect adventure
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="group h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transform hover:scale-105 transition-all duration-500 hover:border-orange-500/40">
                    <CardContent className="p-8">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold transform group-hover:rotate-12 transition-transform duration-300">
                          "
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-4 space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`w-5 h-5 ${
                              index < testimonial.rating
                                ? 'text-orange-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>

                      {/* User Info */}
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12 ring-2 ring-orange-500/30 ring-offset-2 ring-offset-gray-800">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
            <CarouselNext className="hidden md:flex -right-12 bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
          </Carousel>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:border-orange-500/40"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loyalty Program Banner */}
        <Card className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 border-0 shadow-2xl relative overflow-hidden">
          {/* Floating Badge Icons */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-float">
            <Star className="w-4 h-4 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <Award className="w-3 h-3 text-white" />
          </div>

          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 animate-pulse">
                <Ribbon className="w-5 h-5 mr-2" />
                Premium Rewards
              </Badge>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Join Our Adventure Club
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Earn points with every booking, unlock exclusive discounts, and get early access to new adventures
            </p>
            
            <Link to="/rewards">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
              >
                Join Adventure Club
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialTrust;
