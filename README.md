# 🧠 Wisdom Creation Platform

> **Unlocking Human Wisdom for Sustainable Growth**

A human-centered platform that helps individuals discover their potential, build essential skills, and achieve financial freedom through personalized goal-setting and expert mentorship.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Platform-blue?style=for-the-badge)](http://localhost:5173/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

## 🎯 Mission Statement

Wisdom Creation bridges the gap between self-discovery and actionable growth by providing personalized learning paths, goal-oriented frameworks, and access to experienced mentors. We believe that everyone has untapped potential waiting to be unlocked.

## ✨ Features

### 🔍 **Self-Discovery Assessment**
- **10-Question Personality Quiz** based on MBTI and Big Five frameworks
- **Intelligent Analysis** that identifies strengths, preferences, and growth areas
- **Personality Typing** with three main categories: Strategic Leader, Balanced Achiever, Creative Explorer

### 🎯 **Personalized Goal Generation**
- **Smart Algorithm** that creates custom goals based on quiz results
- **Four Goal Categories**: Personal Branding, Time Management, Skill Development, Entrepreneurship
- **Actionable Tasks** with clear timelines and measurable outcomes

### 📊 **Progress Tracking Dashboard**
- **Visual Progress Bars** showing completion percentages
- **Interactive Task Lists** with click-to-complete functionality
- **Achievement Statistics** and personal growth metrics
- **Profile Management** with personality insights and strengths

### 🤝 **Mentor Connection System**
- **Achievement-Based Unlock** - access mentors after completing first goal
- **Curated Mentor Network** featuring experienced professionals
- **Structured Matching Process** with clear expectations
- **Success-Driven Approach** connecting users with relevant industry experts

### 🎨 **Modern User Experience**
- **Clean, Minimal Design** with white and blue color scheme
- **Fully Responsive** layout for desktop and mobile devices
- **Smooth Animations** and intuitive user interactions
- **Professional SaaS Aesthetics** similar to Notion and Linear

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Modern web browser**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheUnknown550/WisdomCreationWebsite.git
   cd WisdomCreationWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button with variants
│   ├── Card.tsx        # Container component
│   ├── Header.tsx      # Navigation header
│   ├── Input.tsx       # Form input component
│   └── ProgressBar.tsx # Progress visualization
├── pages/              # Main application pages
│   ├── LandingPage.tsx # Marketing homepage
│   ├── SignupPage.tsx  # User registration
│   ├── LoginPage.tsx   # User authentication
│   ├── QuizPage.tsx    # Personality assessment
│   ├── DashboardPage.tsx # Main user interface
│   └── MentorPage.tsx  # Mentor connection
├── data/               # Mock data and types
│   └── mockData.ts     # User profiles, goals, quiz questions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Tailwind CSS imports
```

## 🔧 Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend framework | ^18.3.1 |
| **TypeScript** | Type safety | ^5.6.2 |
| **Vite** | Build tool & dev server | ^7.1.5 |
| **Tailwind CSS** | Utility-first styling | Latest |
| **ESLint** | Code linting | ^9.15.0 |

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Buttons, links, accents
- **Background**: `#ffffff` - Main background
- **Text Primary**: `#111827` - Headings and primary text
- **Text Secondary**: `#6b7280` - Secondary text and descriptions
- **Success**: `#10b981` - Completed tasks and positive actions
- **Surface**: `#f9fafb` - Card backgrounds and subtle surfaces

### Typography
- **Headings**: Inter font family, bold weights
- **Body Text**: Inter font family, regular and medium weights
- **Responsive Sizing**: Mobile-first approach with responsive text scales

## 💡 User Journey

1. **Discovery** 🔍
   - Land on homepage with clear value proposition
   - Learn about the 3-step process: Discover → Build → Connect

2. **Assessment** 📝
   - Complete 10-question personality and skills assessment
   - Receive instant personality type analysis

3. **Goal Setting** 🎯
   - Get 1-2 personalized goals based on quiz results
   - Access detailed task lists with clear timelines

4. **Progress Tracking** 📊
   - Check off completed tasks in interactive dashboard
   - Monitor overall progress with visual indicators

5. **Mentor Unlock** 🤝
   - Complete first goal to unlock mentor access
   - Submit request for professional mentor matching

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎮 Demo Accounts

For testing purposes, you can use any email/password combination. The platform uses mock data and doesn't require real authentication.

**Suggested Test Flow:**
1. Sign up with any email
2. Complete the personality quiz
3. Explore the dashboard with generated goals
4. Complete tasks to unlock mentor access

## 🔮 Future Enhancements

### Phase 2 - Backend Integration
- [ ] **PostgreSQL Database** for user data persistence
- [ ] **Node.js + Express API** for backend services
- [ ] **JWT Authentication** for secure user sessions
- [ ] **Real User Management** with email verification

### Phase 3 - AI & Analytics
- [ ] **AI-Powered Goal Generation** using machine learning
- [ ] **Advanced Analytics** for user progress tracking
- [ ] **Personalized Recommendations** based on user behavior
- [ ] **Success Prediction Models** for goal completion

### Phase 4 - Mentorship Platform
- [ ] **Mentor Application System** with verification process
- [ ] **Video Call Integration** for mentor sessions
- [ ] **Payment Processing** for premium mentorship tiers
- [ ] **Rating & Review System** for mentor feedback

### Phase 5 - Community Features
- [ ] **User Communities** based on goals and interests
- [ ] **Peer Support Groups** for accountability
- [ ] **Achievement Sharing** on social platforms
- [ ] **Gamification Elements** with badges and leaderboards

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Report bugs via [GitHub Issues](https://github.com/TheUnknown550/WisdomCreationWebsite/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/TheUnknown550/WisdomCreationWebsite/discussions)

## 📊 Platform Statistics

- **Assessment Questions**: 10 comprehensive personality/skill questions
- **Goal Categories**: 4 main focus areas (Personal Brand, Skills, Time Management, Entrepreneurship)
- **Personality Types**: 3 primary classifications with detailed insights
- **Mentor Network**: Growing database of verified industry professionals

---

<div align="center">

**Built with ❤️ for human potential**

[🌐 Live Demo](http://localhost:5173/) • [📱 Mobile View](http://localhost:5173/) • [🎯 Dashboard Preview](http://localhost:5173/)

*Empowering individuals to unlock their wisdom and achieve sustainable growth*

</div>

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
