/**
 * CONTENT SCHEMA
 * --------------
 * Every structure is one Markdown file in content/structures/<region>/<id>.md.
 * All data lives in the YAML frontmatter; this file only defines its shape so
 * the build can reject typos, missing required fields, and malformed quizzes.
 *
 * Text fields are Markdown and support two inline extensions:
 *   [[median-nerve]]            -> link to another structure (shows its name)
 *   [[median-nerve|the median]] -> link with custom text
 *   {{verify}} / {{verify: why}} -> "verify" flag; collected on /review/
 *
 * See docs/SCHEMA.md for the human-readable version with examples.
 */
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// ---------- primitives ----------
/** Markdown string (may contain [[links]] and {{verify}} tags). */
const md = z.string().min(1);
/** A structure id = its filename without .md (kebab-case, unique atlas-wide). */
const id = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'ids are kebab-case, e.g. "median-nerve"');

export const STRUCTURE_TYPES = [
  'bone', 'muscle', 'nerve', 'artery', 'vein', 'lymphatic',
  'organ', 'joint', 'ligament', 'space',
] as const;
export type StructureType = (typeof STRUCTURE_TYPES)[number];

/** Organ-system categories of the NCCPA PANCE content blueprint, used to study by system. */
export const BODY_SYSTEMS = [
  'cardiovascular', 'dermatologic', 'endocrine', 'eent', 'gastrointestinal', 'genitourinary', 'hematologic',
  'infectious', 'musculoskeletal', 'neurologic', 'psychiatric', 'pulmonary', 'renal', 'reproductive',
] as const;
export type BodySystem = (typeof BODY_SYSTEMS)[number];

// ---------- type-specific "Core anatomy" blocks ----------
// strictObject = unknown keys are an error, so a misspelled field name fails
// the build instead of silently disappearing.
const common = {
  location: md.optional(),
  relations: md.optional(),
  notes: md.optional(),
};

const anatomyByType = {
  bone: z.strictObject({
    ...common,
    classification: md.optional(),           // e.g. "Long bone"
    features: z.array(md).default([]),        // named landmarks
    ossification: md.optional(),
  }),
  muscle: z.strictObject({
    ...common,
    group: md.optional(),                     // compartment / layer
    origin: md.optional(),
    insertion: md.optional(),
    innervation: md.optional(),               // link the nerve: [[median-nerve]] (C6–C7)
    bloodSupply: md.optional(),               // link the artery
    action: z.array(md).default([]),
  }),
  nerve: z.strictObject({
    ...common,
    roots: md.optional(),                     // e.g. "C5–C6"
    origin: md.optional(),                    // parent: "[[lateral-cord]]"
    course: md.optional(),
    branches: z.array(md).default([]),
    motor: md.optional(),                     // summary; muscle list is auto-derived
    sensory: md.optional(),
  }),
  artery: z.strictObject({
    ...common,
    origin: md.optional(),                    // parent: "Continuation of [[axillary-artery]]"
    course: md.optional(),
    branches: z.array(md).default([]),
    supplies: md.optional(),                  // summary; supplied structures are auto-derived
    anastomoses: md.optional(),
    termination: md.optional(),
  }),
  vein: z.strictObject({
    ...common,
    formation: md.optional(),
    course: md.optional(),
    tributaries: z.array(md).default([]),
    drainage: md.optional(),                  // drains into
  }),
  lymphatic: z.strictObject({
    ...common,
    drains: md.optional(),                    // territory
    drainsTo: md.optional(),
  }),
  organ: z.strictObject({
    ...common,
    parts: z.array(md).default([]),
    bloodSupply: md.optional(),
    venousDrainage: md.optional(),
    lymphatics: md.optional(),
    innervation: md.optional(),
  }),
  joint: z.strictObject({
    ...common,
    classification: md.optional(),           // e.g. "Synovial ball-and-socket"
    bones: md.optional(),                     // articulating surfaces; link the bones
    capsule: md.optional(),
    ligaments: z.array(md).default([]),
    movements: z.array(md).default([]),
    stability: md.optional(),
    innervation: md.optional(),
    bloodSupply: md.optional(),
  }),
  ligament: z.strictObject({
    ...common,
    attachments: md.optional(),
    function: md.optional(),
  }),
  space: z.strictObject({
    ...common,
    boundaries: z.record(z.string(), md).default({}), // { apex: ..., base: ..., medial: ... }
    contents: z.array(md).default([]),
    communications: md.optional(),
  }),
} as const;

// ---------- shared sections ----------
const clinicalItem = z.strictObject({
  title: z.string(),
  highYield: z.boolean().default(false),      // PANCE high-yield flag
  mechanism: md.optional(),                   // cause / lesion / injury mechanism
  presentation: md.optional(),                // classic presentation & findings
  notes: md.optional(),
});

const imaging = z.strictObject({
  xray: md.optional(),
  ct: md.optional(),
  mri: md.optional(),
  ultrasound: md.optional(),
  keyViews: z.array(md).default([]),
});

const specialTest = z.strictObject({
  name: z.string(),
  technique: md,
  positive: md.optional(),                    // what a positive test looks like
  significance: md.optional(),                // what it suggests
});

const exam = z.strictObject({
  landmarks: md.optional(),                   // surface anatomy
  palpation: md.optional(),
  testing: md.optional(),                     // strength / function testing
  specialTests: z.array(specialTest).default([]),
});

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const;
const quizItem = z
  .strictObject({
    stem: md,
    choices: z.array(md).min(4).max(5),
    answer: z.enum(LETTERS),
    explanation: md,
    tags: z.array(z.string()).default([]),
  })
  .refine((q) => LETTERS.indexOf(q.answer) < q.choices.length, {
    message: 'answer letter is beyond the number of choices',
    path: ['answer'],
  });

const flashcard = z.strictObject({ front: md, back: md });

const imageUse = z.strictObject({
  image: id,                                  // id from content/images.yaml
  caption: md.optional(),
});

// ---------- the structure schema ----------
const baseFields = {
  name: z.string(),
  region: id,                                 // id from content/regions.yaml
  subregion: z.string().optional(),           // e.g. "Arm", "Forearm", "Hand"
  taName: z.string().optional(),              // Terminologia Anatomica (Latin)
  aka: z.array(z.string()).default([]),       // synonyms / eponyms (searchable)
  summary: z.string(),                        // one-line description
  tags: z.array(z.string()).default([]),
  systems: z.array(z.enum(BODY_SYSTEMS)).min(1, 'assign at least one PANCE body system'),
  highYield: z.boolean().default(false),
  status: z.enum(['stub', 'draft', 'reviewed']).default('draft'),
  netterPlate: z.string().optional(),         // for YOUR reference; fill in per your edition
  clinical: z.array(clinicalItem).default([]),
  pance: z.array(md).default([]),             // high-yield PANCE pearls
  imaging: imaging.optional(),
  exam: exam.optional(),
  quiz: z.array(quizItem).default([]),
  flashcards: z.array(flashcard).default([]),
  images: z.array(imageUse).default([]),
  diagrams: z.array(id).default([]),
  related: z.array(id).default([]),           // extra "see also" links
  sources: z.array(z.string()).default([]),   // references consulted
};

const variant = <T extends StructureType>(type: T) => {
  const anatomy = anatomyByType[type] as (typeof anatomyByType)[T];
  return z.strictObject({
    ...baseFields,
    type: z.literal(type),
    // every anatomy field is optional, so a missing block parses as {}
    anatomy: (anatomy as z.ZodObject).prefault({}) as unknown as z.ZodDefault<(typeof anatomyByType)[T]>,
  });
};

const structureSchema = z.discriminatedUnion('type', [
  variant('bone'), variant('muscle'), variant('nerve'), variant('artery'), variant('vein'),
  variant('lymphatic'), variant('organ'), variant('joint'), variant('ligament'), variant('space'),
]);

const structures = defineCollection({
  // files starting with "_" are ignored (drafts, templates)
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './content/structures',
    generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.md$/, ''),
  }),
  schema: structureSchema,
});

const regions = defineCollection({
  loader: file('./content/regions.yaml'),
  schema: z.strictObject({
    id,
    name: z.string(),
    order: z.number(),
    blurb: z.string(),
    subregions: z.array(z.string()).default([]),
  }),
});

const images = defineCollection({
  loader: file('./content/images.yaml'),
  schema: z.strictObject({
    id,
    file: z.string(),                         // path under public/, e.g. images/gray-0412.png
    title: z.string(),
    author: z.string(),                       // e.g. "Henry Vandyke Carter"
    work: z.string().optional(),              // e.g. "Gray's Anatomy of the Human Body, 20th ed. (1918)"
    source: z.url(),                          // Wikimedia Commons file page
    // Only public-domain material is allowed. Anything else fails the build.
    license: z.enum(['Public domain', 'CC0']),
    licenseNote: z.string().optional(),       // e.g. "PD-US: published before 1931"
    alt: z.string(),
  }),
});

export const collections = { structures, regions, images };
