# Free-AI

Free-AI is an AI knowledge and discovery platform designed to make artificial intelligence easier to understand, explore and use.

The project combines an **AI lexicon**, curated **AI tools**, reusable **prompts**, category-based discovery and an integrated assistant experience in one web application.

## What Free-AI provides

### 📚 AI Lexicon

The repository now contains **160+ structured AI terms** covering:

- AI fundamentals
- Machine Learning
- Data and datasets
- Neural-network architectures
- LLMs and language models
- Generative AI
- Audio and speech AI
- Computer Vision
- NLP and language technologies
- Prompt engineering
- Model training and fine-tuning
- Inference and model parameters
- AI agents and automation
- APIs and AI infrastructure
- Security and quality
- AI ethics and governance
- Practical AI applications

Every lexicon entry can contain a definition, related concepts and examples.

The lexicon supports:

- Full-text search
- Searching definitions
- Searching related terms
- Searching examples
- Category filtering
- Detailed term view
- Related-concept navigation

### 🧰 AI Tool Directory

Free-AI organizes AI tools into practical categories including:

- Prompts
- Image generation and editing
- Video
- AI chat
- Voice and telephone AI
- Website builders
- Content creation
- YouTube tools

The current interface advertises **85+ AI tools** and is designed to grow as new tools are added.

### ✨ Prompt Library

The project contains a dedicated prompt section with curated prompts for different AI workflows, including chat, image generation, coding and writing.

### 🤖 AI Assistant

The application includes an integrated chatbot component that can be used as part of the Free-AI experience.

### 🔐 User Accounts

Firebase is included in the application for authentication and user-related functionality.

The repository contains an authentication context and Firebase initialization/configuration modules.

### 📊 Dashboard

A dashboard component is included for authenticated users and provides a foundation for statistics, activity, settings, billing and notifications.

Some dashboard values are currently demonstration/placeholder data and should not be interpreted as production analytics.

## Technology

The current web application is built with:

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase
- Lucide React
- ESLint

## Project Structure

```text
Free-ai/
├── src/
│   ├── components/
│   │   ├── CategoryView.tsx
│   │   ├── ChatBot.tsx
│   │   ├── Dashboard.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── GlobalSearch.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Home.tsx
│   │   ├── Lexicon.tsx
│   │   └── ...
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── data/
│   │   ├── lexiconData.ts
│   │   ├── promptsData.ts
│   │   └── toolsData.ts
│   ├── firebase/
│   │   ├── config.ts
│   │   └── init.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Lexicon Data Model

Lexicon entries use a simple TypeScript structure:

```ts
interface LexiconEntry {
  id: number;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  examples?: string[];
}
```

This makes the knowledge base easy to extend without changing the main UI.

## Local Development

### Requirements

- Node.js
- npm

### Install

```bash
git clone https://github.com/DjWeed1/Free-ai.git
cd Free-ai
npm install
```

### Start development server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview production build

```bash
npm run preview
```

## Roadmap

- [x] AI lexicon
- [x] Lexicon search
- [x] Lexicon categories
- [x] Related AI concepts
- [x] AI tool categories
- [x] Prompt library
- [x] Global search
- [x] Firebase authentication foundation
- [x] Integrated chatbot component
- [x] User dashboard foundation
- [ ] Expand the lexicon continuously
- [ ] Add richer cross-links between related terms
- [ ] Add source references and verification dates to important definitions
- [ ] Add favourites/bookmarks
- [ ] Add user suggestions for new terms
- [ ] Add multilingual lexicon content
- [ ] Improve tool metadata and filtering
- [ ] Replace dashboard placeholder statistics with real analytics
- [ ] Add stronger automated tests
- [ ] Improve accessibility and SEO
- [ ] Continue mobile/Android integration

## Content Quality

AI terminology changes quickly. Definitions in Free-AI should be treated as educational reference material, not as a substitute for official technical documentation.

For rapidly changing products, model names, pricing, API limits and free tiers, always verify the current information with the provider.

## Contributing

Contributions are welcome.

Useful contributions include:

- New AI terminology
- Corrections to existing definitions
- Better examples
- New AI tools
- New prompts
- Improved search and categorization
- Accessibility improvements
- Bug fixes
- Documentation

When adding an important factual claim about a current product or service, prefer an official source.

## License

No explicit project license is currently documented in this repository. Check the repository before redistributing the project or its contents.


## AI Knowledge & Discovery Hub

Free-AI now includes an integrated AI Hub that brings the planned advanced layer into one interface:

1. **Lexicon 2.0** — 453 AI concepts with dynamic categories and review metadata.
2. **Tool Explorer** — searchable tool directory with free/local filters based on the repository's tool metadata.
3. **Intelligent discovery** — unified search across AI concepts and tool metadata.
4. **Model comparison** — structured profiles for major model families, including local/API/privacy dimensions.
5. **Decision assistant** — ranks available tools against a user's stated goal and constraints.
6. **Prompt Lab** — converts a rough prompt into a structured, reusable prompt template.
7. **Learning paths** — guided tracks for AI basics, LLM engineering, agents, Local AI and Responsible AI.
8. **Agent architecture** — visual workflow covering intent, planning, retrieval, tools/MCP and evaluation.
9. **Local AI** — practical stack overview for GGUF, Ollama, llama.cpp, LM Studio and vLLM.
10. **Trust & Quality** — explicit review status, verification dates, evaluation concepts and safety principles.

The advanced Hub is intentionally designed as a knowledge/discovery layer first. Live prices, provider limits and third-party availability should be re-verified before being treated as current facts.
