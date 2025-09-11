import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: (credentials: { email: string; password: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, password });
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your growth journey</p>
        </div>
        
        <Card>
          <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
            
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up here
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
