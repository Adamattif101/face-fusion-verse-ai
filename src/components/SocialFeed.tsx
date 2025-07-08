
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Camera, Users, TrendingUp, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SocialFeed = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());

  const posts = [
    {
      id: 1,
      user: {
        name: "Emma Style",
        username: "@emmastyle",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=100&h=100&fit=crop&crop=face",
        verified: true,
        followers: "12.5K"
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
      caption: "Sunday vibes in my favorite vintage find ✨ Thrifted this amazing blazer yesterday!",
      tags: ["#vintage", "#thrifted", "#sustainable", "#blazer"],
      likes: 847,
      comments: 23,
      timeAgo: "2h",
      location: "New York, NY"
    },
    {
      id: 2,
      user: {
        name: "Style Maven",
        username: "@stylemaven",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        verified: false,
        followers: "8.2K"
      },
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop",
      caption: "Channeling my inner Parisian chic today 🇫🇷 Black and white never goes out of style",
      tags: ["#parisianchic", "#blackandwhite", "#minimal", "#chic"],
      likes: 1203,
      comments: 45,
      timeAgo: "4h",
      location: "Paris, France"
    },
    {
      id: 3,
      user: {
        name: "Trendy Alex",
        username: "@trendyalex",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        verified: true,
        followers: "25.1K"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop",
      caption: "Street style inspiration from Tokyo Fashion Week! Love experimenting with colors 🌈",
      tags: ["#streetstyle", "#tokyofashion", "#colorful", "#experimental"],
      likes: 2156,
      comments: 89,
      timeAgo: "6h",
      location: "Tokyo, Japan"
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId: number) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Style Community
        </h3>
        <p className="text-gray-300">Share your fits, discover new styles, connect with your tribe</p>
      </div>

      {/* Create Post Button */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardContent className="p-4">
          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white">
            <Camera className="w-4 h-4 mr-2" />
            Share Your Fit
          </Button>
        </CardContent>
      </Card>

      {/* Stories/Quick Access */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <div className="flex-shrink-0 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-gray-300">Trending</span>
        </div>
        <div className="flex-shrink-0 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center mb-2">
            <Hash className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-gray-300">Challenges</span>
        </div>
        <div className="flex-shrink-0 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mb-2">
            <Users className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-gray-300">Tribes</span>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={post.user.avatar} 
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <h4 className="font-semibold text-white text-sm">{post.user.name}</h4>
                      {post.user.verified && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{post.user.username} • {post.timeAgo}</p>
                    {post.location && (
                      <p className="text-xs text-gray-500">{post.location}</p>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img 
                  src={post.image} 
                  alt="Outfit post"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`p-0 ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`w-6 h-6 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      <MessageCircle className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      <Share2 className="w-6 h-6" />
                    </Button>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`p-0 ${savedPosts.has(post.id) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-400'}`}
                    onClick={() => handleSave(post.id)}
                  >
                    <Bookmark className={`w-6 h-6 ${savedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Likes Count */}
                <p className="text-sm font-semibold text-white mb-2">
                  {post.likes.toLocaleString()} likes
                </p>

                {/* Caption */}
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-semibold text-white">{post.user.username}</span> {post.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-blue-400/30 text-blue-300 hover:bg-blue-500/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Comments Link */}
                <button className="text-sm text-gray-400 hover:text-gray-300">
                  View all {post.comments} comments
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default SocialFeed;
