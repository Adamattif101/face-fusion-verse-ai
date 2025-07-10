
import React from 'react';
import { Check, Heart, Share2, Eye, Camera, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PostConfirmationProps {
  photoUrl: string;
  caption: string;
  hashtags: string[];
  onViewProfile: () => void;
  onCreateAnother: () => void;
  onGoHome: () => void;
}

const PostConfirmation: React.FC<PostConfirmationProps> = ({ 
  photoUrl, 
  caption, 
  hashtags,
  onViewProfile, 
  onCreateAnother,
  onGoHome 
}) => {
  const shareToSocial = () => {
    const text = "Check out my latest style post on StyleMatch AI! 🔥👗 #StyleMatch #OOTD";
    const url = window.location.href;
    
    if (navigator.share) {
      navigator.share({ title: 'StyleMatch AI', text, url });
    } else {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center animate-scale-in">
              <Check className="w-12 h-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-green-400/30 animate-ping"></div>
          </div>

          {/* Success Message */}
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Style Posted Successfully! 🎉
            </h2>
            <p className="text-gray-300 text-lg">
              Your amazing style is now live and inspiring the community!
            </p>
          </div>

          {/* Post Preview */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-4">
              <img 
                src={photoUrl} 
                alt="Your posted style" 
                className="w-full aspect-square object-cover rounded-lg border-2 border-white/20 mb-4"
              />
              
              {caption && (
                <p className="text-white text-sm mb-3 text-left">
                  {caption.length > 100 ? `${caption.substring(0, 100)}...` : caption}
                </p>
              )}
              
              {hashtags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {hashtags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="text-blue-300 text-sm">
                      {tag}
                    </span>
                  ))}
                  {hashtags.length > 5 && (
                    <span className="text-gray-400 text-sm">
                      +{hashtags.length - 5} more
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>0</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>1</span>
                  </div>
                </div>
                <span className="text-xs">Just now</span>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">+50</div>
              <div className="text-sm text-gray-400">Style Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">+1</div>
              <div className="text-sm text-gray-400">Post Count</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">+10</div>
              <div className="text-sm text-gray-400">XP Gained</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={onViewProfile}
                className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white font-medium px-6"
              >
                <Eye className="w-4 h-4 mr-2" />
                View on Profile
              </Button>
              
              <Button 
                onClick={shareToSocial}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-6"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={onCreateAnother}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-6"
              >
                <Camera className="w-4 h-4 mr-2" />
                Post Another
              </Button>
              
              <Button 
                onClick={onGoHome}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-6"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostConfirmation;
