import React, { useState } from 'react';
import { Menu, X, Search, Home, Image, Video, MessageSquare, Phone, Globe, FileText, BookOpen, Sparkles, LogIn, LogOut } from 'lucide-react';
import GlobalSearch from './GlobalSearch';
import { useAuth } from '../context/AuthContext';

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeCategory, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'prompts', label: 'Prompts', icon: Sparkles },
    { id: 'lexicon', label: 'Lexikon', icon: BookOpen },
    { id: 'images', label: 'Bilder', icon: Image },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'phone', label: 'Telefon', icon: Phone },
    { id: 'website', label: 'Websites', icon: Globe },
    { id: 'content', label: 'Content', icon: FileText },
  ];

  const handleNavigate = (category: string) => {
    onCategoryChange(category);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                onClick={() => onCategoryChange('home')}
              >
                Free-AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors mr-2"
                title="Deep Search (Strg + K)"
              >
                <Search size={20} />
              </button>

              {navItems.slice(0, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onCategoryChange(item.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    <Icon size={16} className="mr-1.5" />
                    {item.label}
                  </button>
                );
              })}

              {/* Auth Button */}
              {user ? (
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors ml-2"
                >
                  <LogOut size={16} className="mr-1.5" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => onCategoryChange('login')}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors ml-2"
                >
                  <LogIn size={16} className="mr-1.5" />
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors mr-2"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onCategoryChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium ${activeCategory === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.label}
                  </button>
                );
              })}
              {/* Mobile Auth Button */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut size={20} className="mr-3" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    onCategoryChange('login');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-3 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  <LogIn size={20} className="mr-3" />
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default Navigation;