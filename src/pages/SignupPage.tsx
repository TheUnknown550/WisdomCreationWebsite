import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';

interface SignupPageProps {
  onNavigate: (page: string) => void;
  onSignup: (userData: { name: string; email: string; password: string }) => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onNavigate, onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    
    onSignup({ name, email, password });
    onNavigate('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Wisdom Creation</h1>
          <p className="text-gray-600">Start your journey to personal and professional growth</p>
        </div>
        
        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              value={name}
              onChange={setName}
              placeholder="Enter your full name"
              required
            />
            
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="Enter your email"
              required
            />
            
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Create a password"
              required
            />
            
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Confirm your password"
              required
            />
            
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in here
              </button>
            </p>
          </div>
        </Card>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('landing')}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
};
