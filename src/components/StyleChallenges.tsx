
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Calendar, Users, Sparkles, Star, Clock, Heart, Target } from 'lucide-react';

const StyleChallenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Vintage Vibes Week",
      description: "Style outfits inspired by different decades. Show us your retro fashion game!",
      deadline: "5 days left",
      participants: 1247,
      prize: "500 Style Points",
      difficulty: "Medium",
      category: "Themed",
      color: "from-amber-500 to-orange-400"
    },
    {
      id: 2,
      title: "Sustainable Sunday",
      description: "Create amazing looks using only thrifted or sustainable fashion pieces",
      deadline: "2 days left",
      participants: 892,
      prize: "Eco-Warrior Badge",
      difficulty: "Easy",
      category: "Sustainability",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 3,
      title: "Color Pop Challenge",
      description: "Bold and bright! Style an outfit featuring at least 3 vibrant colors",
      deadline: "1 week left",
      participants: 2156,
      prize: "1000 Style Points",
      difficulty: "Hard",
      category: "Color Theory",
      color: "from-pink-500 to-purple-400"
    },
    {
      id: 4,
      title: "Minimalist Monday",
      description: "Less is more. Create a stunning look with 3 pieces or fewer",
      deadline: "3 days left",
      participants: 1834,
      prize: "Minimalist Master Badge",
      difficulty: "Medium",
      category: "Minimalism",
      color: "from-gray-500 to-slate-400"
    },
    {
      id: 5,
      title: "Accessory Takeover",
      description: "Let accessories be the star! Style an outfit where accessories steal the show",
      deadline: "4 days left",
      participants: 967,
      prize: "Accessory Queen Badge",
      difficulty: "Easy",
      category: "Accessories",
      color: "from-rose-500 to-pink-400"
    },
    {
      id: 6,
      title: "Pattern Mix Master",
      description: "Mix and match different patterns in one cohesive, stylish outfit",
      deadline: "6 days left",
      participants: 743,
      prize: "Pattern Pro Badge",
      difficulty: "Hard",
      category: "Patterns",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Style Challenges
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Join weekly fashion challenges, compete with the community, and earn exclusive badges and style points!
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">24</div>
            <div className="text-sm text-gray-400">Active Challenges</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-400">15.2K</div>
            <div className="text-sm text-gray-400">Total Participants</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">2.8K</div>
            <div className="text-sm text-gray-400">Your Style Points</div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">12</div>
            <div className="text-sm text-gray-400">Badges Earned</div>
          </CardContent>
        </Card>
      </div>

      {/* Create Challenge Button */}
      <div className="text-center mb-8">
        <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white px-8 py-3 rounded-lg font-semibold">
          <Sparkles className="w-5 h-5 mr-2" />
          Create Your Own Challenge
        </Button>
      </div>

      {/* Active Challenges Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <Card
            key={challenge.id}
            className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              {/* Challenge Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${challenge.color} flex items-center justify-center mb-2`}>
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)} bg-white/10`}>
                  {challenge.difficulty}
                </div>
              </div>

              {/* Challenge Info */}
              <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{challenge.description}</p>

              {/* Challenge Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {challenge.deadline}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {challenge.participants}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {challenge.prize}
                  </div>
                  <div className="text-purple-400 text-xs">
                    {challenge.category}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white text-sm">
                  Join Challenge
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Leaderboard */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
            Weekly Leaderboard
          </h3>
          <div className="space-y-3">
            {[
              { rank: 1, name: "StyleQueen_23", points: 2840, badge: "🏆" },
              { rank: 2, name: "FashionForward", points: 2650, badge: "🥈" },
              { rank: 3, name: "TrendSetter_99", points: 2420, badge: "🥉" },
              { rank: 4, name: "ChicMaster", points: 2180, badge: "⭐" },
              { rank: 5, name: "StyleGuru", points: 1990, badge: "⭐" }
            ].map((user) => (
              <div key={user.rank} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-lg">{user.badge}</div>
                  <div>
                    <div className="text-white font-medium">{user.name}</div>
                    <div className="text-gray-400 text-sm">Rank #{user.rank}</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold">{user.points} pts</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleChallenges;
