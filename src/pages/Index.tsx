
import React, { useState } from 'react';
import { Camera, Upload, Sparkles, Users, Trophy, Share2, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PhotoUpload from '@/components/PhotoUpload';
import ResultsDisplay from '@/components/ResultsDisplay';
import FeatureCard from '@/components/FeatureCard';
import StatsBar from '@/components/StatsBar';

const Index = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handlePhotoUpload = (photoUrl: string) => {
    setUploadedPhoto(photoUrl);
    // Simulate processing delay
    setTimeout(() => {
      setShowResults(true);
    }, 2000);
  };

  const features = [
    {
      icon: Camera,
      title: "AI Face Analysis",
      description: "Advanced facial recognition technology finds your perfect celebrity matches",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Sparkles,
      title: "AR Try-Ons",
      description: "Try celebrity hairstyles and makeup in real-time with AR technology",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "Compete with friends and climb the viral sharing rankings",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your photos are processed securely and deleted automatically",
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Look-Alike AI Hub
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium">
            Get Started
          </Button>
        </div>
      </header>

      {/* Stats Bar */}
      <StatsBar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {!showResults ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
                Discover Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Celebrity Twin
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Upload your photo and let advanced AI find your perfect celebrity, character, or athlete look-alike. 
                Try AR effects and share your results with the world!
              </p>
              
              <div className="flex justify-center items-center space-x-6 mb-12">
                <div className="flex items-center space-x-2 text-blue-300">
                  <Zap className="w-5 h-5" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <Shield className="w-5 h-5" />
                  <span>100% Private</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-300">
                  <Share2 className="w-5 h-5" />
                  <span>Viral Ready</span>
                </div>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="mb-16">
              <PhotoUpload onPhotoUpload={handlePhotoUpload} />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
              <p className="text-gray-400 mb-4">Trusted by thousands of users worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-blue-400">500K+</div>
                <div className="text-gray-500">•</div>
                <div className="text-2xl font-bold text-purple-400">1M+</div>
                <div className="text-gray-500">•</div>
                <div className="text-2xl font-bold text-cyan-400">50K+</div>
              </div>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mt-2">
                <span>Photos Analyzed</span>
                <span>Matches Found</span>
                <span>Happy Users</span>
              </div>
            </div>
          </>
        ) : (
          <ResultsDisplay photoUrl={uploadedPhoto} onBack={() => setShowResults(false)} />
        )}
      </div>

      {/* Floating Action Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-2xl shadow-blue-500/25 z-20"
        onClick={() => setShowResults(false)}
      >
        <Upload className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Index;
