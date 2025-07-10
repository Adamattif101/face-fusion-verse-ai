
import React from 'react';
import { Trophy, Star, Crown, Award, Gift, Zap, Sparkles, Target, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FashionRewards = () => {
  const userStats = {
    points: 2450,
    level: 8,
    badges: 12,
    streak: 15
  };

  const badges = [
    { icon: Trophy, name: "Style Champion", description: "Won 5 style challenges", color: "from-yellow-500 to-orange-400", earned: true },
    { icon: Star, name: "Trendsetter", description: "Created trending outfit", color: "from-pink-500 to-purple-400", earned: true },
    { icon: Crown, name: "Fashion Royalty", description: "Reached level 10", color: "from-purple-500 to-indigo-400", earned: false },
    { icon: Award, name: "Community Favorite", description: "Got 1000+ likes", color: "from-green-500 to-emerald-400", earned: true },
    { icon: Gift, name: "Early Adopter", description: "Joined in first month", color: "from-blue-500 to-cyan-400", earned: true },
    { icon: Zap, name: "Quick Stylist", description: "Posted 30 outfits in a week", color: "from-red-500 to-pink-400", earned: false }
  ];

  const rewards = [
    { points: 500, reward: "Custom Profile Frame", available: true },
    { points: 1000, reward: "Exclusive Style Filters", available: true },
    { points: 2000, reward: "Premium Badge Collection", available: true },
    { points: 3000, reward: "VIP Challenge Access", available: false },
    { points: 5000, reward: "Personal Style Consultant", available: false }
  ];

  const challenges = [
    { name: "Daily Style Share", points: 50, progress: 3, total: 7, description: "Share an outfit 7 days in a row" },
    { name: "Color Coordination", points: 100, progress: 2, total: 5, description: "Create 5 monochrome outfits" },
    { name: "Vintage Vibes", points: 150, progress: 1, total: 3, description: "Style 3 vintage-inspired looks" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Fashion Rewards
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Earn style points, unlock exclusive badges, and get rewarded for your fashion creativity!
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{userStats.points}</div>
              <div className="text-gray-300">Style Points</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{userStats.level}</div>
              <div className="text-gray-300">Level</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">{userStats.badges}</div>
              <div className="text-gray-300">Badges</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{userStats.streak}</div>
              <div className="text-gray-300">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Badges Section */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>Achievement Badges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border ${
                      badge.earned 
                        ? 'bg-gradient-to-r ' + badge.color + ' border-white/30' 
                        : 'bg-gray-800/50 border-gray-600 opacity-50'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <badge.icon className={`w-8 h-8 ${badge.earned ? 'text-white' : 'text-gray-400'}`} />
                      <div className={`font-semibold text-sm ${badge.earned ? 'text-white' : 'text-gray-400'}`}>
                        {badge.name}
                      </div>
                      <div className={`text-xs ${badge.earned ? 'text-white/80' : 'text-gray-500'}`}>
                        {badge.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rewards Shop */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Gift className="w-6 h-6 text-pink-400" />
                <span>Rewards Shop</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div>
                      <div className="font-semibold text-white">{reward.reward}</div>
                      <div className="text-yellow-400 font-medium">{reward.points} points</div>
                    </div>
                    <Button 
                      variant={reward.available ? "default" : "ghost"}
                      disabled={!reward.available}
                      className={reward.available 
                        ? "bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500" 
                        : "opacity-50 cursor-not-allowed"
                      }
                    >
                      {reward.available ? "Redeem" : "Locked"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Challenges */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <Target className="w-6 h-6 text-green-400" />
              <span>Active Challenges</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white">{challenge.name}</h3>
                    <div className="text-yellow-400 font-semibold">+{challenge.points}</div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{challenge.description}</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{challenge.progress}/{challenge.total}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full text-cyan-400 hover:bg-cyan-400/10 border border-cyan-400/30"
                  >
                    Continue Challenge
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FashionRewards;
