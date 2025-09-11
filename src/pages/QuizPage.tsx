import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { quizQuestions } from '../data/mockData';

interface QuizPageProps {
  onNavigate: (page: string) => void;
  onQuizComplete: (results: { [key: number]: number }) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onNavigate, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = { ...answers, [question.id]: selectedOption };
      setAnswers(newAnswers);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onQuizComplete(newAnswers);
        onNavigate('dashboard');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Your Potential</h1>
          <p className="text-gray-600">Answer these questions to help us understand you better</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <ProgressBar progress={progress} />
        </div>
        
        <Card>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
            </span>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {question.question}
            </h2>
          </div>
          
          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedOption === index
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption === index && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className={currentQuestion === 0 ? 'invisible' : ''}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              className={selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Complete' : 'Next'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
