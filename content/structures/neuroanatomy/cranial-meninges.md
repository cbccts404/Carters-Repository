---
name: Cranial meninges and intracranial hemorrhage
type: space
region: neuroanatomy
subregion: Ventricles & CSF
taName: Meninges encephali
aka: [Dura mater, Arachnoid mater, Pia mater, Epidural hematoma, Subdural hematoma, Subarachnoid hemorrhage, Meningitis, Falx cerebri, Tentorium cerebelli]
summary: Three membranes — dura, arachnoid and pia — that cover the brain and define the epidural, subdural and subarachnoid spaces. Each space has its own classic bleed and CT appearance.
tags: [meninges, trauma, emergency]
systems: [neurologic, infectious]
highYield: true
status: draft
anatomy:
  location: Between the skull and the brain; continuous through the foramen magnum with the [[spinal-meninges]].
  boundaries:
    dura mater: Tough outer layer with a **periosteal layer** (fused to the skull) and a **meningeal layer**; they separate to enclose the dural venous sinuses and fold inward as the **falx cerebri** (between the hemispheres), **tentorium cerebelli** (over the cerebellum), falx cerebelli and diaphragma sellae
    arachnoid mater: Thin avascular layer under the dura; arachnoid granulations project into the sinuses
    pia mater: Delicate layer adherent to the brain surface, following every gyrus
  contents:
    - "**Epidural space** (potential): between skull and dura — contains the **[[middle-meningeal-artery]]** and meningeal veins"
    - "**Subdural space** (potential): between dura and arachnoid — crossed by **bridging veins** from the cortex to the sinuses"
    - "**Subarachnoid space**: between arachnoid and pia — **CSF**, the cerebral arteries of the [[circle-of-willis]], and enlargements called **cisterns**"
  communications: The subarachnoid space is continuous with the ventricles via the fourth ventricle apertures and with the spinal subarachnoid space (see [[ventricular-system]]).
  notes: 'The dura is pain-sensitive: supratentorial dura is supplied by the **trigeminal nerve** and infratentorial dura by **C2–C3** (and CN X) — which is why posterior fossa lesions cause occipital/neck pain. The brain parenchyma itself has no pain fibers.'
clinical:
  - title: Epidural hematoma
    highYield: true
    mechanism: '**Arterial** bleeding, classically the **middle meningeal artery** torn by a **temporal bone (pterion) fracture**.'
    presentation: 'Head injury with brief loss of consciousness, a **lucid interval**, then rapid deterioration (headache, vomiting, ipsilateral blown pupil, contralateral hemiparesis — uncal herniation). CT: **biconvex (lens-shaped)** hyperdensity that **does not cross suture lines**. Emergency craniotomy.'
  - title: Subdural hematoma
    highYield: true
    mechanism: Tearing of **bridging veins** — **elderly** (brain atrophy), **alcohol use disorder**, **anticoagulation**, falls; **infants** (abusive head trauma).
    presentation: 'Acute (after major trauma) or **chronic** (weeks after minor trauma — gradual headache, confusion, fluctuating consciousness, mild hemiparesis). CT: **crescent-shaped** collection that **crosses sutures** but not the falx; hyperdense acute, isodense subacute, hypodense chronic. Shaken infants: subdural hematomas + retinal hemorrhages.'
  - title: Subarachnoid hemorrhage
    highYield: true
    mechanism: Rupture of a **saccular (berry) aneurysm** of the circle of Willis (most nontraumatic cases); also trauma and AVMs. Risks — hypertension, smoking, **ADPKD**, connective tissue disorders, family history.
    presentation: >-
      **Sudden "thunderclap" headache** ("worst of my life"), vomiting, neck stiffness, photophobia, decreased
      consciousness. **Noncontrast CT** (very sensitive within 6 hours) → if negative, **lumbar puncture** (**xanthochromia**,
      RBCs that do not clear) → CTA to find the aneurysm. Complications: rebleeding, **vasospasm** (days 3–14 —
      **nimodipine**), hydrocephalus, hyponatremia. Secure the aneurysm (coiling or clipping).
  - title: Bacterial meningitis
    highYield: true
    mechanism: Infection of the leptomeninges and subarachnoid space — *S. pneumoniae*, *N. meningitidis*, *Listeria* (age > 50, immunocompromised, neonates), GBS and *E. coli* in neonates.
    presentation: 'Fever, headache, **neck stiffness**, altered mental status, petechial rash (meningococcus). CSF: high opening pressure, **neutrophils**, **low glucose**, **high protein**. Give **dexamethasone and empiric antibiotics (ceftriaxone + vancomycin ± ampicillin) immediately** — do not delay for CT or LP.'
pance:
  - "Lucid interval + **lens-shaped** bleed not crossing sutures → **epidural** (middle meningeal artery)."
  - "**Crescent** crossing sutures in an elderly/alcoholic/anticoagulated patient → **subdural** (bridging veins)."
  - "Thunderclap headache → **noncontrast CT** → if negative, **LP for xanthochromia** → SAH (berry aneurysm)."
  - "SAH → **nimodipine** to prevent vasospasm."
  - "Meningitis: neutrophils + low glucose + high protein → bacterial → antibiotics + dexamethasone without delay."
imaging:
  ct: '**Noncontrast CT head** — first test for trauma and suspected hemorrhage (epidural = biconvex; subdural = crescent; SAH = blood in the basal cisterns and sulci).'
  mri: MRI for subacute/chronic subdural collections, small SAH (FLAIR), meningeal enhancement in meningitis.
  keyViews:
    - "CT angiography for aneurysm after SAH"
    - "Lumbar puncture: opening pressure, cells, glucose, protein, Gram stain, xanthochromia"
exam:
  landmarks: The **pterion** (junction of frontal, parietal, temporal and sphenoid bones, about 3 cm above the zygomatic arch midpoint) overlies the anterior branch of the middle meningeal artery.
  testing: '**Glasgow Coma Scale**, pupils, focal deficits; meningeal signs — neck stiffness, **Kernig** (pain on extending the knee with the hip flexed) and **Brudzinski** (neck flexion causes hip flexion) signs, which are specific but insensitive.'
quiz:
  - stem: >-
      A 19-year-old is hit in the temple by a baseball, is briefly unconscious, then talks normally for 2 hours before
      becoming drowsy with a dilated right pupil. CT shows a lens-shaped hyperdensity. Which vessel is most likely
      injured?
    choices:
      - Bridging veins
      - Middle meningeal artery
      - Anterior communicating artery aneurysm
      - Superior sagittal sinus
      - Lenticulostriate arteries
    answer: B
    explanation: >-
      A **lucid interval** and a **biconvex (lens-shaped)** collection after a temporal blow indicate an **epidural
      hematoma** from the **middle meningeal artery** — a neurosurgical emergency.
  - stem: >-
      A 45-year-old has a sudden severe headache during exercise. Noncontrast CT 10 hours later is normal. What is the next
      step?
    choices:
      - Discharge with analgesics
      - Lumbar puncture for xanthochromia
      - MRI of the cervical spine
      - Start sumatriptan
      - EEG
    answer: B
    explanation: >-
      A **thunderclap headache** needs **subarachnoid hemorrhage** excluded. If CT is negative (especially after 6
      hours), perform an **LP** looking for **xanthochromia** and persistent RBCs (or CTA per local protocol).
  - stem: >-
      An 82-year-old on warfarin has had increasing confusion for 3 weeks after a minor fall. CT shows a crescent-shaped
      hypodense collection over the left hemisphere that crosses suture lines. What is the diagnosis?
    choices:
      - Acute epidural hematoma
      - Chronic subdural hematoma
      - Subarachnoid hemorrhage
      - Ischemic stroke
      - Normal pressure hydrocephalus
    answer: B
    explanation: >-
      A **crescent** collection crossing sutures is **subdural**; hypodensity after weeks means it is **chronic**. Elderly
      anticoagulated patients are at high risk from bridging vein tears.
  - stem: Which drug is given after aneurysmal subarachnoid hemorrhage to reduce the risk of ischemia from vasospasm?
    choices:
      - Nimodipine
      - Nitroprusside
      - Heparin
      - Alteplase
      - Mannitol
    answer: A
    explanation: >-
      **Nimodipine** is given after SAH to reduce ischemic complications of **vasospasm**, which peaks at days 3–14.
  - stem: Which nerve carries pain from the supratentorial dura?
    choices:
      - Facial nerve
      - Vagus nerve
      - C2–C3 spinal nerves
      - Trigeminal nerve
      - Glossopharyngeal nerve
    answer: D
    explanation: >-
      The **supratentorial** dura is supplied by the **trigeminal nerve**; the **infratentorial** dura by **C2–C3** (and
      CN X), which is why posterior fossa lesions cause occipital and neck pain. The brain itself has no pain fibers.
flashcards:
  - front: Source of epidural vs subdural bleeding?
    back: Epidural — middle meningeal artery; subdural — bridging veins
  - front: CT shape of epidural vs subdural hematoma?
    back: Epidural — biconvex, doesn't cross sutures; subdural — crescent, crosses sutures
  - front: Drug to prevent vasospasm after SAH?
    back: Nimodipine
diagrams: [csf-flow]
related: [middle-meningeal-artery, dural-venous-sinuses, circle-of-willis, ventricular-system, spinal-meninges]
images:
  - image: gray-567-dura-tentorium-cranial-nerves
    caption: "Dura mater: the falx cerebri and tentorium cerebelli, with cranial nerves piercing the dura."
  - image: gray-1196-scalp-layers
    caption: "Layers of the scalp, skull and meninges."
  - image: gray-1198-middle-meningeal-surface
    caption: "Surface course of the middle meningeal artery (epidural hematoma)."
---
