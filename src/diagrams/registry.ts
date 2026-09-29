/**
 * Diagram registry. Each diagram is an original SVG schematic written as an
 * Astro component in this folder (src/diagrams/<id>.astro), using <Label> for
 * clickable structure labels. Structures reference diagrams by id in their
 * `diagrams:` frontmatter list.
 */
export interface DiagramMeta {
  title: string;
  region: string;
  description: string;
}

export const diagrams: Record<string, DiagramMeta> = {
  'brachial-plexus': {
    title: 'Brachial plexus',
    region: 'upper-limb',
    description:
      'Roots (ventral rami C5–T1) → trunks → divisions → cords → terminal branches. Dashed lines = posterior divisions, posterior cord and its branches. Selected collateral branches shown. Tap a nerve name to open its page.',
  },
  'upper-limb-dermatomes': {
    title: 'Upper limb dermatomes (anterior view)',
    region: 'upper-limb',
    description:
      'Schematic of the commonly taught pattern. Adjacent dermatomes overlap and published maps disagree at the borders, so check against your textbook. The C6–C8 ASIA key points are tested on the dorsal surface of the digits.',
  },
};
