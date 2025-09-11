import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unlocking Human Wisdom for{' '}
            <span className="text-blue-600">Sustainable Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A human-centered platform that helps you discover your potential, build skills, and achieve financial freedom.
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate('signup')}
            className="text-xl px-10 py-4"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Your Path to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Discover Yourself
              </h3>
              <p className="text-gray-600">
                Take our personality and skills assessment to understand your unique strengths and potential.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Build Smart Goals
              </h3>
              <p className="text-gray-600">
                Get personalized, achievable goals that align with your personality and aspirations.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Connect with Mentors
              </h3>
              <p className="text-gray-600">
                Unlock access to experienced mentors who can guide your growth journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Wisdom Creation?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                <p className="text-gray-600">Every recommendation is tailored to your unique personality and goals.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Science-Based</h3>
                <p className="text-gray-600">Built on proven psychological frameworks and personality research.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Actionable Goals</h3>
                <p className="text-gray-600">Clear, achievable steps that lead to real progress and growth.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">Connect with experienced professionals who've walked your path.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-gray-600 text-sm">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The personality assessment helped me understand my strengths and gave me a clear roadmap for career growth. I landed my dream job within 3 months!"
              </p>
            </Card>
            
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Marcus Johnson</h4>
                  <p className="text-gray-600 text-sm">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The mentor connection was invaluable. Having someone who understood my journey made all the difference in building my startup."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of individuals who've transformed their lives with Wisdom Creation.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => onNavigate('signup')}
            className="bg-white text-blue-600 hover:bg-gray-50 border-white"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};
