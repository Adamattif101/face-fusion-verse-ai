
import React, { useState } from 'react';
import { TrendingUp, ShoppingBag, Heart, Share2, Sparkles, Clock, MapPin, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrendingOutfits = () => {
  const [likedOutfits, setLikedOutfits] = useState<Set<number>>(new Set());

  const trendingOutfits = [
    {
      id: 1,
      title: "Oversized Blazer + Bike Shorts",
      description: "The perfect blend of comfort and sophistication",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
      trendScore: 98,
      likes: 12400,
      shares: 3200,
      source: "Instagram",
      tags: ["#blazer", "#bikeshorts", "#comfy", "#chic"],
      priceRange: "$45 - $120",
      popularOn: ["TikTok", "Instagram", "Pinterest"],
      timeframe: "Last 24h",
      location: "Global",
      shoppableItems: [
        { name: "Oversized Blazer", price: "$89", affordable: "$29" },
        { name: "Bike Shorts", price: "$25", affordable: "$12" },
        { name: "White Sneakers", price: "$120", affordable: "$45" }
      ]
    },
    {
      id: 2,
      title: "Y2K Cargo Pants",
      description: "Early 2000s nostalgia meets modern streetwear",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
      trendScore: 95,
      likes: 18900,
      shares: 5600,
      source: "TikTok",
      tags: ["#y2k", "#cargo", "#streetwear", "#vintage"],
      priceRange: "$35 - $95",
      popularOn: ["TikTok", "Instagram"],
      timeframe: "Last week",
      location: "US, UK",
      shoppableItems: [
        { name: "Cargo Pants", price: "$75", affordable: "$35" },
        { name: "Crop Top", price: "$28", affordable: "$15" },
        { name: "Platform Sneakers", price: "$95", affordable: "$45" }
      ]
    },
    {
      id: 3,
      title: "Cottagecore Midi Dress",
      description: "Romantic florals and vintage-inspired silhouettes",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      trendScore: 92,
      likes: 9800,
      shares: 2100,
      source: "Pinterest",
      tags: ["#cottagecore", "#midi", "#floral", "#romantic"],
      priceRange: "$55 - $150",
      popularOn: ["Pinterest", "Instagram"],
      timeframe: "Last 3 days",
      location: "EU, US",
      shoppableItems: [
        { name: "Floral Midi Dress", price: "$120", affordable: "$55" },
        { name: "Straw Hat", price: "$35", affordable: "$18" },
        { name: "Mary Jane Shoes", price: "$85", affordable: "$40" }
      ]
    },
    {
      id: 4,
      title: "Monochrome Minimalism",
      description: "Clean lines and neutral tones for effortless elegance",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
      trendScore: 89,
      likes: 7600,
      shares: 1800,
      source: "Instagram",
      tags: ["#minimal", "#monochrome", "#clean", "#elegant"],
      priceRange: "$65 - $200",
      popularOn: ["Instagram", "Pinterest"],
      timeframe: "Last 2 days",
      location: "Global",
      shoppableItems: [
        { name: "Tailored Trousers", price: "$150", affordable: "$65" },
        { name: "Silk Blouse", price: "$120", affordable: "$45" },
        { name: "Minimal Accessories", price: "$80", affordable: "$25" }
      ]
    }
  ];

  const trendCategories = [
    { name: "All", active: true },
    { name: "Viral", count: 23 },
    { name: "This Week", count: 45 },
    { name: "Celebrity", count: 12 },
    { name: "Street Style", count: 34 },
    { name: "Runway", count: 8 }
  ];

  const handleLike = (outfitId: number) => {
    setLikedOutfits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(outfitId)) {
        newSet.delete(outfitId);
      } else {
        newSet.add(outfitId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Trending Outfits
        </h3>
        <p className="text-gray-300">Real-time fashion trends from across social media</p>
      </div>

      {/* Trend Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
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

      {/* Trending Stats */}
      <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">847</div>
              <div className="text-yellow-300 text-sm">Trending Now</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2.4M</div>
              <div className="text-yellow-300 text-sm">Total Likes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">156K</div>
              <div className="text-yellow-300 text-sm">Shares Today</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Outfits Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {trendingOutfits.map((outfit) => (
          <Card key={outfit.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-1/2">
                <img 
                  src={outfit.image} 
                  alt={outfit.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                
                {/* Trend Score Badge */}
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white border-none">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {outfit.trendScore}%
                </Badge>

                {/* Source Badge */}
                <Badge className="absolute top-3 right-3 bg-black/70 text-white border-none backdrop-blur-sm">
                  {outfit.source}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-6 md:w-1/2 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{outfit.title}</h4>
                    <p className="text-gray-300 text-sm">{outfit.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {outfit.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-orange-400/30 text-orange-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{outfit.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{outfit.location}</span>
                    </div>
                  </div>

                  {/* Popular Platforms */}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Popular on:</p>
                    <div className="flex space-x-1">
                      {outfit.popularOn.map((platform, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-400/30 text-gray-300">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-gray-300">Price Range: <span className="text-green-400 font-semibold">{outfit.priceRange}</span></p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <button 
                        className={`flex items-center space-x-1 hover:text-red-400 transition-colors ${
                          likedOutfits.has(outfit.id) ? 'text-red-500' : ''
                        }`}
                        onClick={() => handleLike(outfit.id)}
                      >
                        <Heart className={`w-4 h-4 ${likedOutfits.has(outfit.id) ? 'fill-current' : ''}`} />
                        <span>{outfit.likes.toLocaleString()}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span>{outfit.shares.toLocaleString()}</span>
                      </div>
                    </div>
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
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Load More Trends
        </Button>
      </div>
    </div>
  );
};

export default TrendingOutfits;
