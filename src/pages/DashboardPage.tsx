import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import type { UserProfile, Goal } from '../data/mockData';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
  user: UserProfile;
  onUpdateGoals: (goals: Goal[]) => void;
  onCompleteTask: (goalId: number, taskIndex: number) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ 
  onNavigate, 
  user, 
  onUpdateGoals,
  onCompleteTask 
}) => {
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({});

  const handleTaskComplete = (goalId: number, taskIndex: number) => {
    const taskKey = `${goalId}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
    onCompleteTask(goalId, taskIndex);
  };

  const getTasksCompletedForGoal = (goalId: number, totalTasks: number) => {
    let completed = 0;
    for (let i = 0; i < totalTasks; i++) {
      if (completedTasks[`${goalId}-${i}`]) completed++;
    }
    return completed;
  };

  const hasCompletedGoal = (goalId: number) => {
    const goal = user.goals.find(g => g.id === goalId);
    if (!goal) return false;
    const completedCount = getTasksCompletedForGoal(goalId, goal.tasks.length);
    return completedCount === goal.tasks.length;
  };

  const hasAnyCompletedGoal = user.goals.some(goal => hasCompletedGoal(goal.id));

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600">
            Continue your journey to personal and professional growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{user.email}</p>
                
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Personality Type</p>
                  <p className="font-semibold text-blue-600">{user.personalityType}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Your Strengths</p>
                  <div className="flex flex-wrap gap-2">
                    {user.strengths.map((strength, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Active Goals</span>
                    <span className="font-medium">{user.goals.length}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Completed Goals</span>
                    <span className="font-medium">{user.completedGoals.length}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-medium">
                      {user.goals.length > 0 
                        ? Math.round((user.completedGoals.length / (user.goals.length + user.completedGoals.length)) * 100)
                        : 0}%
                    </span>
                  </div>
                  <ProgressBar 
                    progress={user.goals.length > 0 
                      ? (user.completedGoals.length / (user.goals.length + user.completedGoals.length)) * 100
                      : 0} 
                  />
                </div>
              </div>
            </Card>

            {/* Mentor Unlock Card */}
            {hasAnyCompletedGoal && (
              <Card className="border-2 border-blue-200 bg-blue-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🎉</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Congratulations!
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    You've completed a goal! You're now eligible for mentor matching.
                  </p>
                  <Button 
                    onClick={() => onNavigate('mentor')}
                    className="w-full"
                  >
                    Connect with a Mentor
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Right Column - Goals */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Goals</h2>
              {user.goals.length === 0 && (
                <Button onClick={() => onNavigate('quiz')}>
                  Retake Quiz for New Goals
                </Button>
              )}
            </div>

            {user.goals.length === 0 ? (
              <Card className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No goals yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete the personality quiz to get personalized goal recommendations.
                </p>
                <Button onClick={() => onNavigate('quiz')}>
                  Take Personality Quiz
                </Button>
              </Card>
            ) : (
              <div className="space-y-6">
                {user.goals.map((goal) => {
                  const completedCount = getTasksCompletedForGoal(goal.id, goal.tasks.length);
                  const progress = (completedCount / goal.tasks.length) * 100;
                  const isCompleted = hasCompletedGoal(goal.id);

                  return (
                    <Card key={goal.id} className={isCompleted ? 'border-2 border-green-200 bg-green-50' : ''}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
                            {isCompleted && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                Completed ✓
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{goal.description}</p>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <span>📅 {goal.timeframe}</span>
                            <span>📂 {goal.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{completedCount}/{goal.tasks.length} tasks</span>
                        </div>
                        <ProgressBar progress={progress} />
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Tasks:</h4>
                        {goal.tasks.map((task, taskIndex) => {
                          const taskKey = `${goal.id}-${taskIndex}`;
                          const isTaskCompleted = completedTasks[taskKey];

                          return (
                            <div 
                              key={taskIndex}
                              className="flex items-start gap-3 p-3 rounded-lg border border-gray-200"
                            >
                              <button
                                onClick={() => handleTaskComplete(goal.id, taskIndex)}
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                                  isTaskCompleted
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'border-gray-300 hover:border-green-400'
                                }`}
                              >
                                {isTaskCompleted && <span className="text-xs">✓</span>}
                              </button>
                              <span className={`text-sm ${isTaskCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                                {task}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
