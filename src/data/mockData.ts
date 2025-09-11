export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  category: 'personality' | 'skills' | 'goals';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When facing a new challenge, I prefer to:",
    options: [
      "Plan carefully before taking action",
      "Jump in and figure it out as I go",
      "Research thoroughly first", 
      "Ask others for advice"
    ],
    category: 'personality'
  },
  {
    id: 2,
    question: "In group settings, I typically:",
    options: [
      "Take the lead and organize",
      "Support others and collaborate",
      "Listen and observe first",
      "Focus on my individual tasks"
    ],
    category: 'personality'
  },
  {
    id: 3,
    question: "My ideal work environment is:",
    options: [
      "Fast-paced and dynamic",
      "Structured and predictable",
      "Creative and flexible",
      "Quiet and focused"
    ],
    category: 'personality'
  },
  {
    id: 4,
    question: "When learning new skills, I prefer:",
    options: [
      "Hands-on practice",
      "Reading and studying theory",
      "Video tutorials and demonstrations",
      "Learning from mentors"
    ],
    category: 'skills'
  },
  {
    id: 5,
    question: "My strongest skill area is:",
    options: [
      "Communication and people skills",
      "Analytical and problem-solving",
      "Creative and artistic abilities",
      "Technical and digital skills"
    ],
    category: 'skills'
  },
  {
    id: 6,
    question: "What motivates me most?",
    options: [
      "Financial success and security",
      "Making a positive impact",
      "Personal growth and learning",
      "Recognition and achievement"
    ],
    category: 'goals'
  },
  {
    id: 7,
    question: "My biggest challenge right now is:",
    options: [
      "Time management",
      "Lack of direction",
      "Building confidence",
      "Financial constraints"
    ],
    category: 'goals'
  },
  {
    id: 8,
    question: "In 6 months, I want to:",
    options: [
      "Have a clear career plan",
      "Develop new skills",
      "Start a side project",
      "Build better habits"
    ],
    category: 'goals'
  },
  {
    id: 9,
    question: "When making decisions, I rely on:",
    options: [
      "Logic and data",
      "Intuition and gut feeling",
      "Others' opinions and advice",
      "Past experience"
    ],
    category: 'personality'
  },
  {
    id: 10,
    question: "My approach to risk is:",
    options: [
      "Calculated risks with backup plans",
      "Bold moves when I believe in something",
      "Conservative, prefer safety",
      "Research extensively before deciding"
    ],
    category: 'personality'
  }
];

export interface Goal {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  category: string;
  tasks: string[];
}

export const goalTemplates: Goal[] = [
  {
    id: 1,
    title: "Build Your Personal Brand",
    description: "Establish your online presence and professional identity",
    timeframe: "30 days",
    category: "Career Development",
    tasks: [
      "Update LinkedIn profile with professional photo",
      "Write compelling bio highlighting your strengths",
      "Share 2 industry-related posts per week",
      "Connect with 20 professionals in your field",
      "Create a simple personal website or portfolio"
    ]
  },
  {
    id: 2,
    title: "Master Time Management",
    description: "Develop systems to increase productivity and reduce stress",
    timeframe: "21 days",
    category: "Personal Development",
    tasks: [
      "Use a time-tracking app for one week",
      "Implement the Pomodoro Technique daily",
      "Create and stick to a morning routine",
      "Set up a task management system",
      "Eliminate 3 time-wasting activities"
    ]
  },
  {
    id: 3,
    title: "Learn a High-Value Skill",
    description: "Acquire a skill that increases your market value",
    timeframe: "60 days",
    category: "Skill Development",
    tasks: [
      "Choose one in-demand skill in your field",
      "Find quality online course or tutorial",
      "Practice 30 minutes daily",
      "Complete a small project using the skill",
      "Share your progress on social media"
    ]
  },
  {
    id: 4,
    title: "Start a Side Project",
    description: "Launch a small venture to explore entrepreneurship",
    timeframe: "45 days",
    category: "Entrepreneurship",
    tasks: [
      "Identify a problem you can solve",
      "Validate idea with 10 potential customers",
      "Create an MVP (minimum viable product)",
      "Get your first customer or user",
      "Document lessons learned"
    ]
  }
];

export interface UserProfile {
  name: string;
  email: string;
  personalityType: string;
  strengths: string[];
  goals: Goal[];
  completedGoals: number[];
  quizResults: { [key: number]: number };
}

export const mockUser: UserProfile = {
  name: "Alex Johnson",
  email: "alex@example.com",
  personalityType: "Strategic Planner",
  strengths: ["Analytical Thinking", "Communication", "Leadership"],
  goals: [],
  completedGoals: [],
  quizResults: {}
};
