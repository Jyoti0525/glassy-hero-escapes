
import React from 'react';
import { Shield, Clock, Award, Heart, MapPin, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your bookings are protected with our secure payment system and cancellation policies.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or concerns.'
    },
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'We guarantee the best prices for your perfect vacation rental experience.'
    },
    {
      icon: Heart,
      title: 'Handpicked Properties',
      description: 'Every property is carefully selected and verified for quality and comfort.'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Discover unique stays in the most beautiful and accessible locations worldwide.'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'Join thousands of satisfied travelers who trust us for their vacation needs.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">StayScape</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing you with the best vacation rental experience possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
