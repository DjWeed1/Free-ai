import React from 'react';
import { Image, Video, MessageSquare, Phone, Globe, BookOpen, FileText, ArrowRight, Star, TrendingUp } from 'lucide-react';

interface HomeProps {
  onCategoryChange: (category: string) => void;
}

const Home: React.FC<HomeProps> = ({ onCategoryChange }) => {
  const categories = [
    {
      id: 'images',
      name: 'Bilder',
      description: 'KI-Tools für Bildgenerierung und -bearbeitung',
      icon: Image,
      gradient: 'from-pink-500 to-violet-500',
      tools: ['DALL-E 2', 'Leonardo.ai', 'Canva AI'],
      count: '15+ Tools'
    },
    {
      id: 'video',
      name: 'Video',
      description: 'Videogenerierung und -bearbeitung mit KI',
      icon: Video,
      gradient: 'from-blue-500 to-cyan-500',
      tools: ['RunwayML', 'Pika Labs', 'Synthesia'],
      count: '12+ Tools'
    },
    {
      id: 'chat',
      name: 'Chat',
      description: 'KI-Chatbots und Konversationstools',
      icon: MessageSquare,
      gradient: 'from-green-500 to-emerald-500',
      tools: ['ChatGPT', 'Claude', 'Google Bard'],
      count: '20+ Tools'
    },
    {
      id: 'phone',
      name: 'Telefon',
      description: 'Sprach-KI und Telefonie-Services',
      icon: Phone,
      gradient: 'from-orange-500 to-red-500',
      tools: ['Google Voice', 'Otter.ai', 'Krisp'],
      count: '8+ Tools'
    },
    {
      id: 'website',
      name: 'Website Builder',
      description: 'KI-gestützte Website-Erstellung',
      icon: Globe,
      gradient: 'from-purple-500 to-indigo-500',
      tools: ['Wix ADI', '10Web', 'Jimdo'],
      count: '10+ Tools'
    },
    {
      id: 'content',
      name: 'Content',
      description: 'KI-Textgenerierung und Content-Erstellung',
      icon: FileText,
      gradient: 'from-teal-500 to-blue-500',
      tools: ['Copy.ai', 'Jasper', 'Writesonic'],
      count: '18+ Tools'
    }
  ];

  const stats = [
    { label: 'Kostenlose KI-Tools', value: '100+', icon: Star },
    { label: 'Kategorien', value: '6', icon: Globe },
    { label: 'Lexikon-Einträge', value: '50+', icon: BookOpen },
    { label: 'Aktive Nutzer', value: '10K+', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Kostenlose KI-Tools Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie die beste Sammlung kostenloser KI-Tools für Ihre kreativen und beruflichen Projekte. 
              Von Bildgenerierung bis hin zu intelligenten Chatbots – alles an einem Ort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onCategoryChange('lexicon')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <BookOpen size={20} />
                KI-Lexikon erkunden
              </button>
              <button
                onClick={() => onCategoryChange('images')}
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
              >
                Tools entdecken
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Alle KI-Tool Kategorien
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wählen Sie eine Kategorie aus und entdecken Sie die besten kostenlosen KI-Tools für Ihre Bedürfnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600">
                      {category.count}
                    </span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lexicon Teaser */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BookOpen size={64} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              KI-Lexikon: Verstehen Sie die KI-Welt
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Über 50 wichtige KI-Begriffe verständlich erklärt. Von Machine Learning bis zu Prompt Engineering – 
              erweitern Sie Ihr Wissen über Künstliche Intelligenz.
            </p>
            <button
              onClick={() => onCategoryChange('lexicon')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Lexikon öffnen
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;