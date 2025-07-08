
import React, { useState } from 'react';
import { Users, Plus, Crown, TrendingUp, MapPin, Calendar, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StyleTribes = () => {
  const [joinedTribes, setJoinedTribes] = useState<Set<number>>(new Set([1, 3]));

  const tribes = [
    {
      id: 1,
      name: "Parisian Chic",
      description: "Effortless elegance meets timeless sophistication. Master the art of French girl style.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      members: 45200,
      posts: 1240,
      category: "Minimalist",
      color: "from-gray-500 to-slate-600",
      trending: true,
      recentActivity: "2 min ago"
    },
    {
      id: 2,
      name: "Streetwear Central",
      description: "Urban fashion, limited drops, and street culture. Stay fresh with the latest drops.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      members: 78900,
      posts: 3420,
      category: "Streetwear",
      color: "from-orange-500 to-red-500",
      trending: true,
      recentActivity: "5 min ago"
    },
    {
      id: 3,
      name: "Sustainable Style",
      description: "Eco-conscious fashion choices. Thrifted finds, upcycled pieces, and ethical brands.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      members: 32100,
      posts: 890,
      category: "Sustainable",
      color: "from-green-500 to-emerald-500",
      trending: false,
      recentActivity: "12 min ago"
    },
    {
      id: 4,
      name: "Vintage Lovers",
      description: "Celebrating fashion from decades past. 90s grunge, 70s boho, and everything retro.",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
      members: 28700,
      posts: 1150,
      category: "Vintage",
      color: "from-yellow-500 to-orange-400",
      trending: false,
      recentActivity: "18 min ago"
    },
    {
      id: 5,
      name: "Avant-Garde",
      description: "Experimental fashion, bold statements, and artistic expression through clothing.",
      image: "https://images.unsplash.com/photo-1566479179817-0dcc5a1fa4e9?w=400&h=300&fit=crop",
      members: 15600,
      posts: 654,
      category: "Experimental",
      color: "from-purple-500 to-pink-500",
      trending: true,
      recentActivity: "25 min ago"
    },
    {
      id: 6,
      name: "K-Fashion Hub",
      description: "Korean fashion trends, K-pop inspired looks, and Seoul street style.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      members: 92300,
      posts: 2890,
      category: "K-Fashion",
      color: "from-pink-500 to-purple-500",
      trending: true,
      recentActivity: "3 min ago"
    }
  ];

  const tribeCategories = [
    { name: "All", count: tribes.length },
    { name: "Trending", count: tribes.filter(t => t.trending).length },
    { name: "Minimalist", count: 12 },
    { name: "Streetwear", count: 8 },
    { name: "Vintage", count: 15 },
    { name: "Sustainable", count: 6 }
  ];

  const handleJoinTribe = (tribeId: number) => {
    setJoinedTribes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tribeId)) {
        newSet.delete(tribeId);
      } else {
        newSet.add(tribeId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Style Tribes
        </h3>
        <p className="text-gray-300">Find your fashion family and connect with like-minded stylists</p>
      </div>

      {/* Create Tribe Button */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardContent className="p-4">
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Your Own Tribe
          </Button>
        </CardContent>
      </Card>

      {/* Categories Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {tribeCategories.map((category, index) => (
          <Badge 
            key={index}
            variant="outline" 
            className="whitespace-nowrap border-green-400/30 text-green-300 hover:bg-green-500/20 cursor-pointer"
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Tribes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tribes.map((tribe) => (
          <Card key={tribe.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group overflow-hidden">
            <div className="relative">
              <img 
                src={tribe.image} 
                alt={tribe.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${tribe.color} opacity-60`}></div>
              
              {/* Tribe Stats Overlay */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                {tribe.trending && (
                  <Badge className="bg-red-500/80 text-white border-none backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
                <div className="text-right">
                  <div className="text-xs text-white/80 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {tribe.recentActivity}
                  </div>
                </div>
              </div>

              {/* Member Count Badge */}
              <div className="absolute bottom-3 left-3">
                <Badge className="bg-black/50 text-white border-none backdrop-blur-sm">
                  <Users className="w-3 h-3 mr-1" />
                  {(tribe.members / 1000).toFixed(1)}K
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white text-lg">{tribe.name}</h4>
                  <Badge variant="outline" className="border-gray-400/30 text-gray-300 text-xs mt-1">
                    {tribe.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {tribe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tribe.members.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Hash className="w-4 h-4" />
                      <span>{tribe.posts}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className={`w-full ${
                    joinedTribes.has(tribe.id) 
                      ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white'
                  }`}
                  onClick={() => handleJoinTribe(tribe.id)}
                >
                  {joinedTribes.has(tribe.id) ? (
                    <>
                      <Crown className="w-4 h-4 mr-2" />
                      Joined
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Join Tribe
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tribe Stats */}
      <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-white">{joinedTribes.size}</div>
              <div className="text-green-300 text-sm">Tribes Joined</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-green-300 text-sm">Style Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Gold</div>
              <div className="text-green-300 text-sm">Tribe Status</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleTribes;
