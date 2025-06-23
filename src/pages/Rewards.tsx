
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Gift, Zap, Crown } from 'lucide-react';

const Rewards = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Earn Points",
      description: "Get 10 points for every dollar spent on bookings"
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Exclusive Deals",
      description: "Access member-only discounts and special offers"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Priority Support",
      description: "Get faster customer service and priority booking"
    },
    {
      icon: <Crown className="w-8 h-8 text-amber-500" />,
      title: "VIP Status",
      description: "Unlock premium perks and exclusive experiences"
    }
  ];

  const handleJoinRewards = () => {
    console.log('Joining rewards program');
    // Add rewards signup logic here
    alert('Welcome to StayScape Rewards! You\'ve been enrolled.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            StayScape Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our exclusive rewards program and unlock amazing benefits, points, and perks with every stay.
          </p>
          <Button 
            onClick={handleJoinRewards}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Join Rewards Program
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mx-auto w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-700">Silver</CardTitle>
                <p className="text-gray-600">0-999 points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10 points per $1 spent</li>
                  <li>• Basic customer support</li>
                  <li>• Newsletter updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/80 backdrop-blur-sm border border-yellow-200 rounded-3xl transform scale-105 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-yellow-700">Gold</CardTitle>
                <p className="text-yellow-600">1000-4999 points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-yellow-700">
                  <li>• 15 points per $1 spent</li>
                  <li>• Priority customer support</li>
                  <li>• Exclusive deals</li>
                  <li>• Early booking access</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/80 backdrop-blur-sm border border-purple-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-purple-700">Platinum</CardTitle>
                <p className="text-purple-600">5000+ points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-purple-700">
                  <li>• 20 points per $1 spent</li>
                  <li>• VIP customer support</li>
                  <li>• Premium exclusive deals</li>
                  <li>• Room upgrades</li>
                  <li>• Personal concierge</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
