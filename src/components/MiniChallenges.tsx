
import React, { useState } from 'react';
import { Camera, Heart, Users, Zap, Star, Trophy, Gift, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MiniChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);

  const challenges = [
    {
      id: 1,
      title: "Color Pop Monday",
      description: "Share an outfit with one bright, standout color",
      icon: Star,
      difficulty: "Easy",
      reward: 50,
      timeLeft: "2d 14h",
      participants: 1247,
      completed: false,
      progress: 0,
      maxProgress: 1,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Thrift Find Challenge",
      description: "Post your best thrift store discovery",
      icon: Gift,
      difficulty: "Medium",
      reward: 75,
      timeLeft: "4d 8h",
      participants: 892,
      completed: false,
      progress: 0,
      maxProgress: 1,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Mix & Match Master",
      description: "Create 3 different looks with the same piece",
      icon: Zap,
      difficulty: "Hard",
      reward: 100,
      timeLeft: "6d 12h",
      participants: 543,
      completed: false,
      progress: 1,
      maxProgress: 3,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Minimalist Vibes",
      description: "Show off your best minimalist outfit",
      icon: Heart,
      difficulty: "Easy",
      reward: 40,
      timeLeft: "1d 6h",
      participants: 2156,
      completed: true,
      progress: 1,
      maxProgress: 1,
      gradient: "from-gray-500 to-slate-600"
    }
  ];

  const dailyTasks = [
    { task: "Like 10 outfits", reward: 10, completed: true },
    { task: "Comment on 3 posts", reward: 15, completed: true },
    { task: "Share your OOTD", reward: 25, completed: false },
    { task: "Follow 2 new users", reward: 20, completed: false },
  ];

  const joinChallenge = (challengeId: number) => {
    setActiveChallenge(challengeId);
    // Here you would typically send a request to join the challenge
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Style Challenges
        </h2>
        <p className="text-muted-foreground">Complete challenges, earn rewards, and level up your style game!</p>
      </div>

      {/* Daily Tasks */}
      <Card className="social-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Daily Tasks</h3>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              2/4 Complete
            </Badge>
          </div>
          <div className="space-y-3">
            {dailyTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${task.completed ? 'bg-green-500' : 'bg-muted'}`}>
                    {task.completed && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <span className={task.completed ? 'line-through text-muted-foreground' : ''}>{task.task}</span>
                </div>
                <Badge variant="outline">+{task.reward} SP</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Challenges */}
      <div className="grid gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="social-card overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${challenge.gradient}`}></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${challenge.gradient} rounded-lg flex items-center justify-center`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{challenge.title}</h4>
                    <p className="text-muted-foreground text-sm">{challenge.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    className={
                      challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }
                  >
                    {challenge.difficulty}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="font-bold text-xl text-primary">+{challenge.reward}</div>
                  <div className="text-xs text-muted-foreground">Style Points</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl">{challenge.participants}</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {challenge.timeLeft}
                  </div>
                  <div className="text-xs text-muted-foreground">Time Left</div>
                </div>
              </div>

              {challenge.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{challenge.progress}/{challenge.maxProgress}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${challenge.gradient} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${(challenge.progress / challenge.maxProgress) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                {challenge.completed ? (
                  <Button disabled className="flex-1 bg-green-500 text-white">
                    <Trophy className="w-4 h-4 mr-2" />
                    Completed
                  </Button>
                ) : activeChallenge === challenge.id ? (
                  <Button disabled className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Joined
                  </Button>
                ) : (
                  <Button 
                    onClick={() => joinChallenge(challenge.id)}
                    className={`flex-1 bg-gradient-to-r ${challenge.gradient} hover:opacity-90 text-white`}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Join Challenge
                  </Button>
                )}
                <Button variant="outline">
                  <Users className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Challenge History */}
      <Card className="social-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Your Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-bold">12</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-bold">850</div>
              <div className="text-xs text-muted-foreground">Points Earned</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
              <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-bold">5</div>
              <div className="text-xs text-muted-foreground">Win Streak</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-bold">#23</div>
              <div className="text-xs text-muted-foreground">Best Rank</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiniChallenges;
