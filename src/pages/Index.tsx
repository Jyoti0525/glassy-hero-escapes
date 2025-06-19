
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedStays from '@/components/FeaturedStays';
import ListingPreview from '@/components/ListingPreview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedStays />
      <ListingPreview />
    </div>
  );
};

export default Index;
