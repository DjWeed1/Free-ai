import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Wrench, BookOpen, Sparkles } from 'lucide-react';
import { searchTools, Tool } from '../data/toolsData';
import { searchLexicon, LexiconTerm } from '../data/lexiconData';
import { searchPrompts, Prompt } from '../data/promptsData';

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (category: string, id?: number | string) => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose, onNavigate }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{
        tools: Tool[];
        lexicon: LexiconTerm[];
        prompts: Prompt[];
    }>({ tools: [], lexicon: [], prompts: [] });

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim().length > 1) {
            setResults({
                tools: searchTools(query).slice(0, 3),
                lexicon: searchLexicon(query).slice(0, 3),
                prompts: searchPrompts(query).slice(0, 3),
            });
        } else {
            setResults({ tools: [], lexicon: [], prompts: [] });
        }
    }, [query]);

    if (!isOpen) return null;

    const hasResults = results.tools.length > 0 || results.lexicon.length > 0 || results.prompts.length > 0;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex min-h-screen items-start justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
                    {/* Search Header */}
                    <div className="relative p-4 border-b border-gray-100">
                        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full pl-12 pr-10 py-3 text-lg text-gray-900 placeholder-gray-400 border-none focus:ring-0 focus:outline-none"
                            placeholder="Deep Search: Tools, Begriffe, Prompts..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-[60vh] overflow-y-auto bg-gray-50">
                        {query.length > 1 && !hasResults && (
                            <div className="py-12 text-center text-gray-500">
                                <Search size={48} className="mx-auto mb-4 text-gray-300" />
                                <p>Keine Ergebnisse für "{query}" gefunden.</p>
                            </div>
                        )}

                        {hasResults && (
                            <div className="p-4 space-y-6">
                                {/* Tools Results */}
                                {results.tools.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 px-2">
                                            <Wrench size={14} /> Tools
                                        </h3>
                                        <div className="space-y-2">
                                            {results.tools.map(tool => (
                                                <div
                                                    key={tool.id}
                                                    onClick={() => onNavigate(tool.category)}
                                                    className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group border border-gray-100 hover:border-blue-100"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                                                            {tool.name[0]}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-700">{tool.name}</h4>
                                                            <p className="text-sm text-gray-500 line-clamp-1">{tool.description}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Lexicon Results */}
                                {results.lexicon.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 px-2">
                                            <BookOpen size={14} /> Lexikon
                                        </h3>
                                        <div className="space-y-2">
                                            {results.lexicon.map(term => (
                                                <div
                                                    key={term.id}
                                                    onClick={() => onNavigate('lexicon')}
                                                    className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-purple-50 cursor-pointer transition-colors group border border-gray-100 hover:border-purple-100"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                                            <BookOpen size={18} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-purple-700">{term.term}</h4>
                                                            <p className="text-sm text-gray-500 line-clamp-1">{term.definition}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-purple-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Prompts Results */}
                                {results.prompts.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2 px-2">
                                            <Sparkles size={14} /> Prompts
                                        </h3>
                                        <div className="space-y-2">
                                            {results.prompts.map(prompt => (
                                                <div
                                                    key={prompt.id}
                                                    onClick={() => onNavigate('prompts')}
                                                    className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-indigo-50 cursor-pointer transition-colors group border border-gray-100 hover:border-indigo-100"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                                                            <Sparkles size={18} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-indigo-700">{prompt.title}</h4>
                                                            <p className="text-sm text-gray-500 line-clamp-1">{prompt.content}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={16} className="text-gray-300 group-hover:text-indigo-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Quick Links / Suggestions when empty */}
                        {!query && (
                            <div className="p-6">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Vorschläge</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['ChatGPT', 'Midjourney', 'Python', 'SEO', 'Avatar'].map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => setQuery(tag)}
                                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                        <span><strong>Enter</strong> zum Auswählen</span>
                        <span><strong>Esc</strong> zum Schließen</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalSearch;
