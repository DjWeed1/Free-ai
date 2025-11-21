import React from 'react';
import { ArrowRight } from 'lucide-react';

type Category = {
    id: string;
    name: string;
    description: string;
    icon: any; // Lucide icon component
    gradient: string;
    tools: string[];
    count: string;
};

interface FeaturesGridProps {
    categories: Category[];
    onCategoryChange: (category: string) => void;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ categories, onCategoryChange }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alle KI-Tool Kategorien</h2>
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
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                        <div className="relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <Icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {category.description}
                            </p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-blue-600">{category.count}</span>
                                <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.tools.map((tool, idx) => (
                                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
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
);

export default FeaturesGrid;
