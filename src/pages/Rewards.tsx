
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Gift, Zap, Crown } from 'lucide-react';

const Rewards = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-orange-400" />,
      title: "Earn Points",
      description: "Get 10 points for every dollar spent on adventures"
    },
    {
      icon: <Gift className="w-8 h-8 text-red-400" />,
      title: "Exclusive Deals",
      description: "Access member-only discounts and special adventure offers"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Priority Support",
      description: "Get faster customer service and priority booking"
    },
    {
      icon: <Crown className="w-8 h-8 text-amber-400" />,
      title: "VIP Status",
      description: "Unlock premium perks and exclusive adventure experiences"
    }
  ];

  const handleJoinRewards = () => {
    console.log('Joining rewards program');
    alert('Welcome to StayScape Adventure Rewards! You\'ve been enrolled.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl pt-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Adventure Rewards
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our exclusive adventure rewards program and unlock amazing benefits, points, and perks with every journey.
          </p>
          <Button 
            onClick={handleJoinRewards}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Join Adventure Program
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-3xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mx-auto w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-8">Adventure Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-300">Explorer</CardTitle>
                <p className="text-gray-400">0-999 points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• 10 points per $1 spent</li>
                  <li>• Basic adventure support</li>
                  <li>• Newsletter updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/30 rounded-3xl transform scale-105 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-orange-300">Adventurer</CardTitle>
                <p className="text-orange-400">1000-4999 points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-orange-200">
                  <li>• 15 points per $1 spent</li>
                  <li>• Priority adventure support</li>
                  <li>• Exclusive adventure deals</li>
                  <li>• Early booking access</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-yellow-300">Legend</CardTitle>
                <p className="text-yellow-400">5000+ points</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-yellow-200">
                  <li>• 20 points per $1 spent</li>
                  <li>• VIP adventure support</li>
                  <li>• Premium exclusive deals</li>
                  <li>• Accommodation upgrades</li>
                  <li>• Personal adventure concierge</li>
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
