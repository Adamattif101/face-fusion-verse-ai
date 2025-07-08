
import React, { useState } from 'react';
import { User, Settings, Grid3X3, Heart, Bookmark, Users, MapPin, Calendar, Camera, Edit, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'boards' | 'liked' | 'saved'>('posts');

  const profileData = {
    name: "Alex Rodriguez",
    username: "@alexstyle",
    bio: "Fashion enthusiast • Style creator • Vintage lover ✨ Sharing my daily fits and style inspiration 💫",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=300&fit=crop",
    location: "Los Angeles, CA",
    joinDate: "March 2023",
    verified: true,
    stats: {
      posts: 156,
      followers: 12500,
      following: 834,
      likes: 45200,
      boards: 23
    },
    badges: ["Style Influencer", "Trend Setter", "Community Favorite"]
  };

  const userPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
      likes: 234,
      comments: 12
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
      likes: 456,
      comments: 23
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1566479179817-0dcc5a1fa4e9?w=300&h=300&fit=crop",
      likes: 123,
      comments: 8
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",
      likes: 789,
      comments: 34
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=300&fit=crop",
      likes: 345,
      comments: 16
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      likes: 567,
      comments: 28
    }
  ];

  const styleBoards = [
    { id: 1, name: "Summer Vibes", itemCount: 24, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop" },
    { id: 2, name: "Work Chic", itemCount: 18, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop" },
    { id: 3, name: "Date Night", itemCount: 12, image: "https://images.unsplash.com/photo-1566479179817-0dcc5a1fa4e9?w=200&h=200&fit=crop" }
  ];

  return (
    <div className="space-y-6">
      {/* Cover Image */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        <img 
          src={profileData.coverImage} 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Edit Cover Button */}
        <Button 
          size="sm"
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        >
          <Camera className="w-4 h-4 mr-2" />
          Edit Cover
        </Button>
      </div>

      {/* Profile Header */}
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
          {/* Avatar */}
          <div className="relative -mt-16 md:-mt-20">
            <img 
              src={profileData.avatar} 
              alt={profileData.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            {profileData.verified && (
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                <p className="text-gray-400">{profileData.username}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {profileData.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-300 mt-4 max-w-2xl">{profileData.bio}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {profileData.badges.map((badge, index) => (
                <Badge key={index} className="bg-gradient-to-r from-purple-500 to-pink-400 text-white border-none">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{profileData.stats.posts}</div>
            <div className="text-gray-400 text-sm">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{(profileData.stats.followers / 1000).toFixed(1)}K</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{profileData.stats.following}</div>
            <div className="text-gray-400 text-sm">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{(profileData.stats.likes / 1000).toFixed(1)}K</div>
            <div className="text-gray-400 text-sm">Likes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{profileData.stats.boards}</div>
            <div className="text-gray-400 text-sm">Boards</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
          <Button
            variant={activeTab === 'posts' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('posts')}
            className={activeTab === 'posts' ? 'bg-gradient-to-r from-indigo-500 to-blue-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Posts
          </Button>
          <Button
            variant={activeTab === 'boards' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('boards')}
            className={activeTab === 'boards' ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Boards
          </Button>
          <Button
            variant={activeTab === 'liked' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('liked')}
            className={activeTab === 'liked' ? 'bg-gradient-to-r from-red-500 to-pink-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Heart className="w-4 h-4 mr-2" />
            Liked
          </Button>
          <Button
            variant={activeTab === 'saved' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('saved')}
            className={activeTab === 'saved' ? 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Bookmark className="w-4 h-4 mr-2" />
            Saved
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userPosts.map((post) => (
            <div key={post.id} className="relative group">
              <img 
                src={post.image} 
                alt="User post"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 fill-current" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'boards' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {styleBoards.map((board) => (
            <Card key={board.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <div className="relative">
                <img 
                  src={board.image} 
                  alt={board.name}
                  className="w-full h-32 object-cover"
                />
                <Badge className="absolute bottom-2 left-2 bg-black/70 text-white border-none backdrop-blur-sm text-xs">
                  {board.itemCount} items
                </Badge>
              </div>
              <CardContent className="p-3">
                <h5 className="font-semibold text-white text-sm">{board.name}</h5>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {(activeTab === 'liked' || activeTab === 'saved') && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            {activeTab === 'liked' ? (
              <Heart className="w-12 h-12 mx-auto mb-4" />
            ) : (
              <Bookmark className="w-12 h-12 mx-auto mb-4" />
            )}
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">
            No {activeTab} items yet
          </h4>
          <p className="text-gray-400">
            Start {activeTab === 'liked' ? 'liking' : 'saving'} outfits to see them here
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
