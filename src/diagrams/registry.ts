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
  'coronary-arteries': {
    title: 'Coronary arteries (anterior view)',
    region: 'thorax',
    description:
      'Right-dominant pattern shown; dashed vessels run on the posterior/inferior surface. ECG territories: LAD → V1–V4 (anteroseptal); circumflex → I, aVL, V5–V6 (lateral); RCA → II, III, aVF (inferior).',
  },
  'cardiac-auscultation': {
    title: 'Cardiac auscultation areas',
    region: 'thorax',
    description:
      'Classic listening posts. These are where each valve is heard best, not where the valves lie anatomically. Count interspaces down from the 2nd rib at the sternal angle.',
  },
  'portal-system': {
    title: 'Hepatic portal system',
    region: 'abdomen',
    description:
      'Portal veins (purple) drain the gut, spleen and pancreas to the liver; systemic veins in blue. Numbered sites are portosystemic anastomoses that dilate in portal hypertension. Tap a label to open its page.',
  },
  'gut-arterial-supply': {
    title: 'Arterial supply of the gut',
    region: 'abdomen',
    description:
      'The three unpaired anterior branches of the abdominal aorta and their territories, with vertebral levels and where visceral pain from each region is felt.',
  },
  'lumbar-disc-herniation': {
    title: 'Lumbar disc herniation and nerve roots',
    region: 'back',
    description:
      'Posterior view of L4–S1 (right-sided roots shown). Lumbar roots exit below their own pedicle, so a posterolateral L4–L5 herniation (1) compresses the traversing L5 root and a far-lateral herniation (2) compresses the exiting L4 root.',
  },
  'lumbar-puncture': {
    title: 'Lumbar puncture anatomy',
    region: 'back',
    description:
      'Sagittal schematic (not to scale): the cord ends at about L1–L2, the dural sac at about S2. The needle enters at L3–L4, just above the intercristal line (≈ L4), well below the conus.',
  },
  'internal-iliac-branches': {
    title: 'Branches of the internal iliac artery',
    region: 'pelvis-perineum',
    description:
      'Usual branching pattern (it varies between people). Posterior-division branches are dashed; the superior gluteal passes above piriformis, the inferior gluteal and internal pudendal below it. Tap a label to open its page.',
  },
  'perineum-triangles': {
    title: 'Perineum: urogenital and anal triangles',
    region: 'pelvis-perineum',
    description:
      'Inferior view with the patient in lithotomy (anterior at the top). A line between the ischial tuberosities divides the urogenital triangle from the anal triangle; the pudendal canal runs in the lateral wall of each ischioanal fossa.',
  },
  'lower-limb-dermatomes': {
    title: 'Lower limb dermatomes and key muscles',
    region: 'lower-limb',
    description:
      'Right lower limb, anterior view (medial = your right). Dots are ASIA key sensory points; the table gives the key muscle action and reflex for each root. Dermatome maps differ between sources.',
  },
  'leg-compartments': {
    title: 'Compartments of the leg',
    region: 'lower-limb',
    description:
      'Schematic mid-leg cross-section: four compartments separated by bone, the interosseous membrane and intermuscular septa, each with its own nerve. Compartment syndrome most often affects the anterior compartment.',
  },
  'extraocular-muscles-h-test': {
    title: 'H-pattern test of the extraocular muscles',
    region: 'head-neck',
    description:
      "Examiner's view of the patient's right eye (patient's right = your left). Each end-point is the gaze position that isolates one muscle; gold dots = CN VI and CN IV, red dots = CN III. The obliques are tested with the eye adducted, the superior and inferior recti with it abducted.",
  },
  'neck-triangles': {
    title: 'Triangles of the neck',
    region: 'head-neck',
    description:
      'Right lateral view, face to the right (schematic, not to scale). Sternocleidomastoid separates the anterior triangle (submandibular, carotid, muscular; submental in the midline) from the posterior triangle (occipital, omoclavicular). The dashed common carotid runs deep to sternocleidomastoid.',
  },
  'visual-pathway': {
    title: 'Visual pathway and field defects',
    region: 'neuroanatomy',
    description:
      'View from above, anterior at the top. Nasal retinal fibers cross at the chiasm; the Meyer loop (temporal lobe) carries the upper field and the parietal radiation the lower field. The numbered left-sided lesions produce the field defects in the table (patient\'s view, red = lost).',
  },
  'circle-of-willis': {
    title: 'Circle of Willis and vertebrobasilar system',
    region: 'neuroanatomy',
    description:
      'Inferior view, anterior at the top. The internal carotids (anterior circulation) and basilar artery (posterior circulation) are joined by the communicating arteries; CN III passes between the PCA and SCA. Red dots mark common berry aneurysm sites. A complete, symmetric circle is present in only a minority of people.',
  },
  'cerebral-artery-territories': {
    title: 'Territories of the cerebral arteries',
    region: 'neuroanatomy',
    description:
      'Lateral surface of the left hemisphere and medial surface of the right. The MCA supplies the face and arm cortex and the language areas; the ACA the medial leg area; the PCA the occipital lobe. Territory borders vary between people.',
  },
  'spinal-cord-tracts': {
    title: 'Spinal cord tracts (cross-section)',
    region: 'neuroanatomy',
    description:
      'Cervical cord, dorsal at the top. Dorsal columns and lateral corticospinal tract serve the same side of the body; the spinothalamic tract serves the opposite side because its fibers cross in the anterior white commissure (dashed green) within 1–2 segments.',
  },
  'suboccipital-triangle': {
    title: 'Suboccipital triangle',
    region: 'back',
    description:
      'Posterior view with the superficial muscles removed. Rectus capitis posterior major, obliquus capitis superior and obliquus capitis inferior bound the triangle; the vertebral artery and suboccipital nerve (C1) lie in its floor on the posterior arch of the atlas. The greater occipital nerve (C2) emerges below obliquus capitis inferior and is not a content of the triangle.',
  },
  'vertebral-column': {
    title: 'Vertebral column (lateral view)',
    region: 'back',
    description:
      "Left lateral view, anterior to the left. Cervical and lumbar lordoses are secondary curvatures; thoracic and sacral kyphoses are primary. Landmark levels vary by about one segment between people, so use them as guides, not rules.",
  },
  'vertebral-venous-plexus': {
    title: 'Vertebral venous plexus (Batson)',
    region: 'back',
    description:
      "A: lumbar cross-section, oriented as on axial CT. The internal plexus lies in the epidural space; the external plexus lies outside the vertebra. B: the plexus is a valveless channel from the skull to the pelvis, which is why pelvic tumors (classically prostate) and infections can reach the vertebrae.",
  },
  'internal-thoracic-artery': {
    title: 'Internal thoracic artery (anterior view)',
    region: 'thorax',
    description:
      "Drawn as if seen through the chest wall; the arteries run on its deep surface about 1 cm lateral to the sternum. Each divides in the 6th intercostal space into the musculophrenic and superior epigastric arteries. The superior epigastric anastomoses with the inferior epigastric in the rectus sheath, a subclavian-to-iliac collateral route (for example in coarctation).",
  },
  'inguinal-region': {
    title: 'Inguinal region from inside (Hesselbach triangle)',
    region: 'abdomen',
    description:
      "Right side seen from inside the abdomen, as at laparoscopy. The inferior epigastric vessels separate indirect hernias (lateral, through the deep ring) from direct hernias (medial, through the inguinal triangle). Femoral hernias pass below the inguinal ligament, medial to the femoral vein. The inguinal canal and superficial ring lie in front of this plane (dashed).",
  },
  'rotator-cuff': {
    title: 'Rotator cuff (SITS)',
    region: 'upper-limb',
    description:
      "Right glenoid seen from the side with the humerus removed. The cuff covers the top, back and front of the joint but not its inferior part, which is why most dislocations are anterior–inferior. The table summarizes attachments, nerves, actions and bedside tests.",
  },
  'carpal-bones': {
    title: 'Carpal bones (right hand, palmar view)',
    region: 'upper-limb',
    description:
      "Thumb on the left. The flexor retinaculum (dashed) is anchored to the scaphoid tubercle and trapezium laterally and to the pisiform and hook of hamate medially, forming the roof of the carpal tunnel. Highlighted bones are the high-yield ones: scaphoid (fracture), lunate (dislocation) and hamate (hook fracture).",
  },
  'skull-base-foramina': {
    title: 'Foramina of the cranial base',
    region: 'head-neck',
    description:
      "Internal view from above, anterior at the top. Each foramen is drawn on both sides and labelled on one. The carotid canal runs inside the petrous bone (dashed) and opens at its apex, where the internal carotid artery crosses above the cartilage-filled foramen lacerum.",
  },
  'referred-pain': {
    title: 'Referred visceral pain',
    region: 'abdomen',
    description:
      "Visceral pain is poorly localized and felt in the dermatomes that share spinal segments with the organ's afferent fibers. Pain becomes sharp and localized once the parietal peritoneum is involved (appendicitis: periumbilical → RLQ). Zones are approximate and vary between people.",
  },
};
