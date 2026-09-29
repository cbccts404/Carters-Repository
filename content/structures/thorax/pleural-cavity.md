---
name: Pleural cavity
type: space
region: thorax
subregion: Pleura & lungs
taName: Cavitas pleuralis
aka: [Pleura, Pleural space]
summary: Potential space between the visceral and parietal pleura around each lung. It's the site of pneumothorax and pleural effusion and the target of thoracentesis and chest tubes.
tags: [pleura, procedures]
highYield: true
status: draft
anatomy:
  location: Each hemithorax, surrounding a lung. The two cavities are completely separate.
  boundaries:
    visceral pleura: Adheres to the lung surface and into the fissures. **Insensitive to pain** (autonomic innervation only)
    costal parietal pleura: Lines the internal thoracic wall. Somatic sensation via the **intercostal nerves** (localized pain)
    diaphragmatic parietal pleura: Covers the diaphragm. Central part via the **phrenic nerve** (referred shoulder pain); peripheral part via the intercostal nerves
    mediastinal parietal pleura: Covers the mediastinum. Sensation via the **phrenic nerve**
    cervical pleura (cupula): Extends 2–3 cm above the medial third of the clavicle into the root of the neck
  contents:
    - A thin film of serous (pleural) fluid that lubricates the surfaces and couples the lung to the chest wall
  communications: >-
    The visceral and parietal layers are continuous around the **root of the lung**, where a fold hangs below it (the
    pulmonary ligament). **Recesses**, not filled by lung except in deep inspiration: the **costodiaphragmatic recess**
    (lowest point, where fluid collects) and the **costomediastinal recess** (anterior, behind the sternum).
  notes: >-
    **Surface markings of the lower pleural reflection** (about two ribs below the lower lung border): **8th rib** at
    the midclavicular line, **10th rib** at the mid-axillary line, **12th rib** posteriorly near the vertebral column.
    The lung's lower border is at the 6th, 8th and 10th ribs at the same lines. The gap between them is the
    costodiaphragmatic recess. {{verify: textbooks differ by one rib level for some of these markings}}
clinical:
  - title: Pneumothorax
    highYield: true
    mechanism: >-
      Air in the pleural cavity. **Primary spontaneous**: rupture of apical blebs, typically in **tall, thin young men**
      (and smokers). **Secondary**: underlying lung disease (COPD, cystic fibrosis). **Traumatic** or **iatrogenic**
      (central lines, thoracentesis, mechanical ventilation).
    presentation: >-
      Sudden pleuritic chest pain and dyspnea. **Decreased breath sounds, hyperresonance** and decreased tactile
      fremitus on the affected side.
  - title: Tension pneumothorax
    highYield: true
    mechanism: A one-way valve lets air enter the pleural cavity but not leave. Rising pressure shifts the mediastinum and impairs venous return.
    presentation: >-
      Respiratory distress, **hypotension**, **distended neck veins**, absent breath sounds and hyperresonance on the
      affected side, **tracheal deviation away** from the affected side (a late sign). It's a **clinical diagnosis**:
      treat with immediate **needle decompression** or finger thoracostomy, then a chest tube, without waiting for
      imaging.
  - title: Pleural effusion
    highYield: true
    mechanism: >-
      Excess fluid from increased hydrostatic or decreased oncotic pressure (**transudate**: heart failure, cirrhosis,
      nephrotic syndrome) or from inflammation or malignancy (**exudate**: pneumonia/parapneumonic, cancer, PE, TB).
      Light's criteria classify it using pleural/serum protein and LDH.
    presentation: >-
      Dyspnea and pleuritic pain. **Dullness to percussion, decreased breath sounds and decreased tactile fremitus**
      over the fluid, sometimes with egophony at its upper border.
  - title: Hemothorax, empyema and chylothorax
    highYield: false
    mechanism: >-
      Blood (trauma, intercostal or internal thoracic artery injury), pus (complicated pneumonia), or lymph (injury to
      the [[thoracic-duct]]) in the pleural cavity.
    presentation: Effusion signs plus the context. Diagnosed by fluid analysis (hematocrit, pH/glucose/Gram stain, triglycerides).
pance:
  - "**Tension pneumothorax**: hypotension + JVD + absent breath sounds + tracheal deviation away → **needle decompression now**."
  - "Effusion: **dull**, ↓ fremitus. Pneumothorax: **hyperresonant**, ↓ fremitus. Consolidation: dull, **↑ fremitus**."
  - "Primary spontaneous pneumothorax: tall, thin young male, apical blebs."
  - "Light's criteria (exudate if any): pleural/serum protein > 0.5, pleural/serum LDH > 0.6, pleural LDH > 2/3 of the upper limit of normal serum LDH."
  - "Parietal pleura is pain-sensitive; visceral pleura is not."
imaging:
  xray: >-
    **Pneumothorax**: a thin visceral pleural line with no lung markings beyond it (best on an upright, ideally
    expiratory, film). On a supine film look for the **deep sulcus sign**. **Effusion**: blunting of the costophrenic
    angle and a meniscus. A lateral film detects smaller volumes than a PA film (roughly 50 mL vs 200 mL).
    {{verify: quoted detection volumes vary}} Large effusions shift the mediastinum away; large volume loss pulls it toward.
  ct: The most sensitive test for small pneumothoraces and for characterizing effusions (loculation, empyema with the "split pleura" sign, pleural masses).
  ultrasound: >-
    **Effusion**: an anechoic space above the diaphragm; the "spine sign" (vertebral bodies visible above the
    diaphragm). Ultrasound detects smaller effusions than CXR and guides thoracentesis. **Pneumothorax**: **absent lung
    sliding**, absent B-lines, "barcode/stratosphere" sign on M-mode, and a **lung point** (specific for
    pneumothorax). Lung sliding makes pneumothorax unlikely at that spot.
  keyViews:
    - "Upright PA and lateral CXR (expiratory film for small pneumothorax)"
    - "Point-of-care ultrasound: anterior chest (pneumothorax), posterolateral bases (effusion)"
exam:
  landmarks: >-
    **Needle decompression**: 2nd intercostal space in the midclavicular line, or the 4th/5th intercostal space in the
    anterior to mid-axillary line (current ATLS guidance for adults favors the latter).
    **Chest tube "triangle of safety"**: lateral border of pectoralis major, anterior border of latissimus dorsi, a
    horizontal line at the level of the nipple (about the 5th intercostal space), apex below the axilla.
    **Thoracentesis**: posteriorly, about one or two interspaces below the top of the effusion (ultrasound-guided),
    above the diaphragm, and **over the superior border of the rib**. {{verify: check current ATLS edition for decompression site}}
  palpation: Tactile fremitus ("99") is decreased over effusion and pneumothorax and increased over consolidation. Check tracheal position in the suprasternal notch.
  testing: Percussion (dull vs hyperresonant), auscultation (breath sounds, friction rub, egophony at the top of an effusion).
quiz:
  - stem: >-
      A 24-year-old man is stabbed in the right chest. He is hypotensive with distended neck veins, absent breath sounds
      on the right, and hyperresonance to percussion. What is the next step?
    choices:
      - Chest radiograph
      - CT chest
      - Immediate needle decompression or finger thoracostomy
      - Pericardiocentesis
      - Intubation and observation
    answer: C
    explanation: >-
      This is **tension pneumothorax**, a clinical diagnosis. Decompress immediately (needle or finger thoracostomy),
      then place a chest tube. Waiting for imaging delays treatment. Pericardiocentesis treats tamponade, which also
      causes JVD and hypotension but with muffled heart sounds and equal breath sounds.
  - stem: Examination of the left lung base shows dullness to percussion, decreased breath sounds and decreased tactile fremitus. What is the most likely finding?
    choices:
      - Lobar pneumonia
      - Pleural effusion
      - Pneumothorax
      - Asthma exacerbation
      - Normal lung
    answer: B
    explanation: >-
      **Dullness with decreased fremitus** = pleural effusion (fluid separates the lung from the chest wall).
      Consolidation is dull with **increased** fremitus. Pneumothorax is hyperresonant.
  - stem: Where is the needle inserted during thoracentesis to avoid the intercostal neurovascular bundle?
    choices:
      - Just below the inferior border of the rib above
      - Just above the superior border of the rib below
      - Through the middle of the rib
      - Parasternally, 1 cm from the sternal edge
      - Always at the 2nd intercostal space, midclavicular line
    answer: B
    explanation: >-
      The bundle runs in the costal groove along the **inferior** border of each rib, so the needle passes **just over
      the superior border of the rib below**.
  - stem: On a point-of-care ultrasound of the anterior chest, which finding is most specific for pneumothorax?
    choices:
      - Presence of lung sliding
      - Multiple B-lines
      - Lung point
      - Anechoic fluid above the diaphragm
      - Spine sign
    answer: C
    explanation: >-
      The **lung point** (where sliding lung meets the non-sliding pneumothorax) is highly specific. Lung sliding and
      B-lines rule pneumothorax out at that location. Anechoic fluid and the spine sign indicate effusion.
flashcards:
  - front: Pleural reflection lines (MCL, MAL, posterior)?
    back: Ribs 8, 10, 12 (lung border 2 ribs higher — 6, 8, 10)
  - front: Tension pneumothorax — signs and treatment?
    back: Hypotension, JVD, absent breath sounds, hyperresonance, tracheal deviation away → immediate decompression
  - front: Chest tube triangle of safety?
    back: Lateral border pectoralis major, anterior border latissimus dorsi, horizontal line at nipple level (~5th ICS)
  - front: Which pleura is pain-sensitive?
    back: Parietal (intercostal nerves; phrenic for mediastinal/central diaphragmatic)
  - front: Light's criteria?
    back: "Exudate if: protein ratio >0.5, LDH ratio >0.6, or pleural LDH >2/3 upper normal serum LDH"
related: [lungs, intercostal-space]
---
