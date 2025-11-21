import React, { useState } from 'react';
import { Search, Copy, Check, MessageSquare, Image as ImageIcon, Code, PenTool, Sparkles, Tag, Briefcase, Megaphone, GraduationCap, Plus } from 'lucide-react';
import { promptsData, getPromptsByCategory, searchPrompts } from '../data/promptsData';
import SubmitPrompt from './SubmitPrompt';

const Prompts: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [isSubmitOpen, setIsSubmitOpen] = useState(false);

    const categories = [
        { id: 'all', label: 'Alle Prompts', icon: Sparkles },
        { id: 'chat', label: 'Chat & Assistenz', icon: MessageSquare },
        { id: 'image', label: 'Bildgenerierung', icon: ImageIcon },
        { id: 'code', label: 'Coding', icon: Code },
        { id: 'writing', label: 'Schreiben', icon: PenTool },
        { id: 'business', label: 'Business', icon: Briefcase },
        { id: 'marketing', label: 'Marketing', icon: Megaphone },
        { id: 'education', label: 'Bildung', icon: GraduationCap },
    ];

    let filteredPrompts = getPromptsByCategory(selectedCategory);

    if (searchQuery) {
        filteredPrompts = searchPrompts(searchQuery);
        if (selectedCategory !== 'all') {
            filteredPrompts = filteredPrompts.filter(prompt => prompt.category === selectedCategory);
        }
    }

    const handleCopy = (content: string, id: number) => {
        navigator.clipboard.writeText(content);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Prompt Bibliothek
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Entdecken Sie eine kuratierte Sammlung von leistungsstarken Prompts für ChatGPT, Midjourney, Stable Diffusion und mehr.
                    </p>
                    <button
                        onClick={() => setIsSubmitOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
                    >
                        <Plus size={20} />
                        Einen Prompt einreichen
                    </button>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    {/* Search Bar */}
                    <div className="flex-1 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                        <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 flex items-center p-1">
                            <Search className="ml-4 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Suche nach Prompts, Themen oder Tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full p-3 bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${isActive
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                        : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'
                                        }`}
                                >
                                    <Icon size={18} />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Prompts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPrompts.map((prompt) => (
                        <div key={prompt.id} className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <span className={`p-2 rounded-lg ${prompt.category === 'image' ? 'bg-pink-100 text-pink-600' :
                                        prompt.category === 'code' ? 'bg-blue-100 text-blue-600' :
                                            prompt.category === 'writing' ? 'bg-green-100 text-green-600' :
                                                prompt.category === 'business' ? 'bg-orange-100 text-orange-600' :
                                                    prompt.category === 'marketing' ? 'bg-red-100 text-red-600' :
                                                        prompt.category === 'education' ? 'bg-teal-100 text-teal-600' :
                                                            'bg-purple-100 text-purple-600'
                                        }`}>
                                        {prompt.category === 'image' ? <ImageIcon size={18} /> :
                                            prompt.category === 'code' ? <Code size={18} /> :
                                                prompt.category === 'writing' ? <PenTool size={18} /> :
                                                    prompt.category === 'business' ? <Briefcase size={18} /> :
                                                        prompt.category === 'marketing' ? <Megaphone size={18} /> :
                                                            prompt.category === 'education' ? <GraduationCap size={18} /> :
                                                                <MessageSquare size={18} />}
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        {prompt.category}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleCopy(prompt.content, prompt.id)}
                                    className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50"
                                    title="Prompt kopieren"
                                >
                                    {copiedId === prompt.id ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                </button>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {prompt.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                {prompt.description}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex-grow relative group-hover:bg-indigo-50/50 transition-colors">
                                <p className="text-gray-700 font-mono text-sm leading-relaxed line-clamp-4">
                                    {prompt.content}
                                </p>
                                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-50 to-transparent group-hover:from-indigo-50/50"></div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {prompt.tags.map((tag, idx) => (
                                    <span key={idx} className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                        <Tag size={10} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPrompts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-gray-50 rounded-full p-6 inline-block mb-4">
                            <Search size={40} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Keine Prompts gefunden</h3>
                        <p className="text-gray-500">Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.</p>
                    </div>
                )}

                {/* Submit Prompt Modal */}
                {isSubmitOpen && <SubmitPrompt onClose={() => setIsSubmitOpen(false)} />}
            </div>
        </div>
    );
};

export default Prompts;
