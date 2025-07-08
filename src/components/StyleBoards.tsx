
import React, { useState } from 'react';
import { Grid3X3, Plus, Heart, Share2, Eye, MoreHorizontal, Bookmark, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StyleBoards = () => {
  const [savedBoards, setSavedBoards] = useState<Set<number>>(new Set([2, 4]));

  const myBoards = [
    {
      id: 1,
      name: "Summer Vibes",
      description: "Light, breezy outfits for warm weather",
      coverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
      itemCount: 24,
      likes: 156,
      isPrivate: false,
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      name: "Work Chic",
      description: "Professional yet stylish office looks",
      coverImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
      itemCount: 18,
      likes: 89,
      isPrivate: true,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      name: "Date Night",
      description: "Romantic and elegant evening outfits",
      coverImage: "https://images.unsplash.com/photo-1566479179817-0dcc5a1fa4e9?w=300&h=300&fit=crop",
      itemCount: 12,
      likes: 203,
      isPrivate: false,
      lastUpdated: "3 days ago"
    }
  ];

  const trendingBoards = [
    {
      id: 4,
      name: "Y2K Revival",
      creator: "@retro_queen",
      coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",
      itemCount: 45,
      likes: 1200,
      followers: 892,
      description: "Early 2000s fashion comeback"
    },
    {
      id: 5,
      name: "Cottagecore Dreams",
      creator: "@nature_style",
      coverImage: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=300&fit=crop",
      itemCount: 32,
      likes: 890,
      followers: 654,
      description: "Romantic, countryside-inspired looks"
    },
    {
      id: 6,
      name: "Dark Academia",
      creator: "@bookish_fashion",
      coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      itemCount: 38,
      likes: 1456,
      followers: 1203,
      description: "Scholarly and mysterious aesthetic"
    }
  ];

  const handleSaveBoard = (boardId: number) => {
    setSavedBoards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(boardId)) {
        newSet.delete(boardId);
      } else {
        newSet.add(boardId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
          Style Boards
        </h3>
        <p className="text-gray-300">Curate your fashion inspiration and create mood boards</p>
      </div>

      {/* Create Board Button */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardContent className="p-4">
          <Button className="w-full bg-gradient-to-r from-red-500 to-rose-400 hover:from-red-600 hover:to-rose-500 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create New Board
          </Button>
        </CardContent>
      </Card>

      {/* My Boards Section */}
      <div>
        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
          <Grid3X3 className="w-5 h-5 mr-2" />
          My Boards
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myBoards.map((board) => (
            <Card key={board.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={board.coverImage} 
                  alt={board.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Privacy Badge */}
                {board.isPrivate && (
                  <Badge className="absolute top-2 right-2 bg-black/50 text-white border-none backdrop-blur-sm text-xs">
                    Private
                  </Badge>
                )}

                {/* Item Count Overlay */}
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-black/70 text-white border-none backdrop-blur-sm text-xs">
                    {board.itemCount} items
                  </Badge>
                </div>

                {/* Action Button */}
                <Button 
                  size="sm"
                  className="absolute top-2 left-2 w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-white">{board.name}</h5>
                  <p className="text-sm text-gray-300">{board.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{board.likes}</span>
                      </div>
                      <span>{board.lastUpdated}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Boards Section */}
      <div>
        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2" />
          Trending Boards
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingBoards.map((board) => (
            <Card key={board.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={board.coverImage} 
                  alt={board.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Save Button */}
                <Button 
                  size="sm"
                  className={`absolute top-2 right-2 w-8 h-8 p-0 backdrop-blur-sm ${
                    savedBoards.has(board.id) 
                      ? 'bg-yellow-500/80 hover:bg-yellow-600/80' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                  onClick={() => handleSaveBoard(board.id)}
                >
                  <Bookmark className={`w-4 h-4 ${savedBoards.has(board.id) ? 'fill-current text-white' : ''}`} />
                </Button>

                {/* Stats Overlay */}
                <div className="absolute bottom-2 left-2 flex space-x-2">
                  <Badge className="bg-black/70 text-white border-none backdrop-blur-sm text-xs">
                    {board.itemCount} items
                  </Badge>
                  <Badge className="bg-black/70 text-white border-none backdrop-blur-sm text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {board.followers}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-white">{board.name}</h5>
                  <p className="text-xs text-gray-400">by {board.creator}</p>
                  <p className="text-sm text-gray-300">{board.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{board.likes}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-rose-400/30 text-rose-300 hover:bg-rose-500/20 text-xs"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Board Templates */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Camera className="w-8 h-8 text-purple-300 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-2">Board Templates</h4>
          <p className="text-gray-300 mb-4">
            Start with curated templates: Seasonal Essentials, Color Palettes, Occasion Outfits, and more
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white">
            Browse Templates
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleBoards;
