import MiniSearch, { type SearchResult } from 'minisearch';

export interface Doc {
  id: string;
  name: string;
  taName: string;
  aka: string;
  type: string;
  typeLabel: string;
  region: string;
  regionName: string;
  subregion: string;
  summary: string;
  tags: string;
  systems: string;
  clinical: string;
  highYield: boolean;
  url: string;
}
export type Hit = SearchResult & Doc;

let index: Promise<{ mini: MiniSearch<Doc>; docs: Doc[] }> | undefined;

/** Lazily fetches the index the first time search is used. */
export function getIndex() {
  return (index ??= (async () => {
    const base = document.body.dataset.base ?? '/';
    const docs: Doc[] = await fetch(base + 'search-index.json').then((r) => r.json());
    const mini = new MiniSearch<Doc>({
      fields: ['name', 'aka', 'taName', 'tags', 'clinical', 'summary', 'subregion'],
      storeFields: ['name', 'aka', 'type', 'typeLabel', 'region', 'regionName', 'systems', 'summary', 'url', 'highYield'],
      searchOptions: {
        boost: { name: 6, aka: 4, taName: 2, tags: 2, clinical: 1.5 },
        prefix: true,
        fuzzy: (term) => (term.length > 4 ? 0.2 : false),
        combineWith: 'AND',
      },
    });
    mini.addAll(docs);
    return { mini, docs };
  })());
}

export async function search(q: string, filter?: (d: Doc) => boolean): Promise<Hit[]> {
  const { mini } = await getIndex();
  if (!q.trim()) return [];
  let hits = mini.search(q, filter ? { filter: (r) => filter(r as unknown as Doc) } : undefined) as Hit[];
  // Fall back to OR matching so multi-word queries still return something.
  if (!hits.length) hits = mini.search(q, { combineWith: 'OR', filter: filter && ((r) => filter(r as unknown as Doc)) }) as Hit[];
  return hits;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function renderHits(hits: Hit[], showSummary = true) {
  return hits
    .map(
      (h) => `<li><a href="${h.url}" class="t-${h.type}">
        <span><span class="dot"></span> <strong>${esc(h.name)}</strong>${h.highYield ? ' <span class="badge hy">HY</span>' : ''}</span>
        <span class="r-meta"> · ${esc(h.typeLabel)} · ${esc(h.regionName)}</span>
        ${h.aka ? `<span class="r-sum">aka ${esc(h.aka)}</span>` : ''}
        ${showSummary ? `<span class="r-sum">${esc(h.summary)}</span>` : ''}
      </a></li>`,
    )
    .join('');
}

/** Wires an input + result list with debounced search and arrow-key navigation. */
export function initSearchUI(
  input: HTMLInputElement,
  list: HTMLElement,
  opts: { limit?: number; filter?: () => ((d: Doc) => boolean) | undefined; onEmpty?: string } = {},
) {
  let timer: number | undefined;
  let active = -1;
  const links = () => [...list.querySelectorAll<HTMLAnchorElement>('a')];
  const setActive = (i: number) => {
    const ls = links();
    ls.forEach((l) => l.classList.remove('active'));
    active = Math.max(-1, Math.min(i, ls.length - 1));
    if (active >= 0) ls[active].classList.add('active'), ls[active].scrollIntoView({ block: 'nearest' });
  };
  const run = async () => {
    const q = input.value;
    const hits = await search(q, opts.filter?.());
    const shown = opts.limit ? hits.slice(0, opts.limit) : hits;
    list.innerHTML = shown.length
      ? renderHits(shown, !opts.limit)
      : q.trim()
        ? `<li class="muted small" style="padding:10px 8px">No matches for “${esc(q)}”.</li>`
        : (opts.onEmpty ?? '');
    active = -1;
    list.dispatchEvent(new CustomEvent('results', { detail: { count: hits.length, q } }));
  };
  input.addEventListener('focus', () => getIndex(), { once: true });
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = window.setTimeout(run, 80);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') (e.preventDefault(), setActive(active + 1));
    else if (e.key === 'ArrowUp') (e.preventDefault(), setActive(active - 1));
    else if (e.key === 'Enter') {
      const target = links()[active >= 0 ? active : 0];
      if (target) (e.preventDefault(), (window.location.href = target.href));
    }
  });
  return run;
}
