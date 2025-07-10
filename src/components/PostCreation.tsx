
import React, { useState } from 'react';
import { ArrowLeft, Camera, Heart, Tag, Save, Send, X, Hash, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface PostCreationProps {
  photoUrl: string;
  onBack: () => void;
  onPost: (postData: PostData) => void;
  onSaveDraft: (draftData: PostData) => void;
}

interface PostData {
  photoUrl: string;
  caption: string;
  hashtags: string[];
  isPublic: boolean;
}

const PostCreation: React.FC<PostCreationProps> = ({ photoUrl, onBack, onPost, onSaveDraft }) => {
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  const suggestedHashtags = ['#OOTD', '#StreetStyle', '#Fashion', '#Style', '#Trendy', '#Outfit', '#Look', '#WIWT', '#StyleInspo', '#FashionPost'];

  const addHashtag = (tag: string) => {
    const cleanTag = tag.startsWith('#') ? tag : `#${tag}`;
    if (!hashtags.includes(cleanTag) && hashtags.length < 10) {
      setHashtags([...hashtags, cleanTag]);
    }
  };

  const removeHashtag = (tagToRemove: string) => {
    setHashtags(hashtags.filter(tag => tag !== tagToRemove));
  };

  const handleHashtagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && hashtagInput.trim()) {
      e.preventDefault();
      addHashtag(hashtagInput.trim());
      setHashtagInput('');
    }
  };

  const handlePost = async () => {
    setIsPosting(true);
    const postData: PostData = {
      photoUrl,
      caption: caption.trim(),
      hashtags,
      isPublic
    };
    
    // Simulate posting delay
    setTimeout(() => {
      onPost(postData);
      setIsPosting(false);
    }, 2000);
  };

  const handleSaveDraft = () => {
    const draftData: PostData = {
      photoUrl,
      caption: caption.trim(),
      hashtags,
      isPublic
    };
    onSaveDraft(draftData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Create Post
          </h1>
          
          <Button 
            variant="outline"
            onClick={handleSaveDraft}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Photo Preview */}
          <div className="space-y-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-4">
                <img 
                  src={photoUrl} 
                  alt="Your style post" 
                  className="w-full aspect-square object-cover rounded-lg border-2 border-white/20"
                />
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-white">Privacy</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="public"
                    name="privacy"
                    checked={isPublic}
                    onChange={() => setIsPublic(true)}
                    className="w-4 h-4 text-pink-600"
                  />
                  <label htmlFor="public" className="text-white cursor-pointer">
                    Public - Everyone can see this post
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="friends"
                    name="privacy"
                    checked={!isPublic}
                    onChange={() => setIsPublic(false)}
                    className="w-4 h-4 text-pink-600"
                  />
                  <label htmlFor="friends" className="text-white cursor-pointer">
                    Friends only - Only your friends can see this
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Post Details */}
          <div className="space-y-6">
            {/* Caption */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Smile className="w-5 h-5 mr-2" />
                  Caption
                </h3>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Write a caption for your style post... What's your inspiration? Where did you get these pieces?"
                  className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none min-h-[120px] focus:border-pink-400"
                  maxLength={2200}
                />
                <div className="text-right text-sm text-gray-400 mt-2">
                  {caption.length}/2200
                </div>
              </CardContent>
            </Card>

            {/* Hashtags */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Hash className="w-5 h-5 mr-2" />
                  Hashtags
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add hashtag input */}
                <div className="flex space-x-2">
                  <Input
                    value={hashtagInput}
                    onChange={(e) => setHashtagInput(e.target.value)}
                    onKeyPress={handleHashtagInputKeyPress}
                    placeholder="Add hashtag..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-pink-400"
                  />
                  <Button
                    onClick={() => {
                      if (hashtagInput.trim()) {
                        addHashtag(hashtagInput.trim());
                        setHashtagInput('');
                      }
                    }}
                    className="bg-pink-500 hover:bg-pink-600"
                  >
                    <Tag className="w-4 h-4" />
                  </Button>
                </div>

                {/* Selected hashtags */}
                {hashtags.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Your hashtags ({hashtags.length}/10):</p>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          className="bg-pink-500/20 text-pink-300 border-pink-400/30 cursor-pointer hover:bg-pink-500/30 group"
                          onClick={() => removeHashtag(tag)}
                        >
                          {tag} 
                          <X className="w-3 h-3 ml-1 group-hover:text-white" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested hashtags */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Suggested hashtags:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedHashtags
                      .filter(tag => !hashtags.includes(tag))
                      .slice(0, 8)
                      .map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 cursor-pointer hover:border-pink-400"
                          onClick={() => addHashtag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post Actions */}
            <div className="flex space-x-4">
              <Button 
                onClick={handlePost}
                disabled={isPosting}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 text-white font-medium py-3 text-lg disabled:opacity-50"
              >
                {isPosting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Share Post
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
