---
name: Basal ganglia
type: organ
region: neuroanatomy
subregion: Cerebrum
taName: Nuclei basales
aka: [Basal nuclei, Striatum, Caudate nucleus, Putamen, Globus pallidus, Subthalamic nucleus, Huntington disease, Hemiballismus]
summary: Deep gray-matter nuclei that modulate movement through direct and indirect pathways. Their disorders cause either too little movement (Parkinson disease) or too much (Huntington chorea, hemiballismus).
tags: [cerebrum, movement-disorders]
highYield: true
status: draft
anatomy:
  location: Deep in each cerebral hemisphere around the [[internal-capsule]] and [[thalamus]].
  parts:
    - "**Striatum** = **caudate nucleus** (head bulges into the lateral ventricle) + **putamen** — the main input nucleus (from cortex and substantia nigra)"
    - "**Lentiform nucleus** = putamen + **globus pallidus**"
    - "**Globus pallidus internus (GPi)** — main output (inhibitory, GABA) to the thalamus; **externus (GPe)** — part of the indirect pathway"
    - "**Subthalamic nucleus** (excitatory, glutamate → GPi)"
    - "**Substantia nigra** in the [[midbrain]] — pars compacta (dopamine to the striatum) and pars reticulata (output)"
    - "**Direct pathway** (cortex → striatum → GPi → thalamus) **increases** movement; **indirect pathway** (via GPe and subthalamic nucleus) **decreases** it. Dopamine excites the direct pathway (**D1**) and inhibits the indirect pathway (**D2**) — both favor movement."
  bloodSupply: '**Lenticulostriate arteries** (from the **MCA**), recurrent artery of Heubner (ACA), anterior choroidal artery (ICA) — see [[cerebral-arteries]].'
  venousDrainage: Deep cerebral veins → great cerebral vein → straight sinus.
  notes: Loops with the cortex and thalamus; no peripheral nerves. Lesions produce **contralateral** movement disorders.
  relations: The internal capsule separates the caudate and thalamus (medially) from the lentiform nucleus (laterally).
clinical:
  - title: Parkinson disease
    highYield: true
    mechanism: Loss of **dopamine** from the substantia nigra → underactive direct pathway, overactive indirect pathway → too little movement.
    presentation: 'Resting tremor, cogwheel rigidity, bradykinesia, postural instability, shuffling gait, masked face. **Levodopa-carbidopa** is most effective; dopamine agonists, MAO-B inhibitors. **Drug-induced parkinsonism** from D2 blockers (antipsychotics, metoclopramide).'
  - title: Huntington disease
    highYield: true
    mechanism: '**Autosomal dominant CAG trinucleotide repeat** in the *HTT* gene (chromosome 4) with **anticipation**; loss of GABAergic neurons in the **caudate** (and putamen).'
    presentation: 'Onset about 30–50 years: **chorea**, psychiatric changes (depression, irritability, **suicide risk**), and **dementia**. MRI: caudate atrophy with enlarged ("boxcar") lateral ventricles. Tetrabenazine for chorea; genetic counseling.'
  - title: Hemiballismus
    highYield: true
    mechanism: Lesion (usually a **lacunar stroke**) of the **contralateral subthalamic nucleus**.
    presentation: Sudden **violent flinging movements** of one arm and/or leg on the side opposite the lesion.
  - title: Hypertensive hemorrhage and Wilson disease
    highYield: false
    mechanism: Rupture of lenticulostriate arteries (Charcot–Bouchard microaneurysms); copper deposition in the lentiform nucleus.
    presentation: '**Putamen** is the most common site of hypertensive intracerebral hemorrhage (contralateral hemiparesis). **Wilson disease**: young patient with tremor ("wing-beating"), dystonia, psychiatric symptoms, liver disease and **Kayser–Fleischer rings**; low ceruloplasmin.'
pance:
  - "Chorea + psychiatric symptoms + dementia + family history → **Huntington** (CAG repeats, caudate atrophy)."
  - "Sudden flinging of one arm → **contralateral subthalamic nucleus** lesion."
  - "Parkinsonism in a patient on antipsychotics or metoclopramide → **drug-induced** (D2 blockade)."
  - "Most common site of hypertensive ICH → **putamen**."
  - "Young patient + movement disorder + liver disease → **Wilson disease** (ceruloplasmin, KF rings)."
imaging:
  mri: Caudate atrophy in Huntington disease; putaminal/basal ganglia T2 changes in Wilson disease; usually normal in Parkinson disease (used to exclude mimics).
  ct: Hypertensive hemorrhage in the putamen.
  keyViews:
    - "DaT-SPECT (dopamine transporter) reduced in Parkinson disease, normal in essential tremor and drug-induced parkinsonism"
exam:
  testing: 'Observe at rest and during distraction for tremor and chorea; tone (rigidity, cogwheeling), bradykinesia (finger taps, foot taps with decrement), gait (arm swing, turning), **pull test** for postural instability, handwriting (micrographia).'
quiz:
  - stem: >-
      A 40-year-old man has irritability, depression and brief, dance-like involuntary movements. His father had similar
      symptoms and died in his 50s. Which structure shows atrophy on MRI?
    choices:
      - Substantia nigra
      - Caudate nucleus
      - Subthalamic nucleus
      - Cerebellar vermis
      - Hippocampus only
    answer: B
    explanation: >-
      **Huntington disease** (autosomal dominant CAG repeat) causes **caudate atrophy** with chorea, psychiatric
      symptoms and dementia.
  - stem: >-
      A 70-year-old with hypertension suddenly develops wild flinging movements of the left arm. Where is the lesion?
    choices:
      - Left subthalamic nucleus
      - Right subthalamic nucleus
      - Right cerebellar hemisphere
      - Left putamen
      - Right caudate
    answer: B
    explanation: >-
      **Hemiballismus** results from a lesion (usually lacunar infarct) of the **contralateral subthalamic nucleus** —
      here the **right**.
flashcards:
  - front: Components of the striatum?
    back: Caudate and putamen
  - front: Effect of dopamine on the direct and indirect pathways?
    back: Excites direct (D1), inhibits indirect (D2) — both increase movement
  - front: Most common site of hypertensive intracerebral hemorrhage?
    back: Putamen
related: [midbrain, thalamus, internal-capsule, cerebral-cortex, cerebral-arteries]
images:
  - image: gray-744-coronal-anterior-commissure
    caption: "Coronal section: caudate, putamen and globus pallidus around the internal capsule."
  - image: gray-741-striatum-model
    caption: "Model of the caudate nucleus curving around the lentiform nucleus."
---
