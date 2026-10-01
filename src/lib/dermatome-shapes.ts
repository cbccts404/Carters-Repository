/**
 * Shared dermatome geometry for the limb dermatome diagrams and the nerve root map.
 * Original schematics of the commonly taught pattern: maps differ between sources
 * and neighbouring dermatomes overlap, so the borders are approximate.
 * Each region is a polygon clipped to its panel's outline.
 */
export type Region = { id: string; color: string; points?: string; d?: string };
export type Panel = { outline: string; regions: Region[] };

/** Right upper limb, anterior view (anatomical position, thumb lateral = viewer's left). viewBox 0 0 360 660. */
export const upperLimb: Panel & { keyPoints: [number, number][] } = {
  outline:
    'M120 50 Q185 20 262 48 L258 110 L250 270 L240 440 L248 470 L250 520 ' +
    'L252 585 Q244 596 236 585 L234 528 L232 605 Q223 616 214 605 L213 530 ' +
    'L211 615 Q202 626 193 615 L192 530 L190 600 Q181 611 172 600 L171 522 ' +
    'L168 500 L150 552 Q140 560 132 550 L142 485 L160 448 L170 440 L152 270 L118 110 Z',
  regions: [
    { id: 'C5', color: '#e07a5f', points: '90,0 190,0 201,272 90,272' },
    { id: 'T2', color: '#c06c84', points: '190,0 300,0 300,180 196,180' },
    { id: 'T1', color: '#9b72cf', points: '196,180 300,180 300,370 203,370' },
    { id: 'C6', color: '#f2cc8f', points: '90,272 201,272 204,440 191,470 191,660 90,660' },
    { id: 'C7', color: '#81b29a', points: '191,470 205,442 212,470 212,660 191,660' },
    { id: 'C8', color: '#6fa8dc', points: '203,370 300,370 300,660 212,660 212,470 205,440' },
    { id: 'C4', color: '#9aa5b8', points: '90,0 300,0 300,35 90,72' },
  ],
  // ASIA key sensory points (C6–C8 are dorsal on the real exam; shown approximately here)
  keyPoints: [
    [165, 258], [240, 258], [142, 530], [202, 585], [243, 565], [252, 78],
  ],
};

/** Right lower limb, anterior view (medial = viewer's right, great toe medial). Limb drawn in 0 0 300 730. */
export const lowerLimb: Panel & { keyPoints: [number, number][] } = {
  outline:
    'M95 40 Q180 20 262 45 L250 200 L238 330 Q236 360 232 380 L222 560 L228 600 ' +
    'L246 640 L262 690 Q258 706 240 706 L150 706 Q134 704 138 690 L150 640 L158 600 ' +
    'L160 560 L170 380 Q168 360 162 330 L130 200 Z',
  regions: [
    { id: 'L1', color: '#9aa5b8', points: '60,0 300,0 300,62 60,88' },
    { id: 'L2', color: '#e07a5f', points: '60,88 300,62 300,170 60,200' },
    { id: 'L3', color: '#f2cc8f', points: '60,200 300,170 300,352 60,352' },
    { id: 'L4', color: '#81b29a', points: '196,352 300,352 300,640 240,640 226,612 200,560' },
    { id: 'L5', color: '#6fa8dc', points: '60,352 196,352 200,560 226,612 240,640 300,640 300,730 158,730 158,600 60,600' },
    { id: 'S1', color: '#c06c84', points: '60,600 158,600 158,730 60,730' },
  ],
  // ASIA key sensory points (L1 upper thigh, L2 mid-anterior thigh, L3 medial femoral condyle,
  // L4 medial malleolus, L5 dorsum at the 3rd MTP joint, S1 lateral heel — shown approximately)
  keyPoints: [
    [178, 70], [182, 130], [230, 322], [226, 598], [205, 676], [150, 650],
  ],
};

/**
 * Trunk, anterior view. viewBox 0 0 300 420. Bands slope down toward the midline.
 * Only C4, T4 (nipple), T10 (umbilicus) and L1 (inguinal region) carry a root id;
 * the other thoracic bands are drawn in sequence as unlabeled context.
 */
const bandTops = [40, 58, 83, 108, 133, 158, 183, 208, 233, 258, 283, 308, 333, 372];
const bandIds = ['C4', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'L1'];
const sag = (y: number) => 8 + Math.max(0, y - 280) * 0.45; // how far the band dips at the midline
const edge = (y: number) => `0,${y - sag(y)} 150,${y} 300,${y - sag(y)}`;
const edgeRev = (y: number) => `300,${y - sag(y)} 150,${y} 0,${y - sag(y)}`;
const bandColor: Record<string, string> = { C4: '#9aa5b8', T4: '#e07a5f', T10: '#f2cc8f', L1: '#81b29a' };
export const trunk: Panel & { landmarks: { nipples: [number, number][]; umbilicus: [number, number] } } = {
  outline:
    'M118 34 Q150 28 182 34 L196 40 Q250 44 268 66 L262 150 Q252 210 256 260 Q262 320 270 352 ' +
    'L232 400 L150 412 L68 400 L30 352 Q38 320 44 260 Q48 210 38 150 L32 66 Q50 44 104 40 Z',
  regions: bandIds.map((id, i) => ({
    id,
    color: bandColor[id] ?? (i % 2 ? '#5a6272' : '#6c7586'),
    points: `${edge(bandTops[i])} ${edgeRev(bandTops[i + 1] + (i === bandIds.length - 1 ? 60 : 0))}`,
  })),
  landmarks: { nipples: [[100, 120], [200, 120]], umbilicus: [150, 270] },
};

/** Saddle area, posterior view of the buttocks and upper thighs. viewBox 0 0 300 260. */
export const saddle: Panel & { anus: [number, number] } = {
  outline:
    'M30 40 Q30 10 80 12 Q130 14 146 30 L154 30 Q170 14 220 12 Q270 10 270 40 ' +
    'L268 140 Q266 175 250 190 L236 250 L166 250 L158 196 L142 196 L134 250 L64 250 L50 190 Q34 175 32 140 Z',
  regions: [
    // the area that would touch a saddle: perineum, perianal skin and the medial buttocks
    {
      id: 'S2-S4',
      color: '#c06c84',
      d: 'M150 70 C206 72 222 120 214 168 C206 214 180 250 150 250 C120 250 94 214 86 168 C78 120 94 72 150 70 Z',
    },
  ],
  anus: [150, 150],
};
