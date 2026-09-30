---
name: Peritoneal cavity
type: space
region: abdomen
subregion: Peritoneum
taName: Cavitas peritonealis
summary: Potential space between the parietal and visceral peritoneum. Its recesses are where fluid, blood and pus collect, which is the anatomic basis of the FAST exam.
tags: [peritoneum, trauma, procedures]
systems: [gastrointestinal]
highYield: true
status: draft
anatomy:
  location: Within the abdominopelvic cavity, lined by parietal peritoneum and containing the intraperitoneal organs (which are covered by visceral peritoneum).
  boundaries:
    parietal peritoneum: Lines the abdominal and pelvic walls. **Somatic** innervation (lower intercostal, subcostal, iliohypogastric, ilioinguinal and phrenic nerves), so pain is sharp and localized
    visceral peritoneum: Covers the organs. **Autonomic** innervation; pain is dull, poorly localized, and referred by embryologic segment
  contents:
    - "A small volume of serous peritoneal fluid"
    - "**Greater sac** (main part) and **lesser sac** ([[lesser-sac|omental bursa]]), connected through the omental (epiploic) foramen"
    - "Divided by the transverse mesocolon into **supracolic** and **infracolic** compartments"
  communications: >-
    **Paracolic gutters** lateral to the ascending and descending colon connect the upper abdomen with the pelvis (fluid
    and infection spread along them). In females, the peritoneal cavity communicates with the exterior via the uterine
    tubes, uterus and vagina.
  notes: >-
    **Intraperitoneal vs retroperitoneal.** Retroperitoneal organs are remembered as **SAD PUCKER**: **S**uprarenal
    glands, **A**orta and IVC, **D**uodenum (2nd–4th parts), **P**ancreas (except the tail), **U**reters, **C**olon
    (ascending and descending), **K**idneys, **E**sophagus (abdominal part), **R**ectum (lower part). **Key recesses**:
    the **hepatorenal recess (Morison pouch)** is the most dependent part of the upper abdominal cavity when supine; the
    **rectouterine pouch (of Douglas)** in females or **rectovesical pouch** in males is the most dependent part when
    upright.
clinical:
  - title: Peritonitis
    highYield: true
    mechanism: Inflammation of the peritoneum from perforation (ulcer, appendix, diverticulum), infection, blood or bile.
    presentation: >-
      Severe pain worsened by movement, so the patient **lies still**. **Guarding, rigidity** (board-like abdomen),
      **rebound tenderness**, percussion tenderness, fever, and absent bowel sounds (ileus).
  - title: Ascites and spontaneous bacterial peritonitis
    highYield: true
    mechanism: >-
      Fluid accumulates in the peritoneal cavity, most often from **cirrhosis with portal hypertension**. SBP is infection
      of ascitic fluid without a surgical source.
    presentation: >-
      Abdominal distension, bulging flanks, **shifting dullness**, fluid wave. SBP causes fever, abdominal tenderness or
      encephalopathy and is diagnosed by **ascitic fluid PMN count of 250 cells/mm³ or more**. A **serum–ascites albumin
      gradient (SAAG) of 1.1 g/dL or more** indicates portal hypertension.
  - title: Hemoperitoneum
    highYield: true
    mechanism: Bleeding into the peritoneal cavity (splenic or hepatic injury, ruptured ectopic pregnancy, ruptured AAA with intraperitoneal extension).
    presentation: Abdominal pain and distension, shock, and referred shoulder pain (Kehr sign). Detected at the bedside by the **FAST** exam.
pance:
  - "**Morison pouch** (hepatorenal recess): first place free fluid appears on supine FAST."
  - "SBP: ascitic **PMN ≥ 250/mm³**. SAAG **≥ 1.1** = portal hypertension."
  - "Peritonitis: rigidity, rebound, guarding; patient lies still."
  - "Retroperitoneal organs: **SAD PUCKER**."
  - "Upright CXR free air under the diaphragm → perforated viscus."
imaging:
  xray: >-
    **Upright chest radiograph**: free air under the diaphragm (pneumoperitoneum). Left lateral decubitus film if the
    patient can't stand. Supine signs of free air include the Rigler (double-wall) sign.
  ct: Most sensitive for small amounts of free air and fluid, abscesses, and the source of peritonitis.
  ultrasound: >-
    **FAST (Focused Assessment with Sonography in Trauma)** views: **RUQ** (Morison pouch, hepatorenal), **LUQ**
    (splenorenal recess and around the spleen), **pelvic** (rectovesical or rectouterine pouch), and **subxiphoid**
    (pericardium); eFAST adds the pleural spaces. Free fluid appears anechoic (black). Ultrasound also guides
    paracentesis.
  keyViews:
    - "FAST: RUQ, LUQ, pelvic, subxiphoid (± bilateral chest)"
    - "Upright CXR for free air"
exam:
  landmarks: Paracentesis is performed in a lower quadrant lateral to the rectus sheath (commonly the left) or in the midline below the umbilicus, ideally ultrasound-guided.
  palpation: Palpate gently for guarding and rigidity. Test for rebound tenderness cautiously (percussion tenderness is a gentler alternative).
  testing: >-
    **Shifting dullness**: percuss the tympany–dullness border supine, then roll the patient to one side; the border
    shifts with ascites. **Fluid wave**: tap one flank while an assistant presses the midline; feel the impulse on the
    other side. Both are more reliable with larger volumes.
  specialTests:
    - name: Rebound tenderness
      technique: Press slowly and deeply over the abdomen, then release quickly.
      positive: Pain is worse on release than on pressure.
      significance: Peritoneal irritation.
quiz:
  - stem: >-
      A 28-year-old man is hypotensive after a motorcycle crash. Which location is the most dependent site in the upper
      abdomen where free fluid is typically first seen on a supine FAST exam?
    choices:
      - Splenorenal recess
      - Hepatorenal recess (Morison pouch)
      - Rectovesical pouch
      - Lesser sac
      - Subphrenic space
    answer: B
    explanation: >-
      In the supine patient the **hepatorenal recess (Morison pouch)** is the most dependent part of the upper
      peritoneal cavity, so the RUQ view is often positive first. The pelvis is most dependent when upright.
  - stem: >-
      A patient with cirrhosis and ascites has fever and diffuse abdominal tenderness. Diagnostic paracentesis shows 480
      neutrophils/mm³. What is the diagnosis?
    choices:
      - Secondary bacterial peritonitis from perforation only
      - Spontaneous bacterial peritonitis
      - Tuberculous peritonitis
      - Malignant ascites
      - Normal ascitic fluid
    answer: B
    explanation: >-
      An ascitic **PMN count of 250/mm³ or more** diagnoses **SBP**. Treat with empiric antibiotics (e.g. a
      third-generation cephalosporin) and albumin in selected patients.
  - stem: Which organ is retroperitoneal?
    choices:
      - Stomach
      - Transverse colon
      - Second part of the duodenum
      - Spleen
      - Sigmoid colon
    answer: C
    explanation: >-
      The **2nd–4th parts of the duodenum** are retroperitoneal (SAD PUCKER). The stomach, transverse colon, spleen and
      sigmoid colon are intraperitoneal.
flashcards:
  - front: Retroperitoneal organs mnemonic?
    back: "SAD PUCKER: Suprarenals, Aorta/IVC, Duodenum (2–4), Pancreas (not tail), Ureters, Colon (asc/desc), Kidneys, Esophagus, Rectum"
  - front: Most dependent peritoneal recess — supine vs upright?
    back: "Supine: hepatorenal (Morison). Upright: rectouterine/rectovesical pouch"
  - front: FAST views?
    back: RUQ (Morison), LUQ (splenorenal), pelvic, subxiphoid (± lungs in eFAST)
  - front: SBP diagnostic threshold?
    back: Ascitic fluid PMN ≥ 250 cells/mm³
diagrams: [referred-pain]
related: [lesser-sac, greater-omentum, anterior-abdominal-wall]
images:
  - image: gray-1035-peritoneum-sagittal
    caption: "Sagittal view of the peritoneum: main cavity (red), omental bursa (blue), rectouterine pouch."
---
