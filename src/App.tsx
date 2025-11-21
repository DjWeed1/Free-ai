import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import CategoryView from './components/CategoryView';
import Lexicon from './components/Lexicon';
import Prompts from './components/Prompts';
import ChatBot from './components/ChatBot';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('home');

  const renderContent = () => {
    switch (activeCategory) {
      case 'home':
        return <Home onCategoryChange={setActiveCategory} />;
      case 'lexicon':
        return <Lexicon />;
      case 'prompts':
        return <Prompts />;
      case 'login':
        return <Login onLoginSuccess={() => setActiveCategory('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'images':
      case 'video':
      case 'chat':
      case 'phone':
      case 'website':
      case 'content':
        return <CategoryView category={activeCategory} />;
      default:
        return <Home onCategoryChange={setActiveCategory} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main>{renderContent()}</main>
        <ChatBot />
      </div>
    </AuthProvider>
  );
}

export default App;