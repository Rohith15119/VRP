// Email Writing Prompts for TCS NQT Verbal Ability
// Each prompt: { id, situation, subject (suggested), keywords (for relevance scoring), checkpoints }

import { shuffleArray } from "./questions";

export const emailPrompts = [
  {
    id: "ep1",
    situation:
      "You are an employee at a software company. Your team has been working overtime for the past three weeks to meet a project deadline. The extended hours have affected team morale and several team members have expressed their frustration. Write an email to your manager, Mr. Rajesh Kumar, requesting a team outing or a day off to boost morale after the project deadline.",
    suggestedSubject: "Request for Team Outing / Day Off After Project Deadline",
    keywords: ["overtime", "morale", "deadline", "team", "outing", "rest", "appreciate", "effort", "exhausted", "productivity", "motivation", "burnout", "reward", "break", "wellbeing"],
    expectedTone: "polite and professional",
    senderRole: "Team Member / Employee",
    recipientRole: "Manager",
  },
  {
    id: "ep2",
    situation:
      "You recently purchased a laptop from an online electronics store. After using it for a week, you noticed that the battery drains within two hours and the keyboard has a faulty 'E' key. Write an email to the customer support team of the store, describing the issues and requesting a replacement or repair under warranty.",
    suggestedSubject: "Complaint Regarding Defective Laptop – Order #XXXXX",
    keywords: ["laptop", "battery", "keyboard", "defective", "warranty", "replacement", "repair", "order", "issue", "malfunction", "purchased", "complaint", "refund", "support", "urgent"],
    expectedTone: "formal and assertive",
    senderRole: "Customer",
    recipientRole: "Customer Support",
  },
  {
    id: "ep3",
    situation:
      "You are the secretary of your college's cultural committee. The annual cultural festival 'Utsav 2026' is scheduled for next month. Write an email to the college principal, Dr. Meena Sharma, requesting permission to use the college auditorium for three days and seeking a budget of ₹50,000 for the event arrangements.",
    suggestedSubject: "Permission and Budget Request for Annual Cultural Festival – Utsav 2026",
    keywords: ["cultural", "festival", "auditorium", "budget", "permission", "event", "arrangements", "committee", "students", "participation", "schedule", "performances", "sponsorship", "venue", "coordination"],
    expectedTone: "respectful and formal",
    senderRole: "Cultural Committee Secretary",
    recipientRole: "College Principal",
  },
  {
    id: "ep4",
    situation:
      "You are a project manager at a consulting firm. One of your key clients, GlobalTech Solutions, has expressed dissatisfaction with the delay in the delivery of a quarterly report. Write an email to the client's point of contact, Ms. Priya Nair, apologizing for the delay, explaining the reason, and providing a revised timeline for delivery.",
    suggestedSubject: "Apology for Delay in Quarterly Report Delivery",
    keywords: ["delay", "apology", "report", "timeline", "delivery", "regret", "inconvenience", "revised", "committed", "assure", "priority", "quality", "client", "deadline", "update"],
    expectedTone: "apologetic and professional",
    senderRole: "Project Manager",
    recipientRole: "Client",
  },
  {
    id: "ep5",
    situation:
      "You are moving to a new city for a job and need to find accommodation. Your friend, Arun, who lives in that city, had mentioned he knows a few landlords with vacant apartments. Write an email to Arun asking for his help in finding a suitable apartment near your office, specifying your budget and preferences.",
    suggestedSubject: "Help Needed – Looking for Apartment in [City Name]",
    keywords: ["apartment", "accommodation", "budget", "location", "preferences", "help", "moving", "job", "city", "rent", "rooms", "furnished", "transport", "nearby", "grateful"],
    expectedTone: "friendly and warm",
    senderRole: "Friend",
    recipientRole: "Friend",
  },
  {
    id: "ep6",
    situation:
      "You are a team lead at an IT company. A new employee, Ravi Mehta, has joined your team. He is struggling to understand the project workflow and the tools used by the team. Write an email to your senior colleague, Ms. Sneha Verma, requesting her to mentor Ravi for the first two weeks and help him get up to speed.",
    suggestedSubject: "Request to Mentor New Team Member – Ravi Mehta",
    keywords: ["mentor", "new", "employee", "onboarding", "workflow", "tools", "training", "support", "guidance", "team", "help", "settle", "experience", "project", "knowledge"],
    expectedTone: "polite and collaborative",
    senderRole: "Team Lead",
    recipientRole: "Senior Colleague",
  },
  {
    id: "ep7",
    situation:
      "Your locality has been facing frequent power cuts lasting 4-5 hours daily for the past two weeks. This has disrupted daily life, especially for students studying for exams and people working from home. Write an email to the Electricity Board official, Mr. Suresh Patel, bringing this issue to his attention and requesting immediate resolution.",
    suggestedSubject: "Urgent: Frequent Power Cuts in [Locality Name] – Request for Immediate Action",
    keywords: ["power", "electricity", "outage", "disruption", "students", "exams", "work", "home", "residents", "complaint", "urgent", "resolution", "inconvenience", "supply", "restore"],
    expectedTone: "formal and urgent",
    senderRole: "Resident",
    recipientRole: "Electricity Board Official",
  },
  {
    id: "ep8",
    situation:
      "You are an HR manager at a mid-sized company. Due to the company's expansion, the management has decided to shift to a new office building next month. Write an email to all employees informing them about the relocation, the new address, the timeline for the move, and any actions they need to take.",
    suggestedSubject: "Important: Office Relocation – New Address and Timeline",
    keywords: ["relocation", "office", "address", "move", "timeline", "employees", "building", "transition", "packing", "transport", "inform", "arrangements", "cooperation", "queries", "details"],
    expectedTone: "informative and professional",
    senderRole: "HR Manager",
    recipientRole: "All Employees",
  },
  {
    id: "ep9",
    situation:
      "You attended a three-day workshop on 'Machine Learning and Artificial Intelligence' organized by IIT Delhi. The workshop was extremely informative and you believe your team could benefit from the knowledge gained. Write an email to your manager, Mr. Vikram Singh, summarizing the key takeaways and suggesting that the team should attend similar workshops in the future.",
    suggestedSubject: "Key Takeaways from ML & AI Workshop – Recommendation for Team",
    keywords: ["workshop", "machine", "learning", "artificial", "intelligence", "takeaways", "knowledge", "training", "recommend", "team", "skills", "technology", "development", "beneficial", "opportunity"],
    expectedTone: "enthusiastic and professional",
    senderRole: "Employee",
    recipientRole: "Manager",
  },
  {
    id: "ep10",
    situation:
      "You are the head of the placement cell at your college. A reputed company, InnovateTech Pvt. Ltd., has agreed to conduct a campus recruitment drive at your college. Write an email to the final year students informing them about the drive, eligibility criteria (minimum 60% aggregate, no active backlogs), the date, and the registration process.",
    suggestedSubject: "Campus Recruitment Drive by InnovateTech Pvt. Ltd. – Registration Open",
    keywords: ["placement", "recruitment", "campus", "drive", "eligibility", "register", "students", "company", "criteria", "backlogs", "aggregate", "date", "interview", "opportunity", "deadline"],
    expectedTone: "informative and encouraging",
    senderRole: "Placement Cell Head",
    recipientRole: "Final Year Students",
  },
  {
    id: "ep11",
    situation:
      "You ordered a set of books from an online bookstore for your competitive exam preparation. The delivery was delayed by two weeks, and when the package finally arrived, two of the five books were damaged with torn pages. Write an email to the bookstore's customer care requesting replacement of the damaged books and compensation for the delay.",
    suggestedSubject: "Damaged Books Received – Request for Replacement and Compensation",
    keywords: ["books", "damaged", "delivery", "delayed", "replacement", "compensation", "order", "pages", "torn", "refund", "quality", "packaging", "complaint", "inconvenience", "preparation"],
    expectedTone: "firm but polite",
    senderRole: "Customer",
    recipientRole: "Customer Care",
  },
  {
    id: "ep12",
    situation:
      "You are a software developer and have been selected for a conference presentation at a national tech conference. You need three days of leave from work to attend the conference. Write an email to your manager, Ms. Anita Desai, requesting leave, explaining the importance of the conference for your professional growth, and assuring that your current tasks will be handled in your absence.",
    suggestedSubject: "Leave Request for National Tech Conference – [Dates]",
    keywords: ["leave", "conference", "presentation", "professional", "growth", "attend", "absence", "tasks", "delegate", "opportunity", "development", "networking", "learning", "request", "approve"],
    expectedTone: "professional and persuasive",
    senderRole: "Software Developer",
    recipientRole: "Manager",
  },
  {
    id: "ep13",
    situation:
      "You are the resident welfare association president of your housing society. The society's annual maintenance charges have not been paid by several residents for the past three months, leading to a shortage of funds for essential services like security, cleaning, and elevator maintenance. Write an email to all residents requesting immediate payment and explaining the consequences of non-payment.",
    suggestedSubject: "Urgent: Pending Maintenance Charges – Immediate Payment Required",
    keywords: ["maintenance", "charges", "payment", "residents", "society", "overdue", "services", "security", "cleaning", "elevator", "fund", "shortage", "penalty", "reminder", "cooperation"],
    expectedTone: "firm and authoritative",
    senderRole: "RWA President",
    recipientRole: "All Residents",
  },
  {
    id: "ep14",
    situation:
      "You have recently completed an internship at a marketing firm, BrightAds Agency. Your internship supervisor, Mr. Karan Malhotra, provided excellent guidance throughout. Write an email to Mr. Malhotra thanking him for the mentorship, sharing what you learned during the internship, and expressing your interest in future opportunities at the firm.",
    suggestedSubject: "Thank You for an Invaluable Internship Experience",
    keywords: ["thank", "internship", "mentorship", "guidance", "learned", "experience", "grateful", "opportunity", "skills", "growth", "future", "career", "marketing", "support", "valuable"],
    expectedTone: "grateful and warm",
    senderRole: "Former Intern",
    recipientRole: "Internship Supervisor",
  },
  {
    id: "ep15",
    situation:
      "You are the event coordinator for your company's annual charity fundraiser. The event is scheduled for next Saturday, but the caterer you had booked has cancelled at the last minute due to a scheduling conflict. Write an email to your colleague, Ms. Divya Sharma, who has contacts in the catering industry, urgently requesting her help in finding a replacement caterer.",
    suggestedSubject: "Urgent: Need Replacement Caterer for Charity Fundraiser – This Saturday",
    keywords: ["caterer", "cancelled", "urgent", "replacement", "event", "charity", "fundraiser", "Saturday", "help", "catering", "last-minute", "guests", "arrangements", "contact", "appreciate"],
    expectedTone: "urgent and collaborative",
    senderRole: "Event Coordinator",
    recipientRole: "Colleague",
  },
  {
    id: "ep16",
    situation:
      "Your company is implementing a new work-from-home policy that allows employees to work remotely two days a week. As the HR head, write an email to all employees announcing this new policy, outlining the guidelines (which days, attendance tracking, availability requirements), and addressing frequently asked questions.",
    suggestedSubject: "New Work-From-Home Policy – Effective [Date]",
    keywords: ["work", "home", "remote", "policy", "guidelines", "attendance", "flexibility", "hybrid", "productivity", "schedule", "availability", "communication", "effective", "days", "FAQ"],
    expectedTone: "informative and positive",
    senderRole: "HR Head",
    recipientRole: "All Employees",
  },
  {
    id: "ep17",
    situation:
      "You are a college student who has been selected for a national-level debate competition in another city. You need financial assistance from the college to cover travel and accommodation expenses. Write an email to the Dean of Student Affairs, Dr. Ramesh Iyer, requesting sponsorship and explaining why this competition is important for both you and the college's reputation.",
    suggestedSubject: "Request for Financial Sponsorship – National Debate Competition",
    keywords: ["sponsorship", "financial", "debate", "competition", "national", "travel", "accommodation", "college", "reputation", "represent", "expenses", "support", "request", "selected", "opportunity"],
    expectedTone: "respectful and persuasive",
    senderRole: "College Student",
    recipientRole: "Dean of Student Affairs",
  },
  {
    id: "ep18",
    situation:
      "You are a team leader at a tech startup. Your team recently completed a major product launch successfully. However, during the launch, one junior developer, Ankit, went above and beyond by fixing a critical bug at 2 AM that could have derailed the entire release. Write an email to the CTO, Ms. Nandini Roy, recommending Ankit for a spot recognition award.",
    suggestedSubject: "Recognition Recommendation – Ankit's Exceptional Contribution During Product Launch",
    keywords: ["recognition", "award", "contribution", "bug", "launch", "exceptional", "developer", "performance", "recommend", "critical", "effort", "dedication", "above", "beyond", "deserving"],
    expectedTone: "appreciative and persuasive",
    senderRole: "Team Leader",
    recipientRole: "CTO",
  },
];

// Get a random email prompt
export function getRandomEmailPrompt() {
  const shuffled = shuffleArray(emailPrompts);
  return shuffled[0];
}

// Email scoring engine
export function scoreEmail(emailText, prompt) {
  const scores = {
    structure: evaluateStructure(emailText),
    wordCount: evaluateWordCount(emailText),
    relevance: evaluateRelevance(emailText, prompt),
    formatting: evaluateFormatting(emailText),
    tone: evaluateTone(emailText),
  };

  // Weighted total (out of 100)
  const total = Math.round(
    scores.structure.score * 0.25 +
    scores.wordCount.score * 0.15 +
    scores.relevance.score * 0.30 +
    scores.formatting.score * 0.15 +
    scores.tone.score * 0.15
  );

  return { ...scores, total };
}

// --- Scoring Functions ---

function evaluateStructure(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const fullText = text.toLowerCase();
  let score = 0;
  const feedback = [];

  // Check for greeting/salutation
  const greetings = ["dear", "hi", "hello", "respected", "sir", "madam", "ma'am", "greetings"];
  const hasGreeting = greetings.some((g) => {
    // Check in first 3 non-empty lines
    return lines.slice(0, 3).some((line) => line.toLowerCase().includes(g));
  });
  if (hasGreeting) {
    score += 25;
    feedback.push({ text: "✓ Proper greeting/salutation found", type: "success" });
  } else {
    feedback.push({ text: "✗ Missing greeting (e.g., Dear Sir/Madam, Hi [Name])", type: "error" });
  }

  // Check for body content (at least 2 paragraphs or substantial content)
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 20);
  if (paragraphs.length >= 2) {
    score += 25;
    feedback.push({ text: "✓ Well-structured body with multiple paragraphs", type: "success" });
  } else if (paragraphs.length === 1) {
    score += 15;
    feedback.push({ text: "△ Consider breaking your email into multiple paragraphs", type: "warning" });
  } else {
    feedback.push({ text: "✗ Email body is too short or poorly structured", type: "error" });
  }

  // Check for closing
  const closings = ["regards", "sincerely", "thanks", "thank you", "best", "warm", "yours", "faithfully", "gratefully", "respectfully", "cheers"];
  const lastLines = lines.slice(-5).join(" ").toLowerCase();
  const hasClosing = closings.some((c) => lastLines.includes(c));
  if (hasClosing) {
    score += 25;
    feedback.push({ text: "✓ Proper closing found", type: "success" });
  } else {
    feedback.push({ text: "✗ Missing closing (e.g., Regards, Thank you, Sincerely)", type: "error" });
  }

  // Check for subject line or reference to purpose early
  const hasSubjectOrPurpose = lines.slice(0, 5).some((line) => {
    const l = line.toLowerCase();
    return l.includes("subject:") || l.includes("regarding") || l.includes("writing to") || l.includes("purpose") || l.includes("i am writing") || l.includes("this is to");
  });
  if (hasSubjectOrPurpose) {
    score += 25;
    feedback.push({ text: "✓ Clear purpose stated early in the email", type: "success" });
  } else {
    score += 10;
    feedback.push({ text: "△ Consider stating the purpose of your email clearly at the beginning", type: "warning" });
  }

  return { score, feedback, label: "Email Structure" };
}

function evaluateWordCount(text) {
  const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
  const count = words.length;
  let score = 0;
  const feedback = [];

  if (count >= 150) {
    score = 100;
    feedback.push({ text: `✓ Excellent word count: ${count} words (150+ is ideal)`, type: "success" });
  } else if (count >= 100) {
    score = 80;
    feedback.push({ text: `✓ Good word count: ${count} words (minimum 100 met)`, type: "success" });
  } else if (count >= 70) {
    score = 50;
    feedback.push({ text: `△ Word count is ${count}. Minimum 100 words required.`, type: "warning" });
  } else if (count >= 40) {
    score = 25;
    feedback.push({ text: `✗ Only ${count} words. You need at least 100 words.`, type: "error" });
  } else {
    score = 0;
    feedback.push({ text: `✗ Very low word count: ${count}. Write at least 100 words.`, type: "error" });
  }

  return { score, feedback, label: "Word Count", wordCount: count };
}

function evaluateRelevance(text, prompt) {
  const lowerText = text.toLowerCase();
  const matchedKeywords = prompt.keywords.filter((kw) => lowerText.includes(kw.toLowerCase()));
  const ratio = matchedKeywords.length / prompt.keywords.length;

  let score = Math.min(100, Math.round(ratio * 130)); // slightly generous
  const feedback = [];

  if (ratio >= 0.5) {
    feedback.push({ text: `✓ Strong relevance: ${matchedKeywords.length}/${prompt.keywords.length} key themes addressed`, type: "success" });
  } else if (ratio >= 0.3) {
    feedback.push({ text: `△ Moderate relevance: ${matchedKeywords.length}/${prompt.keywords.length} key themes found`, type: "warning" });
  } else {
    feedback.push({ text: `✗ Low relevance: Only ${matchedKeywords.length}/${prompt.keywords.length} key themes addressed`, type: "error" });
  }

  // Show which keywords were found
  if (matchedKeywords.length > 0) {
    feedback.push({ text: `  Topics covered: ${matchedKeywords.join(", ")}`, type: "info" });
  }

  const missedKeywords = prompt.keywords.filter((kw) => !lowerText.includes(kw.toLowerCase()));
  if (missedKeywords.length > 0 && missedKeywords.length <= 8) {
    feedback.push({ text: `  Consider mentioning: ${missedKeywords.slice(0, 5).join(", ")}`, type: "info" });
  }

  return { score, feedback, label: "Content Relevance" };
}

function evaluateFormatting(text) {
  let score = 0;
  const feedback = [];

  // Check sentence structure
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 5);
  if (sentences.length >= 5) {
    score += 30;
    feedback.push({ text: `✓ Good sentence variety: ${sentences.length} sentences`, type: "success" });
  } else if (sentences.length >= 3) {
    score += 20;
    feedback.push({ text: `△ Could use more sentences for better flow (${sentences.length} found)`, type: "warning" });
  } else {
    feedback.push({ text: "✗ Very few complete sentences detected", type: "error" });
  }

  // Check for proper capitalization at sentence starts
  const properCaps = sentences.filter((s) => {
    const trimmed = s.trim();
    return trimmed.length > 0 && trimmed[0] === trimmed[0].toUpperCase();
  });
  const capsRatio = sentences.length > 0 ? properCaps.length / sentences.length : 0;
  if (capsRatio >= 0.8) {
    score += 25;
    feedback.push({ text: "✓ Proper capitalization at sentence beginnings", type: "success" });
  } else {
    score += 10;
    feedback.push({ text: "△ Some sentences don't start with capital letters", type: "warning" });
  }

  // Check for punctuation usage
  const hasPunctuation = /[.!?,;:]/.test(text);
  const punctCount = (text.match(/[.!?,;:]/g) || []).length;
  if (punctCount >= 8) {
    score += 25;
    feedback.push({ text: "✓ Good use of punctuation throughout", type: "success" });
  } else if (hasPunctuation) {
    score += 15;
    feedback.push({ text: "△ Could improve punctuation usage", type: "warning" });
  } else {
    feedback.push({ text: "✗ Punctuation is largely missing", type: "error" });
  }

  // Check for line breaks / paragraph separation
  const lineBreaks = (text.match(/\n\s*\n/g) || []).length;
  if (lineBreaks >= 2) {
    score += 20;
    feedback.push({ text: "✓ Good paragraph separation", type: "success" });
  } else if (lineBreaks >= 1) {
    score += 10;
    feedback.push({ text: "△ Consider adding more paragraph breaks for readability", type: "warning" });
  } else {
    feedback.push({ text: "✗ No paragraph separation – use blank lines between sections", type: "error" });
  }

  return { score, feedback, label: "Formatting & Grammar" };
}

function evaluateTone(text) {
  const lowerText = text.toLowerCase();
  let score = 0;
  const feedback = [];

  // Check for polite language
  const politeWords = ["please", "kindly", "request", "appreciate", "grateful", "thank", "would", "could", "hope", "looking forward", "convenience", "oblige"];
  const politeCount = politeWords.filter((w) => lowerText.includes(w)).length;

  if (politeCount >= 4) {
    score += 50;
    feedback.push({ text: "✓ Excellent use of polite and professional language", type: "success" });
  } else if (politeCount >= 2) {
    score += 35;
    feedback.push({ text: "✓ Good use of courteous language", type: "success" });
  } else if (politeCount >= 1) {
    score += 20;
    feedback.push({ text: "△ Consider using more polite expressions (please, kindly, appreciate)", type: "warning" });
  } else {
    feedback.push({ text: "✗ Lacks polite language. Use words like 'please', 'kindly', 'appreciate'", type: "error" });
  }

  // Check for professional tone markers
  const professionalMarkers = ["inform", "regarding", "further", "assist", "attention", "concern", "necessary", "ensure", "appropriate", "action", "response", "provide"];
  const proCount = professionalMarkers.filter((w) => lowerText.includes(w)).length;

  if (proCount >= 3) {
    score += 50;
    feedback.push({ text: "✓ Professional tone maintained well", type: "success" });
  } else if (proCount >= 1) {
    score += 30;
    feedback.push({ text: "△ Could enhance professional tone with formal vocabulary", type: "warning" });
  } else {
    score += 10;
    feedback.push({ text: "△ Consider using more formal/professional expressions", type: "warning" });
  }

  return { score, feedback, label: "Tone & Politeness" };
}
