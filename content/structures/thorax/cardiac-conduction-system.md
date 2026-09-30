---
name: Cardiac conduction system
type: organ
region: thorax
subregion: Heart & pericardium
taName: Systema conducente cordis
aka: [SA node, AV node, Bundle of His, Purkinje fibers]
summary: Specialized cardiac muscle that generates and conducts impulses (SA node → AV node → bundle of His → bundle branches → Purkinje fibers). Its blood supply explains the arrhythmias that accompany some MIs.
tags: [heart, cardiology, ecg]
systems: [cardiovascular]
highYield: true
status: draft
anatomy:
  location: Within the walls of the [[heart]].
  parts:
    - "**Sinoatrial (SA) node**: the pacemaker, in the wall of the right atrium near the opening of the [[superior-vena-cava]], at the upper end of the crista terminalis"
    - "**Atrioventricular (AV) node**: in the interatrial septum near the opening of the coronary sinus (triangle of Koch). Delays conduction so the ventricles can fill"
    - "**AV bundle (of His)**: passes through the fibrous skeleton and along the membranous interventricular septum, the only normal electrical connection between atria and ventricles"
    - "**Right and left bundle branches**: descend on each side of the muscular septum. The right branch continues in the **septomarginal trabecula (moderator band)**"
    - "**Subendocardial (Purkinje) fibers**: spread the impulse through the ventricular myocardium"
  bloodSupply: >-
    **SA nodal artery**: usually from the [[right-coronary-artery]] (about 60%), otherwise from the
    [[circumflex-artery]]. **AV nodal artery**: from the **dominant** coronary artery, usually the RCA (about 80%).
    **Bundle branches**: septal perforators of the [[anterior-interventricular-artery]] (anterior two-thirds of the
    septum) and of the posterior interventricular artery. {{verify: quoted percentages vary between sources}}
  innervation: >-
    **Sympathetic** fibers increase rate and conduction velocity. **Parasympathetic** (vagus) fibers slow the SA node
    and AV conduction; the right vagus predominantly affects the SA node and the left vagus the AV node.
    {{verify: side-specific vagal dominance is a simplification}}
clinical:
  - title: Bradyarrhythmias and AV block in inferior MI
    highYield: true
    mechanism: The RCA usually supplies the SA and AV nodes, so **inferior MI (RCA occlusion)** can cause sinus bradycardia and AV block (often transient, at the AV node).
    presentation: Bradycardia and hypotension with ST elevation in II, III and aVF. First-degree or Mobitz I block is typical at the AV node level.
  - title: Bundle branch block
    highYield: true
    mechanism: Conduction delay in the right or left bundle branch (ischemia, fibrosis, hypertrophy, or after surgery).
    presentation: >-
      Wide QRS (120 ms or more). **RBBB**: rSR' in V1–V2, wide S in I and V6. **LBBB**: broad notched R in I, aVL,
      V5–V6; deep S in V1. A new LBBB with symptoms of ischemia needs evaluation for acute MI.
  - title: Pre-excitation (Wolff–Parkinson–White)
    highYield: true
    mechanism: An accessory pathway (bundle of Kent) bypasses the AV node and connects atrium to ventricle directly.
    presentation: >-
      **Short PR interval, delta wave, wide QRS**. Predisposes to reentrant tachycardias. In atrial fibrillation with
      WPW, **AV nodal blockers** (adenosine, beta blockers, calcium channel blockers, digoxin) can be dangerous;
      procainamide or cardioversion is used.
  - title: Sick sinus syndrome
    highYield: false
    mechanism: Degenerative dysfunction of the SA node, usually in older adults.
    presentation: Sinus bradycardia, pauses, or alternating bradycardia and tachycardia (tachy-brady syndrome), with fatigue, dizziness or syncope. Often treated with a pacemaker.
pance:
  - "Conduction: **SA → AV (delay) → His → bundle branches → Purkinje**."
  - "Inferior MI (RCA) → **bradycardia / AV block** (the RCA usually supplies the SA and AV nodes)."
  - "**WPW**: short PR + delta wave; avoid AV nodal blockers in pre-excited AF."
  - "New LBBB with chest pain → treat as a possible acute MI."
imaging:
  xray: The system is not visible. Pacemaker and ICD leads are seen on CXR (RA lead in the appendage, RV lead at the apex or septum).
  mri: Cardiac MRI can show infiltrative disease (sarcoidosis, amyloidosis) causing conduction disease.
  ultrasound: Echo assesses structural causes of arrhythmia (valve disease, cardiomyopathy, LA size).
  keyViews:
    - "**12-lead ECG**: the functional image of the conduction system (PR interval = AV conduction; QRS width = ventricular conduction)"
exam:
  testing: >-
    Pulse rate and regularity. Irregularly irregular pulse = atrial fibrillation until proven otherwise. **Cannon a
    waves** in the JVP suggest AV dissociation (complete heart block). Variable intensity of S1 also occurs in complete
    heart block.
quiz:
  - stem: >-
      A 62-year-old man has ST elevation in leads II, III and aVF. His heart rate is 42/min, and the ECG shows a PR
      interval that lengthens progressively until a QRS is dropped. Which artery is most likely occluded?
    choices:
      - Left anterior descending artery
      - Left circumflex artery
      - Right coronary artery
      - Left main coronary artery
      - First diagonal artery
    answer: C
    explanation: >-
      Inferior ST elevation with **Mobitz I (Wenckebach)** block points to the **RCA**, which usually supplies the AV
      node (right-dominant circulation).
  - stem: Where is the sinoatrial node located?
    choices:
      - In the interatrial septum near the coronary sinus
      - In the wall of the right atrium near the opening of the SVC
      - In the membranous interventricular septum
      - At the apex of the left ventricle
      - In the wall of the left atrium near the pulmonary veins
    answer: B
    explanation: >-
      The **SA node** lies in the right atrial wall at the junction with the **SVC**, at the upper end of the crista
      terminalis. The AV node lies near the coronary sinus opening in the interatrial septum.
  - stem: An ECG shows a short PR interval, a slurred upstroke of the QRS, and a QRS duration of 125 ms. What is the underlying abnormality?
    choices:
      - First-degree AV block
      - An accessory atrioventricular pathway
      - Left bundle branch block
      - Hyperkalemia
      - Sick sinus syndrome
    answer: B
    explanation: >-
      A short PR with a **delta wave** and wide QRS is **Wolff–Parkinson–White** pre-excitation: an **accessory pathway**
      (bundle of Kent) bypasses the AV node.
  - stem: Which structure carries the right bundle branch across the right ventricular cavity to the anterior papillary muscle?
    choices:
      - Crista terminalis
      - Septomarginal trabecula (moderator band)
      - Chordae tendineae
      - Pectinate muscles
      - Fossa ovalis
    answer: B
    explanation: >-
      The **septomarginal trabecula (moderator band)** carries part of the right bundle branch from the septum to the
      base of the anterior papillary muscle, shortening conduction time.
flashcards:
  - front: Sequence of cardiac conduction?
    back: SA node → AV node → bundle of His → right/left bundle branches → Purkinje fibers
  - front: Usual blood supply of the SA and AV nodes?
    back: "SA: RCA (~60%). AV: dominant artery, usually RCA (~80%)"
  - front: WPW ECG findings?
    back: Short PR, delta wave, wide QRS
  - front: Why does inferior MI cause bradycardia?
    back: The RCA usually supplies the SA and AV nodes
related: [heart, right-coronary-artery]
images:
  - image: gray-493-right-heart-interior
    caption: "Interior of the right atrium: crista terminalis, SVC and coronary sinus openings, the landmarks for the SA and AV nodes."
---
