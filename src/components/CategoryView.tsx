import React, { useState } from 'react';
import { Search, Filter, Star, Grid, List } from 'lucide-react';
import { getToolsByCategory, searchTools } from '../data/toolsData';
import ToolCard from './ToolCard';

interface CategoryViewProps {
  category: string;
}

const CategoryView: React.FC<CategoryViewProps> = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoryTitles: { [key: string]: string } = {
    images: 'Bild-KI Tools',
    video: 'Video-KI Tools',
    chat: 'Chat-KI Tools',
    phone: 'Telefon & Sprach-KI',
    website: 'Website Builder KI',
    content: 'Content-KI Tools',
    youtube: 'YouTube Analyse Tools'
  };

  const categoryDescriptions: { [key: string]: string } = {
    images: 'Kostenlose KI-Tools für Bildgenerierung, -bearbeitung und kreative Designs',
    video: 'KI-basierte Tools für Videogenerierung, -bearbeitung und Animation',
    chat: 'Intelligente Chatbots, Coding-Assistenten und Konversations-KI',
    phone: 'Sprach-KI Services, Transkription und Telefonie-Unterstützung',
    website: 'KI-gestützte Website-Builder und Design-Assistenten',
    content: 'KI-Tools für Textgenerierung, Content-Marketing und SEO',
    youtube: 'KI-Tools für YouTube: Analyse, Content-Erstellung und Optimierung'
  };

  let tools = getToolsByCategory(category);

  // Suchfilter anwenden
  if (searchQuery) {
    tools = searchTools(searchQuery).filter(tool => tool.category === category);
  }

  // Typ-Filter anwenden
  if (filterType === 'free') {
    tools = tools.filter(tool => !tool.isPremium);
  } else if (filterType === 'freemium') {
    tools = tools.filter(tool => tool.isPremium);
  }

  // Sortierung anwenden
  tools.sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'features':
        return b.features.length - a.features.length;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {categoryTitles[category]}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {categoryDescriptions[category]}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tools durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="rating">Nach Bewertung</option>
                <option value="name">Nach Name</option>
                <option value="features">Nach Features</option>
              </select>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">Alle Tools</option>
                <option value="free">Nur kostenlos</option>
                <option value="freemium">Freemium</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              <strong>{tools.length}</strong> Tools gefunden
            </span>
            {tools.length > 0 && (
              <>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-gray-600">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span>Ø {(tools.reduce((sum, tool) => sum + tool.rating, 0) / tools.length).toFixed(1)} Bewertung</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tools Grid/List */}
        {tools.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
            }`}>
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Filter size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Keine Tools gefunden
            </h3>
            <p className="text-gray-500">
              Versuchen Sie andere Suchbegriffe oder Filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;