import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles } from 'lucide-react';

interface SubmitPromptProps {
    onClose: () => void;
}

const SubmitPrompt: React.FC<SubmitPromptProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'chat',
        content: '',
        description: '',
        tags: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset after showing success
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform scale-100 transition-all">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
                    <p className="text-gray-600">
                        Dein Prompt wurde erfolgreich eingereicht und wird nach einer Überprüfung veröffentlicht.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative my-8">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <Sparkles className="text-indigo-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Prompt einreichen</h2>
                            <p className="text-gray-600">Teile deine besten Prompts mit der Community</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Titel des Prompts *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="z.B. SEO Blog Post Generator"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Kategorie *
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                                >
                                    <option value="chat">Chat & Assistenz</option>
                                    <option value="image">Bildgenerierung</option>
                                    <option value="code">Coding</option>
                                    <option value="writing">Schreiben</option>
                                    <option value="business">Business</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="education">Bildung</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Prompt Inhalt *
                            </label>
                            <textarea
                                required
                                rows={6}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                placeholder="Füge hier deinen detaillierten Prompt ein..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Kurzbeschreibung
                            </label>
                            <input
                                type="text"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Was macht dieser Prompt besonders?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags (kommagetrennt)
                            </label>
                            <input
                                type="text"
                                value={formData.tags}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                placeholder="z.B. SEO, Marketing, Blog"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${isSubmitting
                                        ? 'bg-indigo-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Wird gesendet...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Prompt einreichen
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitPrompt;
