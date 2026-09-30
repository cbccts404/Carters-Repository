import type { APIRoute } from 'astro';
import { loadAtlas, mdInline, structureUrl } from '../lib/atlas';

/**
 * Build-time deck of every flashcard, consumed by the flashcard page
 * (src/pages/flashcards.astro). A card's id is "<entry id>#<index>".
 */
export const GET: APIRoute = async () => {
  const atlas = await loadAtlas();
  const deck = [];
  for (const s of atlas.structures) {
    for (const [i, c] of s.data.flashcards.entries()) {
      deck.push({
        id: `${s.id}#${i}`,
        entry: s.data.name,
        region: s.data.region,
        highYield: s.data.highYield,
        url: structureUrl(s),
        front: await mdInline(c.front),
        back: await mdInline(c.back),
      });
    }
  }
  return new Response(JSON.stringify(deck), { headers: { 'Content-Type': 'application/json' } });
};
