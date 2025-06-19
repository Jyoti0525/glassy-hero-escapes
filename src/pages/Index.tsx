
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedStays from '@/components/FeaturedStays';
import ListingPreview from '@/components/ListingPreview';
import TestimonialTrust from '@/components/TestimonialTrust';
import SplitCTA from '@/components/SplitCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedStays />
      <ListingPreview />
      <TestimonialTrust />
      <SplitCTA />
    </div>
  );
};

export default Index;
