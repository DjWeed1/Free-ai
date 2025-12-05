import React from 'react';
import { Image, Video, MessageSquare, Phone, Globe, BookOpen, FileText, ArrowRight, Star, Sparkles, Youtube } from 'lucide-react';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import VoiceAI from './VoiceAI';

interface HomeProps {
  onCategoryChange: (category: string) => void;
}

const Home: React.FC<HomeProps> = ({ onCategoryChange }) => {
  const categories = [
    { id: 'prompts', name: 'Prompts', description: 'Kuratierte Prompts für ChatGPT, Midjourney & Co.', icon: Sparkles, gradient: 'from-indigo-500 to-purple-500', tools: ['Chat', 'Bilder', 'Code', 'Writing'], count: '50+ Prompts' },
    { id: 'images', name: 'Bilder', description: 'KI-Tools für Bildgenerierung und -bearbeitung', icon: Image, gradient: 'from-pink-500 to-violet-500', tools: ['Ideogram', 'Pixelcut', 'Grok Imagine'], count: '13+ Tools' },
    { id: 'video', name: 'Video', description: 'Videogenerierung und -bearbeitung mit KI', icon: Video, gradient: 'from-blue-500 to-cyan-500', tools: ['RunwayML', 'Sora', 'Kling AI'], count: '24+ Tools' },
    { id: 'chat', name: 'Chat', description: 'KI-Chatbots und Konversationstools', icon: MessageSquare, gradient: 'from-green-500 to-emerald-500', tools: ['ChatGPT', 'Claude', 'LLaVA AI'], count: '6+ Tools' },
    { id: 'phone', name: 'Telefon', description: 'Sprach-KI und Telefonie-Services', icon: Phone, gradient: 'from-orange-500 to-red-500', tools: ['ElevenLabs', 'Murf AI', 'Google Voice'], count: '8+ Tools' },
    { id: 'website', name: 'Website Builder', description: 'KI-gestützte Website-Erstellung', icon: Globe, gradient: 'from-purple-500 to-indigo-5', tools: ['Wix ADI', '10Web', 'Jimdo'], count: '5+ Tools' },
    { id: 'content', name: 'Content', description: 'KI-Textgenerierung und Content-Erstellung', icon: FileText, gradient: 'from-teal-500 to-blue-500', tools: ['Napkin AI', 'SciSpace', 'AudioPen'], count: '20+ Tools' },
    { id: 'youtube', name: 'YouTube', description: 'Tools für Video-Analyse und Zusammenfassung', icon: Youtube, gradient: 'from-red-600 to-rose-600', tools: ['Eightify', 'Gling AI', 'Opus Clip'], count: '10+ Tools' },
  ];

  const stats = [
    { label: 'Kostenlose KI-Tools', value: '85+', icon: Star },
    { label: 'Kategorien', value: '8', icon: Globe },
    { label: 'Lexikon-Einträge', value: '50+', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <HeroSection onCategoryChange={onCategoryChange} />
      <FeaturesGrid categories={categories} onCategoryChange={onCategoryChange} />
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Unsere Zahlen sprechen für sich</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm flex flex-col items-center">
                <stat.icon size={48} className="text-blue-600 mb-4" />
                <p className="text-5xl font-extrabold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Lexikon Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <BookOpen size={64} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">KI-Lexikon: Verstehen Sie die KI-Welt</h2>
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
      {/* Voice AI Demo */}
      <VoiceAI />
    </div>
  );
};

export default Home;