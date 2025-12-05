import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onCategoryChange: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCategoryChange }) => (
    <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Entdecke die besten kostenlosen KI-Tools
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Vergleiche hunderte von KI-Tools für Bilder, Video, Chat und mehr. Finde genau das richtige Tool für dein Projekt – komplett kostenlos oder Freemium.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => onCategoryChange('lexicon')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <BookOpen size={20} />
                        Lexikon öffnen
                    </button>
                    <button
                        onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
                    >
                        Kategorien entdecken
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default HeroSection;
