export interface Prompt {
  id: number;
  title: string;
  content: string;
  category: 'chat' | 'image' | 'code' | 'writing' | 'business' | 'marketing' | 'education';
  tags: string[];
  description: string;
}

export const promptsData: Prompt[] = [
  // Chat / General Assistant Prompts
  {
    id: 1,
    title: "Der Sokratische Lehrer",
    content: "Ich möchte, dass du als sokratischer Lehrer agierst. Anstatt mir Antworten zu geben, stelle mir Fragen, die mir helfen, das Thema [THEMA] selbstständig zu erarbeiten und zu verstehen. Beginne mit einer einfachen Frage.",
    category: "chat",
    tags: ["Lernen", "Bildung", "Philosophie"],
    description: "Hilft beim tiefgreifenden Lernen durch gezielte Fragestellungen."
  },
  {
    id: 2,
    title: "Komplexe Themen vereinfachen",
    content: "Erkläre mir [THEMA] so, als wäre ich 5 Jahre alt. Benutze einfache Analogien und vermeide Fachjargon.",
    category: "chat",
    tags: ["Erklärung", "Vereinfachung", "Verständnis"],
    description: "Macht schwierige Konzepte für jeden verständlich."
  },
  {
    id: 3,
    title: "Debatten-Partner",
    content: "Ich möchte eine Debatte über [THEMA] führen. Nimm die Gegenposition zu meiner Meinung ein, die lautet: [MEINE MEINUNG]. Argumentiere logisch und sachlich.",
    category: "chat",
    tags: ["Diskussion", "Logik", "Argumentation"],
    description: "Trainiert Argumentationsfähigkeiten und beleuchtet andere Perspektiven."
  },

  // Image Generation Prompts (Midjourney / DALL-E / Stable Diffusion)
  {
    id: 101,
    title: "Cyberpunk Stadtlandschaft",
    content: "Futuristic cyberpunk city street at night, neon lights, rain reflections on wet pavement, towering skyscrapers with holographic advertisements, cinematic lighting, photorealistic, 8k resolution, unreal engine 5 render --ar 16:9",
    category: "image",
    tags: ["Sci-Fi", "Architektur", "Atmosphäre"],
    description: "Erstellt eine atmosphärische, futuristische Stadtszene."
  },
  {
    id: 102,
    title: "Porträt im Studio-Stil",
    content: "Professional studio portrait of a young woman with freckles, natural lighting, soft bokeh background, 85mm lens, f/1.8, high detail, sharp focus, neutral expression",
    category: "image",
    tags: ["Porträt", "Fotografie", "Realistisch"],
    description: "Generiert ein hochwertiges, fotorealistisches Porträt."
  },
  {
    id: 103,
    title: "Fantasie-Landschaft",
    content: "Ethereal fantasy landscape, floating islands, waterfalls cascading into clouds, giant glowing crystals, dreamlike atmosphere, pastel colors, digital art, artstation style",
    category: "image",
    tags: ["Fantasy", "Landschaft", "Kunst"],
    description: "Erschafft eine traumhafte Fantasiewelt."
  },
  {
    id: 104,
    title: "Minimalistisches Logo",
    content: "Minimalist vector logo design for a tech company named 'Nexus', geometric shapes, blue and white color scheme, flat design, clean lines, white background",
    category: "image",
    tags: ["Design", "Logo", "Minimalismus"],
    description: "Entwirft ein modernes, einfaches Logo."
  },

  // Coding Prompts
  {
    id: 201,
    title: "Code Review Experte",
    content: "Agiere als Senior Software Engineer. Reviewe den folgenden Code auf Bugs, Sicherheitslücken und Performance-Probleme. Schlage Verbesserungen und Refactorings vor:\n\n[CODE EINFÜGEN]",
    category: "code",
    tags: ["Review", "Qualität", "Sicherheit"],
    description: "Hilft, die Codequalität zu verbessern und Fehler zu finden."
  },
  {
    id: 202,
    title: "Unit Tests schreiben",
    content: "Schreibe umfassende Unit Tests für die folgende Funktion in [SPRACHE/FRAMEWORK]. Decke Edge Cases und Fehlerbehandlung ab:\n\n[CODE EINFÜGEN]",
    category: "code",
    tags: ["Testing", "QA", "Entwicklung"],
    description: "Generiert automatisch Tests für bestehenden Code."
  },
  {
    id: 203,
    title: "Code Dokumentation",
    content: "Erstelle eine detaillierte Dokumentation für den folgenden Code. Beschreibe die Parameter, Rückgabewerte und die Funktionsweise. Füge auch ein Anwendungsbeispiel hinzu:\n\n[CODE EINFÜGEN]",
    category: "code",
    tags: ["Dokumentation", "Erklärung", "Wartung"],
    description: "Erstellt professionelle Dokumentation für Code-Snippets."
  },

  // Writing / Content Creation Prompts
  {
    id: 301,
    title: "SEO Blog Post Struktur",
    content: "Erstelle eine Gliederung für einen SEO-optimierten Blogpost zum Thema [THEMA]. Der Artikel soll sich an [ZIELGRUPPE] richten. Enthalte Vorschläge für H1, H2 und H3 Überschriften sowie relevante Keywords.",
    category: "writing",
    tags: ["SEO", "Blog", "Marketing"],
    description: "Hilft bei der Planung von strukturierten Blogartikeln."
  },
  {
    id: 302,
    title: "Kreatives Storytelling",
    content: "Schreibe eine Kurzgeschichte, die mit dem Satz beginnt: '[SATZ]'. Das Genre ist [GENRE]. Integriere einen überraschenden Plottwist am Ende.",
    category: "writing",
    tags: ["Kreativität", "Geschichte", "Unterhaltung"],
    description: "Inspiriert zu kreativen Geschichten."
  },
  {
    id: 303,
    title: "Professionelle E-Mail",
    content: "Schreibe eine höfliche und professionelle E-Mail an [EMPFÄNGER], in der ich [ANLIEGEN] erkläre. Der Ton sollte [TONFALL] sein.",
    category: "writing",
    tags: ["Business", "Kommunikation", "E-Mail"],
    description: "Verfasst professionelle Geschäftskorrespondenz."
  },
  // Business Prompts
  {
    id: 401,
    title: "Business Plan Struktur",
    content: "Erstelle eine detaillierte Struktur für einen Business Plan für ein [ART DES UNTERNEHMENS]. Enthalte Abschnitte für Marktanalyse, Finanzplanung und Marketingstrategie.",
    category: "business",
    tags: ["Business", "Startup", "Planung"],
    description: "Hilft bei der Erstellung professioneller Business Pläne."
  },
  {
    id: 402,
    title: "SWOT Analyse",
    content: "Führe eine SWOT-Analyse für [UNTERNEHMEN/PRODUKT] durch. Berücksichtige aktuelle Markttrends und Wettbewerber.",
    category: "business",
    tags: ["Analyse", "Strategie", "Management"],
    description: "Identifiziert Stärken, Schwächen, Chancen und Risiken."
  },
  {
    id: 403,
    title: "Meeting Agenda",
    content: "Erstelle eine effektive Agenda für ein [DAUER] Meeting zum Thema [THEMA]. Ziel des Meetings ist [ZIEL].",
    category: "business",
    tags: ["Produktivität", "Meeting", "Organisation"],
    description: "Strukturiert Meetings für maximale Effizienz."
  },

  // Marketing Prompts
  {
    id: 501,
    title: "Social Media Content Kalender",
    content: "Erstelle einen 1-Wochen Content Kalender für [PLATTFORM] für eine Marke im Bereich [BRANCHE]. Ziel ist [ZIEL, z.B. Engagement].",
    category: "marketing",
    tags: ["Social Media", "Content", "Planung"],
    description: "Plant Social Media Inhalte strategisch."
  },
  {
    id: 502,
    title: "Produktbeschreibung",
    content: "Schreibe eine überzeugende Produktbeschreibung für [PRODUKT]. Betone die Vorteile [VORTEILE] und spreche die Zielgruppe [ZIELGRUPPE] emotional an.",
    category: "marketing",
    tags: ["Copywriting", "E-Commerce", "Verkauf"],
    description: "Verwandelt Features in verkaufsstarke Vorteile."
  },
  {
    id: 503,
    title: "E-Mail Marketing Kampagne",
    content: "Entwirf eine 3-teilige E-Mail-Sequenz für [PRODUKT/SERVICE]. 1. E-Mail: Mehrwert/Problembewusstsein, 2. E-Mail: Lösung/Angebot, 3. E-Mail: Verknappung/Call-to-Action.",
    category: "marketing",
    tags: ["E-Mail", "Kampagne", "Funnel"],
    description: "Erstellt konvertierende E-Mail-Sequenzen."
  },

  // Education Prompts
  {
    id: 601,
    title: "Lernplan erstellen",
    content: "Erstelle einen 4-Wochen Lernplan, um [THEMA] zu meistern. Ich kann [STUNDEN] pro Tag lernen. Berücksichtige Theorie und Praxisübungen.",
    category: "education",
    tags: ["Lernen", "Planung", "Selbststudium"],
    description: "Strukturiert den Lernprozess für neue Fähigkeiten."
  },
  {
    id: 602,
    title: "Quiz Generierung",
    content: "Erstelle ein Multiple-Choice Quiz mit 5 Fragen zum Thema [THEMA] für das Niveau [NIVEAU]. Gib die richtigen Lösungen am Ende an.",
    category: "education",
    tags: ["Quiz", "Test", "Wissen"],
    description: "Überprüft Wissen spielerisch."
  },
  {
    id: 603,
    title: "Sprachen lernen",
    content: "Agiere als Sprachlehrer für [SPRACHE]. Führe eine einfache Konversation mit mir über [THEMA] und korrigiere meine Fehler sanft.",
    category: "education",
    tags: ["Sprache", "Übung", "Konversation"],
    description: "Interaktives Sprachtraining mit KI."
  }
];

export const getPromptsByCategory = (category: string) => {
  if (category === 'all') return promptsData;
  return promptsData.filter(prompt => prompt.category === category);
};

export const searchPrompts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return promptsData.filter(prompt =>
    prompt.title.toLowerCase().includes(lowerQuery) ||
    prompt.content.toLowerCase().includes(lowerQuery) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
