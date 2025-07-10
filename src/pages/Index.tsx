
import React, { useState } from 'react';
import { Camera, Upload, Sparkles, Users, Trophy, Share2, Shirt, Heart, User, TrendingUp, Grid3X3, UserPlus, Award, Zap } from 'lucide-react';
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
import GameRewards from '@/components/GameRewards';
import FriendsSystem from '@/components/FriendsSystem';
import Leaderboard from '@/components/Leaderboard';
import MiniChallenges from '@/components/MiniChallenges';

const Index = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'social' | 'fashion' | 'trending' | 'tribes' | 'boards' | 'profile' | 'rewards' | 'friends' | 'leaderboard' | 'challenges'>('home');

  const handlePhotoUpload = (photoUrl: string) => {
    setUploadedPhoto(photoUrl);
    setTimeout(() => {
      setShowResults(true);
    }, 1500);
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
      icon: Trophy,
      title: "Style Competitions",
      description: "Compete in fashion challenges, climb leaderboards, and earn rewards",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: UserPlus,
      title: "Fashion Friends",
      description: "Connect with style enthusiasts, follow friends, and discover new creators",
      color: "from-blue-500 to-cyan-400"
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <ResultsDisplay photoUrl={uploadedPhoto} onBack={() => setShowResults(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-border/20 backdrop-blur-sm bg-background/80">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 instagram-gradient rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            StyleMatch AI
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto">
          <Button
            variant={activeView === 'home' ? 'default' : 'ghost'}
            onClick={() => setActiveView('home')}
            className={activeView === 'home' ? 'instagram-gradient text-white' : 'hover:bg-accent/10'}
            size="sm"
          >
            Home
          </Button>
          <Button
            variant={activeView === 'social' ? 'default' : 'ghost'}
            onClick={() => setActiveView('social')}
            className={activeView === 'social' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <Users className="w-4 h-4 mr-2" />
            Social
          </Button>
          <Button
            variant={activeView === 'friends' ? 'default' : 'ghost'}
            onClick={() => setActiveView('friends')}
            className={activeView === 'friends' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Friends
          </Button>
          <Button
            variant={activeView === 'challenges' ? 'default' : 'ghost'}
            onClick={() => setActiveView('challenges')}
            className={activeView === 'challenges' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <Zap className="w-4 h-4 mr-2" />
            Challenges
          </Button>
          <Button
            variant={activeView === 'leaderboard' ? 'default' : 'ghost'}
            onClick={() => setActiveView('leaderboard')}
            className={activeView === 'leaderboard' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Leaderboard
          </Button>
          <Button
            variant={activeView === 'rewards' ? 'default' : 'ghost'}
            onClick={() => setActiveView('rewards')}
            className={activeView === 'rewards' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <Award className="w-4 h-4 mr-2" />
            Rewards
          </Button>
          <Button
            variant={activeView === 'trending' ? 'default' : 'ghost'}
            onClick={() => setActiveView('trending')}
            className={activeView === 'trending' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </Button>
          <Button
            variant={activeView === 'profile' ? 'default' : 'ghost'}
            onClick={() => setActiveView('profile')}
            className={activeView === 'profile' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent/10'}
            size="sm"
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
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Share Your Style
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Win & Connect
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the ultimate fashion social network! Share outfits, compete in challenges, 
                climb leaderboards, and connect with style creators worldwide.
              </p>
              
              <div className="flex justify-center items-center space-x-6 mb-12 flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Camera className="w-5 h-5" />
                  <span>Share Outfits</span>
                </div>
                <div className="flex items-center space-x-2 text-accent">
                  <Trophy className="w-5 h-5" />
                  <span>Win Challenges</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span>Connect Friends</span>
                </div>
                <div className="flex items-center space-x-2 text-accent">
                  <Heart className="w-5 h-5" />
                  <span>Get Likes</span>
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
                />
              ))}
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Join the fashion revolution</p>
              <div className="flex justify-center items-center space-x-8 opacity-80">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-muted-foreground">•</div>
                <div className="text-2xl font-bold text-accent">2M+</div>
                <div className="text-muted-foreground">•</div>
                <div className="text-2xl font-bold text-primary">50K+</div>
              </div>
              <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground mt-2">
                <span>Style Posts</span>
                <span>Likes & Saves</span>
                <span>Fashion Creators</span>
              </div>
            </div>
          </>
        )}

        {activeView === 'social' && <SocialFeed />}
        {activeView === 'friends' && <FriendsSystem />}
        {activeView === 'challenges' && <MiniChallenges />}
        {activeView === 'leaderboard' && <Leaderboard />}
        {activeView === 'rewards' && <GameRewards />}
        {activeView === 'fashion' && <FashionFeed />}
        {activeView === 'trending' && <TrendingOutfits />}
        {activeView === 'tribes' && <StyleTribes />}
        {activeView === 'boards' && <StyleBoards />}
        {activeView === 'profile' && <UserProfile />}
      </div>

      {/* Floating Action Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full instagram-gradient hover:opacity-90 shadow-2xl shadow-primary/25 z-20"
        onClick={() => {
          setActiveView('home');
          setShowResults(false);
        }}
      >
        <Upload className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Index;
