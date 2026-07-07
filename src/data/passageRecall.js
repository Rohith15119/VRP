// Passage Recall Data and Scoring Engine
// Each passage is 50-70 words long (readable in 30 seconds).
// Includes key concepts (phrases/words) to check comprehension.

export const passages = [
  {
    id: "p1",
    title: "Photosynthesis and Plants",
    text: "Plants produce their own food through a process called photosynthesis. Using sunlight, they convert water and carbon dioxide into oxygen and glucose. This process primarily takes place in the leaves, which contain chlorophyll to capture light energy. Without this vital conversion, life on Earth would lack the oxygen necessary for survival.",
    keyConcepts: [
      ["photosynthesis"],
      ["own food", "produce food", "make food"],
      ["sunlight", "light"],
      ["convert", "transform", "turn"],
      ["water"],
      ["carbon dioxide", "co2"],
      ["oxygen"],
      ["glucose", "sugar"],
      ["leaves"],
      ["chlorophyll"],
      ["vital", "necessary", "essential", "survival"]
    ],
    explanation: "The passage explains photosynthesis: how plants use sunlight, chlorophyll in their leaves, water, and carbon dioxide to create glucose (food) and release oxygen, which is essential for life on Earth."
  },
  {
    id: "p2",
    title: "The Industrial Revolution",
    text: "The Industrial Revolution, beginning in eighteenth-century Britain, marked a major shift from agrarian economies to industrialized manufacturing. The invention of the steam engine powered factories and revolutionized transportation. Rapid urbanization followed as people migrated to cities for work. This era transformed global trade, social structures, and daily human life forever.",
    keyConcepts: [
      ["industrial revolution"],
      ["eighteenth century", "18th century", "1700s"],
      ["britain", "england"],
      ["agrarian", "agriculture", "farming"],
      ["manufacturing", "industrialized", "factories"],
      ["steam engine"],
      ["transportation", "railroads", "trains"],
      ["urbanization", "cities", "migrated"]
    ],
    explanation: "The passage describes the Industrial Revolution starting in 18th-century Britain, moving from farming to factory manufacturing, driven by steam engines, causing urbanization and changing trade and life."
  },
  {
    id: "p3",
    title: "Renewable Energy Growth",
    text: "Renewable energy sources, particularly wind and solar power, have grown exponentially over the past decade. Falling technology costs and climate change concerns have driven countries to invest heavily in clean energy. Despite these advances, grid storage remains a significant challenge. Developing efficient battery systems is crucial to ensure a steady supply when the sun sets or wind stops.",
    keyConcepts: [
      ["renewable energy", "clean energy"],
      ["wind"],
      ["solar"],
      ["grown", "expansion", "increase"],
      ["costs", "cheaper", "expensive"],
      ["climate change", "global warming", "environment"],
      ["grid storage", "storage", "batteries", "battery"],
      ["steady supply", "reliable", "constant"]
    ],
    explanation: "The passage outlines the growth of renewable energy (wind and solar) due to lower costs and climate concerns, while pointing out that battery storage is the main challenge to keeping a steady energy supply."
  },
  {
    id: "p4",
    title: "Artificial Intelligence in Medicine",
    text: "Artificial intelligence is transforming modern healthcare by analyzing complex medical data. AI algorithms can detect patterns in radiology scans, helping doctors diagnose diseases like cancer earlier and more accurately. Additionally, machine learning assists researchers in discovering new drug compounds rapidly. However, ensuring patient data privacy and ethical implementation remain critical concerns.",
    keyConcepts: [
      ["artificial intelligence", "ai"],
      ["healthcare", "medicine", "medical"],
      ["data", "records"],
      ["detect patterns", "diagnose", "diagnosis"],
      ["scans", "radiology", "x-ray", "mri"],
      ["cancer", "disease"],
      ["machine learning", "algorithms"],
      ["drug", "medicine discovery", "compounds"],
      ["privacy", "data security"],
      ["ethical", "ethics"]
    ],
    explanation: "The passage discusses how AI improves healthcare diagnostics (scanning radiology for cancer) and accelerates drug discovery, but notes that patient privacy and ethical use are major concerns."
  },
  {
    id: "p5",
    title: "The Great Barrier Reef",
    text: "The Great Barrier Reef is the world's largest coral reef system, visible from space. Located off the coast of Australia, it supports thousands of marine species. Today, rising ocean temperatures caused by climate change lead to widespread coral bleaching, threatening this fragile ecosystem. Preserving the reef requires global efforts to reduce greenhouse gas emissions.",
    keyConcepts: [
      ["great barrier reef"],
      ["coral", "reef"],
      ["australia"],
      ["marine species", "fish", "life", "biodiversity"],
      ["temperatures", "warming", "hotter"],
      ["climate change", "global warming"],
      ["bleaching"],
      ["fragile ecosystem", "threatened", "dying"],
      ["emissions", "carbon", "greenhouse gas"]
    ],
    explanation: "The passage highlights the Great Barrier Reef in Australia as a massive biodiverse ecosystem under threat from coral bleaching caused by rising ocean temperatures due to climate change."
  },
  {
    id: "p6",
    title: "The Importance of Sleep",
    text: "Sleep is essential for cognitive function and physical health. During sleep, the brain consolidates memories, clears out metabolic waste, and repairs cellular damage. Chronic sleep deprivation increases the risk of cardiovascular diseases, obesity, and weakened immunity. Maintaining a consistent sleep schedule of seven to eight hours nightly is vital for optimal daily performance.",
    keyConcepts: [
      ["sleep"],
      ["cognitive function", "brain", "mental"],
      ["physical health", "body"],
      ["memories", "remembering"],
      ["waste", "toxins"],
      ["sleep deprivation", "lack of sleep"],
      ["heart", "cardiovascular", "obesity", "immunity"],
      ["consistent", "regular", "schedule"],
      ["seven to eight", "7-8", "hours"]
    ],
    explanation: "The passage explains that sleep is crucial for cognitive performance (memory consolidation) and physical health, warning that chronic sleep deprivation harms immunity and organs, and recommending 7-8 hours daily."
  },
  {
    id: "p7",
    title: "Microplastics in the Oceans",
    text: "Microplastics are tiny plastic particles less than five millimeters long that contaminate our oceans. They originate from the breakdown of larger litter or are intentionally added to cosmetic products. Marine animals ingest these toxins, which accumulate up the food chain, eventually reaching human consumers. Solving this pollution crisis requires reducing single-use plastic production globally.",
    keyConcepts: [
      ["microplastics"],
      ["tiny", "particles", "small"],
      ["five millimeters", "5mm"],
      ["oceans", "water", "sea"],
      ["litter", "waste", "breakdown", "cosmetics"],
      ["marine animals", "fish", "ingest", "eat"],
      ["food chain", "humans", "consumers"],
      ["single-use plastic", "reduce"]
    ],
    explanation: "The passage details how microplastics ($<5\text{mm}$) pollute oceans, enter the marine food chain when swallowed by animals, end up in human food, and require a reduction in single-use plastics to solve."
  },
  {
    id: "p8",
    title: "The Silk Road",
    text: "The Silk Road was an ancient network of trade routes connecting East Asia with the Mediterranean world. Beyond silk, merchants exchanged spices, glassware, and precious metals. Crucially, these paths facilitated the transmission of ideas, religious beliefs, and scientific technologies between diverse civilizations. The trade network fostered cultural blending and shaped the history of Eurasia.",
    keyConcepts: [
      ["silk road"],
      ["trade routes", "network"],
      ["east asia", "china"],
      ["mediterranean", "europe", "west"],
      ["spices", "glassware", "metals", "exchanged"],
      ["ideas", "religions", "beliefs", "technology", "culture"],
      ["civilizations", "countries"],
      ["cultural blending", "eurasia"]
    ],
    explanation: "The passage explains that the Silk Road was an ancient trade network connecting Asia and Europe that facilitated not only material trade (silk, spices) but also cultural, religious, and technological exchange."
  }
];

// Shuffle array for randomness
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get a random passage
export function getRandomPassage() {
  const shuffled = shuffleArray(passages);
  return shuffled[0];
}

// Scorer for passage recall
export function scoreRecall(userText, passage) {
  const lowerText = userText.toLowerCase();
  
  // 1. Concept recall check (Semantic matching)
  let recalledCount = 0;
  const matchedConcepts = [];
  const missedConcepts = [];

  passage.keyConcepts.forEach((synonyms) => {
    // If any synonym is found in userText
    const found = synonyms.some((syn) => lowerText.includes(syn.toLowerCase()));
    if (found) {
      recalledCount++;
      matchedConcepts.push(synonyms[0]); // Use primary term
    } else {
      missedConcepts.push(synonyms[0]);
    }
  });

  const conceptRecallRatio = recalledCount / passage.keyConcepts.length;
  const recallScore = Math.round(conceptRecallRatio * 100);

  // 2. Writing Quality (length, capitalization, flow)
  const words = userText.trim().split(/\s+/).filter((w) => w.length > 0);
  const wordCount = words.length;
  
  let qualityScore = 0;
  const qualityFeedback = [];

  // Length check (ideal: 30 to 70 words, representing a summarized reconstruction)
  if (wordCount >= 30 && wordCount <= 75) {
    qualityScore += 40;
    qualityFeedback.push({ text: `✓ Ideal length: ${wordCount} words (ideal is 30-75)`, type: "success" });
  } else if (wordCount > 75) {
    qualityScore += 25;
    qualityFeedback.push({ text: `△ A bit verbose: ${wordCount} words (try to be more concise)`, type: "warning" });
  } else if (wordCount >= 15) {
    qualityScore += 20;
    qualityFeedback.push({ text: `△ Quite short: ${wordCount} words (try to add more detail)`, type: "warning" });
  } else {
    qualityFeedback.push({ text: `✗ Too brief: ${wordCount} words (minimum 15-30 words recommended)`, type: "error" });
  }

  // Capitalization check
  const sentences = userText.split(/[.!?]+/).filter((s) => s.trim().length > 3);
  const properCapsCount = sentences.filter((s) => {
    const trimmed = s.trim();
    return trimmed.length > 0 && trimmed[0] === trimmed[0].toUpperCase();
  }).length;

  if (sentences.length > 0 && properCapsCount / sentences.length >= 0.8) {
    qualityScore += 30;
    qualityFeedback.push({ text: "✓ Proper capitalization at sentence starts", type: "success" });
  } else if (sentences.length > 0) {
    qualityScore += 10;
    qualityFeedback.push({ text: "△ Make sure to capitalize the beginning of all sentences", type: "warning" });
  } else {
    qualityFeedback.push({ text: "✗ No complete sentences detected", type: "error" });
  }

  // Punctuation check
  const periodsCount = (userText.match(/\./g) || []).length;
  if (periodsCount >= 2) {
    qualityScore += 30;
    qualityFeedback.push({ text: "✓ Good punctuation and sentence divisions", type: "success" });
  } else if (periodsCount === 1) {
    qualityScore += 15;
    qualityFeedback.push({ text: "△ Try to break your recall into at least 2-3 sentences", type: "warning" });
  } else {
    qualityFeedback.push({ text: "✗ Missing periods or sentence punctuation", type: "error" });
  }

  // Calculate final score: 60% semantic recall, 40% writing quality
  const total = Math.round((recallScore * 0.6) + (qualityScore * 0.4));

  return {
    recallScore,
    qualityScore,
    total,
    matchedConcepts,
    missedConcepts,
    wordCount,
    qualityFeedback
  };
}
