# Free-AI

A curated AI-tool hub with categories, prompts, an AI lexicon, authentication, chat features and interactive experiments.

## Features

- Curated AI tools across images, video, chat, phone, websites, content and YouTube
- Expanded AI lexicon with modern concepts such as RAG, embeddings, agents, tool calling, context windows, quantization and prompt injection
- Prompt collection and AI terminology lexicon
- Authentication and dashboard components
- Built-in search and conversational UI
- **Snake Segment** mini-game: a lightweight browser game with keyboard and on-screen controls

## Development

```bash
npm install
npm run lint
npm run build
npm run dev
```

## Change Log

### 2026-09-28 03:33 Europe/Vienna (CEST) — Feature / Portfolio / UX
- Added **Snake Segment**, including growing snake segments, food spawning, collision detection, score tracking, restart flow, keyboard controls (Arrow keys/WASD) and on-screen controls.
- Added Snake to desktop and mobile navigation.
- Hardened the Snake board layout and collision handling so the 18×18 board does not depend on an unavailable default Tailwind grid class and moving into the previous tail cell is handled correctly.
- Expanded the KI-Lexikon by 20 modern entries covering RAG, Embeddings, Vector Databases, Multimodal AI, Agents, Tool Calling, Context Windows, Tokens, Inference, Quantization, LoRA, RLHF, Synthetic Data, Grounding, Guardrails, Evaluation, Prompt Injection and AI Observability.
- Added a basic security baseline and CI validation for install, lint and production build.

> The timestamp above is based on the recorded local Vienna time of the Free-AI change set.
