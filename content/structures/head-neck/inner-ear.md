---
name: Inner ear
type: organ
region: head-neck
subregion: Ear
taName: Auris interna
aka: [Labyrinth, Cochlea, Vestibular apparatus]
summary: Fluid-filled bony and membranous labyrinth in the petrous temporal bone — the cochlea for hearing and the vestibule and semicircular canals for balance. Sensorineural hearing loss and peripheral vertigo arise here.
tags: [ear, hearing, vertigo]
systems: [eent]
highYield: true
status: draft
anatomy:
  location: Within the petrous part of the temporal bone, medial to the [[middle-ear]].
  parts:
    - "**Bony labyrinth** (containing perilymph): vestibule, three semicircular canals, cochlea"
    - "**Membranous labyrinth** (containing endolymph, high K+): utricle and saccule (linear acceleration, gravity — otoliths), semicircular ducts with ampullae (angular acceleration — cristae), cochlear duct with the **organ of Corti** (hair cells on the basilar membrane)"
    - "**Cochlea**: 2½ turns; high frequencies are detected at the **base**, low frequencies at the apex"
    - "**Oval window** (stapes footplate) and **round window** (pressure release)"
  bloodSupply: '**Labyrinthine artery** — usually from the anterior inferior cerebellar artery (vertebrobasilar system; see [[vertebral-artery]]); an end artery.'
  venousDrainage: Labyrinthine veins to the sigmoid and inferior petrosal sinuses.
  lymphatics: None.
  innervation: '**[[vestibulocochlear-nerve|Vestibulocochlear nerve (CN VIII)]]** — cochlear and vestibular divisions — leaving through the internal acoustic meatus with the facial nerve.'
  relations: The internal acoustic meatus carries CN VII, CN VIII and the labyrinthine vessels toward the cerebellopontine angle.
clinical:
  - title: Benign paroxysmal positional vertigo (BPPV)
    highYield: true
    mechanism: Loose otoconia (canaliths) in a semicircular canal, most often the **posterior** canal.
    presentation: '**Brief (under 1 minute) episodes of vertigo triggered by head position** (rolling over in bed, looking up), no hearing loss. Diagnosed with **Dix–Hallpike**; treated with the **Epley maneuver**.'
  - title: Vestibular neuritis and labyrinthitis
    highYield: true
    mechanism: Presumed viral inflammation of the vestibular nerve (neuritis) or labyrinth (labyrinthitis).
    presentation: Acute continuous vertigo lasting days with nausea and horizontal nystagmus; **labyrinthitis also causes hearing loss**. Use the **HINTS** exam to distinguish from posterior circulation stroke.
  - title: Ménière disease
    highYield: true
    mechanism: Endolymphatic hydrops.
    presentation: 'Episodic vertigo (20 minutes to hours) with the **triad of fluctuating low-frequency sensorineural hearing loss, tinnitus and aural fullness**. Low-salt diet, diuretics.'
  - title: Sensorineural hearing loss
    highYield: true
    mechanism: '**Presbycusis** (age-related, bilateral, high-frequency first), noise exposure, ototoxic drugs (aminoglycosides, loop diuretics, cisplatin), vestibular schwannoma (unilateral), sudden SNHL.'
    presentation: '**Sudden unilateral SNHL** is an otologic emergency — urgent audiology and **oral steroids**. **Unilateral** SNHL or tinnitus → MRI for **vestibular schwannoma** (acoustic neuroma).'
pance:
  - "Brief positional vertigo, no hearing loss → **BPPV** → Dix–Hallpike, Epley."
  - "Vertigo + hearing loss + tinnitus + fullness → **Ménière**."
  - "Days of vertigo without hearing loss → vestibular neuritis; with hearing loss → labyrinthitis."
  - "Unilateral SNHL/tinnitus → MRI for **vestibular schwannoma**."
  - "Sudden SNHL → steroids urgently."
imaging:
  ct: Temporal bone CT for fractures and bony labyrinth anomalies; head CT is insensitive for posterior fossa stroke.
  mri: '**MRI with gadolinium (internal auditory canals)** for vestibular schwannoma; MRI with diffusion-weighted imaging if central vertigo (stroke) is suspected.'
  keyViews:
    - "MRI internal auditory canals with contrast"
exam:
  landmarks: Not palpable; assessed by hearing and vestibular tests.
  testing: Weber and Rinne (see [[middle-ear]]), whispered voice, nystagmus, gait, cerebellar tests; formal audiometry.
  specialTests:
    - name: Dix–Hallpike maneuver
      technique: With the patient seated, turn the head 45° to one side, then quickly lie them back with the head extended about 20° over the edge of the table; watch the eyes for 30 seconds.
      positive: After a short latency, vertigo with upbeating, torsional nystagmus toward the lower ear that fatigues within about a minute.
      significance: Posterior canal BPPV on the side turned down.
    - name: HINTS exam
      technique: '**H**ead Impulse, **N**ystagmus type, **T**est of Skew, in a patient with acute continuous vertigo and nystagmus.'
      positive: 'Central pattern ("INFARCT"): **normal** head impulse, direction-changing or vertical nystagmus, or skew deviation.'
      significance: Distinguishes posterior circulation stroke from vestibular neuritis; an abnormal (corrective saccade) head impulse is reassuring for a peripheral cause.
quiz:
  - stem: >-
      A 62-year-old woman has 20-second episodes of intense spinning when she rolls over in bed or looks up to a high
      shelf. Hearing is normal. What is the best diagnostic maneuver?
    choices:
      - Rinne test
      - Dix–Hallpike maneuver
      - Romberg test
      - Caloric testing with ice water
      - Tympanometry
    answer: B
    explanation: >-
      Brief positional vertigo without hearing loss is **BPPV**. The **Dix–Hallpike** maneuver provokes the typical
      nystagmus, and the **Epley** maneuver repositions the canaliths.
  - stem: A 45-year-old has progressive right-sided hearing loss and tinnitus. Audiometry shows unilateral sensorineural loss. What is the next step?
    choices:
      - Hearing aid only
      - MRI of the internal auditory canals with contrast
      - Tympanostomy tube
      - Epley maneuver
      - Antibiotics
    answer: B
    explanation: >-
      **Asymmetric sensorineural hearing loss** needs **MRI with gadolinium** to exclude a **vestibular schwannoma**
      (acoustic neuroma) at the cerebellopontine angle.
flashcards:
  - front: Where in the cochlea are high frequencies detected?
    back: Base (near the oval window)
  - front: Ménière triad (plus vertigo)?
    back: Fluctuating low-frequency SNHL, tinnitus, aural fullness
  - front: Artery supplying the inner ear?
    back: Labyrinthine artery (usually from AICA) — end artery
related: [middle-ear, vertebral-artery]
images:
  - image: gray-920-bony-labyrinth
    caption: "The bony labyrinth: cochlea, vestibule and semicircular canals."
  - image: gray-907-ear-section
    caption: "Position of the inner ear in the petrous temporal bone."
---
