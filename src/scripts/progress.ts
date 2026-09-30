/**
 * Study progress kept on this device (localStorage). Nothing leaves the
 * browser. Every read and write is wrapped so the site still works when
 * storage is blocked (private windows, strict settings); progress simply
 * isn't remembered in that case.
 */
const KEY = 'atlas.progress.v1';
const MAX_SESSIONS = 30;

export interface QuizRecord {
  seen: number; // times answered
  correct: number; // times answered correctly
  last: 0 | 1; // result of the most recent attempt
  t: number; // time of the most recent attempt (ms)
}
export interface QuizSession {
  t: number;
  n: number;
  correct: number;
  regions: string[];
}
/** Leitner-style spaced repetition: "know it" moves a card up a box, "review again" sends it back to box 0. */
export interface CardRecord {
  box: number; // 0 = learning … 5 = long-term
  due: number; // when the card should next be shown (ms)
  seen: number;
  t: number; // last reviewed (ms)
}
interface Store {
  quiz: Record<string, QuizRecord>;
  sessions: QuizSession[];
  cards: Record<string, CardRecord>;
}

const DAY = 86_400_000;
/** days until a card in each box comes due again after "know it" */
export const BOX_DAYS = [0, 1, 3, 7, 14, 30];
export const MASTERED_BOX = 3;

const empty = (): Store => ({ quiz: {}, sessions: [], cards: {} });

export function loadProgress(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const s = JSON.parse(raw);
    // keep any keys added by later versions intact when re-saving
    return { ...s, quiz: s.quiz ?? {}, sessions: Array.isArray(s.sessions) ? s.sessions : [], cards: s.cards ?? {} };
  } catch {
    return empty();
  }
}

function save(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    return true;
  } catch {
    return false;
  }
}

export function recordAnswer(id: string, correct: boolean) {
  const s = loadProgress();
  const r = s.quiz[id] ?? { seen: 0, correct: 0, last: 0, t: 0 };
  r.seen += 1;
  if (correct) r.correct += 1;
  r.last = correct ? 1 : 0;
  r.t = Date.now();
  s.quiz[id] = r;
  save(s);
}

export function recordSession(session: QuizSession) {
  const s = loadProgress();
  s.sessions = [session, ...s.sessions].slice(0, MAX_SESSIONS);
  save(s);
}

export function resetQuizProgress() {
  const s = loadProgress();
  s.quiz = {};
  s.sessions = [];
  save(s);
}

export function recordCard(id: string, known: boolean) {
  const s = loadProgress();
  const r = s.cards[id] ?? { box: 0, due: 0, seen: 0, t: 0 };
  r.box = known ? Math.min(r.box + 1, BOX_DAYS.length - 1) : 0;
  r.due = Date.now() + BOX_DAYS[r.box] * DAY;
  r.seen += 1;
  r.t = Date.now();
  s.cards[id] = r;
  save(s);
}

/** A card is due if it has never been studied or its review date has passed. */
export const isDue = (r: CardRecord | undefined, now = Date.now()) => !r || r.due <= now;

export function resetCardProgress() {
  const s = loadProgress();
  s.cards = {};
  save(s);
}
