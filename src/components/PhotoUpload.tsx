
import React, { useState, useRef } from 'react';
import { Upload, Camera, Sparkles, Plus, Image } from 'lucide-react';
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
        }, 1200);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-lg mx-auto">
      <Card 
        className={`relative overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${
          dragActive 
            ? 'border-primary bg-primary/5 scale-[1.02] shadow-lg' 
            : 'border-border hover:border-primary/50 hover:shadow-md hover:scale-[1.01]'
        } ${uploading ? 'pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <CardContent className="p-12 text-center">
          {uploading ? (
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary-foreground animate-spin" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Uploading your style...</h3>
                <p className="text-muted-foreground">Getting everything ready</p>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center transition-transform duration-300 ${dragActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                  {dragActive ? (
                    <Plus className="w-10 h-10 text-primary-foreground" />
                  ) : (
                    <Camera className="w-10 h-10 text-primary-foreground" />
                  )}
                </div>
                {dragActive && (
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-primary animate-ping"></div>
                )}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {dragActive ? 'Drop to upload' : 'Share your outfit'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {dragActive 
                    ? 'Release to start uploading' 
                    : 'Drag a photo here or click to browse'
                  }
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium px-8 py-3 text-base group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <Image className="w-5 h-5 mr-2" />
                  Choose from gallery
                </Button>
                
                <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
                    JPG, PNG supported
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
                    Up to 10MB
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
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
