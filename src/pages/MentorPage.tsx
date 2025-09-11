import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface MentorPageProps {
  onNavigate: (page: string) => void;
  userName: string;
}

export const MentorPage: React.FC<MentorPageProps> = ({ onNavigate, userName }) => {
  const handleConnectMentor = () => {
    alert('Your mentor request has been submitted! Our team will review your profile and match you with a suitable mentor within 3-5 business days. You will receive an email confirmation shortly.');
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-white">🎉</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Congratulations, {userName}!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You've completed your first goal and unlocked access to our mentor network. 
            Connect with experienced professionals who can guide your continued growth.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Personalized Guidance
            </h3>
            <p className="text-gray-600 text-sm">
              Get matched with mentors who understand your industry, goals, and challenges.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Accelerated Growth
            </h3>
            <p className="text-gray-600 text-sm">
              Learn from those who've walked your path and avoid common pitfalls.
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Network Building
            </h3>
            <p className="text-gray-600 text-sm">
              Build valuable professional relationships that last beyond mentorship.
            </p>
          </Card>
        </div>

        {/* What to Expect */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Profile Review</h3>
                <p className="text-gray-600 text-sm">
                  Our team reviews your personality profile, completed goals, and preferences to find the perfect mentor match.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mentor Matching</h3>
                <p className="text-gray-600 text-sm">
                  We connect you with 1-2 potential mentors based on industry experience, personality compatibility, and goals alignment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Introduction Call</h3>
                <p className="text-gray-600 text-sm">
                  Schedule an introductory call to establish expectations, goals, and communication preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">
                  Regular check-ins, goal setting, and personalized advice to accelerate your growth journey.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sample Mentor Profiles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Some of Our Mentors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">David Chen</h3>
                  <p className="text-gray-600 text-sm">Senior Product Manager at Google</p>
                  <p className="text-gray-500 text-xs">5+ years mentoring experience</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "I help aspiring product managers navigate career transitions and build the skills needed to succeed in tech companies."
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah Martinez</h3>
                  <p className="text-gray-600 text-sm">Founder & CEO of TechStart</p>
                  <p className="text-gray-500 text-xs">3+ years mentoring experience</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "I guide entrepreneurs through the startup journey, from idea validation to fundraising and scaling."
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center bg-blue-50 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Connect with a Mentor?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our mentorship program is currently invite-only for users who have demonstrated commitment 
            by completing their first goal. You've earned this opportunity!
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleConnectMentor} size="lg">
              Request Mentor Match
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onNavigate('dashboard')}
            >
              Return to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
