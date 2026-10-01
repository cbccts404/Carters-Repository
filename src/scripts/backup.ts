/**
 * Back up and restore everything the atlas keeps on this device: quiz,
 * flashcard and clinical case progress, the verify checklist, and display settings. A backup is
 * a small JSON file; importing it can merge with what is already here (the
 * newer record wins for each question, card or checklist item) or replace it.
 */
const PROGRESS = 'atlas.progress.v1';
const VERIFY = 'atlas.verify.v1';
const SETTINGS = ['atlas.hideLabels', 'theme'];
const MAX_SESSIONS = 30;
export const APP = 'anatomy-atlas';

type Timed = { t: number };
type Records = Record<string, Timed>;
interface Progress {
  quiz: Records;
  sessions: Timed[];
  cards: Records;
  cases: Records;
  [k: string]: unknown;
}
export interface Backup {
  app: typeof APP;
  version: 1;
  exported: string; // ISO date
  progress: Progress;
  verify: Records;
  settings: Record<string, string>;
}

const read = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};
const write = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const records = (v: unknown): Records =>
  isObj(v) ? Object.fromEntries(Object.entries(v).filter(([, r]) => isObj(r) && typeof r.t === 'number')) as Records : {};
const progressOf = (v: unknown): Progress => {
  const p = isObj(v) ? v : {};
  const sessions = Array.isArray(p.sessions) ? p.sessions.filter((s) => isObj(s) && typeof s.t === 'number') : [];
  return { ...p, quiz: records(p.quiz), cards: records(p.cards), cases: records(p.cases), sessions: sessions as Timed[] };
};

export function currentData(): Backup {
  const settings: Record<string, string> = {};
  for (const k of SETTINGS) {
    try {
      const v = localStorage.getItem(k);
      if (v !== null) settings[k] = v;
    } catch {}
  }
  return {
    app: APP,
    version: 1,
    exported: new Date().toISOString(),
    progress: progressOf(read(PROGRESS, {})),
    verify: records(read(VERIFY, {})),
    settings,
  };
}

/** Parses and checks a backup file's text; throws an Error with a readable message if it isn't one. */
export function parseBackup(text: string): Backup {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("That isn't a backup file (it isn't valid JSON).");
  }
  if (!isObj(data) || data.app !== APP) throw new Error("That file isn't an Anatomy Atlas backup.");
  if (data.version !== 1) throw new Error('That backup was made by a newer version of the atlas. Reload the page and try again.');
  const settings = isObj(data.settings)
    ? Object.fromEntries(
        Object.entries(data.settings).filter(([k, v]) => SETTINGS.includes(k) && typeof v === 'string'),
      ) as Record<string, string>
    : {};
  return {
    app: APP,
    version: 1,
    exported: typeof data.exported === 'string' ? data.exported : '',
    progress: progressOf(data.progress),
    verify: records(data.verify),
    settings,
  };
}

/** Newer record (by time) wins for each id. */
function mergeRecords(a: Records, b: Records): Records {
  const out = { ...a };
  for (const [id, r] of Object.entries(b)) if (!out[id] || r.t > out[id].t) out[id] = r;
  return out;
}

export interface Counts {
  questions: number;
  sessions: number;
  cards: number;
  cases: number;
  checks: number;
}
export const countsOf = (b: Pick<Backup, 'progress' | 'verify'>): Counts => ({
  questions: Object.keys(b.progress.quiz).length,
  sessions: b.progress.sessions.length,
  cards: Object.keys(b.progress.cards).length,
  cases: Object.keys(b.progress.cases).length,
  checks: Object.keys(b.verify).length,
});

/** Applies a backup. Returns the counts now stored, or throws if storage is unavailable. */
export function applyBackup(b: Backup, mode: 'merge' | 'replace'): Counts {
  const here = currentData();
  let progress: Progress;
  let verify: Records;
  if (mode === 'replace') {
    progress = b.progress;
    verify = b.verify;
  } else {
    const seen = new Set<number>();
    const sessions = [...here.progress.sessions, ...b.progress.sessions]
      .sort((x, y) => y.t - x.t)
      .filter((s) => !seen.has(s.t) && !!seen.add(s.t))
      .slice(0, MAX_SESSIONS);
    progress = {
      ...b.progress,
      ...here.progress,
      quiz: mergeRecords(here.progress.quiz, b.progress.quiz),
      cards: mergeRecords(here.progress.cards, b.progress.cards),
      cases: mergeRecords(here.progress.cases, b.progress.cases),
      sessions,
    };
    verify = mergeRecords(here.verify, b.verify);
  }
  if (!write(PROGRESS, progress) || !write(VERIFY, verify))
    throw new Error("This browser won't let the atlas save data (private window or blocked storage).");
  for (const [k, v] of Object.entries(b.settings)) if (mode === 'replace' || !(k in here.settings)) write(k, v);
  return countsOf({ progress, verify });
}
