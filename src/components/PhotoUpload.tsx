
import React, { useState, useRef } from 'react';
import { Upload, Camera, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PhotoUploadProps {
  onPhotoUpload: (photoUrl: string) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onPhotoUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setTimeout(() => {
          setUploading(false);
          onPhotoUpload(result);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card 
        className={`relative overflow-hidden border-2 border-dashed transition-all duration-300 bg-white/5 backdrop-blur-sm ${
          dragActive 
            ? 'border-blue-400 bg-blue-500/10 scale-105' 
            : 'border-white/20 hover:border-blue-400/50 hover:bg-white/10'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-12 text-center">
          {uploading ? (
            <div className="space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-10 h-10 text-white animate-spin" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-blue-400/30 border-t-blue-400 animate-spin"></div>
              </div>
              <div>
                <p className="text-xl font-semibold text-white mb-2">Analyzing Your Photo</p>
                <p className="text-gray-300">Our AI is finding your perfect matches...</p>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                {dragActive && (
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-blue-400 animate-ping"></div>
                )}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Upload Your Photo</h3>
                <p className="text-gray-300 mb-6">
                  Drag and drop your image here, or click to browse
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={openFileDialog}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-8 py-3 text-lg group"
                >
                  <Upload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Choose Photo
                </Button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <span>✓ JPG, PNG, WebP</span>
                  <span>✓ Max 10MB</span>
                  <span>✓ Auto-deleted</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default PhotoUpload;
