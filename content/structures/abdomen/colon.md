---
name: Colon
type: organ
region: abdomen
subregion: GI viscera
taName: Colon (intestinum crassum)
aka: [Large intestine, Cecum, Ascending colon, Transverse colon, Descending colon, Sigmoid colon]
summary: Large intestine from the cecum to the sigmoid colon, supplied by the SMA (midgut) and IMA (hindgut). Diverticulitis, colorectal cancer, volvulus and ischemic colitis are the high-yield problems.
tags: [gi, midgut, hindgut]
systems: [gastrointestinal]
highYield: true
status: draft
anatomy:
  location: Frames the small intestine around the abdomen.
  parts:
    - "**Cecum** (right iliac fossa, with the [[appendix]]) and ileocecal valve"
    - "**Ascending colon** (retroperitoneal) → **right colic (hepatic) flexure**"
    - "**Transverse colon** (intraperitoneal, on the transverse mesocolon) → **left colic (splenic) flexure** (higher than the hepatic flexure)"
    - "**Descending colon** (retroperitoneal)"
    - "**Sigmoid colon** (intraperitoneal, on the sigmoid mesocolon) → rectum at about S3"
    - "**Distinguishing features**: **teniae coli** (three longitudinal muscle bands), **haustra**, **omental appendices** (fat tags)"
  relations: The ascending and descending colon lie on the posterior abdominal wall (kidneys, quadratus lumborum). The transverse colon is attached to the greater omentum. Paracolic gutters lie lateral to the ascending and descending colon.
  bloodSupply: >-
    **Midgut (cecum to about the distal third of the transverse colon)**: [[superior-mesenteric-artery]] via the
    **ileocolic, right colic and middle colic** arteries. **Hindgut (distal third of the transverse colon to the upper
    rectum)**: [[inferior-mesenteric-artery]] via the **left colic, sigmoid and superior rectal** arteries. The
    **marginal artery (of Drummond)** runs along the mesenteric border, connecting them. **Watershed areas** at the
    **splenic flexure** (Griffiths point) and the **rectosigmoid junction** (Sudeck point) are vulnerable to low-flow
    ischemia.
  venousDrainage: Superior and inferior mesenteric veins → [[hepatic-portal-vein]] (the IMV usually joins the splenic vein).
  lymphatics: Epicolic → paracolic → intermediate (along the colic arteries) → superior and inferior mesenteric nodes.
  innervation: Vagus to about the distal transverse colon; pelvic splanchnic nerves (S2–S4) beyond; sympathetics via the superior and inferior mesenteric plexuses. Visceral pain is periumbilical (midgut) or suprapubic (hindgut).
clinical:
  - title: Diverticulosis and diverticulitis
    highYield: true
    mechanism: Outpouchings of mucosa and submucosa through weak points where vasa recta penetrate the wall, most often in the **sigmoid** (in Western populations). Associated with low-fiber diets and age.
    presentation: >-
      **Diverticulosis**: usually asymptomatic; **painless lower GI bleeding** (the most common cause of significant
      hematochezia in older adults). **Diverticulitis**: **LLQ pain**, fever, leukocytosis, altered bowel habit.
      Complications: abscess, perforation, fistula (colovesical → pneumaturia), stricture.
  - title: Colorectal cancer
    highYield: true
    mechanism: Adenoma–carcinoma sequence. Risk factors include age, family history, hereditary syndromes (Lynch, FAP), inflammatory bowel disease, and diet.
    presentation: >-
      **Right-sided** tumors: **iron-deficiency anemia**, occult bleeding, fatigue, weight loss. **Left-sided**
      tumors: **obstruction**, change in bowel habit, narrowed stool caliber, hematochezia. Iron-deficiency anemia in an
      older adult (or a postmenopausal woman) warrants colonoscopy. Screening typically starts at **age 45** for
      average-risk adults. {{verify: check current USPSTF screening guidance}}
  - title: Volvulus
    highYield: true
    mechanism: Twisting of a mobile segment on its mesentery. **Sigmoid** volvulus is most common (older, institutionalized or constipated patients); **cecal** volvulus occurs in younger patients.
    presentation: >-
      Abdominal distension, pain, obstipation. Sigmoid volvulus shows a **"coffee bean"** sign on X-ray and is often
      treated first with endoscopic detorsion (if no ischemia), then elective resection.
  - title: Ischemic colitis
    highYield: true
    mechanism: Low-flow ischemia at the **watershed areas** (splenic flexure, rectosigmoid), e.g. with hypotension, vascular disease, or after aortic surgery with IMA ligation.
    presentation: Crampy LLQ pain followed within 24 hours by bloody diarrhea, in an older patient. "Thumbprinting" on imaging.
pance:
  - "Diverticulitis: **LLQ pain + fever**; diagnose with **CT**; avoid colonoscopy in the acute phase (colonoscopy afterward to exclude cancer)."
  - "Painless hematochezia in an older adult → diverticulosis (or angiodysplasia)."
  - "Right colon cancer → **iron-deficiency anemia**; left colon cancer → **obstruction**, change in stool caliber."
  - "Sigmoid volvulus: **coffee bean** sign; endoscopic detorsion."
  - "Watershed areas: **splenic flexure** and **rectosigmoid** → ischemic colitis."
  - "In large bowel obstruction the **cecum** is most at risk of perforation (widest diameter, Laplace law)."
imaging:
  xray: >-
    Large bowel obstruction: dilated colon with haustral markings at the periphery (the cecum above roughly 9–12 cm is at
    risk of perforation). **Coffee bean sign** in sigmoid volvulus. Free air. {{verify: cecal diameter threshold varies}}
  ct: >-
    CT with IV contrast is the test of choice for **diverticulitis** (wall thickening, pericolic fat stranding,
    abscess) and for obstruction, volvulus (whirl sign), ischemic colitis and cancer staging. **CT colonography** is a
    screening alternative.
  ultrasound: Useful in some centers for diverticulitis; limited by gas.
  keyViews:
    - "**Colonoscopy**: gold standard for cancer detection and polyp removal"
    - "Barium enema (historic): **apple-core** lesion of colon cancer"
exam:
  landmarks: The cecum lies in the right iliac fossa; the sigmoid in the left iliac fossa (a firm, stool-filled sigmoid may be palpable).
  palpation: LLQ tenderness (diverticulitis), masses, distension. **Digital rectal exam** for masses, blood and tone.
  testing: Percuss for tympany in distension. Check stool for occult blood when indicated.
quiz:
  - stem: A 67-year-old man has 3 days of LLQ pain, fever of 38.4 °C and leukocytosis. What is the best diagnostic test?
    choices:
      - Colonoscopy
      - CT abdomen/pelvis with contrast
      - Barium enema
      - Abdominal ultrasound
      - Flexible sigmoidoscopy
    answer: B
    explanation: >-
      Suspected **acute diverticulitis** is best confirmed with **CT**, which also detects abscess or perforation.
      Colonoscopy and barium enema are avoided acutely (perforation risk).
  - stem: A 70-year-old woman has fatigue and iron-deficiency anemia with no visible bleeding. Where is a colorectal cancer most likely to cause this presentation?
    choices:
      - Rectum
      - Sigmoid colon
      - Descending colon
      - Cecum/ascending colon
      - Splenic flexure only
    answer: D
    explanation: >-
      **Right-sided** (cecal/ascending) cancers bleed occultly and present with **iron-deficiency anemia**. Left-sided
      cancers tend to cause obstruction and change in bowel habits.
  - stem: After an abdominal aortic aneurysm repair with ligation of the IMA, a patient develops bloody diarrhea. Which part of the colon is most at risk?
    choices:
      - Cecum
      - Hepatic flexure
      - Sigmoid colon and splenic flexure watershed
      - Ascending colon
      - Transverse colon near the hepatic flexure
    answer: C
    explanation: >-
      The **IMA** supplies the distal colon. With it ligated, the **splenic flexure and rectosigmoid (sigmoid)** watershed
      regions depend on collaterals and are prone to **ischemic colitis**.
  - stem: An elderly nursing home resident has massive abdominal distension and obstipation. The radiograph shows a large inverted-U loop resembling a coffee bean pointing toward the right upper quadrant. What is the diagnosis?
    choices:
      - Cecal volvulus
      - Sigmoid volvulus
      - Toxic megacolon
      - Small bowel obstruction from adhesions
      - Ogilvie syndrome
    answer: B
    explanation: The **coffee bean** sign in an older, institutionalized patient is classic for **sigmoid volvulus**. Treatment starts with endoscopic detorsion if there's no ischemia.
  - stem: >-
      In a large bowel obstruction with a competent ileocecal valve, which part of the colon is most at risk of
      perforation?
    choices:
      - Sigmoid colon
      - Descending colon
      - Splenic flexure
      - Rectum
      - Cecum
    answer: E
    explanation: >-
      The **cecum** has the widest diameter, so by the **law of Laplace** its wall tension is highest and it perforates
      first in a closed-loop large bowel obstruction.
flashcards:
  - front: Arterial supply of the colon by segment?
    back: "SMA (ileocolic, right colic, middle colic) to distal 1/3 transverse; IMA (left colic, sigmoid, superior rectal) beyond"
  - front: Colonic watershed areas?
    back: Splenic flexure (Griffiths point) and rectosigmoid (Sudeck point)
  - front: Features that identify the colon?
    back: Teniae coli, haustra, omental appendices
  - front: Right vs left colon cancer presentation?
    back: "Right: iron-deficiency anemia, occult bleeding. Left: obstruction, change in stool caliber, hematochezia"
diagrams: []
related: [appendix, superior-mesenteric-artery, inferior-mesenteric-artery, small-intestine]
images:
  - image: gray-537-inferior-mesenteric-artery
    caption: "Arteries of the left colon: branches of the inferior mesenteric artery."
  - image: gray-1073-cecum-appendix
    caption: "The cecum with the terminal ileum and appendix."
---
