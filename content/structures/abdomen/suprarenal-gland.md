---
name: Suprarenal gland
type: organ
region: abdomen
subregion: Kidneys & suprarenals
taName: Glandula suprarenalis
aka: [Adrenal gland]
summary: Paired retroperitoneal endocrine glands on the superomedial poles of the kidneys. The cortex makes steroids and the medulla makes catecholamines; pheochromocytoma, Cushing, Conn and Addison are the classic disorders.
tags: [endocrine, retroperitoneum]
systems: [endocrine]
highYield: true
status: draft
anatomy:
  location: "Retroperitoneal, superomedial to each [[kidney]], within the renal (Gerota) fascia but in a separate compartment. **Right**: pyramidal, behind the IVC. **Left**: crescentic (semilunar), near the aorta, behind the stomach and pancreas."
  parts:
    - "**Cortex** (mesoderm), outer to inner: **zona glomerulosa** (aldosterone), **zona fasciculata** (cortisol), **zona reticularis** (androgens). Mnemonic: \"salt, sugar, sex\" (GFR)"
    - "**Medulla** (neural crest): chromaffin cells secreting **epinephrine and norepinephrine**. It is innervated directly by **preganglionic** sympathetic fibers (it functions as a modified sympathetic ganglion)"
  relations: Right gland lies behind the IVC and near the bare area of the liver; left gland near the splenic vessels, pancreas and stomach. Both lie on the crura of the diaphragm.
  bloodSupply: '**Superior suprarenal** (from the inferior phrenic), **middle suprarenal** (from the aorta), **inferior suprarenal** (from the renal) arteries.'
  venousDrainage: Single suprarenal vein on each side. The **right drains directly into the IVC** (very short, a hazard in adrenalectomy); the **left drains into the left renal vein**.
  innervation: Celiac plexus and thoracic splanchnic nerves (preganglionic sympathetic fibers to the medulla).
clinical:
  - title: Pheochromocytoma
    highYield: true
    mechanism: Catecholamine-secreting tumor of the medulla (chromaffin cells). Associated with MEN 2, von Hippel–Lindau and NF1.
    presentation: >-
      Episodic **headache, sweating and palpitations (tachycardia)** with **hypertension** (paroxysmal or sustained).
      Screen with **plasma free or 24-hour urine fractionated metanephrines**, then image. Before surgery, give **alpha
      blockade first** (phenoxybenzamine), then beta blockade, to avoid unopposed alpha stimulation.
  - title: Primary hyperaldosteronism (Conn syndrome)
    highYield: true
    mechanism: Aldosterone-producing adenoma or bilateral adrenal hyperplasia.
    presentation: '**Hypertension with hypokalemia** (often), metabolic alkalosis, low renin. Screen with the **aldosterone-to-renin ratio**.'
  - title: Adrenal insufficiency (Addison disease) and adrenal crisis
    highYield: true
    mechanism: Primary adrenal failure, most often **autoimmune** in developed countries (also TB, hemorrhage, e.g. **Waterhouse–Friderichsen** in meningococcemia, metastases).
    presentation: >-
      Fatigue, weight loss, **hyperpigmentation** (raised ACTH), hypotension, **hyponatremia, hyperkalemia**,
      hypoglycemia. **Adrenal crisis**: shock; treat immediately with **IV hydrocortisone** and fluids.
  - title: Adrenal incidentaloma and Cushing syndrome
    highYield: false
    mechanism: Adrenal masses are often found on imaging done for other reasons; some secrete cortisol (Cushing), aldosterone or catecholamines, and a few are malignant.
    presentation: "Every incidentaloma is evaluated for **hormone excess** (cortisol, catecholamines, aldosterone if hypertensive) and **malignancy** (size, imaging features). Larger masses (commonly more than 4 cm) raise concern. {{verify: size thresholds for resection}}"
pance:
  - "Cortex GFR: glomerulosa (aldosterone), fasciculata (cortisol), reticularis (androgens)."
  - "**Pheochromocytoma**: headache + sweating + tachycardia + HTN; **metanephrines**; **alpha before beta** blockade."
  - "**Conn**: HTN + hypokalemia; aldosterone:renin ratio."
  - "**Addison**: hyperpigmentation, hyponatremia, hyperkalemia; crisis → **IV hydrocortisone**."
  - "Right suprarenal vein → IVC; left → left renal vein."
imaging:
  ct: >-
    **Adrenal-protocol CT**: an unenhanced attenuation of **10 HU or less** indicates a lipid-rich (benign) adenoma;
    contrast washout characteristics help with others. Pheochromocytomas are usually enhancing and higher in
    attenuation. {{verify: HU and washout thresholds}}
  mri: Chemical-shift MRI shows signal loss in lipid-rich adenomas; pheochromocytomas are classically bright on T2.
  ultrasound: Limited for the adrenals (large masses may be seen); not a primary tool.
  keyViews:
    - "Adrenal-protocol CT (unenhanced + contrast washout)"
    - "Functional imaging (e.g. MIBG or PET) for pheochromocytoma localization"
exam:
  testing: >-
    Blood pressure (including paroxysms), orthostatic changes (insufficiency), hyperpigmentation (palmar creases, buccal
    mucosa), Cushingoid features (central obesity, purple striae, proximal weakness).
quiz:
  - stem: >-
      A 38-year-old woman has episodes of pounding headache, sweating and palpitations, with BP 210/120 during an
      episode. What is the best initial test?
    choices:
      - Serum cortisol
      - Plasma free metanephrines
      - Aldosterone-to-renin ratio
      - MRI of the pituitary
      - Thyroid ultrasound
    answer: B
    explanation: >-
      The triad of headache, sweating and tachycardia with hypertension suggests **pheochromocytoma**. Screen
      biochemically with **plasma free (or urine fractionated) metanephrines** before imaging.
  - stem: Before surgical removal of a pheochromocytoma, which medication should be started first?
    choices:
      - Propranolol
      - Phenoxybenzamine
      - Hydrocortisone
      - Spironolactone
      - Furosemide
    answer: B
    explanation: >-
      **Alpha blockade** (phenoxybenzamine) comes first. Starting a beta blocker first leaves alpha-mediated
      vasoconstriction unopposed and can precipitate a hypertensive crisis.
  - stem: The right suprarenal vein drains into which vessel?
    choices:
      - Right renal vein
      - Inferior vena cava
      - Portal vein
      - Azygos vein
      - Right gonadal vein
    answer: B
    explanation: The **right** suprarenal vein is very short and drains **directly into the IVC**; the left drains into the left renal vein.
  - stem: A patient has fatigue, hyperpigmented palmar creases, BP 88/56, Na 128 and K 5.9. What is the most likely diagnosis?
    choices:
      - Secondary adrenal insufficiency
      - Primary adrenal insufficiency (Addison disease)
      - Conn syndrome
      - Pheochromocytoma
      - Cushing syndrome
    answer: B
    explanation: >-
      **Hyperpigmentation** (high ACTH) with **hyponatremia and hyperkalemia** (loss of aldosterone) indicates **primary**
      adrenal insufficiency. Secondary insufficiency lacks hyperpigmentation and hyperkalemia.
flashcards:
  - front: Adrenal cortex zones and hormones?
    back: "Glomerulosa: aldosterone. Fasciculata: cortisol. Reticularis: androgens (salt, sugar, sex)"
  - front: Pheochromocytoma pre-op medication order?
    back: Alpha blocker first (phenoxybenzamine), then beta blocker
  - front: Suprarenal venous drainage?
    back: "Right: IVC directly. Left: left renal vein"
  - front: Three suprarenal arteries?
    back: Superior (inferior phrenic), middle (aorta), inferior (renal)
related: [kidney, inferior-vena-cava]
images:
  - image: gray-1121-posterior-abdominal-wall
    caption: "The suprarenal glands on the upper poles of the kidneys, with the great vessels."
---
