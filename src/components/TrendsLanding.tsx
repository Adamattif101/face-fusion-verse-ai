
import React from 'react';
import { ArrowLeft, TrendingUp, Clock, MapPin, Heart, Share2, ShoppingBag, Sparkles, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TrendsLandingProps {
  onBackToHome: () => void;
}

const TrendsLanding: React.FC<TrendsLandingProps> = ({ onBackToHome }) => {
  const trendingItems = [
    {
      id: 1,
      title: "Y2K Revival",
      description: "Low-rise jeans and butterfly accessories are making a major comeback",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      trendScore: 98,
      timeframe: "24h",
      location: "Global",
      engagement: "2.4M",
      category: "Retro"
    },
    {
      id: 2,
      title: "Oversized Blazers",
      description: "Power dressing meets comfort with structured shoulder pads",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      trendScore: 95,
      timeframe: "3d",
      location: "US, EU",
      engagement: "1.8M",
      category: "Professional"
    },
    {
      id: 3,
      title: "Cottagecore Aesthetic",
      description: "Floral prints and vintage-inspired pieces for romantic looks",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
      trendScore: 92,
      timeframe: "1w",
      location: "UK, AU",
      engagement: "1.5M",
      category: "Romantic"
    },
    {
      id: 4,
      title: "Neon Streetwear",
      description: "Bold fluorescent colors dominating urban fashion scenes",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      trendScore: 89,
      timeframe: "2d",
      location: "Asia",
      engagement: "2.1M",
      category: "Streetwear"
    },
    {
      id: 5,
      title: "Sustainable Fashion",
      description: "Eco-friendly materials and ethical brand choices trending",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
      trendScore: 87,
      timeframe: "5d",
      location: "Global",
      engagement: "1.2M",
      category: "Sustainable"
    },
    {
      id: 6,
      title: "Minimalist Chic",
      description: "Clean lines and neutral tones for effortless sophistication",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      trendScore: 85,
      timeframe: "1w",
      location: "Scandinavia",
      engagement: "980K",
      category: "Minimal"
    }
  ];

  const trendCategories = [
    { name: "All Trends", count: 847, active: true },
    { name: "Viral", count: 23 },
    { name: "This Week", count: 156 },
    { name: "Celebrity", count: 45 },
    { name: "Street Style", count: 89 },
    { name: "Runway", count: 12 }
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
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            Live Fashion Trends
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
          Discover What's
          <br />
          <span className="text-3xl md:text-4xl">Trending Now</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Stay ahead of the fashion curve with real-time trends from social media, runways, 
          and street style around the world. See what's hot and what's next.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">847</div>
            <div className="text-sm text-gray-400">Active Trends</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">12.4M</div>
            <div className="text-sm text-gray-400">Total Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">156K</div>
            <div className="text-sm text-gray-400">New Today</div>
          </div>
        </div>
      </div>

      {/* Trend Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2 mb-8">
        {trendCategories.map((category, index) => (
          <Badge 
            key={index}
            variant={category.active ? "default" : "outline"}
            className={`whitespace-nowrap cursor-pointer ${
              category.active 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white' 
                : 'border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/20'
            }`}
          >
            {category.name} {category.count && `(${category.count})`}
          </Badge>
        ))}
      </div>

      {/* Trending Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {trendingItems.map((trend) => (
          <Card key={trend.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group overflow-hidden">
            <div className="relative">
              <img 
                src={trend.image} 
                alt={trend.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Trend Score */}
              <Badge className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none">
                <TrendingUp className="w-3 h-3 mr-1" />
                {trend.trendScore}%
              </Badge>

              {/* Category */}
              <Badge className="absolute top-3 right-3 bg-black/70 text-white border-none backdrop-blur-sm">
                {trend.category}
              </Badge>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{trend.title}</h3>
                  <p className="text-gray-300 text-sm">{trend.description}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{trend.timeframe}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{trend.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{trend.engagement}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Trend
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Start Your Own Trend</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Share your unique style and see if it becomes the next big trend. Join our community of fashion innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-orange-500 text-white"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Share Your Style
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Predict Trends
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendsLanding;
