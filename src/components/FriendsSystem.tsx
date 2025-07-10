
import React, { useState } from 'react';
import { UserPlus, Users, Search, Heart, MessageCircle, UserCheck, UserMinus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FriendsSystem = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'discover'>('friends');

  const friends = [
    {
      id: 1,
      name: "Emma Style",
      username: "@emmastyle",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 12,
      lastPost: "2h ago",
      isOnline: true,
      stylePoints: 1840
    },
    {
      id: 2,
      name: "Alex Chen",
      username: "@alexchenstyle",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 8,
      lastPost: "1d ago",
      isOnline: false,
      stylePoints: 2156
    },
    {
      id: 3,
      name: "Maya Johnson",
      username: "@mayaj",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 15,
      lastPost: "3h ago",
      isOnline: true,
      stylePoints: 3021
    }
  ];

  const friendRequests = [
    {
      id: 4,
      name: "Sophie Martinez",
      username: "@sophiem",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 5,
      stylePoints: 987
    },
    {
      id: 5,
      name: "James Wilson",
      username: "@jameswstyle",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 3,
      stylePoints: 1432
    }
  ];

  const suggestions = [
    {
      id: 6,
      name: "Luna Rodriguez",
      username: "@lunastyle",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 7,
      reason: "Similar style interests",
      stylePoints: 2341
    },
    {
      id: 7,
      name: "David Kim",
      username: "@davidkimfit",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      mutualFriends: 4,
      reason: "Trending in your area",
      stylePoints: 1876
    }
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-muted p-1 rounded-lg">
          <Button
            variant={activeTab === 'friends' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('friends')}
            className={activeTab === 'friends' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <Users className="w-4 h-4 mr-2" />
            Friends ({friends.length})
          </Button>
          <Button
            variant={activeTab === 'requests' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('requests')}
            className={activeTab === 'requests' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Requests ({friendRequests.length})
          </Button>
          <Button
            variant={activeTab === 'discover' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('discover')}
            className={activeTab === 'discover' ? 'bg-primary text-primary-foreground' : ''}
            size="sm"
          >
            <Search className="w-4 h-4 mr-2" />
            Discover
          </Button>
        </div>
      </div>

      {/* Friends List */}
      {activeTab === 'friends' && (
        <div className="space-y-4">
          {friends.map((friend) => (
            <Card key={friend.id} className="social-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={friend.avatar} 
                        alt={friend.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {friend.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold">{friend.name}</h4>
                      <p className="text-sm text-muted-foreground">{friend.username}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span>{friend.mutualFriends} mutual friends</span>
                        <span>Posted {friend.lastPost}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-2">
                      {friend.stylePoints} SP
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
                        <UserMinus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Friend Requests */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          {friendRequests.map((request) => (
            <Card key={request.id} className="social-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={request.avatar} 
                      alt={request.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{request.name}</h4>
                      <p className="text-sm text-muted-foreground">{request.username}</p>
                      <p className="text-xs text-muted-foreground">{request.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                      <UserCheck className="w-4 h-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline">
                      Decline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Discover People */}
      {activeTab === 'discover' && (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="social-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={suggestion.avatar} 
                      alt={suggestion.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{suggestion.name}</h4>
                      <p className="text-sm text-muted-foreground">{suggestion.username}</p>
                      <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
                      <p className="text-xs text-muted-foreground">{suggestion.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      {suggestion.stylePoints} SP
                    </Badge>
                    <div>
                      <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                        <UserPlus className="w-4 h-4 mr-1" />
                        Add Friend
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSystem;
