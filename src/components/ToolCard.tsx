import React from 'react';
import { ExternalLink, Star, Crown, Tag } from 'lucide-react';
import { Tool } from '../data/toolsData';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>
            {tool.isPremium && (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                <Crown size={14} className="text-white" />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              tool.isPremium 
                ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              {tool.isPremium ? 'Freemium' : 'Kostenlos'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
        {tool.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
        <ul className="space-y-1">
          {tool.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
              {feature}
            </li>
          ))}
          {tool.features.length > 3 && (
            <li className="text-xs text-gray-500 italic">
              +{tool.features.length - 3} weitere Features
            </li>
          )}
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-semibold w-full justify-center"
        >
          <span>Tool besuchen</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;