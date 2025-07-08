
import React, { useState } from 'react';
import { ArrowLeft, Share2, Download, Star, Sparkles, Trophy, Camera, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FashionFeatures from './FashionFeatures';

interface ResultsDisplayProps {
  photoUrl: string | null;
  onBack: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ photoUrl, onBack }) => {
  const [activeTab, setActiveTab] = useState<'matches' | 'fashion'>('matches');
  
  const matches = [
    { 
      name: "Ryan Reynolds", 
      similarity: 94, 
      category: "Actor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Canadian actor and producer known for Deadpool"
    },
    { 
      name: "Chris Evans", 
      similarity: 89, 
      category: "Actor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "American actor famous for Captain America"
    },
    { 
      name: "Michael B. Jordan", 
      similarity: 85, 
      category: "Actor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "American actor and producer"
    }
  ];

  const topMatch = matches[0];

  const shareToSocial = (platform: string) => {
    const text = "Check out my celebrity look-alike results from Look-Alike AI Hub! 🤖✨";
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      default:
        navigator.share({ title: 'Look-Alike AI Results', text, url });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Upload New Photo
        </Button>
        
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-medium">+50 Points</span>
        </div>
      </div>

      {/* Results Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Your Celebrity Matches
        </h2>
        <p className="text-gray-300">We found some amazing look-alikes for you!</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
          <Button
            variant={activeTab === 'matches' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('matches')}
            className={activeTab === 'matches' ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Star className="w-4 h-4 mr-2" />
            Matches
          </Button>
          <Button
            variant={activeTab === 'fashion' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('fashion')}
            className={activeTab === 'fashion' ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Shirt className="w-4 h-4 mr-2" />
            Fashion
          </Button>
        </div>
      </div>

      {activeTab === 'matches' && (
        <>
          {/* Original Photo */}
          <div className="flex justify-center mb-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                    Your Photo
                  </Badge>
                </div>
                <img 
                  src={photoUrl || ''} 
                  alt="Your photo" 
                  className="w-32 h-32 rounded-lg object-cover mx-auto border-2 border-white/20"
                />
              </CardContent>
            </Card>
          </div>

          {/* Matches Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {matches.map((match, index) => (
              <Card 
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={match.image} 
                      alt={match.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-white/20 group-hover:border-blue-400/50 transition-colors"
                    />
                    <div className="absolute -top-2 -right-2">
                      <Badge className={`${
                        index === 0 ? 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30' :
                        index === 1 ? 'bg-gray-500/20 text-gray-300 border-gray-400/30' :
                        'bg-orange-500/20 text-orange-300 border-orange-400/30'
                      }`}>
                        #{index + 1}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{match.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{match.description}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-white">{match.similarity}%</span>
                    <span className="text-gray-400 text-sm">match</span>
                  </div>
                  
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                    {match.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium"
              onClick={() => shareToSocial('twitter')}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setActiveTab('fashion')}
            >
              <Shirt className="w-4 h-4 mr-2" />
              Shop Their Style
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Camera className="w-4 h-4 mr-2" />
              Try AR Effects
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Save Results
            </Button>
          </div>
        </>
      )}

      {activeTab === 'fashion' && <FashionFeatures celebrityName={topMatch.name} />}

      {/* Social Challenge */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Share & Earn Rewards!</h3>
          <p className="text-gray-300 mb-4">
            Share your results and challenge 3 friends to unlock premium AR effects and fashion features
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white">
            Start Challenge
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
