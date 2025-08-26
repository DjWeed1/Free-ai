export interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  url: string;
  rating: number;
  isPremium: boolean;
  tags: string[];
}

export const toolsData: Tool[] = [
  // Bilder Kategorie
  {
    id: 1,
    name: "DALL-E 2",
    category: "images",
    description: "OpenAIs leistungsstarker Bildgenerator, der aus Textbeschreibungen realistische Bilder erstellt.",
    features: ["Text-zu-Bild Generierung", "Hochauflösende Ausgabe", "Stilvielfalt", "Bearbeitung bestehender Bilder"],
    url: "https://openai.com/dall-e-2/",
    rating: 4.8,
    isPremium: false,
    tags: ["Generierung", "OpenAI", "Text-to-Image"]
  },
  {
    id: 2,
    name: "Leonardo.ai",
    category: "images",
    description: "KI-Plattform für die Erstellung von Kunstwerken, Illustrationen und Designelementen.",
    features: ["Verschiedene Kunststile", "Batch-Generierung", "Community-Modelle", "Fine-tuning"],
    url: "https://leonardo.ai/",
    rating: 4.7,
    isPremium: false,
    tags: ["Kunst", "Illustration", "Community"]
  },
  {
    id: 3,
    name: "Canva AI",
    category: "images",
    description: "KI-gestützte Designtools innerhalb der beliebten Canva-Plattform.",
    features: ["Magic Design", "Hintergrund entfernen", "Text-zu-Bild", "Design-Templates"],
    url: "https://www.canva.com/ai-image-generator/",
    rating: 4.6,
    isPremium: false,
    tags: ["Design", "Templates", "Benutzerfreundlich"]
  },
  {
    id: 4,
    name: "Remove.bg",
    category: "images",
    description: "Automatische Hintergrundentfernung für Bilder mit KI-Technologie.",
    features: ["Ein-Klick Hintergrundentfernung", "Batch-Verarbeitung", "API verfügbar", "Hochauflösend"],
    url: "https://www.remove.bg/",
    rating: 4.5,
    isPremium: false,
    tags: ["Hintergrund", "Bearbeitung", "API"]
  },
  {
    id: 5,
    name: "Pixlr AI",
    category: "images",
    description: "Online-Bildbearbeitung mit KI-Features für Verbesserungen und Effekte.",
    features: ["AI-Enhance", "Stilfilter", "Objekt entfernen", "Farbanpassungen"],
    url: "https://pixlr.com/",
    rating: 4.4,
    isPremium: false,
    tags: ["Bearbeitung", "Filter", "Online-Editor"]
  },

  // Video Kategorie  
  {
    id: 6,
    name: "RunwayML",
    category: "video",
    description: "Fortschrittliche KI-Tools für Videogenerierung und -bearbeitung.",
    features: ["Text-zu-Video", "Green Screen", "Objekt entfernen", "Stilübertragung"],
    url: "https://runwayml.com/",
    rating: 4.8,
    isPremium: false,
    tags: ["Generierung", "Professionell", "Green Screen"]
  },
  {
    id: 7,
    name: "Pika Labs",
    category: "video",
    description: "Text-zu-Video Generator für kreative Videoinhalte.",
    features: ["Text-zu-Video", "Animationen", "Kurze Clips", "Kreative Stile"],
    url: "https://www.pika.art/",
    rating: 4.6,
    isPremium: false,
    tags: ["Text-to-Video", "Animation", "Kreativ"]
  },
  {
    id: 8,
    name: "Synthesia",
    category: "video",
    description: "KI-Avatare für Videopräsentationen und Schulungsmaterialien.",
    features: ["KI-Avatare", "Multi-Sprach Support", "Custom Avatare", "Professionell"],
    url: "https://www.synthesia.io/",
    rating: 4.7,
    isPremium: false,
    tags: ["Avatare", "Präsentationen", "Mehrsprachig"]
  },
  {
    id: 9,
    name: "InVideo AI",
    category: "video",
    description: "KI-gestützter Videoeditor für Social Media und Marketing.",
    features: ["Template-basiert", "Automatische Untertitel", "Stock-Material", "Social Media Formate"],
    url: "https://invideo.io/",
    rating: 4.5,
    isPremium: false,
    tags: ["Social Media", "Marketing", "Templates"]
  },
  {
    id: 10,
    name: "Kapwing AI",
    category: "video",
    description: "Online-Videobearbeitung mit KI-Features für Content Creator.",
    features: ["Smart Cut", "Auto-Resize", "Untertitel generieren", "Meme Generator"],
    url: "https://www.kapwing.com/",
    rating: 4.4,
    isPremium: false,
    tags: ["Online-Editor", "Content Creation", "Memes"]
  },

  // Chat Kategorie
  {
    id: 11,
    name: "ChatGPT",
    category: "chat",
    description: "OpenAIs fortschrittlicher Konversations-KI für vielfältige Aufgaben.",
    features: ["Natürliche Gespräche", "Code-Generierung", "Textanalyse", "Kreatives Schreiben"],
    url: "https://chat.openai.com/",
    rating: 4.9,
    isPremium: false,
    tags: ["OpenAI", "Allzweck", "Programmierung"]
  },
  {
    id: 12,
    name: "Google Bard",
    category: "chat",
    description: "Googles KI-Assistent für Recherche und kreative Aufgaben.",
    features: ["Web-Integration", "Aktuelle Informationen", "Multi-Modal", "Google Services"],
    url: "https://bard.google.com/",
    rating: 4.6,
    isPremium: false,
    tags: ["Google", "Recherche", "Web-Integration"]
  },
  {
    id: 13,
    name: "Claude",
    category: "chat",
    description: "Anthropics KI-Assistent für hilfreiche und sichere Gespräche.",
    features: ["Lange Kontexte", "Sicherheitsfokus", "Analytisches Denken", "Ethische AI"],
    url: "https://claude.ai/",
    rating: 4.7,
    isPremium: false,
    tags: ["Anthropic", "Sicherheit", "Analyse"]
  },
  {
    id: 14,
    name: "GitHub Copilot",
    category: "chat",
    description: "KI-Programmierassistent für Entwickler.",
    features: ["Code-Vervollständigung", "Multi-Sprachen Support", "IDE Integration", "Code-Erklärungen"],
    url: "https://github.com/features/copilot/",
    rating: 4.8,
    isPremium: false,
    tags: ["Programmierung", "GitHub", "IDE"]
  },
  {
    id: 15,
    name: "Perplexity AI",
    category: "chat",
    description: "KI-Suchmaschine für präzise, quellenbasierte Antworten.",
    features: ["Quellenangaben", "Web-Suche", "Faktencheck", "Zusammenfassungen"],
    url: "https://www.perplexity.ai/",
    rating: 4.6,
    isPremium: false,
    tags: ["Suche", "Quellen", "Recherche"]
  },

  // Telefon Kategorie
  {
    id: 16,
    name: "Google Voice",
    category: "phone",
    description: "Kostenlose Telefonnummer mit KI-Features für Spam-Schutz.",
    features: ["Kostenlose Nummer", "Voicemail-Transkription", "Spam-Filter", "Multi-Device"],
    url: "https://voice.google.com/",
    rating: 4.3,
    isPremium: false,
    tags: ["Google", "Voicemail", "Spam-Schutz"]
  },
  {
    id: 17,
    name: "Otter.ai",
    category: "phone",
    description: "KI-Transkription für Meetings und Anrufe.",
    features: ["Live-Transkription", "Meeting-Notizen", "Sprecher-Identifikation", "Zusammenfassungen"],
    url: "https://otter.ai/",
    rating: 4.5,
    isPremium: false,
    tags: ["Transkription", "Meetings", "Notizen"]
  },
  {
    id: 18,
    name: "Krisp",
    category: "phone",
    description: "KI-Rauschunterdrückung für kristallklare Anrufe.",
    features: ["Rauschunterdrückung", "Echo-Entfernung", "App-Integration", "Real-time"],
    url: "https://krisp.ai/",
    rating: 4.4,
    isPremium: false,
    tags: ["Audio", "Rauschunterdrückung", "Calls"]
  },
  {
    id: 19,
    name: "Rev AI",
    category: "phone",
    description: "Automatische Sprach-zu-Text Konvertierung.",
    features: ["Sprach-zu-Text", "Multi-Sprachen", "API verfügbar", "Hohe Genauigkeit"],
    url: "https://www.rev.com/",
    rating: 4.6,
    isPremium: false,
    tags: ["Transkription", "API", "Mehrsprachig"]
  },
  {
    id: 20,
    name: "Speechify",
    category: "phone",
    description: "Text-zu-Sprache Konverter mit natürlichen Stimmen.",
    features: ["Text-zu-Sprache", "Natürliche Stimmen", "Speed Control", "Multi-Platform"],
    url: "https://speechify.com/",
    rating: 4.5,
    isPremium: false,
    tags: ["Text-to-Speech", "Stimmen", "Accessibility"]
  },

  // Website Builder Kategorie
  {
    id: 21,
    name: "Wix ADI",
    category: "website",
    description: "KI-gestützter Website-Builder für automatische Designs.",
    features: ["Automatisches Design", "Responsive", "SEO-optimiert", "E-Commerce"],
    url: "https://www.wix.com/",
    rating: 4.5,
    isPremium: false,
    tags: ["Automatisch", "Design", "E-Commerce"]
  },
  {
    id: 22,
    name: "10Web AI Builder",
    category: "website",
    description: "WordPress-basierter KI Website Builder.",
    features: ["WordPress-basiert", "Schnelle Generierung", "Anpassbar", "Hosting inklusive"],
    url: "https://10web.io/",
    rating: 4.4,
    isPremium: false,
    tags: ["WordPress", "Hosting", "Schnell"]
  },
  {
    id: 23,
    name: "Jimdo Dolphin",
    category: "website",
    description: "Einfacher KI Website Builder für kleine Unternehmen.",
    features: ["Einfache Bedienung", "Mobile-optimiert", "Logo-Generator", "SEO-Tools"],
    url: "https://www.jimdo.com/",
    rating: 4.3,
    isPremium: false,
    tags: ["Einfach", "Mobile", "Logo"]
  },
  {
    id: 24,
    name: "Zyro AI",
    category: "website",
    description: "KI-Tools für Website-Erstellung und Content-Generierung.",
    features: ["AI Content Writer", "Logo Maker", "Heatmap Tool", "Business Name Generator"],
    url: "https://zyro.com/",
    rating: 4.2,
    isPremium: false,
    tags: ["Content", "Logo", "Business"]
  },
  {
    id: 25,
    name: "WebWave AI",
    category: "website",
    description: "Drag-and-Drop Website Builder mit KI-Unterstützung.",
    features: ["Drag-and-Drop", "Pixel-Perfect", "Responsive", "White Label"],
    url: "https://webwave.me/",
    rating: 4.1,
    isPremium: false,
    tags: ["Drag-Drop", "Pixel-Perfect", "White-Label"]
  },

  // Content Kategorie
  {
    id: 26,
    name: "Copy.ai",
    category: "content",
    description: "KI-Copywriting für Marketing und Werbetexte.",
    features: ["Marketing Copy", "Social Media Posts", "E-Mail Templates", "Blog-Ideen"],
    url: "https://www.copy.ai/",
    rating: 4.6,
    isPremium: false,
    tags: ["Marketing", "Copywriting", "Social Media"]
  },
  {
    id: 27,
    name: "Jasper AI",
    category: "content",
    description: "Professionelle KI für Content-Marketing und SEO.",
    features: ["SEO-Content", "Brand Voice", "Templates", "Plagiatsprüfung"],
    url: "https://www.jasper.ai/",
    rating: 4.7,
    isPremium: true,
    tags: ["SEO", "Brand", "Professionell"]
  },
  {
    id: 28,
    name: "Writesonic",
    category: "content",
    description: "KI-Writer für Artikel, Anzeigen und Website-Content.",
    features: ["Article Writer", "Ad Copy", "Product Descriptions", "Chatbot"],
    url: "https://writesonic.com/",
    rating: 4.5,
    isPremium: false,
    tags: ["Artikel", "Anzeigen", "Produkte"]
  },
  {
    id: 29,
    name: "Rytr",
    category: "content",
    description: "Erschwinglicher KI-Schreibassistent für verschiedene Inhalte.",
    features: ["40+ Anwendungsfälle", "25+ Sprachen", "Plagiatsprüfer", "Chrome Extension"],
    url: "https://rytr.me/",
    rating: 4.4,
    isPremium: false,
    tags: ["Mehrsprachig", "Extension", "Günstig"]
  },
  {
    id: 30,
    name: "Grammarly",
    category: "content",
    description: "KI-gestütztes Schreibtool für Grammatik und Stil.",
    features: ["Grammatikprüfung", "Stilvorschläge", "Plagiatsprüfung", "Tone Detector"],
    url: "https://www.grammarly.com/",
    rating: 4.8,
    isPremium: false,
    tags: ["Grammatik", "Stil", "Korrektur"]
  }
];

export const getToolsByCategory = (category: string) => {
  return toolsData.filter(tool => tool.category === category);
};

export const searchTools = (query: string) => {
  return toolsData.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.description.toLowerCase().includes(query.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
};