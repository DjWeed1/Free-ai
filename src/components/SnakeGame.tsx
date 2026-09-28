import React, { useCallback, useEffect, useMemo, useState } from 'react';

const BOARD_SIZE = 18;
const START_SNAKE = [{ x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }];

type Point = { x: number; y: number };
type Direction = 'up' | 'down' | 'left' | 'right';

const DELTAS: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

function randomFood(snake: Point[]): Point {
  const free: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((part) => part.x === x && part.y === y)) free.push({ x, y });
    }
  }
  return free[Math.floor(Math.random() * free.length)] ?? { x: 0, y: 0 };
}

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [food, setFood] = useState<Point>(() => randomFood(START_SNAKE));
  const [direction, setDirection] = useState<Direction>('right');
  const [queuedDirection, setQueuedDirection] = useState<Direction>('right');
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const reset = useCallback(() => {
    const initial = [...START_SNAKE];
    setSnake(initial);
    setFood(randomFood(initial));
    setDirection('right');
    setQueuedDirection('right');
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);

  const changeDirection = useCallback((next: Direction) => {
    setQueuedDirection((current) => (OPPOSITE[current] === next ? current : next));
    setRunning(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const keys: Record<string, Direction | undefined> = {
        ArrowUp: 'up',
        w: 'up',
        ArrowDown: 'down',
        s: 'down',
        ArrowLeft: 'left',
        a: 'left',
        ArrowRight: 'right',
        d: 'right',
      };
      const next = keys[event.key];
      if (!next) return;
      event.preventDefault();
      changeDirection(next);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [changeDirection]);

  useEffect(() => {
    if (!running || gameOver) return undefined;

    const timer = window.setInterval(() => {
      setSnake((current) => {
        const nextDirection = queuedDirection;
        setDirection(nextDirection);
        const head = current[0];
        const delta = DELTAS[nextDirection];
        const nextHead = { x: head.x + delta.x, y: head.y + delta.y };
        const hitWall = nextHead.x < 0 || nextHead.y < 0 || nextHead.x >= BOARD_SIZE || nextHead.y >= BOARD_SIZE;
        const hitSelf = current.some((part) => part.x === nextHead.x && part.y === nextHead.y);

        if (hitWall || hitSelf) {
          setGameOver(true);
          setRunning(false);
          return current;
        }

        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = ateFood ? [nextHead, ...current] : [nextHead, ...current.slice(0, -1)];

        if (ateFood) {
          setScore((value) => value + 1);
          setFood(randomFood(nextSnake));
        }

        return nextSnake;
      });
    }, 125);

    return () => window.clearInterval(timer);
  }, [food, gameOver, queuedDirection, running]);

  const cells = useMemo(() => Array.from({ length: BOARD_SIZE * BOARD_SIZE }), []);

  return (
    <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Free AI Mini Game</p>
          <h2 className="text-2xl font-bold text-gray-900">Snake Segment</h2>
          <p className="text-sm text-gray-600">Sammle Segmente, wachse und vermeide Wand und Körper.</p>
        </div>
        <div className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800">Score: {score}</div>
      </div>

      <div className="mx-auto grid aspect-square w-full max-w-lg grid-cols-18 gap-px rounded-xl bg-gray-200 p-1" role="application" aria-label="Snake Segment Spielbrett">
        {cells.map((_, index) => {
          const x = index % BOARD_SIZE;
          const y = Math.floor(index / BOARD_SIZE);
          const snakeIndex = snake.findIndex((part) => part.x === x && part.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div key={`${x}-${y}`} className="flex items-center justify-center rounded-sm bg-white">
              {snakeIndex === 0 && <div className="h-4/5 w-4/5 rounded-md bg-indigo-600" />}
              {snakeIndex > 0 && <div className="h-3/4 w-3/4 rounded-sm bg-indigo-400" />}
              {isFood && <div className="h-3/5 w-3/5 rounded-full bg-rose-500" />}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Snake Steuerung">
        <button className="rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white" onClick={() => changeDirection('up')}>↑</button>
        <button className="rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white" onClick={() => changeDirection('left')}>←</button>
        <button className="rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white" onClick={() => changeDirection('down')}>↓</button>
        <button className="rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white" onClick={() => changeDirection('right')}>→</button>
      </div>

      <div className="mt-4 text-center">
        {!running && !gameOver && <button className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white" onClick={reset}>Spiel starten</button>}
        {gameOver && (
          <button className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white" onClick={reset}>Nochmal spielen</button>
        )}
        <p className="mt-2 text-xs text-gray-500">Tastatur: Pfeiltasten oder WASD</p>
      </div>
    </section>
  );
};

export default SnakeGame;
