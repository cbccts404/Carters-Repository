import type { APIRoute } from 'astro';
import { loadAtlas, plain, structureUrl, TYPE_LABELS } from '../lib/atlas';

/** Build-time search index consumed by src/scripts/search.ts (works offline). */
export const GET: APIRoute = async () => {
  const atlas = await loadAtlas();
  const docs = atlas.structures.map((s) => {
    const d = s.data;
    return {
      id: s.id,
      name: d.name,
      taName: d.taName ?? '',
      aka: d.aka.join(' · '),
      type: d.type,
      typeLabel: TYPE_LABELS[d.type][0],
      region: d.region,
      regionName: atlas.regionById.get(d.region)?.data.name ?? d.region,
      subregion: d.subregion ?? '',
      summary: plain(d.summary),
      tags: d.tags.join(' '),
      systems: d.systems.join(' '),
      clinical: [...d.clinical.map((c) => c.title), ...d.pance.map(plain), ...d.exam?.specialTests.map((t) => t.name) ?? []].join(' · '),
      highYield: d.highYield,
      url: structureUrl(s),
    };
  });
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json' } });
};
