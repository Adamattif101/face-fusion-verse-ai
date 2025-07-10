
import React, { useState } from 'react';
import { ArrowLeft, Share2, Download, Heart, Sparkles, Trophy, Camera, Shirt, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FashionFeatures from './FashionFeatures';

interface ResultsDisplayProps {
  photoUrl: string | null;
  onBack: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ photoUrl, onBack }) => {
  const [activeTab, setActiveTab] = useState<'share' | 'fashion'>('share');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [posted, setPosted] = useState(false);
  
  const suggestedTags = ['#OOTD', '#StreetStyle', '#Fashion', '#Style', '#Trendy', '#Outfit', '#Look'];

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const shareToSocial = (platform: string) => {
    const text = "Check out my latest style post on StyleMatch AI! ✨👗";
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      default:
        navigator.share({ title: 'StyleMatch AI', text, url });
    }
  };

  const handlePost = () => {
    setPosted(true);
    // Here you would typically send the post to your backend
    console.log('Posting outfit:', { photoUrl, caption, tags });
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
          <span className="text-yellow-400 font-medium">+10 Style Points</span>
        </div>
      </div>

      {/* Results Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Share Your Style
        </h2>
        <p className="text-gray-300">Add details and share with the fashion community!</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
          <Button
            variant={activeTab === 'share' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('share')}
            className={activeTab === 'share' ? 'bg-gradient-to-r from-pink-500 to-purple-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Camera className="w-4 h-4 mr-2" />
            Share Post
          </Button>
          <Button
            variant={activeTab === 'fashion' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('fashion')}
            className={activeTab === 'fashion' ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Shirt className="w-4 h-4 mr-2" />
            Shop Style
          </Button>
        </div>
      </div>

      {activeTab === 'share' && (
        <>
          {/* Photo Preview */}
          <div className="flex justify-center mb-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md">
              <CardContent className="p-4">
                <img 
                  src={photoUrl || ''} 
                  alt="Your outfit" 
                  className="w-full rounded-lg object-cover border-2 border-white/20"
                />
              </CardContent>
            </Card>
          </div>

          {!posted ? (
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Caption Input */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <label className="block text-white font-medium mb-3">Caption</label>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Tell us about your outfit..."
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none h-24 focus:outline-none focus:border-pink-400"
                  />
                </CardContent>
              </Card>

              {/* Tags Section */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <label className="block text-white font-medium mb-3">Tags</label>
                  
                  {/* Selected Tags */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          className="bg-pink-500/20 text-pink-300 border-pink-400/30 cursor-pointer hover:bg-pink-500/30"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Suggested Tags */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Suggested tags:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedTags.filter(tag => !tags.includes(tag)).map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 cursor-pointer"
                          onClick={() => addTag(tag)}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Post Button */}
              <div className="text-center">
                <Button 
                  onClick={handlePost}
                  className="bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white font-medium px-12 py-3 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Share with Community
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-500 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Style Shared!</h3>
                <p className="text-gray-300">Your outfit is now live in the community feed</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium"
                  onClick={() => shareToSocial('twitter')}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Social
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={onBack}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Share Another
                </Button>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'fashion' && <FashionFeatures celebrityName="Similar Styles" />}

      {/* Community Challenge */}
      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Join Weekly Style Challenge!</h3>
          <p className="text-gray-300 mb-4">
            This week: "Sustainable Fashion" - Share your eco-friendly outfit for a chance to win style rewards
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white">
            Join Challenge
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
