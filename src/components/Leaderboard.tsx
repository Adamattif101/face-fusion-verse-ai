
import React, { useState } from 'react';
import { Trophy, Crown, Medal, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState<'weekly' | 'monthly' | 'allTime'>('weekly');

  const weeklyLeaders = [
    {
      rank: 1,
      name: "Maya Johnson",
      username: "@mayaj",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      points: 3021,
      likes: 1240,
      posts: 12,
      trend: "+15%"
    },
    {
      rank: 2,
      name: "Alex Chen",
      username: "@alexchenstyle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      points: 2856,
      likes: 1156,
      posts: 10,
      trend: "+8%"
    },
    {
      rank: 3,
      name: "Emma Style",
      username: "@emmastyle",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=100&h=100&fit=crop&crop=face",
      points: 2634,
      likes: 987,
      posts: 9,
      trend: "+22%"
    },
    {
      rank: 4,
      name: "Luna Rodriguez",
      username: "@lunastyle",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      points: 2341,
      likes: 876,
      posts: 8,
      trend: "+5%"
    },
    {
      rank: 5,
      name: "David Kim",
      username: "@davidkimfit",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      points: 2187,
      likes: 743,
      posts: 7,
      trend: "+12%"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold">{rank}</div>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600 text-white";
      default:
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Style Leaderboard
        </h2>
        <p className="text-muted-foreground">Compete with fashion enthusiasts worldwide</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="bg-muted p-1 rounded-lg">
          <Button
            variant={activeCategory === 'weekly' ? 'default' : 'ghost'}
            onClick={() => setActiveCategory('weekly')}
            className={activeCategory === 'weekly' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <Zap className="w-4 h-4 mr-2" />
            Weekly
          </Button>
          <Button
            variant={activeCategory === 'monthly' ? 'default' : 'ghost'}
            onClick={() => setActiveCategory('monthly')}
            className={activeCategory === 'monthly' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <Star className="w-4 h-4 mr-2" />
            Monthly
          </Button>
          <Button
            variant={activeCategory === 'allTime' ? 'default' : 'ghost'}
            onClick={() => setActiveCategory('allTime')}
            className={activeCategory === 'allTime' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <Trophy className="w-4 h-4 mr-2" />
            All Time
          </Button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {weeklyLeaders.slice(0, 3).map((leader, index) => {
          const actualRank = leader.rank;
          const isFirst = actualRank === 1;
          return (
            <Card key={leader.rank} className={`social-card ${isFirst ? 'ring-2 ring-yellow-400' : ''}`}>
              <CardContent className="p-4 text-center">
                <div className="relative mb-3">
                  <img 
                    src={leader.avatar} 
                    alt={leader.name}
                    className={`w-16 h-16 rounded-full object-cover mx-auto ${isFirst ? 'ring-4 ring-yellow-400' : ''}`}
                  />
                  <div className="absolute -top-2 -right-2">
                    {getRankIcon(actualRank)}
                  </div>
                </div>
                <h4 className="font-bold text-sm">{leader.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{leader.username}</p>
                <Badge className={getRankBadgeColor(actualRank)}>
                  {leader.points} SP
                </Badge>
                <div className="flex items-center justify-center mt-2 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {leader.trend}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Full Leaderboard */}
      <Card className="social-card">
        <CardContent className="p-0">
          <div className="space-y-0">
            {weeklyLeaders.map((leader, index) => (
              <div key={leader.rank} className={`p-4 flex items-center justify-between ${index < weeklyLeaders.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(leader.rank)}
                    <img 
                      src={leader.avatar} 
                      alt={leader.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{leader.name}</h4>
                    <p className="text-sm text-muted-foreground">{leader.username}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="font-bold text-sm">{leader.points}</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-sm">{leader.likes}</div>
                    <div className="text-xs text-muted-foreground">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-sm">{leader.posts}</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{leader.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Rank */}
      <Card className="social-card bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                47
              </div>
              <div>
                <h4 className="font-semibold">Your Rank</h4>
                <p className="text-sm text-muted-foreground">Keep posting to climb higher!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">1,520</div>
              <div className="text-sm text-muted-foreground">Style Points</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
