# Free-AI

Free-AI ist eine KI-Wissens- und Discovery-Plattform für Begriffe, Tools, Prompts und praktische KI-Workflows.

## Kernfunktionen

### 📚 KI-Lexikon

Das Lexikon enthält aktuell **453 strukturierte KI-Begriffe** aus Bereichen wie KI-Grundlagen, Machine Learning, Daten, neuronale Netze, Transformer, LLMs, Foundation Models, generative KI, Audio, Sprache, Computer Vision, Prompt Engineering, Training, Inferenz, RAG, Embeddings, Agenten, Infrastruktur, Sicherheit, Ethik und Governance.

Ein Eintrag kann Definition, Kategorie, verwandte Begriffe, Beispiele, Review-Status, Quelle und Verifizierungsdatum enthalten.

Unterstützt werden Volltextsuche, Definitionssuche, Kategoriefilter, Detailansicht und verwandte Konzepte.

### 🌍 Mehrsprachigkeit

Free-AI ist für **24 Sprachen** vorbereitet:

Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch, Niederländisch, Polnisch, Türkisch, Russisch, Ukrainisch, Arabisch, Hebräisch, Persisch, Hindi, Bengalisch, Urdu, Chinesisch, Japanisch, Koreanisch, Vietnamesisch, Thai, Indonesisch und Malaiisch.

Die Sprache wird zentral verwaltet. Für Arabisch, Hebräisch, Persisch und Urdu wird zusätzlich RTL unterstützt. Browser-Sprachpräferenzen können über navigator.languages berücksichtigt werden; lokalisierte Seitentexte müssen als projektspezifische Übersetzungsdaten gepflegt werden.

Technische Fachbegriffe werden nicht blind Wort für Wort übersetzt. Etablierte Begriffe wie Transformer, Token, RAG, Embedding oder Fine-Tuning bleiben dort erhalten, wo dies fachlich korrekt ist.

### 🧰 KI-Tool-Verzeichnis

Die Tool-Sammlung organisiert KI-Angebote unter anderem nach Prompts, Bildern, Video, Chat, Voice/Telefon, Websites, Content und YouTube.

Preise, Limits, Free-Tiers und Produktfunktionen können sich ändern und sollten vor einer aktuellen Entscheidung beim Anbieter geprüft werden.

### 🧪 Prompt Library

Wiederverwendbare Prompts für Chat, Bildgenerierung, Coding und Content-Erstellung.

### 🧠 AI Knowledge & Discovery Hub

Der AI Hub bündelt:

1. Lexicon 2.0 mit 453 Konzepten
2. Tool Explorer
3. Intelligent Discovery
4. Model Comparison
5. Decision Assistant
6. Prompt Lab
7. Learning Paths
8. Agent Architecture
9. Local AI
10. Trust & Quality

## Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase
- Lucide React
- ESLint

## Projektstruktur

```text
Free-ai/
├── src/
│   ├── components/
│   │   ├── AIHub.tsx
│   │   ├── Lexicon.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ...
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── lexiconData.ts
│   │   ├── extendedLexiconData.ts
│   │   ├── promptsData.ts
│   │   └── toolsData.ts
│   ├── firebase/
│   ├── i18n.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .github/workflows/
├── index.html
├── package.json
└── README.md
```

## Lokale Entwicklung

Voraussetzungen: Node.js 20+ und npm.

```bash
git clone https://github.com/DjWeed1/Free-ai.git
cd Free-ai
npm install
npm run dev
```

Weitere Befehle:

```bash
npm run build
npm run lint
npm run preview
```

## Datenqualität

Das Lexikon ist als educational reference gedacht und ersetzt keine offizielle technische Dokumentation.

KI-Terminologie, Modelle und Produkte ändern sich schnell. Besonders Preise, API-Limits, Free-Tiers und Produktfunktionen sollten aktuell beim Anbieter geprüft werden.

Einträge mit Review-Status review sind redaktionelle Entwürfe und sollten vor formaler Veröffentlichung fachlich geprüft werden.

## Roadmap

- [x] KI-Lexikon mit 453 Begriffen
- [x] Lexikon-Suche und Kategorien
- [x] Verwandte Konzepte
- [x] AI Knowledge & Discovery Hub
- [x] Mehrsprachige UI-Grundlage für 24 Sprachen
- [x] RTL-Unterstützung
- [ ] Vollständige redaktionelle Übersetzung aller 453 Definitionen in alle 24 Sprachen
- [ ] Mehrsprachige Beispiele und verwandte Begriffe
- [ ] Quellenprüfung und Verifizierungsworkflow ausbauen
- [ ] Favoriten und Bookmarks
- [ ] Nutzer-Vorschläge für neue Begriffe
- [ ] Stärkere automatisierte Tests
- [ ] Accessibility und SEO weiter verbessern
- [ ] Dashboard-Platzhalter durch echte Analytics ersetzen

## Mitmachen

Willkommen sind Beiträge zu neuen KI-Begriffen, fachlichen Korrekturen, Beispielen, Tools, Prompts, Übersetzungen, Accessibility, Tests, Bugfixes und Dokumentation.

Bei aktuellen Produktinformationen sollten nach Möglichkeit offizielle Quellen verwendet werden.

## Lizenz

Im Repository ist derzeit keine ausdrückliche Projektlizenz dokumentiert. Vor Weiterverwendung oder Redistribution bitte den aktuellen Repository-Stand prüfen.
