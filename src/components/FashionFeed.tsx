
import React from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FashionFeed = () => {
  const trendingLooks = [
    {
      celebrity: "Ryan Reynolds",
      outfit: "Casual Street Style",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      likes: 1243,
      comments: 89,
      trending: true,
      description: "Effortless blazer and jeans combo perfect for any occasion"
    },
    {
      celebrity: "Chris Evans",
      outfit: "Red Carpet Look",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      likes: 2156,
      comments: 234,
      trending: false,
      description: "Classic tuxedo with modern twist - timeless elegance"
    },
    {
      celebrity: "Michael B. Jordan",
      outfit: "Gym Athleisure",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      likes: 892,
      comments: 156,
      trending: true,
      description: "Premium athletic wear that transitions from gym to street"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Feed Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Trending Celebrity Styles
        </h3>
        <p className="text-gray-300">Discover the latest looks and shop the trends</p>
      </div>

      {/* Trending Looks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingLooks.map((look, index) => (
          <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group overflow-hidden">
            <div className="relative">
              <img 
                src={look.image} 
                alt={`${look.celebrity} ${look.outfit}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {look.trending && (
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              
              <Button 
                size="sm"
                className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-white">{look.celebrity}</h4>
                  <p className="text-sm text-gray-400">{look.outfit}</p>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {look.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{look.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{look.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Look
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Try AR
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fashion Challenge Banner */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-10 h-10 text-purple-300 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">Weekly Style Challenge</h4>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
            Recreate this week's featured celebrity look and tag us for a chance to win $500 shopping credit and exclusive AR filters!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white">
              Join Challenge
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Gallery
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FashionFeed;
