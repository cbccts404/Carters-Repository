---
name: Pancreas
type: organ
region: abdomen
subregion: Accessory organs
taName: Pancreas
summary: Mostly retroperitoneal gland lying across the posterior abdominal wall, with its head in the duodenal C-loop. Acute pancreatitis and pancreatic cancer are the key clinical problems.
tags: [gi, foregut]
systems: [gastrointestinal, endocrine]
highYield: true
status: draft
anatomy:
  location: Retroperitoneal (except the tail), across the posterior abdominal wall at about **L1–L2**, behind the stomach and the [[lesser-sac]].
  parts:
    - "**Head**: within the C-loop of the [[duodenum]]; the **uncinate process** hooks behind the superior mesenteric vessels"
    - "**Neck**: anterior to the confluence of the **superior mesenteric and splenic veins**, where the [[hepatic-portal-vein]] forms"
    - "**Body**: crosses anterior to the aorta, the SMA origin and the left kidney"
    - "**Tail**: runs in the **splenorenal ligament** to the splenic hilum (intraperitoneal; at risk during splenectomy)"
    - "**Main pancreatic duct (of Wirsung)**: joins the CBD at the hepatopancreatic ampulla → major duodenal papilla. **Accessory duct (of Santorini)**: opens at the minor papilla"
  relations: >-
    Posterior: IVC, aorta, left renal vein, right crus of the diaphragm, left kidney and suprarenal gland. The **splenic
    artery** runs along its superior border and the **splenic vein** behind it. The CBD passes through or behind the head.
  bloodSupply: >-
    **Head**: superior pancreaticoduodenal arteries (from the gastroduodenal, [[celiac-trunk]]) and inferior
    pancreaticoduodenal arteries (from the [[superior-mesenteric-artery]]), forming arcades. **Neck, body, tail**:
    branches of the **splenic artery** (dorsal, great and caudal pancreatic arteries).
  venousDrainage: Pancreatic veins to the splenic and superior mesenteric veins → portal vein.
  lymphatics: Pancreaticosplenic, pancreaticoduodenal, celiac and superior mesenteric nodes.
  innervation: Vagus and sympathetic via the celiac and superior mesenteric plexuses. Visceral pain is **epigastric and radiates to the back** (it's retroperitoneal).
  notes: Exocrine acini (digestive enzymes) make up most of the gland. Endocrine **islets of Langerhans** (insulin, glucagon, somatostatin) are most concentrated in the tail.
clinical:
  - title: Acute pancreatitis
    highYield: true
    mechanism: Premature activation of pancreatic enzymes. The most common causes are **gallstones** and **alcohol**; also hypertriglyceridemia (often above 1000 mg/dL), post-ERCP, hypercalcemia, medications and trauma.
    presentation: >-
      Severe **epigastric pain radiating to the back**, often eased by leaning forward, with nausea and vomiting.
      Diagnosis needs **2 of 3**: characteristic pain, **lipase (or amylase) at least 3× the upper limit of normal**,
      and characteristic imaging. Severe disease: SIRS, organ failure, **Cullen/Grey Turner** signs (hemorrhagic).
      Complications: necrosis, pseudocyst, ARDS, hypocalcemia.
  - title: Pancreatic adenocarcinoma
    highYield: true
    mechanism: Risk factors include smoking (the most important modifiable one), chronic pancreatitis, diabetes, obesity and familial syndromes. Most arise in the head.
    presentation: >-
      **Painless obstructive jaundice** (head), weight loss, epigastric pain radiating to the back (body/tail), new-onset
      diabetes, **Courvoisier sign**, and **Trousseau syndrome** (migratory thrombophlebitis). CA 19-9 supports
      monitoring but isn't a screening test.
  - title: Chronic pancreatitis
    highYield: false
    mechanism: Recurrent inflammation and fibrosis, usually from long-term alcohol use.
    presentation: Chronic epigastric pain, **steatorrhea** (exocrine insufficiency), **diabetes** (endocrine insufficiency), and pancreatic calcifications on imaging.
  - title: Pancreatic pseudocyst
    highYield: false
    mechanism: Encapsulated fluid collection without solid necrosis, usually 4 or more weeks after acute pancreatitis, often in the [[lesser-sac]].
    presentation: Persistent pain, early satiety, epigastric mass. Many resolve; symptomatic ones are drained (often endoscopically).
pance:
  - "Acute pancreatitis: **gallstones and alcohol** are the top causes; diagnose with **2 of 3** (pain, lipase ≥ 3× ULN, imaging)."
  - "Pain radiates to the **back**, relieved by leaning forward."
  - "Pancreatic head cancer: **painless jaundice**, Courvoisier sign, Trousseau syndrome; smoking is the main modifiable risk."
  - "Chronic pancreatitis triad: calcifications, steatorrhea, diabetes."
  - "Splenic artery along the superior border; SMV + splenic vein form the portal vein behind the neck."
imaging:
  xray: Chronic pancreatitis may show calcifications. A "sentinel loop" (localized ileus) in acute pancreatitis. Not diagnostic.
  ct: >-
    **Contrast CT** is used when the diagnosis is unclear or to assess complications (necrosis, collections), best
    performed after 48–72 hours. A **pancreas-protocol CT** stages cancer (vascular involvement determines
    resectability). {{verify: timing recommendations for CT in acute pancreatitis}}
  mri: MRCP shows ductal anatomy, CBD stones, and pancreas divisum.
  ultrasound: >-
    Transabdominal **ultrasound is done in every case of acute pancreatitis to look for gallstones**. The pancreas itself
    is often obscured by bowel gas. **Endoscopic ultrasound** images small tumors and allows fine-needle biopsy.
  keyViews:
    - "RUQ ultrasound (gallstones) in all acute pancreatitis"
    - "Contrast CT (pancreas protocol for suspected cancer)"
exam:
  landmarks: Lies deep at about the transpyloric plane (L1), behind the stomach; the neck is roughly anterior to L1–L2 in the midline.
  palpation: Epigastric tenderness and guarding in pancreatitis. A pseudocyst may form a palpable epigastric mass.
  testing: >-
    Look for **Cullen sign** (periumbilical ecchymosis) and **Grey Turner sign** (flank ecchymosis) in severe
    hemorrhagic pancreatitis. Check for jaundice and a palpable gallbladder (Courvoisier). Hypocalcemia signs
    (Chvostek, Trousseau) in severe pancreatitis.
quiz:
  - stem: >-
      A 45-year-old man has severe epigastric pain radiating to the back and vomiting after a weekend of heavy drinking.
      Lipase is 5 times the upper limit of normal. What is the most appropriate next step to look for an additional
      cause?
    choices:
      - CT abdomen with contrast immediately
      - RUQ ultrasound
      - ERCP
      - Upper endoscopy
      - MRI brain
    answer: B
    explanation: >-
      With characteristic pain and lipase at least 3× ULN, the diagnosis of **acute pancreatitis** is made without CT.
      **RUQ ultrasound** is recommended in all patients to look for **gallstones** as a cause.
  - stem: A 70-year-old smoker has painless jaundice, weight loss, and a palpable non-tender gallbladder. Where is the tumor most likely located?
    choices:
      - Tail of the pancreas
      - Body of the pancreas
      - Head of the pancreas
      - Gallbladder fundus
      - Left hepatic duct
    answer: C
    explanation: >-
      A tumor in the **head of the pancreas** compresses the distal CBD, causing painless obstructive jaundice and
      **Courvoisier sign**.
  - stem: Which part of the pancreas lies in the splenorenal ligament and can be injured during splenectomy?
    choices:
      - Head
      - Uncinate process
      - Neck
      - Body
      - Tail
    answer: E
    explanation: The **tail** runs in the splenorenal ligament to the splenic hilum; injury during splenectomy can cause a pancreatic fistula.
  - stem: The hepatic portal vein is formed behind which part of the pancreas?
    choices:
      - Head
      - Neck
      - Body
      - Tail
      - Uncinate process
    answer: B
    explanation: The **superior mesenteric vein** and **splenic vein** unite behind the **neck** of the pancreas to form the portal vein.
flashcards:
  - front: Parts of the pancreas and key relations?
    back: "Head (in duodenal C-loop), uncinate (behind SMV/SMA), neck (over portal vein formation), body (over aorta), tail (splenorenal ligament)"
  - front: Diagnostic criteria for acute pancreatitis?
    back: 2 of 3 — characteristic pain, lipase/amylase ≥ 3× ULN, characteristic imaging
  - front: Top two causes of acute pancreatitis?
    back: Gallstones and alcohol
  - front: Blood supply of the pancreatic head?
    back: Superior (GDA, celiac) and inferior (SMA) pancreaticoduodenal arcades
diagrams: [referred-pain]
related: [duodenum, gallbladder, lesser-sac, spleen]
images:
  - image: gray-1098-duodenum-pancreas
    caption: "The pancreas lying across the posterior abdominal wall, its head in the duodenal C-loop."
---
