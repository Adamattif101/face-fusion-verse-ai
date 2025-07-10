
import React, { useState } from 'react';
import PostCreation from './PostCreation';
import PostConfirmation from './PostConfirmation';
import FashionFeatures from './FashionFeatures';

interface PostData {
  photoUrl: string;
  caption: string;
  hashtags: string[];
  isPublic: boolean;
}

interface ResultsDisplayProps {
  photoUrl: string | null;
  onBack: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ photoUrl, onBack }) => {
  const [currentStep, setCurrentStep] = useState<'create' | 'confirm' | 'fashion'>('create');
  const [postData, setPostData] = useState<PostData | null>(null);

  const handlePost = (data: PostData) => {
    setPostData(data);
    setCurrentStep('confirm');
    console.log('Posted:', data);
  };

  const handleSaveDraft = (data: PostData) => {
    console.log('Draft saved:', data);
    // Here you would typically save to localStorage or send to backend
    alert('Draft saved successfully!');
  };

  const handleViewProfile = () => {
    // Navigate to profile view
    console.log('Navigate to profile');
  };

  const handleCreateAnother = () => {
    setCurrentStep('create');
    setPostData(null);
    onBack();
  };

  const handleGoHome = () => {
    onBack();
  };

  if (!photoUrl) return null;

  if (currentStep === 'confirm' && postData) {
    return (
      <PostConfirmation
        photoUrl={postData.photoUrl}
        caption={postData.caption}
        hashtags={postData.hashtags}
        onViewProfile={handleViewProfile}
        onCreateAnother={handleCreateAnother}
        onGoHome={handleGoHome}
      />
    );
  }

  if (currentStep === 'fashion') {
    return (
      <div className="space-y-8 animate-fade-in">
        <FashionFeatures celebrityName="Similar Styles" />
      </div>
    );
  }

  return (
    <PostCreation
      photoUrl={photoUrl}
      onBack={onBack}
      onPost={handlePost}
      onSaveDraft={handleSaveDraft}
    />
  );
};

export default ResultsDisplay;
