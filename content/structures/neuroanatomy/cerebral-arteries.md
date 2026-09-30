---
name: Cerebral arteries (ACA, MCA, PCA)
type: artery
region: neuroanatomy
subregion: Cerebral vasculature
taName: Arteria cerebri anterior, media et posterior
aka: [Anterior cerebral artery, Middle cerebral artery, Posterior cerebral artery, ACA, MCA, PCA, Stroke syndromes, Ischemic stroke]
summary: The three paired arteries that supply the cerebral hemispheres. Each territory gives a recognizable stroke syndrome; the MCA is the most commonly affected.
tags: [cerebral-vessels, stroke, emergency]
highYield: true
status: draft
anatomy:
  origin: '**ACA and MCA** are the terminal branches of the **internal carotid artery** ([[carotid-arteries]]); the **PCAs** are the terminal branches of the **basilar artery** ([[vertebrobasilar-system]]); all are linked by the [[circle-of-willis]].'
  course: >-
    **ACA** runs forward above the optic chiasm into the longitudinal fissure and arches back over the corpus callosum
    along the **medial** surface. **MCA** runs laterally in the **lateral (Sylvian) fissure**, giving the
    **lenticulostriate** arteries, then superior and inferior divisions over the **lateral** surface. **PCA** curves
    around the midbrain to the **occipital lobe** and inferior temporal lobe.
  branches:
    - "**ACA**: recurrent artery of Heubner, orbitofrontal, callosomarginal, pericallosal"
    - "**MCA**: **lenticulostriate** arteries (basal ganglia, internal capsule), superior division (frontal — Broca, motor face/arm), inferior division (temporal/parietal — Wernicke, optic radiations)"
    - "**PCA**: thalamoperforating and thalamogeniculate branches, posterior choroidal, temporal and calcarine branches"
  supplies: >-
    **ACA**: medial frontal and parietal lobes — motor/sensory cortex for the **leg and foot**, bladder control,
    corpus callosum. **MCA**: most of the **lateral** hemisphere — **face and arm** motor/sensory cortex, **language
    areas** (dominant), spatial attention (nondominant), optic radiations; deep structures via lenticulostriates.
    **PCA**: **occipital lobe** (visual cortex), inferior temporal lobe (hippocampus), thalamus, midbrain.
  anastomoses: Leptomeningeal (pial) collaterals link the ends of the territories — the **watershed zones** between ACA–MCA and MCA–PCA.
clinical:
  - title: MCA stroke
    highYield: true
    mechanism: Embolism (atrial fibrillation, carotid plaque) or thrombosis — the **most common** territory.
    presentation: >-
      **Contralateral weakness and sensory loss of the face and arm more than the leg**, **contralateral homonymous
      hemianopia**, **gaze deviation toward the lesion**. **Dominant (left)**: **aphasia**. **Nondominant (right)**:
      **hemineglect**, anosognosia.
  - title: ACA and PCA strokes
    highYield: true
    mechanism: Embolic or thrombotic occlusion.
    presentation: '**ACA**: contralateral **leg > arm** weakness and sensory loss, **urinary incontinence**, abulia/personality change. **PCA**: contralateral **homonymous hemianopia with macular sparing**, visual agnosia; dominant PCA + splenium → **alexia without agraphia**; thalamic involvement → sensory loss.'
  - title: Acute ischemic stroke management
    highYield: true
    mechanism: Time-critical reperfusion of the ischemic penumbra.
    presentation: >-
      Check glucose, **noncontrast CT** (exclude hemorrhage), NIHSS. **IV thrombolysis** (alteplase or tenecteplase)
      within **4.5 hours** of last known well if no contraindications (BP must be < 185/110). **Mechanical
      thrombectomy** for large vessel occlusion (ICA, M1) — up to **24 hours** in selected patients with CT perfusion/MRI.
      Then antiplatelet therapy, statin and a search for the source (ECG/telemetry, echocardiogram, carotid imaging).
      {{verify: time windows and BP thresholds per current AHA/ASA guideline}}
pance:
  - "Face/arm > leg weakness + aphasia (left) or neglect (right) → **MCA**."
  - "Leg > arm weakness + incontinence → **ACA**."
  - "Homonymous hemianopia with macular sparing → **PCA**."
  - "Eyes deviate **toward** the lesion in a hemispheric stroke (away from the weak side)."
  - "IV thrombolysis ≤ **4.5 h**; thrombectomy for LVO up to **24 h** in selected patients."
  - "Noncontrast CT first — hemorrhage must be excluded before thrombolysis."
imaging:
  ct: '**Noncontrast CT** (hemorrhage, early ischemic change, hyperdense MCA sign), **CT angiography** (large vessel occlusion), **CT perfusion** (core vs penumbra).'
  mri: '**DWI** is the most sensitive test for acute infarction.'
  keyViews:
    - "Stroke code: glucose → noncontrast CT → CTA ± CTP"
exam:
  testing: '**NIH Stroke Scale** (consciousness, gaze, visual fields, facial palsy, arm/leg drift, ataxia, sensation, language, dysarthria, neglect); compare face vs arm vs leg; check for aphasia, neglect and field cuts.'
quiz:
  - stem: >-
      A 70-year-old with atrial fibrillation suddenly develops right face and arm weakness, right homonymous hemianopia,
      and difficulty producing and understanding speech. His eyes deviate to the left. Which artery is occluded?
    choices:
      - Right MCA
      - Left MCA
      - Left ACA
      - Right PCA
      - Basilar artery
    answer: B
    explanation: >-
      Contralateral face/arm weakness, field cut, **aphasia** (dominant hemisphere) and **gaze toward the lesion** point to
      a **left MCA** occlusion — likely cardioembolic.
  - stem: >-
      A 64-year-old develops weakness and numbness of the left leg, with only mild left arm weakness, and new urinary
      incontinence. Which artery is involved?
    choices:
      - Right ACA
      - Left ACA
      - Right MCA
      - Right PCA
      - Anterior spinal artery
    answer: A
    explanation: >-
      The **leg** area of the motor and sensory cortex is on the **medial** surface, supplied by the **ACA**; a right ACA
      stroke causes left leg-predominant weakness and often incontinence.
  - stem: >-
      A 78-year-old has sudden loss of the left visual field in both eyes. Central vision is preserved, and there is no
      weakness. Which artery is most likely occluded?
    choices:
      - Right PCA
      - Left PCA
      - Right MCA inferior division only
      - Right ophthalmic artery
      - Left ACA
    answer: A
    explanation: >-
      A **left homonymous hemianopia with macular sparing** and no weakness localizes to the **right occipital lobe**
      — **right PCA** territory.
flashcards:
  - front: Stroke with leg > arm weakness?
    back: ACA
  - front: Stroke with aphasia and face/arm weakness?
    back: Dominant MCA
  - front: Stroke with macular-sparing homonymous hemianopia?
    back: PCA (occipital)
diagrams: [cerebral-artery-territories, circle-of-willis]
related: [circle-of-willis, cerebral-cortex, internal-capsule, vertebrobasilar-system, carotid-arteries]
images:
  - image: gray-518-cerebral-artery-areas-medial
    caption: "Medial surface of the hemisphere tinted by the territories of the cerebral arteries."
  - image: gray-516-arteries-base-of-brain
    caption: "The middle cerebral artery entering the lateral fissure."
---
