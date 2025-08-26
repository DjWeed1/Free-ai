import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen bei der Suche nach kostenlosen KI-Tools helfen?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // KI-Begriffe und Definitionen
    if (lowerMessage.includes('machine learning') || lowerMessage.includes('maschinelles lernen')) {
      return "Machine Learning ist ein Teilbereich der KI, bei dem Algorithmen aus Daten lernen, ohne explizit programmiert zu werden. Beliebte kostenlose Tools sind TensorFlow, PyTorch und Scikit-learn.";
    }
    
    if (lowerMessage.includes('deep learning') || lowerMessage.includes('tiefes lernen')) {
      return "Deep Learning nutzt neuronale Netzwerke mit vielen Schichten zur Datenanalyse. Kostenlose Plattformen: Google Colab, Keras und FastAI.";
    }
    
    if (lowerMessage.includes('chatgpt') || lowerMessage.includes('chat')) {
      return "ChatGPT ist ein beliebter KI-Chatbot. Kostenlose Alternativen: Google Bard, Claude, Perplexity.ai und Character.ai. Alle finden Sie in unserer Chat-Kategorie!";
    }
    
    if (lowerMessage.includes('bilder') || lowerMessage.includes('image') || lowerMessage.includes('dall-e')) {
      return "Für KI-Bildgenerierung empfehle ich: DALL-E 2, Midjourney (begrenzt kostenlos), Leonardo.ai, Canva AI und Adobe Firefly. Alle Details finden Sie in der Bilder-Kategorie!";
    }
    
    if (lowerMessage.includes('video') || lowerMessage.includes('runway')) {
      return "Kostenlose KI-Video-Tools: RunwayML, Pika Labs, Synthesia (begrenzt), InVideo und Canva Video. Besuchen Sie unsere Video-Sektion für mehr Optionen!";
    }
    
    if (lowerMessage.includes('code') || lowerMessage.includes('programmieren') || lowerMessage.includes('github copilot')) {
      return "Für KI-Coding: GitHub Copilot (kostenlos für Studenten), CodeWhisperer, Replit AI, Tabnine und Cursor. Mehr in der Chat-Kategorie unter 'Coding'!";
    }
    
    if (lowerMessage.includes('website') || lowerMessage.includes('webseite')) {
      return "KI-Website-Builder: Wix ADI, 10Web AI Builder, Jimdo Dolphin, Zyro AI und WebWave. Alle kostenlos verfügbar in unserer Website Builder Kategorie!";
    }
    
    if (lowerMessage.includes('lexikon') || lowerMessage.includes('begriffe') || lowerMessage.includes('was ist')) {
      return "Schauen Sie in unser KI-Lexikon! Dort finden Sie über 100 KI-Begriffe mit ausführlichen Erklärungen - von A wie 'Algorithmus' bis Z wie 'Zero-Shot Learning'.";
    }
    
    if (lowerMessage.includes('kostenlos') || lowerMessage.includes('free') || lowerMessage.includes('gratis')) {
      return "Alle Tools auf unserer Website sind kostenlos oder haben kostenlose Versionen! Viele nutzen ein Freemium-Modell mit grundlegenden kostenlosen Features.";
    }
    
    if (lowerMessage.includes('prompt') || lowerMessage.includes('prompts')) {
      return "Gute Prompts sind entscheidend! Tipps: Seien Sie spezifisch, setzen Sie den Kontext, definieren Sie den gewünschten Stil. Mehr dazu in unserem Lexikon unter 'AI Prompts'!";
    }
    
    if (lowerMessage.includes('hallo') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hallo! Schön, dass Sie da sind. Ich helfe Ihnen gerne bei allen Fragen rund um kostenlose KI-Tools. Was interessiert Sie besonders?";
    }
    
    if (lowerMessage.includes('danke') || lowerMessage.includes('thanks')) {
      return "Gern geschehen! Haben Sie noch weitere Fragen zu KI-Tools oder möchten Sie eine bestimmte Kategorie erkunden?";
    }
    
    // Standardantworten basierend auf Kategorien
    const responses = [
      "Das ist eine interessante Frage! Für spezifische KI-Tools schauen Sie sich unsere Kategorien an: Bilder, Video, Chat, Telefon, Website Builder oder Content.",
      "Ich empfehle, unsere verschiedenen Tool-Kategorien zu durchstöbern. Jede bietet eine Vielzahl kostenloser KI-Lösungen mit detaillierten Beschreibungen.",
      "Für eine umfassende Antwort besuchen Sie unser KI-Lexikon oder erkunden Sie die relevante Tool-Kategorie. Gibt es etwas Spezifisches, womit ich helfen kann?",
      "Das klingt nach einem Fall für unsere Tool-Sammlung! Welche Art von KI-Anwendung suchen Sie: Kreativ, Produktivität, Kommunikation oder Entwicklung?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isBot: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      // Simulate bot typing delay
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: generateBotResponse(inputText),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);

      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">KI-Assistent</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot && <Bot size={14} className="mt-1 flex-shrink-0" />}
                    {!message.isBot && <User size={14} className="mt-1 flex-shrink-0" />}
                    <span className="text-sm leading-relaxed">{message.text}</span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Fragen Sie mich etwas über KI-Tools..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;