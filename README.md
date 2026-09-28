# Free-AI

A curated AI-tool hub with categories, prompts, an AI lexicon, authentication, chat features and interactive experiments.

## Features

- Curated AI tools across images, video, chat, phone, websites, content and YouTube
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

### 2026-09-28 15:xx Europe/Vienna (CEST) — Feature / Portfolio / UX
- Added **Snake Segment**, including growing snake segments, food spawning, collision detection, score tracking, restart flow, keyboard controls (Arrow keys/WASD) and touch-friendly on-screen controls.
- Added Snake to the main navigation so the feature is directly discoverable on desktop and mobile.
- Kept the feature self-contained in `src/components/SnakeGame.tsx` without introducing a new runtime dependency.

> Note: The timestamp records the local Vienna time when this repository change was made.
