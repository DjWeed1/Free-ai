export interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  url: string;
  rating: number;
  isPremium: boolean;
  isNew?: boolean;
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
  },

  // YouTube / Video Analysis Kategorie
  {
    id: 31,
    name: "Eightify",
    category: "youtube",
    description: "KI-gestützte YouTube-Zusammenfassungen direkt im Browser.",
    features: ["Sofortige Zusammenfassungen", "Chrome Extension", "Mehrsprachig", "Zeitstempel"],
    url: "https://eightify.app/",
    rating: 4.8,
    isPremium: false,
    tags: ["YouTube", "Zusammenfassung", "Extension"]
  },
  {
    id: 32,
    name: "SolidPoint",
    category: "youtube",
    description: "Kostenloses Tool für schnelle YouTube-Video-Zusammenfassungen.",
    features: ["Kein Login nötig", "Schnelle Analyse", "Kostenlos", "Text-Export"],
    url: "https://solidpoint.ai/",
    rating: 4.5,
    isPremium: false,
    tags: ["Kostenlos", "Zusammenfassung", "Web-Tool"]
  },
  {
    id: 33,
    name: "NoteGPT",
    category: "youtube",
    description: "KI-Zusammenfassungen und Transkripte für YouTube-Videos.",
    features: ["Transkript-Generierung", "Mind Maps", "Chat mit Video", "Notizen"],
    url: "https://notegpt.io/",
    rating: 4.6,
    isPremium: false,
    tags: ["Lernen", "Transkript", "Notizen"]
  },
  {
    id: 34,
    name: "Glasp",
    category: "youtube",
    description: "Social Web Highlighter mit YouTube-Zusammenfassungsfunktion.",
    features: ["Highlighting", "Community", "Export zu Notion", "Zusammenfassung"],
    url: "https://glasp.co/",
    rating: 4.7,
    isPremium: false,
    tags: ["Social", "Highlighting", "Produktivität"]
  },
  {
    id: 35,
    name: "Harpa AI",
    category: "youtube",
    description: "Mächtige Chrome-Erweiterung für Web-Automatisierung und YouTube-Analyse.",
    features: ["Web Automation", "YouTube Summary", "SEO Analyse", "ChatGPT Integration"],
    url: "https://harpa.ai/",
    rating: 4.9,
    isPremium: false,
    tags: ["Automation", "Extension", "All-in-One"]
  },

  // Neue Tools aus der Playlist
  {
    id: 36,
    name: "ElevenLabs",
    category: "phone",
    description: "Führende KI für Text-to-Speech und Voice Cloning mit extrem realistischen Stimmen.",
    features: ["Voice Cloning", "Text-to-Speech", "Mehrsprachig", "Emotionale Intonation"],
    url: "https://elevenlabs.io/",
    rating: 4.9,
    isPremium: false,
    tags: ["Audio", "Voice Cloning", "TTS"]
  },
  {
    id: 37,
    name: "Poppy AI",
    category: "content",
    description: "Visueller Workspace für Content Creation und Management mit verschiedenen KI-Modellen.",
    features: ["Visueller Workspace", "Multi-Model AI", "Content Management", "Transkription"],
    url: "https://getpoppy.ai/",
    rating: 4.5,
    isPremium: true,
    tags: ["Content", "Workspace", "Produktivität"]
  },
  {
    id: 38,
    name: "Pikzels AI",
    category: "youtube",
    description: "KI-Generator für klickstarke YouTube Thumbnails.",
    features: ["Thumbnail Generierung", "Face Swap", "Titel-Ideen", "Style Training"],
    url: "https://pikzels.com/",
    rating: 4.6,
    isPremium: true,
    tags: ["YouTube", "Thumbnails", "Design"]
  },
  {
    id: 39,
    name: "Arcads UGC",
    category: "video",
    description: "Erstellung von authentischen UGC-Videos mit KI-Schauspielern.",
    features: ["KI-Avatare", "UGC-Style", "Skript-Generierung", "Multi-Language"],
    url: "https://arcads.ai/",
    rating: 4.7,
    isPremium: true,
    tags: ["Video", "UGC", "Marketing"]
  },
  {
    id: 40,
    name: "Submagic",
    category: "youtube",
    description: "KI-Videoeditor für virale Shorts mit automatischen Untertiteln und B-Roll.",
    features: ["Auto-Captions", "B-Roll", "Magic Clips", "Zoom-Effekte"],
    url: "https://submagic.co/",
    rating: 4.8,
    isPremium: true,
    tags: ["Shorts", "Captions", "Viral"]
  },
  {
    id: 41,
    name: "Gling AI",
    category: "youtube",
    description: "KI-Schnittprogramm für YouTuber, das 'Ähs' und Stille automatisch entfernt.",
    features: ["Silence Removal", "Bad Take Removal", "Auto-Zoom", "Text-Based Editing"],
    url: "https://gling.ai/",
    rating: 4.7,
    isPremium: false,
    tags: ["Editing", "YouTube", "Produktivität"]
  },
  {
    id: 42,
    name: "HeyGen",
    category: "video",
    description: "Erstelle professionelle KI-Videos mit realistischen Avataren und Stimmen.",
    features: ["KI-Avatare", "Voice Cloning", "Video Translate", "Templates"],
    url: "https://heygen.com/",
    rating: 4.8,
    isPremium: true,
    tags: ["Avatare", "Video Gen", "Business"]
  },
  {
    id: 43,
    name: "Veed.io",
    category: "video",
    description: "Online-Videoeditor mit starken KI-Funktionen für Social Media Content.",
    features: ["Auto-Subtitles", "Eye Contact Fix", "Magic Cut", "Templates"],
    url: "https://veed.io/",
    rating: 4.6,
    isPremium: false,
    tags: ["Online-Editor", "Social Media", "All-in-One"]
  },
  {
    id: 44,
    name: "Kling AI",
    category: "video",
    description: "Neuer KI-Videogenerator mit beeindruckender Bewegungsqualität und Realismus.",
    features: ["Text-to-Video", "Image-to-Video", "High Motion", "Realism"],
    url: "https://kling.ai/",
    rating: 4.7,
    isPremium: false,
    tags: ["Video Gen", "Realism", "New"]
  },
  {
    id: 45,
    name: "Fliki AI",
    category: "video",
    description: "Verwandelt Text in Videos mit KI-Stimmen und Stock-Media.",
    features: ["Text-to-Video", "Blog-to-Video", "Voiceovers", "Stock Library"],
    url: "https://fliki.ai/",
    rating: 4.5,
    isPremium: false,
    tags: ["Text-to-Video", "Social Media", "Content"]
  },
  {
    id: 46,
    name: "Pictory AI",
    category: "video",
    description: "Erstellt automatisch kurze Videos aus langen Inhalten wie Blogs oder Zoom-Calls.",
    features: ["Blog-to-Video", "Script-to-Video", "Auto-Highlight", "Captions"],
    url: "https://pictory.ai/",
    rating: 4.6,
    isPremium: true,
    tags: ["Repurposing", "Social Media", "Shorts"]
  },
  {
    id: 47,
    name: "CapCut",
    category: "video",
    description: "Beliebter Videoeditor mit vielen kostenlosen KI-Funktionen für Social Media.",
    features: ["Auto-Captions", "Background Removal", "Templates", "Effects"],
    url: "https://www.capcut.com/",
    rating: 4.9,
    isPremium: false,
    tags: ["Mobile", "Desktop", "Free"]
  },
  {
    id: 48,
    name: "Skip.it.AI",
    category: "youtube",
    description: "Zusammenfassungen von YouTube-Videos, PDFs und Websites in Sekunden.",
    features: ["Summarizer", "Chat with Content", "Time Saver", "Multi-Source"],
    url: "https://skipit.ai/",
    rating: 4.4,
    isPremium: false,
    tags: ["Produktivität", "Zusammenfassung", "Research"]
  },
  {
    id: 49,
    name: "Books AI",
    category: "content",
    description: "Generiert Buchzusammenfassungen durch einfaches Fotografieren des Covers.",
    features: ["Book Summary", "Photo Input", "Quick Read", "Learning"],
    url: "https://booksai.app/",
    rating: 4.3,
    isPremium: false,
    tags: ["Bücher", "Lernen", "Mobile"]
  },
  {
    id: 50,
    name: "PodShift",
    category: "content",
    description: "Erstellt KI-Zusammenfassungen von Podcasts und sendet sie per E-Mail.",
    features: ["Podcast Summary", "Email Delivery", "Time Saver", "Insights"],
    url: "https://podshift.com/",
    rating: 4.2,
    isPremium: true,
    tags: ["Podcast", "Zusammenfassung", "Audio"]
  },
  {
    id: 51,
    name: "AI-Meme",
    category: "images",
    description: "Erstellt lustige Memes für Social Media mit KI-Unterstützung.",
    features: ["Meme Generation", "Templates", "Social Media", "Fun"],
    url: "https://ai-meme.com/",
    rating: 4.1,
    isPremium: false,
    tags: ["Fun", "Social Media", "Memes"]
  },
  {
    id: 52,
    name: "NotebookLM",
    category: "content",
    description: "Googles KI-Notizbuch für Recherche und Lernen mit Quellenangaben.",
    features: ["Quellen-basiert", "Zusammenfassungen", "Audio Overviews", "Google Drive Integration"],
    url: "https://notebooklm.google.com/",
    rating: 4.8,
    isPremium: false,
    tags: ["Lernen", "Recherche", "Google"]
  },
  {
    id: 53,
    name: "Opus Clip",
    category: "video",
    description: "Macht aus langen Videos automatisch virale Kurzvideos (Shorts/TikToks).",
    features: ["Auto-Clipping", "Virality Score", "Auto-Captions", "Face Detection"],
    url: "https://www.opus.pro/",
    rating: 4.7,
    isPremium: true,
    tags: ["Shorts", "Repurposing", "Viral"]
  },
  {
    id: 54,
    name: "SEOWriting AI",
    category: "content",
    description: "Erstellt SEO-optimierte Artikel und Blogposts mit einem Klick.",
    features: ["1-Click Articles", "SEO-Optimierung", "Bulk Generation", "WordPress Integration"],
    url: "https://seowriting.ai/",
    rating: 4.5,
    isPremium: true,
    tags: ["SEO", "Blogging", "Writing"]
  },
  {
    id: 55,
    name: "Blaze AI",
    category: "content",
    description: "Brand-Voice-fokussierte KI für Marketing-Teams und Solopreneure.",
    features: ["Brand Voice", "Multi-Channel", "Content Calendar", "Repurposing"],
    url: "https://www.blaze.ai/",
    rating: 4.6,
    isPremium: true,
    tags: ["Marketing", "Brand", "Team"]
  },
  {
    id: 56,
    name: "vidIQ",
    category: "youtube",
    description: "Umfassende Suite für YouTube-Wachstum mit KI-Coaching und Ideen.",
    features: ["Keyword Research", "Daily Ideas", "Competitor Analysis", "AI Coach"],
    url: "https://vidiq.com/",
    rating: 4.8,
    isPremium: false,
    tags: ["YouTube", "SEO", "Analytics"]
  },
  {
    id: 57,
    name: "AutoPod",
    category: "video",
    description: "Plugin für Adobe Premiere Pro zum automatischen Schneiden von Podcasts.",
    features: ["Multi-Camera Edit", "Jump Cut Editor", "Social Clip Creator", "Premiere Plugin"],
    url: "https://www.autopod.fm/",
    rating: 4.7,
    isPremium: true,
    tags: ["Editing", "Podcast", "Plugin"]
  },
  {
    id: 58,
    name: "Zapier",
    category: "content",
    description: "Verbindet Apps und automatisiert Workflows ohne Code.",
    features: ["Automation", "Integrationen", "No-Code", "Multi-Step Zaps"],
    url: "https://zapier.com/",
    rating: 4.9,
    isPremium: false,
    tags: ["Automation", "Produktivität", "Workflow"]
  },
  {
    id: 59,
    name: "Make.com",
    category: "content",
    description: "Visuelle Plattform für komplexe Automatisierungen und Workflows.",
    features: ["Visual Builder", "Complex Workflows", "API Integration", "Scenario Templates"],
    url: "https://www.make.com/",
    rating: 4.8,
    isPremium: false,
    tags: ["Automation", "Visual", "Advanced"]
  },
  {
    id: 60,
    name: "Pincel",
    category: "images",
    description: "KI-Bildbearbeitung mit Tools wie Face Swap, Clothes Swap und AI Portraits.",
    features: ["Face Swap", "Clothes Swap", "AI Portraits", "Object Removal"],
    url: "https://pincel.app/",
    rating: 4.3,
    isPremium: false,
    tags: ["Fun", "Bearbeitung", "Social Media"]
  },
  {
    id: 61,
    name: "Murf AI",
    category: "phone",
    description: "Vielseitiger KI-Stimmgenerator für professionelle Voiceovers.",
    features: ["Voiceovers", "Voice Changer", "Google Slides Add-on", "Canva Integration"],
    url: "https://murf.ai/",
    rating: 4.6,
    isPremium: true,
    tags: ["Audio", "Voiceover", "Professional"]
  },
  {
    id: 62,
    name: "Visla",
    category: "video",
    description: "All-in-One Plattform für Videoaufnahme, -bearbeitung und -freigabe mit KI.",
    features: ["Text-to-Video", "Screen Recording", "AI Editing", "Collaboration"],
    url: "https://www.visla.us/",
    rating: 4.5,
    isPremium: false,
    tags: ["Video", "Recording", "Team"]
  },
  {
    id: 63,
    name: "Kaiber",
    category: "video",
    description: "Kreative KI für Musikvideos und Animationen mit einzigartigem Stil.",
    features: ["Audio Reactivity", "Animation", "Style Transform", "Spotify Canvas"],
    url: "https://kaiber.ai/",
    rating: 4.7,
    isPremium: true,
    tags: ["Kreativ", "Musik", "Animation"]
  },
  {
    id: 64,
    name: "Artlist",
    category: "video",
    description: "Plattform für lizenzfreie Musik und Stock-Footage mit neuen KI-Tools.",
    features: ["Stock Footage", "Music", "AI Voiceover", "Video Templates"],
    url: "https://artlist.io/",
    rating: 4.8,
    isPremium: true,
    tags: ["Stock", "Audio", "Creative Assets"]
  },
  {
    id: 65,
    name: "Sora",
    category: "video",
    description: "OpenAIs bahnbrechendes Text-zu-Video Modell (aktuell in Entwicklung/Preview).",
    features: ["High Fidelity", "Complex Scenes", "Motion Quality", "Long Clips"],
    url: "https://openai.com/sora",
    rating: 4.9,
    isPremium: true,
    tags: ["Future", "High-End", "OpenAI"]
  },
  {
    id: 66,
    name: "Google Veo",
    category: "video",
    description: "Googles fortschrittlichstes Modell für generative Videoinhalte.",
    features: ["1080p+ Resolution", "Cinematic Styles", "Long Context", "Visual Effects"],
    url: "https://deepmind.google/technologies/veo/",
    rating: 4.8,
    isPremium: true,
    tags: ["Google", "High-End", "Research"]
  },
  // Hidden Gems & User Recommendations
  {
    id: 67,
    name: "LLaVA AI",
    category: "chat",
    description: "Open-Source Multimodal AI, die Bilder verstehen und darüber chatten kann.",
    features: ["Visual Understanding", "Open Source", "Multimodal", "Image Chat"],
    url: "https://llava.lmsys.org/",
    rating: 4.5,
    isPremium: false,
    isNew: true,
    tags: ["Open Source", "Research", "Vision"]
  },
  {
    id: 68,
    name: "Ideogram",
    category: "images",
    description: "Kostenloser KI-Bildgenerator, der besonders gut Text in Bildern darstellen kann.",
    features: ["Typography", "Text-in-Image", "Remix", "High Quality"],
    url: "https://ideogram.ai/",
    rating: 4.7,
    isPremium: false,
    isNew: true,
    tags: ["Text-to-Image", "Design", "Free"]
  },
  {
    id: 69,
    name: "Pixelcut",
    category: "images",
    description: "Kostenloses Toolset für E-Commerce Bilder: Hintergrund entfernen, Upscaling und mehr.",
    features: ["Background Remover", "Magic Eraser", "Upscaler", "Product Photos"],
    url: "https://pixelcut.ai/",
    rating: 4.6,
    isPremium: false,
    isNew: true,
    tags: ["E-Commerce", "Editing", "Productivity"]
  },
  {
    id: 70,
    name: "SciSpace",
    category: "content",
    description: "KI-Copilot für die Wissenschaft: Erklärt Papers, fasst zusammen und beantwortet Fragen.",
    features: ["Paper Analysis", "Citation Generator", "Research Assistant", "Chat with PDF"],
    url: "https://scispace.com/",
    rating: 4.8,
    isPremium: false,
    isNew: true,
    tags: ["Science", "Research", "Education"]
  },
  {
    id: 71,
    name: "Napkin AI",
    category: "content",
    description: "Verwandelt Text automatisch in visuelle Diagramme und Infografiken.",
    features: ["Text-to-Diagram", "Visual Storytelling", "Business Graphics", "Easy Export"],
    url: "https://www.napkin.ai/",
    rating: 4.5,
    isPremium: false,
    isNew: true,
    tags: ["Visuals", "Productivity", "Business"]
  },
  {
    id: 72,
    name: "AudioPen",
    category: "content",
    description: "Verwandelt wirre Sprachnotizen in gut strukturierten, geschriebenen Text.",
    features: ["Voice-to-Text", "Summarization", "Rewriting", "Multi-language"],
    url: "https://audiopen.ai/",
    rating: 4.7,
    isPremium: false,
    isNew: true,
    tags: ["Notes", "Productivity", "Writing"]
  },
  {
    id: 73,
    name: "Songburst",
    category: "video",
    description: "Erstelle eigene Musik und Soundtracks für Videos durch Text-Prompts.",
    features: ["Text-to-Music", "Royalty Free", "Video Soundtracks", "Easy Creation"],
    url: "https://songburst.ai/",
    rating: 4.4,
    isPremium: false,
    isNew: true,
    tags: ["Music", "Audio", "Creative"]
  },
  {
    id: 74,
    name: "Raphael AI",
    category: "images",
    description: "Kostenloser und unbegrenzter KI-Bildgenerator (basierend auf FLUX Modellen).",
    features: ["Unlimited Generation", "No Sign-up", "High Quality", "Fast"],
    url: "https://raphael.app/",
    rating: 4.3,
    isPremium: false,
    isNew: true,
    tags: ["Unlimited", "Free", "Generative Art"]
  },
  {
    id: 75,
    name: "Perchance AI",
    category: "images",
    description: "Komplett kostenloser, werbefreier Bildgenerator ohne Anmeldung.",
    features: ["No Login", "Unlimited", "Community Models", "Customizable"],
    url: "https://perchance.org/ai-text-to-image-generator",
    rating: 4.2,
    isPremium: false,
    isNew: true,
    tags: ["Free", "No Login", "Community"]
  },
  {
    id: 76,
    name: "Grok Imagine",
    category: "images",
    description: "X's (Twitter) KI für unzensierte und kreative Bild- und Videogenerierung.",
    features: ["Image Gen", "Video Gen", "Real-time", "Creative Freedom"],
    url: "https://grok.com/imagine",
    rating: 4.6,
    isPremium: false,
    isNew: true,
    tags: ["X", "Grok", "Uncensored"]
  },
  {
    id: 77,
    name: "AgenticFlow",
    category: "content",
    description: "No-Code Plattform zum Erstellen und Skalieren von KI-Agenten für Business-Aufgaben.",
    features: ["No-Code Agents", "Sales Automation", "Marketing Agents", "Multi-Tool Integration"],
    url: "https://agenticflow.com/",
    rating: 4.8,
    isPremium: true,
    isNew: true,
    tags: ["Automation", "Agents", "Business"]
  },
  {
    id: 78,
    name: "Gamma App",
    category: "content",
    description: "Erstellt wunderschöne Präsentationen, Dokumente und Webseiten aus einfachen Text-Prompts.",
    features: ["AI Presentations", "One-Click Polish", "Embed Anything", "Analytics"],
    url: "https://gamma.app/",
    rating: 4.8,
    isPremium: true,
    isNew: true,
    tags: ["Präsentationen", "Design", "Business"]
  },
  {
    id: 79,
    name: "Suno AI",
    category: "video",
    description: "Generiert komplette Songs mit Gesang und Text aus einfachen Beschreibungen (Radio-Qualität).",
    features: ["Text-to-Music", "Vocals & Lyrics", "Diverse Genres", "Full Songs"],
    url: "https://suno.com/",
    rating: 4.9,
    isPremium: false,
    isNew: true,
    tags: ["Musik", "Audio", "Viral"]
  },
  {
    id: 80,
    name: "Luma AI",
    category: "video",
    description: "Erstellt fotorealistische 3D-Modelle und Videos (Dream Machine) aus Text und Bildern.",
    features: ["Text-to-3D", "Video Generation", "NeRF Technology", "Interactive Scenes"],
    url: "https://lumalabs.ai/",
    rating: 4.7,
    isPremium: false,
    isNew: true,
    tags: ["3D", "Video", "Future"]
  },
  {
    id: 81,
    name: "Elicit",
    category: "content",
    description: "KI-Forschungsassistent, der Millionen von Papers analysiert und Fragen wissenschaftlich beantwortet.",
    features: ["Literature Review", "Paper Summary", "Data Extraction", "Citation Finder"],
    url: "https://elicit.com/",
    rating: 4.8,
    isPremium: false,
    isNew: true,
    tags: ["Wissenschaft", "Recherche", "Studium"]
  },
  {
    id: 82,
    name: "Descript",
    category: "video",
    description: "Bearbeite Audio und Video so einfach wie ein Textdokument (durch Bearbeiten des Transkripts).",
    features: ["Overdub", "Studio Sound", "Filler Word Removal", "Transcription"],
    url: "https://www.descript.com/",
    rating: 4.7,
    isPremium: true,
    isNew: true,
    tags: ["Editing", "Podcast", "Video"]
  },
  {
    id: 83,
    name: "Lalal.ai",
    category: "phone",
    description: "Extrahiert Gesang, Instrumente und Drums aus jeder Audiodatei mit höchster Präzision.",
    features: ["Stem Splitter", "Vocal Remover", "Noise Cancellation", "High Quality"],
    url: "https://www.lalal.ai/",
    rating: 4.6,
    isPremium: true,
    isNew: true,
    tags: ["Audio", "Musik", "Produktion"]
  },
  {
    id: 84,
    name: "Scribble Diffusion",
    category: "images",
    description: "Verwandelt deine krakeligen Skizzen in professionelle Bilder und Kunstwerke.",
    features: ["Sketch-to-Image", "Real-time", "Easy to use", "Open Source"],
    url: "https://scribblediffusion.com/",
    rating: 4.4,
    isPremium: false,
    isNew: true,
    tags: ["Fun", "Sketch", "Art"]
  },
  {
    id: 85,
    name: "Lumen5",
    category: "video",
    description: "Verwandelt Blog-Posts und Texte automatisch in ansprechende Marketing-Videos.",
    features: ["Blog-to-Video", "AI Scripting", "Stock Media", "Branding"],
    url: "https://lumen5.com/",
    rating: 4.5,
    isPremium: true,
    isNew: true,
    tags: ["Marketing", "Social Media", "Business"]
  },
  {
    id: 86,
    name: "Notion AI",
    category: "content",
    description: "Integrierter KI-Assistent in Notion für Zusammenfassungen, Brainstorming und Textverbesserung.",
    features: ["Summarization", "Translation", "Brainstorming", "Editing"],
    url: "https://www.notion.so/product/ai",
    rating: 4.7,
    isPremium: true,
    isNew: true,
    tags: ["Produktivität", "Notizen", "Workflow"]
  },
  {
    id: 87,
    name: "Teachable Machine",
    category: "code",
    description: "Googles einfaches Tool, um KI-Modelle mit Bildern, Tönen oder Posen zu trainieren (ohne Code).",
    features: ["No-Code ML", "Image Recognition", "Audio Recognition", "Export Models"],
    url: "https://teachablemachine.withgoogle.com/",
    rating: 4.6,
    isPremium: false,
    isNew: true,
    tags: ["Lernen", "Google", "Experiment"]
  }
];

export const getToolsByCategory = (category: string) => {
  if (category === 'all') return toolsData;
  return toolsData.filter(tool => tool.category === category);
};

export const searchTools = (query: string) => {
  return toolsData.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.description.toLowerCase().includes(query.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
};