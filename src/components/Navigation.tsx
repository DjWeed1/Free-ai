import React from 'react';
import { Image, Video, MessageSquare, Phone, Globe, BookOpen, FileText, Home } from 'lucide-react';

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'home', name: 'Startseite', icon: Home },
    { id: 'images', name: 'Bilder', icon: Image },
    { id: 'video', name: 'Video', icon: Video },
    { id: 'chat', name: 'Chat', icon: MessageSquare },
    { id: 'phone', name: 'Telefon', icon: Phone },
    { id: 'website', name: 'Website Builder', icon: Globe },
    { id: 'lexicon', name: 'Lexikon', icon: BookOpen },
    { id: 'content', name: 'Content', icon: FileText },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  KI-Tools Hub
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <select
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;