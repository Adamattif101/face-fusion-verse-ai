
import React, { useState } from 'react';
import { Camera, Upload, Sparkles, Users, Trophy, Share2, Shirt, Heart, User, TrendingUp, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhotoUpload from '@/components/PhotoUpload';
import ResultsDisplay from '@/components/ResultsDisplay';
import FeatureCard from '@/components/FeatureCard';
import StatsBar from '@/components/StatsBar';
import FashionFeed from '@/components/FashionFeed';
import SocialFeed from '@/components/SocialFeed';
import StyleTribes from '@/components/StyleTribes';
import StyleBoards from '@/components/StyleBoards';
import TrendingOutfits from '@/components/TrendingOutfits';
import UserProfile from '@/components/UserProfile';
import FashionSocialLanding from '@/components/FashionSocialLanding';
import TrendsLanding from '@/components/TrendsLanding';

const Index = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [showPostCreation, setShowPostCreation] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'social' | 'fashion' | 'trending' | 'tribes' | 'boards' | 'profile' | 'fashion-social' | 'trends-landing'>('home');

  const handlePhotoUpload = (photoUrl: string) => {
    setUploadedPhoto(photoUrl);
    setTimeout(() => {
      setShowPostCreation(true);
    }, 1500);
  };

  const handleBackToHome = () => {
    setShowPostCreation(false);
    setUploadedPhoto(null);
    setActiveView('home');
  };

  const handleFeatureCardClick = (featureTitle: string) => {
    if (featureTitle === "Fashion Social Feed") {
      setActiveView('fashion-social');
    } else if (featureTitle === "Real-Time Trends") {
      setActiveView('trends-landing');
    } else if (featureTitle === "Style Community") {
      setActiveView('social');
    }
  };

  const features = [
    {
      icon: Users,
      title: "Fashion Social Feed",
      description: "Share your outfits, discover new styles, and connect with your fashion tribe",
      color: "from-pink-500 to-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Trends",
      description: "Stay ahead with trending outfits from social media and our community",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Heart,
      title: "Style Community",
      description: "Like, comment, and save your favorite looks from fashion enthusiasts",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Grid3X3,
      title: "Style Boards",
      description: "Create and curate your personal style collections and mood boards",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Sparkles,
      title: "Style Challenges",
      description: "Join weekly fashion challenges and compete with the community",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Trophy,
      title: "Fashion Rewards",
      description: "Earn style points, badges, and unlock exclusive features",
      color: "from-blue-500 to-cyan-400"
    }
  ];

  if (showPostCreation) {
    return <ResultsDisplay photoUrl={uploadedPhoto} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            StyleMatch AI
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={activeView === 'home' ? 'default' : 'ghost'}
            onClick={() => setActiveView('home')}
            className={activeView === 'home' ? 'bg-gradient-to-r from-pink-500 to-purple-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            Home
          </Button>
          <Button
            variant={activeView === 'social' ? 'default' : 'ghost'}
            onClick={() => setActiveView('social')}
            className={activeView === 'social' ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Users className="w-4 h-4 mr-2" />
            Social
          </Button>
          <Button
            variant={activeView === 'trending' ? 'default' : 'ghost'}
            onClick={() => setActiveView('trending')}
            className={activeView === 'trending' ? 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </Button>
          <Button
            variant={activeView === 'fashion' ? 'default' : 'ghost'}
            onClick={() => setActiveView('fashion')}
            className={activeView === 'fashion' ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Shirt className="w-4 h-4 mr-2" />
            Fashion
          </Button>
          <Button
            variant={activeView === 'tribes' ? 'default' : 'ghost'}
            onClick={() => setActiveView('tribes')}
            className={activeView === 'tribes' ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            Tribes
          </Button>
          <Button
            variant={activeView === 'boards' ? 'default' : 'ghost'}
            onClick={() => setActiveView('boards')}
            className={activeView === 'boards' ? 'bg-gradient-to-r from-red-500 to-rose-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Boards
          </Button>
          <Button
            variant={activeView === 'profile' ? 'default' : 'ghost'}
            onClick={() => setActiveView('profile')}
            className={activeView === 'profile' ? 'bg-gradient-to-r from-indigo-500 to-blue-400 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
        </div>
      </header>

      {/* Stats Bar */}
      <StatsBar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {activeView === 'home' && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                Share Your Style
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Connect & Inspire
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the ultimate fashion community. Share your outfits, discover trending styles, 
                and connect with fashion enthusiasts from around the world!
              </p>
              
              <div className="flex justify-center items-center space-x-6 mb-12">
                <div className="flex items-center space-x-2 text-pink-300">
                  <Camera className="w-5 h-5" />
                  <span>Share Outfits</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <Users className="w-5 h-5" />
                  <span>Style Community</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-300">
                  <TrendingUp className="w-5 h-5" />
                  <span>Trending Styles</span>
                </div>
                <div className="flex items-center space-x-2 text-green-300">
                  <Heart className="w-5 h-5" />
                  <span>Fashion Love</span>
                </div>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="mb-16">
              <PhotoUpload onPhotoUpload={handlePhotoUpload} />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={index * 0.1}
                  onClick={() => handleFeatureCardClick(feature.title)}
                />
              ))}
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">Join the fashion revolution</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-pink-400">500K+</div>
                <div className="text-gray-500">•</div>
                <div className="text-2xl font-bold text-purple-400">2M+</div>
                <div className="text-gray-500">•</div>
                <div className="text-2xl font-bold text-cyan-400">50K+</div>
              </div>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mt-2">
                <span>Style Posts</span>
                <span>Likes & Saves</span>
                <span>Fashion Creators</span>
              </div>
            </div>
          </>
        )}

        {activeView === 'social' && <SocialFeed />}
        {activeView === 'fashion' && <FashionFeed />}
        {activeView === 'trending' && <TrendingOutfits />}
        {activeView === 'tribes' && <StyleTribes />}
        {activeView === 'boards' && <StyleBoards />}
        {activeView === 'profile' && <UserProfile />}
        {activeView === 'fashion-social' && <FashionSocialLanding onBackToHome={() => setActiveView('home')} />}
        {activeView === 'trends-landing' && <TrendsLanding onBackToHome={() => setActiveView('home')} />}
      </div>

      {/* Floating Action Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 hover:from-pink-600 hover:to-purple-500 shadow-2xl shadow-pink-500/25 z-20"
        onClick={() => {
          setActiveView('home');
          setShowPostCreation(false);
        }}
      >
        <Upload className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Index;
