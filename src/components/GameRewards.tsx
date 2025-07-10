
import React from 'react';
import { Trophy, Star, Zap, Crown, Medal, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GameRewards = () => {
  const userStats = {
    level: 12,
    xp: 2840,
    xpToNext: 3200,
    stylePoints: 1520,
    rank: "#47",
    badges: [
      { name: "Style Icon", icon: Crown, color: "hsl(var(--gold-reward))" },
      { name: "Trendsetter", icon: Star, color: "hsl(var(--accent))" },
      { name: "Daily Poster", icon: Zap, color: "hsl(var(--info-blue))" },
    ]
  };

  const weeklyRewards = [
    { day: "Mon", completed: true, reward: "10 SP" },
    { day: "Tue", completed: true, reward: "15 SP" },
    { day: "Wed", completed: false, reward: "Badge" },
    { day: "Thu", completed: false, reward: "20 SP" },
    { day: "Fri", completed: false, reward: "Premium Filter" },
    { day: "Sat", completed: false, reward: "25 SP" },
    { day: "Sun", completed: false, reward: "Mystery Box" },
  ];

  return (
    <div className="space-y-6">
      {/* Level Progress */}
      <Card className="social-card instagram-gradient">
        <CardContent className="p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Level {userStats.level}</h3>
                <p className="text-white/80">Style Master</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{userStats.stylePoints}</div>
              <div className="text-white/80 text-sm">Style Points</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level {userStats.level + 1}</span>
              <span>{userStats.xp}/{userStats.xpToNext} XP</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${(userStats.xp / userStats.xpToNext) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges Collection */}
      <Card className="social-card">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold mb-4">Achievement Badges</h4>
          <div className="grid grid-cols-3 gap-4">
            {userStats.badges.map((badge, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto"
                  style={{ backgroundColor: badge.color + "20", border: `2px solid ${badge.color}` }}
                >
                  <badge.icon className="w-8 h-8" style={{ color: badge.color }} />
                </div>
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Challenge Progress */}
      <Card className="social-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">Weekly Challenge</h4>
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              2/7 Days
            </Badge>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {weeklyRewards.map((day, index) => (
              <div key={index} className="text-center">
                <div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
                    day.completed 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {day.completed ? (
                    <Trophy className="w-6 h-6" />
                  ) : (
                    <Gift className="w-6 h-6" />
                  )}
                </div>
                <p className="text-xs font-medium">{day.day}</p>
                <p className="text-xs text-muted-foreground">{day.reward}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
          <Medal className="w-4 h-4 mr-2" />
          View Leaderboard
        </Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Star className="w-4 h-4 mr-2" />
          Daily Challenge
        </Button>
      </div>
    </div>
  );
};

export default GameRewards;
