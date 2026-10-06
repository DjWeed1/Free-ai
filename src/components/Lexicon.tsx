import React, { useState } from 'react';
import { Search, BookOpen, Tag, ArrowRight, Brain, Lightbulb } from 'lucide-react';
import { lexiconData, getLexiconByCategory, searchLexicon } from '../data/lexiconData';

const Lexicon: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState<typeof lexiconData[0] | null>(null);

  const categories = [
    'all','Grundlagen','Machine Learning','Daten','Architektur','LLM','Modelle',
    'Generative AI','Audio & Sprache','Computer Vision','Sprache','Prompting',
    'Training','Technik','Sicherheit & Qualität','Ethik & Governance','Agenten',
    'Infrastruktur','Anwendungen','Governance'
  ];

  const categoryNames: { [key: string]: string } = {
    all:'Alle Begriffe', Grundlagen:'Grundlagen', 'Machine Learning':'Machine Learning',
    Daten:'Daten', Architektur:'Architektur', LLM:'LLM & Sprachmodelle', Modelle:'KI-Modelle',
    'Generative AI':'Generative KI', 'Audio & Sprache':'Audio & Sprache',
    'Computer Vision':'Computer Vision', Sprache:'NLP & Sprache', Prompting:'Prompting',
    Training:'Training', Technik:'Technik', 'Sicherheit & Qualität':'Sicherheit & Qualität',
    'Ethik & Governance':'Ethik & Governance', Agenten:'Agenten & Automatisierung',
    Infrastruktur:'Infrastruktur', Anwendungen:'Anwendungen', Governance:'Governance'
  };

  let filteredTerms = getLexiconByCategory(selectedCategory);
  if (searchQuery) {
    filteredTerms = searchLexicon(searchQuery);
    if (selectedCategory !== 'all') filteredTerms = filteredTerms.filter(term => term.category === selectedCategory);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl"><BookOpen size={40} className="text-white" /></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">KI-Lexikon</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eine wachsende Wissensbasis mit 160+ wichtigen KI-Begriffen – von Grundlagen über Machine Learning, LLMs und generative KI bis zu Agenten, Infrastruktur, Sicherheit und Governance.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Begriffe, Definitionen oder verwandte Begriffe durchsuchen..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              {categories.map(category => <option key={category} value={category}>{categoryNames[category]}</option>)}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 text-gray-600">
            <span><strong>{filteredTerms.length}</strong> Begriffe gefunden</span>
            <span className="text-gray-300">•</span>
            <span>{categories.length - 1} Kategorien</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredTerms.map(term => (
                <div key={term.id} onClick={() => setSelectedTerm(term)} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${selectedTerm?.id === term.id ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{term.term}</h3>
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full">{term.category}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{term.definition}</p>
                      {term.examples?.length ? <div className="mb-3"><span className="text-sm font-semibold text-gray-700">Beispiele: </span><span className="text-sm text-gray-600">{term.examples.slice(0,2).join(', ')}{term.examples.length > 2 && '...'}</span></div> : null}
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.slice(0,4).map((relatedTerm,index)=><span key={index} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"><Tag size={10}/>{relatedTerm}</span>)}
                        {term.relatedTerms.length > 4 && <span className="text-xs text-gray-500">+{term.relatedTerms.length-4} weitere</span>}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 ml-4 flex-shrink-0"/>
                  </div>
                </div>
              ))}
            </div>
            {filteredTerms.length === 0 && <div className="text-center py-16"><Brain size={48} className="text-gray-300 mx-auto mb-4"/><h3 className="text-xl font-semibold text-gray-700 mb-2">Keine Begriffe gefunden</h3><p className="text-gray-500">Versuchen Sie einen anderen Suchbegriff oder eine andere Kategorie.</p></div>}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedTerm ? (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg"><Lightbulb size={20} className="text-white"/></div>
                    <div><h3 className="text-xl font-bold text-gray-900">{selectedTerm.term}</h3><span className="text-sm text-blue-600 font-medium">{selectedTerm.category}</span></div>
                  </div>
                  <div className="space-y-6">
                    <div><h4 className="text-sm font-semibold text-gray-900 mb-2">Definition:</h4><p className="text-gray-600 leading-relaxed">{selectedTerm.definition}</p></div>
                    {selectedTerm.examples?.length ? <div><h4 className="text-sm font-semibold text-gray-900 mb-2">Beispiele:</h4><ul className="space-y-1">{selectedTerm.examples.map((example,index)=><li key={index} className="text-sm text-gray-600 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>{example}</li>)}</ul></div> : null}
                    <div><h4 className="text-sm font-semibold text-gray-900 mb-2">Verwandte Begriffe:</h4><div className="flex flex-wrap gap-2">{selectedTerm.relatedTerms.map((relatedTerm,index)=><span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{relatedTerm}</span>)}</div></div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <Lightbulb size={40} className="text-purple-400 mx-auto mb-4"/>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Begriff auswählen</h3>
                  <p className="text-gray-500 text-sm">Wählen Sie einen Begriff aus, um Definition, Beispiele und verwandte Themen zu sehen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lexicon;
