
import React from 'react';
import { Shirt, ShoppingBag, Sparkles, Camera, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FashionFeaturesProps {
  celebrityName: string;
}

const FashionFeatures: React.FC<FashionFeaturesProps> = ({ celebrityName }) => {
  const styleRecommendations = [
    {
      category: "Signature Look",
      items: [
        { name: "Classic Blazer", price: "$89", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop", affordable: "$29" },
        { name: "Designer Sunglasses", price: "$230", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop", affordable: "$25" },
        { name: "Statement Watch", price: "$450", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop", affordable: "$45" }
      ]
    },
    {
      category: "Red Carpet Glam",
      items: [
        { name: "Evening Gown", price: "$890", image: "https://images.unsplash.com/photo-1566479179817-0dcc5a1fa4e9?w=200&h=200&fit=crop", affordable: "$120" },
        { name: "Diamond Earrings", price: "$1,200", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop", affordable: "$35" },
        { name: "Clutch Bag", price: "$320", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop", affordable: "$45" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Fashion Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Shop {celebrityName}'s Style
        </h3>
        <p className="text-gray-300">Get the look with curated fashion recommendations</p>
      </div>

      {/* Virtual Try-On Section */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Camera className="w-8 h-8 text-purple-300 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Try On with AR</h4>
          <p className="text-gray-300 mb-4">
            Use your camera to virtually try on {celebrityName}'s signature looks
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Try Makeup
            </Button>
            <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20">
              <Shirt className="w-4 h-4 mr-2" />
              Try Outfits
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Style Recommendations */}
      {styleRecommendations.map((category, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <h4 className="text-xl font-bold text-white">{category.category}</h4>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {category.items.map((item, itemIndex) => (
              <Card key={itemIndex} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button 
                      size="sm"
                      className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <h5 className="font-medium text-white mb-2">{item.name}</h5>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400 line-through">{item.price}</p>
                      <p className="text-lg font-bold text-green-400">{item.affordable}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                      Budget
                    </Badge>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Fashion Challenge */}
      <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Style Challenge</h4>
          <p className="text-gray-300 mb-4">
            Recreate {celebrityName}'s look and share with the community for a chance to win prizes!
          </p>
          <Button className="bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-orange-500 text-white">
            Join Challenge
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FashionFeatures;
