import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentUser?: string | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentUser, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            <h1 className="text-xl font-bold text-blue-600">Wisdom Creation</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <span className="text-gray-700">Welcome, {currentUser}</span>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="text-gray-600 hover:text-gray-700"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
