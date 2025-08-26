import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import CategoryView from './components/CategoryView';
import Lexicon from './components/Lexicon';
import ChatBot from './components/ChatBot';

function App() {
  const [activeCategory, setActiveCategory] = useState('home');

  const renderContent = () => {
    switch (activeCategory) {
      case 'home':
        return <Home onCategoryChange={setActiveCategory} />;
      case 'lexicon':
        return <Lexicon />;
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
    <div className="min-h-screen bg-gray-50">
      <Navigation activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <main>{renderContent()}</main>
      <ChatBot />
    </div>
  );
}

export default App;