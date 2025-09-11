import { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { QuizPage } from './pages/QuizPage';
import { DashboardPage } from './pages/DashboardPage';
import { MentorPage } from './pages/MentorPage';
import { mockUser, goalTemplates, type UserProfile, type Goal } from './data/mockData';

type Page = 'landing' | 'signup' | 'login' | 'quiz' | 'dashboard' | 'mentor';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleSignup = (userData: { name: string; email: string; password: string }) => {
    const newUser: UserProfile = {
      ...mockUser,
      name: userData.name,
      email: userData.email,
      goals: [],
      completedGoals: [],
      quizResults: {}
    };
    setUser(newUser);
  };

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, this would validate credentials against a backend
    // For MVP, we'll use the mock user
    setUser({
      ...mockUser,
      email: credentials.email,
      goals: goalTemplates.slice(0, 2), // Give them 2 sample goals
    });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  const handleQuizComplete = (results: { [key: number]: number }) => {
    if (!user) return;
    
    // Simple algorithm to recommend goals based on quiz answers
    const recommendedGoals = generateGoalsFromQuiz(results);
    
    const updatedUser = {
      ...user,
      quizResults: results,
      goals: recommendedGoals,
      personalityType: getPersonalityType(results)
    };
    setUser(updatedUser);
  };

  const generateGoalsFromQuiz = (results: { [key: number]: number }): Goal[] => {
    // Simple rule-based algorithm for MVP
    const goals: Goal[] = [];
    
    // Add goals based on quiz responses
    const answers = Object.values(results);
    const hasLeadershipTendency = answers[1] === 0; // Takes lead in groups
    const isCreative = answers[2] === 2; // Prefers creative environment
    const wantsSkillDevelopment = answers[4] === 3; // Technical skills
    const motivatedByImpact = answers[5] === 1; // Making positive impact
    
    if (hasLeadershipTendency) {
      goals.push(goalTemplates[0]); // Personal Brand
    }
    if (isCreative) {
      goals.push(goalTemplates[3]); // Side Project
    }
    if (wantsSkillDevelopment) {
      goals.push(goalTemplates[2]); // Learn High-Value Skill
    }
    if (motivatedByImpact) {
      goals.push(goalTemplates[1]); // Time Management
    }
    
    // Ensure at least one goal is assigned
    if (goals.length === 0) {
      goals.push(goalTemplates[0]); // Default to Personal Brand
    }
    
    return goals.slice(0, 2); // Max 2 goals to start
  };

  const getPersonalityType = (results: { [key: number]: number }): string => {
    // Simple personality typing based on first few answers
    const answers = Object.values(results);
    const plannerScore = answers[0] === 0 ? 1 : 0; // Plans carefully
    const leaderScore = answers[1] === 0 ? 1 : 0; // Takes lead
    const analyticalScore = answers[4] === 1 ? 1 : 0; // Analytical skills
    
    const totalScore = plannerScore + leaderScore + analyticalScore;
    
    if (totalScore >= 2) return "Strategic Leader";
    if (totalScore === 1) return "Balanced Achiever";
    return "Creative Explorer";
  };

  const handleUpdateGoals = (goals: Goal[]) => {
    if (!user) return;
    setUser({ ...user, goals });
  };

  const handleCompleteTask = (goalId: number, taskIndex: number) => {
    // In a real app, this would update the backend
    console.log(`Task ${taskIndex} completed for goal ${goalId}`);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} onSignup={handleSignup} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'quiz':
        return <QuizPage onNavigate={handleNavigate} onQuizComplete={handleQuizComplete} />;
      case 'dashboard':
        return user ? (
          <DashboardPage 
            onNavigate={handleNavigate} 
            user={user} 
            onUpdateGoals={handleUpdateGoals}
            onCompleteTask={handleCompleteTask}
          />
        ) : (
          <LandingPage onNavigate={handleNavigate} />
        );
      case 'mentor':
        return user ? (
          <MentorPage onNavigate={handleNavigate} userName={user.name} />
        ) : (
          <LandingPage onNavigate={handleNavigate} />
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={handleNavigate}
        currentUser={user?.name}
        onLogout={handleLogout}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
