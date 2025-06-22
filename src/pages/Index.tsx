
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedStays from '@/components/FeaturedStays';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularDestinations from '@/components/PopularDestinations';
import TestimonialTrust from '@/components/TestimonialTrust';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  console.log('Index page rendering');
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <FeaturedStays />
      <WhyChooseUs />
      <PopularDestinations />
      <TestimonialTrust />
      <Newsletter />
    </div>
  );
};

export default Index;
