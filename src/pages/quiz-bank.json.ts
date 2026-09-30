import type { APIRoute } from 'astro';
import { loadAtlas, md, mdInline, structureUrl } from '../lib/atlas';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/**
 * Build-time bank of every self-quiz question, consumed by the quiz page
 * (src/pages/quiz.astro). Markdown is rendered here so the page only needs to
 * insert HTML. A question's id is "<entry id>#<index>", the same id the
 * per-entry self-quiz uses, so progress from both places is shared.
 */
export const GET: APIRoute = async () => {
  const atlas = await loadAtlas();
  const bank = [];
  for (const s of atlas.structures) {
    for (const [i, q] of s.data.quiz.entries()) {
      bank.push({
        id: `${s.id}#${i}`,
        entry: s.data.name,
        region: s.data.region,
        systems: s.data.systems,
        highYield: s.data.highYield,
        url: structureUrl(s),
        stem: await md(q.stem),
        choices: await Promise.all(q.choices.map((c) => mdInline(c))),
        answer: LETTERS.indexOf(q.answer),
        explanation: await md(q.explanation),
      });
    }
  }
  return new Response(JSON.stringify(bank), { headers: { 'Content-Type': 'application/json' } });
};
