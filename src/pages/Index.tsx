
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedStays from '@/components/FeaturedStays';
import ListingPreview from '@/components/ListingPreview';
import SplitCTA from '@/components/SplitCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedStays />
      <ListingPreview />
      <SplitCTA />
    </div>
  );
};

export default Index;
