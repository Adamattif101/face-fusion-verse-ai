
import React from 'react';
import { Camera, Users, Heart, Sparkles, ArrowLeft, Upload, TrendingUp, Crown, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FashionSocialLandingProps {
  onBackToHome: () => void;
}

const FashionSocialLanding: React.FC<FashionSocialLandingProps> = ({ onBackToHome }) => {
  const communityStats = [
    { icon: Users, label: "Fashion Creators", value: "250K+", color: "text-pink-400" },
    { icon: Heart, label: "Daily Likes", value: "1.2M", color: "text-red-400" },
    { icon: Camera, label: "Style Posts", value: "500K+", color: "text-purple-400" },
    { icon: TrendingUp, label: "Active Tribes", value: "150+", color: "text-blue-400" }
  ];

  const featuredTribes = [
    {
      name: "Streetwear Elite",
      members: "45K",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Minimalist Chic",
      members: "32K", 
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop",
      gradient: "from-gray-500 to-slate-600"
    },
    {
      name: "Vintage Vibes",
      members: "28K",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop", 
      gradient: "from-yellow-500 to-orange-400"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          onClick={onBackToHome}
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Fashion Social Network
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Share Your Style
          <br />
          <span className="text-3xl md:text-4xl">Join Fashion Tribes</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Connect with fashion enthusiasts, share your unique style, and discover trends from around the world. 
          Join tribes that match your aesthetic and build your fashion community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white text-lg px-8 py-4"
          >
            <Camera className="w-5 h-5 mr-2" />
            Share Your Outfit
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
          >
            <Users className="w-5 h-5 mr-2" />
            Browse Tribes
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {communityStats.map((stat, index) => (
          <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Tribes */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Featured Fashion Tribes
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTribes.map((tribe, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group overflow-hidden cursor-pointer">
              <div className="relative">
                <img 
                  src={tribe.image} 
                  alt={tribe.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${tribe.gradient} opacity-60`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-xl font-bold text-white mb-1">{tribe.name}</h4>
                  <div className="flex items-center text-white/80">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{tribe.members} members</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm mb-16">
        <CardContent className="p-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">1. Share Your Style</h4>
              <p className="text-gray-300">Upload photos of your outfits with captions and hashtags</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">2. Join Tribes</h4>
              <p className="text-gray-300">Connect with like-minded fashion enthusiasts in specialized communities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">3. Earn Recognition</h4>
              <p className="text-gray-300">Get likes, saves, and build your fashion influence</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final CTA */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Ready to Join the Fashion Revolution?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Start sharing your unique style today and become part of the most vibrant fashion community online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white"
          >
            <Camera className="w-5 h-5 mr-2" />
            Start Sharing Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Crown className="w-5 h-5 mr-2" />
            Explore Premium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FashionSocialLanding;
