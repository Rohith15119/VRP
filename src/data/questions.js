// Verbal Ability - Sentence Completion Question Bank
// Curated specifically for TCS NQT Verbal Ability (ITP Pattern).
// Ensures a balanced mix of: Prepositions, Conjunctions, Vocabulary, and Idioms across all difficulties.
// NO phrasal verbs are included in this database.
// Each question has multiple acceptable synonyms. The first element is the primary/best answer.

export const easyQuestions = [
  // --- Prepositions ---
  {
    id: "e1",
    sentence: "_____ the new Safari Storme, Mahindra has more leverage in increasing the sales.",
    answers: ["with", "by", "using", "through", "via"],
    hint: "Preposition indicating possession, association, or utilization.",
  },
  {
    id: "e2",
    sentence: "The passenger car sales showed a decline _____ 7% to 5.6%.",
    answers: ["from", "of", "by"],
    hint: "Preposition used to specify the starting point of a range or change.",
  },
  {
    id: "e3",
    sentence: "He agreed _____ the proposal after a long discussion.",
    answers: ["to", "with", "upon", "on"],
    hint: "Preposition that follows 'agreed' to indicate consent to a plan/proposal.",
  },
  {
    id: "e4",
    sentence: "She was accused _____ stealing the company's confidential documents.",
    answers: ["of", "for"],
    hint: "Preposition that regularly follows the verb 'accused'.",
  },
  {
    id: "e5",
    sentence: "The patient is recovering _____ a very rare tropical disease.",
    answers: ["from", "after"],
    hint: "Preposition indicating source or cause of recovery.",
  },
  {
    id: "e6",
    sentence: "The team is fully prepared _____ the upcoming placement drive.",
    answers: ["for", "to attend", "before"],
    hint: "Preposition indicating purpose or target.",
  },
  {
    id: "e7",
    sentence: "She was congratulated _____ her outstanding performance in the exams.",
    answers: ["on", "for"],
    hint: "Preposition that standardly follows 'congratulated'.",
  },
  {
    id: "e8",
    sentence: "He succeeded _____ passing the difficult coding test on his first try.",
    answers: ["in", "by"],
    hint: "Preposition that follows 'succeeded'.",
  },
  {
    id: "e9",
    sentence: "We need to deal _____ this customer complaint immediately.",
    answers: ["with", "about"],
    hint: "Preposition completing the phrasal verb meaning to take action or handle.",
  },
  {
    id: "e10",
    sentence: "I am looking forward _____ meeting the new project coordinator.",
    answers: ["to", "towards"],
    hint: "Preposition following 'looking forward' to express anticipation.",
  },
  {
    id: "e11",
    sentence: "She is very good _____ coding in both Python and Java.",
    answers: ["at", "in", "with"],
    hint: "Preposition indicating competence in a subject.",
  },
  {
    id: "e12",
    sentence: "You should not rely _____ other people's notes for your preparation.",
    answers: ["on", "upon"],
    hint: "Preposition meaning to depend or place trust.",
  },
  {
    id: "e13",
    sentence: "He has been suffering _____ a high fever since last night.",
    answers: ["from", "with"],
    hint: "Preposition that standardly follows 'suffering'.",
  },
  {
    id: "e14",
    sentence: "The meeting will begin _____ 10:00 AM sharp tomorrow.",
    answers: ["at", "by", "from"],
    hint: "Preposition indicating a specific point in time.",
  },
  {
    id: "e15",
    sentence: "She is interested _____ pursuing a career in artificial intelligence.",
    answers: ["in", "on"],
    hint: "Preposition indicating engagement or desire.",
  },
  {
    id: "e16",
    sentence: "He was born _____ a family of doctors and scientists.",
    answers: ["into", "in", "to"],
    hint: "Preposition indicating descent or background.",
  },
  {
    id: "e17",
    sentence: "He is famous _____ his contributions to machine learning.",
    answers: ["for", "because of"],
    hint: "Preposition indicating the reason for fame.",
  },
  {
    id: "e18",
    sentence: "The book is placed _____ the desk next to the laptop.",
    answers: ["on", "upon", "atop"],
    hint: "Preposition indicating surface location.",
  },
  {
    id: "e19",
    sentence: "He is known to be very friendly _____ all his teammates.",
    answers: ["with", "to", "towards"],
    hint: "Preposition indicating relationship or attitude.",
  },
  {
    id: "e20",
    sentence: "We must adhere _____ the guidelines provided by the university.",
    answers: ["to", "with"],
    hint: "Preposition following 'adhere' meaning to stick or follow.",
  },
  {
    id: "e21",
    sentence: "He parted _____ all his old books when he moved houses.",
    answers: ["with", "from"],
    hint: "Preposition meaning to give up or separate from.",
  },
  {
    id: "e22",
    sentence: "I am familiar _____ this software since I used it last year.",
    answers: ["with", "to"],
    hint: "Preposition meaning having a good knowledge of.",
  },
  {
    id: "e23",
    sentence: "The plane lands _____ the runway at 5 PM.",
    answers: ["on", "upon"],
    hint: "Preposition indicating location.",
  },
  {
    id: "e24",
    sentence: "He has a great passion _____ teaching young students.",
    answers: ["for", "towards"],
    hint: "Preposition indicating intense interest.",
  },
  {
    id: "e25",
    sentence: "The water level has fallen _____ the danger mark.",
    answers: ["below", "under", "beneath"],
    hint: "Preposition meaning lower than a specific level.",
  },

  // --- Conjunctions ---
  {
    id: "e26",
    sentence: "Shreya will keep working for you _____ you are respectful towards her.",
    answers: ["as long as", "provided", "provided that", "if", "only if", "assuming", "when", "on the condition that"],
    hint: "Conjunction phrase indicating a condition.",
  },
  {
    id: "e27",
    sentence: "The project was delayed _____ to technical glitches in the server.",
    answers: ["due", "owing", "thanks"],
    hint: "Phrase meaning 'because of' (often starts with 'due' or 'owing').",
  },
  {
    id: "e28",
    sentence: "He wants to buy a new laptop, _____ he does not have enough savings right now.",
    answers: ["but", "yet", "however", "though", "although"],
    hint: "Coordinating conjunction indicating contrast.",
  },
  {
    id: "e29",
    sentence: "_____ it was raining heavily, the students walked to the campus.",
    answers: ["although", "though", "even though", "while"],
    hint: "Subordinating conjunction indicating concession.",
  },
  {
    id: "e30",
    sentence: "You can attend the placement drive _____ you have a clean academic record.",
    answers: ["if", "provided", "provided that", "as long as", "only if"],
    hint: "Condition connector.",
  },
  {
    id: "e31",
    sentence: "She studied hard _____ she could secure a high rank in the NQT exam.",
    answers: ["so that", "so", "in order that", "to ensure"],
    hint: "Conjunction of purpose.",
  },
  {
    id: "e32",
    sentence: "We should start early _____ we can avoid the morning rush hour traffic.",
    answers: ["so that", "so", "in order that"],
    hint: "Purpose linker.",
  },
  {
    id: "e33",
    sentence: "He will not join the session _____ he receives the formal link.",
    answers: ["unless", "until", "except if"],
    hint: "Conditional connector meaning 'if not'.",
  },
  {
    id: "e34",
    sentence: "She wants to learn programming, _____ she has registered for an online course.",
    answers: ["so", "therefore", "hence", "thus"],
    hint: "Conjunction indicating result.",
  },
  {
    id: "e35",
    sentence: "You must finish your assignment on time, _____ you will lose internal marks.",
    answers: ["or", "otherwise", "else"],
    hint: "Conjunction indicating alternative or negative consequence.",
  },

  // --- Vocabulary & Idiomatic Expressions ---
  {
    id: "e36",
    sentence: "The suspect finally decided to _____ the truth during the interrogation.",
    answers: ["reveal", "tell", "speak", "confess", "disclose", "admit", "share"],
    hint: "Verb meaning to make previously unknown information known.",
  },
  {
    id: "e37",
    sentence: "We must find a way to _____ this difficult problem quickly.",
    answers: ["solve", "resolve", "fix", "tackle", "address", "handle", "settle"],
    hint: "Verb meaning to find an answer or solution.",
  },
  {
    id: "e38",
    sentence: "She works _____ a software engineer at a multinational firm.",
    answers: ["as", "like"],
    hint: "Word used to indicate a role or profession.",
  },
  {
    id: "e39",
    sentence: "The company plans to _____ new employees next month.",
    answers: ["hire", "recruit", "employ", "onboard", "select", "bring in"],
    hint: "Employ or recruit",
  },
  {
    id: "e40",
    sentence: "The project got _____ a rocky start but ended successfully.",
    answers: ["off to", "to"],
    hint: "Idiomatic expression meaning to begin in a certain way.",
  },
  {
    id: "e41",
    sentence: "The customer requested a _____ refund for the damaged item.",
    answers: ["full", "complete", "total"],
    hint: "Adjective meaning entire or 100%.",
  },
  {
    id: "e42",
    sentence: "The teacher asked the students to _____ the main points of the lesson.",
    answers: ["summarize", "outline", "list", "write", "note", "explain"],
    hint: "Verb meaning to give a brief statement of the main points.",
  },
  {
    id: "e43",
    sentence: "You should always _____ your password confidential to protect your account.",
    answers: ["keep", "maintain", "hold"],
    hint: "Verb meaning to preserve or retain in a specific state.",
  },
  {
    id: "e44",
    sentence: "The team was able to _____ its quarterly sales target ahead of schedule.",
    answers: ["achieve", "reach", "meet", "hit", "attain", "accomplish"],
    hint: "Verb meaning to successfully bring to a desired state or goal.",
  },
  {
    id: "e45",
    sentence: "Her explanation was very _____ and easy for the freshman students to follow.",
    answers: ["simple", "clear", "plain", "direct", "understandable"],
    hint: "Adjective meaning uncomplicated or easy to understand.",
  },
  {
    id: "e46",
    sentence: "The doctor advised him to _____ his daily intake of salt.",
    answers: ["reduce", "lower", "decrease", "limit", "cut"],
    hint: "Verb meaning to make smaller in size, amount, or degree.",
  },
  {
    id: "e47",
    sentence: "She has a _____ interest in learning foreign languages.",
    answers: ["keen", "strong", "deep", "great", "huge"],
    hint: "Adjective meaning highly developed or sharp interest.",
  },
  {
    id: "e48",
    sentence: "The program was cancelled due to a lack _____ funding.",
    answers: ["of"],
    hint: "Preposition that follows the noun 'lack'.",
  },
  {
    id: "e49",
    sentence: "He wants to _____ his communication skills to get a better job.",
    answers: ["improve", "enhance", "develop", "boost", "polish"],
    hint: "Verb meaning to make or become better.",
  },
  {
    id: "e50",
    sentence: "The company has developed a _____ software product for data analysis.",
    answers: ["new", "novel", "unique", "modern"],
    hint: "Adjective meaning recently created or discovered.",
  },
  {
    id: "e51",
    sentence: "The training session was very _____ for the new interns.",
    answers: ["helpful", "useful", "beneficial", "informative", "productive"],
    hint: "Adjective meaning providing help or benefit.",
  },
  {
    id: "e52",
    sentence: "We need to _____ a decision on this matter by tomorrow.",
    answers: ["make", "take", "reach", "finalize"],
    hint: "Verb that collocates with 'decision'.",
  },
  {
    id: "e53",
    sentence: "The manager gave us a brief _____ of the project timeline.",
    answers: ["overview", "outline", "summary", "briefing"],
    hint: "Noun meaning a general review or summary.",
  },
  {
    id: "e54",
    sentence: "She is highly _____ and always finishes her work on time.",
    answers: ["efficient", "productive", "diligent", "reliable", "organized"],
    hint: "Adjective meaning working productively without wasting time.",
  },
  {
    id: "e55",
    sentence: "The event was a huge _____ and attracted many participants.",
    answers: ["success", "hit", "achievement"],
    hint: "Noun indicating a positive outcome or victory.",
  },
];

export const mediumQuestions = [
  // --- Prepositions ---
  {
    id: "m1",
    sentence: "She was so engrossed _____ her coding that she didn't hear the bell ring.",
    answers: ["in", "with", "by"],
    hint: "Preposition following 'engrossed' meaning absorbed or fully occupied.",
  },
  {
    id: "m2",
    sentence: "The argument was based _____ the assumption that market demands would remain constant.",
    answers: ["upon", "on"],
    hint: "Preposition following 'based'.",
  },
  {
    id: "m3",
    sentence: "He has a strong aversion _____ working in large, crowded corporate offices.",
    answers: ["to", "towards", "for"],
    hint: "Preposition following 'aversion' indicating strong dislike.",
  },
  {
    id: "m4",
    sentence: "The company's success is largely attributed _____ its customer-centric approach.",
    answers: ["to", "by"],
    hint: "Preposition following 'attributed' indicating cause.",
  },
  {
    id: "m5",
    sentence: "He was exempted _____ attending the seminar because of his prior commitments.",
    answers: ["from", "of"],
    hint: "Preposition meaning freed from an obligation.",
  },
  {
    id: "m6",
    sentence: "The manager was reluctant to commit _____ a specific launch date for the app.",
    answers: ["to", "on"],
    hint: "Preposition following 'commit' when making a promise.",
  },
  {
    id: "m7",
    sentence: "She is capable _____ managing multiple software projects simultaneously.",
    answers: ["of", "for"],
    hint: "Preposition following 'capable'.",
  },
  {
    id: "m8",
    sentence: "The client was highly dissatisfied _____ the quality of the prototype.",
    answers: ["with", "by", "at"],
    hint: "Preposition following 'dissatisfied'.",
  },
  {
    id: "m9",
    sentence: "He was advised to refrain _____ sharing passwords with anyone.",
    answers: ["from", "of"],
    hint: "Preposition meaning to stop oneself from doing something.",
  },
  {
    id: "m10",
    sentence: "The success of the marketing campaign resulted _____ a 20% increase in sales.",
    answers: ["in", "from"],
    hint: "Preposition indicating the outcome or consequence.",
  },
  {
    id: "m11",
    sentence: "The committee is composed _____ members from various departments.",
    answers: ["of", "by", "with"],
    hint: "Preposition meaning made up of.",
  },
  {
    id: "m12",
    sentence: "He has been associated _____ this research laboratory for five years.",
    answers: ["with", "to"],
    hint: "Preposition following 'associated'.",
  },
  {
    id: "m13",
    sentence: "She was unable to cope _____ the stress of the tight deadline.",
    answers: ["with", "up with"],
    hint: "Preposition completing 'cope with' meaning to deal successfully.",
  },
  {
    id: "m14",
    sentence: "The firm needs to align its goals _____ the latest industry standards.",
    answers: ["with", "to"],
    hint: "Preposition meaning to bring into agreement.",
  },
  {
    id: "m15",
    sentence: "He has a reputation _____ being an extremely hard-working team leader.",
    answers: ["for", "of"],
    hint: "Preposition following 'reputation'.",
  },
  {
    id: "m16",
    sentence: "The algorithm is designed to detect anomalies _____ the dataset.",
    answers: ["in", "within", "from"],
    hint: "Preposition indicating location within structured data.",
  },
  {
    id: "m17",
    sentence: "We should not make decisions that are detrimental _____ the environment.",
    answers: ["to", "for"],
    hint: "Preposition meaning causing harm or damage.",
  },
  {
    id: "m18",
    sentence: "She was oblivious _____ the fact that her mic was still unmuted.",
    answers: ["to", "of"],
    hint: "Preposition meaning not aware of or concerned about.",
  },
  {
    id: "m19",
    sentence: "The changes were made in accordance _____ the new security policy.",
    answers: ["with", "to"],
    hint: "Preposition completing 'in accordance with' meaning conforming to.",
  },
  {
    id: "m20",
    sentence: "He is entitled _____ a full refund if the product is defective.",
    answers: ["to", "for"],
    hint: "Preposition meaning having a right to something.",
  },

  // --- Conjunctions ---
  {
    id: "m21",
    sentence: "The software was deployed successfully _____ the server issues we faced earlier.",
    answers: ["despite", "in spite of", "notwithstanding"],
    hint: "Preposition/Conjunction indicating contrast or concession.",
  },
  {
    id: "m22",
    sentence: "We will launch the product next Monday _____ we encounter any critical bugs.",
    answers: ["unless", "provided", "provided that"],
    hint: "Conditional connector meaning 'except if'.",
  },
  {
    id: "m23",
    sentence: "He was offered a high package, _____ he decided to reject it for higher studies.",
    answers: ["yet", "but", "nevertheless", "nonetheless", "however"],
    hint: "Conjunction indicating contradiction.",
  },
  {
    id: "m24",
    sentence: "_____ the traffic was sparse, we reached the interview location ahead of time.",
    answers: ["since", "because", "as", "seeing that"],
    hint: "Conjunction indicating reason.",
  },
  {
    id: "m25",
    sentence: "The company expanded its operations _____ it could capture the local market.",
    answers: ["so that", "in order that", "so"],
    hint: "Purpose connector.",
  },
  {
    id: "m26",
    sentence: "You must complete your training, _____ you will not be assigned a client project.",
    answers: ["otherwise", "else", "or"],
    hint: "Adverb/Conjunction indicating consequence of not acting.",
  },

  // --- Vocabulary & Idioms ---
  {
    id: "m27",
    sentence: "Despite the high costs, the management decided to _____ with the expansion project.",
    answers: ["proceed", "continue", "persist", "carry on", "press ahead"],
    hint: "Verb meaning to begin or continue a course of action.",
  },
  {
    id: "m28",
    sentence: "The project team was able to mitigate the risks _____ proper planning.",
    answers: ["through", "by", "using", "with", "via", "by means of"],
    hint: "Preposition indicating the method or medium of an action.",
  },
  {
    id: "m29",
    sentence: "The company's expansion was hindered _____ a lack of capital.",
    answers: ["by", "due to", "through", "with"],
    hint: "Preposition indicating the agent of obstruction.",
  },
  {
    id: "m30",
    sentence: "She has a natural aptitude _____ solving complex logical puzzles.",
    answers: ["for", "in", "to"],
    hint: "Preposition following 'aptitude' indicating talent.",
  },
  {
    id: "m31",
    sentence: "The new regulations are applicable _____ all registered candidates.",
    answers: ["to", "for"],
    hint: "Preposition meaning relevant or appropriate to.",
  },
  {
    id: "m32",
    sentence: "He was charged _____ trespassing on restricted private property.",
    answers: ["with", "for"],
    hint: "Preposition following 'charged' in a legal context.",
  },
  {
    id: "m33",
    sentence: "The security breach was traced _____ a weak administrative password.",
    answers: ["to", "back to", "from"],
    hint: "Preposition indicating the source or path of origin.",
  },
  {
    id: "m34",
    sentence: "We must find a way to bridge the gap _____ theory and practice.",
    answers: ["between", "among"],
    hint: "Preposition used when connecting two distinct things.",
  },
  {
    id: "m35",
    sentence: "The design is distinct _____ the one we saw yesterday.",
    answers: ["from", "to", "than"],
    hint: "Preposition meaning recognizably different.",
  },
  {
    id: "m36",
    sentence: "He is very passionate _____ environmental conservation.",
    answers: ["about", "for", "on"],
    hint: "Preposition following 'passionate'.",
  },
  {
    id: "m37",
    sentence: "The graph shows a correlation _____ temperature and energy demand.",
    answers: ["between", "with", "among"],
    hint: "Preposition used to indicate mutual relationship.",
  },
  {
    id: "m38",
    sentence: "She was skeptical _____ the effectiveness of the new framework.",
    answers: ["about", "of"],
    hint: "Preposition following 'skeptical'.",
  },
  {
    id: "m39",
    sentence: "He was indicted _____ bribery and financial embezzlement.",
    answers: ["for", "on"],
    hint: "Preposition meaning formally accused of.",
  },
  {
    id: "m40",
    sentence: "You should familiarize yourself _____ the coding guidelines.",
    answers: ["with", "to"],
    hint: "Preposition following 'familiarize'.",
  },
  {
    id: "m41",
    sentence: "He was declared guilty _____ violating the traffic laws.",
    answers: ["of", "for"],
    hint: "Preposition following 'guilty'.",
  },
  {
    id: "m42",
    sentence: "The company stands _____ a high chance of winning the contract.",
    answers: ["at", "for", "to"],
    hint: "Idiomatic preposition following 'stands' (e.g., 'stands to gain').",
  },
  {
    id: "m43",
    sentence: "The device is compatible _____ most operating systems.",
    answers: ["with", "to"],
    hint: "Preposition indicating compatibility.",
  },
  {
    id: "m44",
    sentence: "The team is in desperate need _____ additional resources.",
    answers: ["of", "for"],
    hint: "Preposition following 'need'.",
  },
  {
    id: "m45",
    sentence: "He took pride _____ his ability to solve bugs quickly.",
    answers: ["in", "with"],
    hint: "Preposition following the noun/verb 'pride'.",
  },
  {
    id: "m46",
    sentence: "The team had to restructure its workflow to _____ the rising customer demands.",
    answers: ["meet", "satisfy", "handle", "address", "accommodate"],
    hint: "Verb meaning to fulfill or satisfy a condition/demand.",
  },
  {
    id: "m47",
    sentence: "The new design is a major _____ over the previous version in terms of speed.",
    answers: ["improvement", "upgrade", "advance", "step forward"],
    hint: "Noun meaning a change that makes something better.",
  },
  {
    id: "m48",
    sentence: "Her statement was highly _____ and left many doubts in our minds.",
    answers: ["vague", "ambiguous", "unclear", "obscure"],
    hint: "Adjective meaning not clearly expressed or defined.",
  },
  {
    id: "m49",
    sentence: "The data shows a _____ increase in temperature over the past century.",
    answers: ["gradual", "steady", "slight", "slow"],
    hint: "Adjective meaning taking place by degrees; slowly.",
  },
  {
    id: "m50",
    sentence: "They need to _____ the software to the latest version to avoid security issues.",
    answers: ["update", "upgrade", "patch"],
    hint: "Verb meaning to bring up to date.",
  },
  {
    id: "m51",
    sentence: "The CEO was impressed _____ the technical expertise of the team.",
    answers: ["by", "with", "at"],
    hint: "Preposition following 'impressed'.",
  },
  {
    id: "m52",
    sentence: "He has a great talent _____ playing the violin.",
    answers: ["for", "in"],
    hint: "Preposition following the noun 'talent'.",
  },
  {
    id: "m53",
    sentence: "The document was written in a formal _____ suitable for legal affairs.",
    answers: ["tone", "style", "language", "format"],
    hint: "Noun meaning general character or attitude of writing.",
  },
  {
    id: "m54",
    sentence: "You need to present a _____ reason for taking emergency leave.",
    answers: ["valid", "strong", "legitimate", "genuine"],
    hint: "Adjective meaning logically or legally sound.",
  },
  {
    id: "m55",
    sentence: "The results are consistent _____ the research findings of last year.",
    answers: ["with", "to"],
    hint: "Preposition following 'consistent'.",
  },
];

export const hardQuestions = [
  // --- Prepositions & Advanced Connectors ---
  {
    id: "h1",
    sentence: "The diplomat was accused of behaving in a manner that was not _____ with his official status.",
    answers: ["consistent", "compatible", "in line", "congruent", "commensurate"],
    hint: "Word meaning in agreement or harmony with.",
  },
  {
    id: "h2",
    sentence: "She managed to maintain her composure _____ the chaotic surroundings.",
    answers: ["amid", "amidst", "despite", "in spite of", "throughout"],
    hint: "Preposition meaning in the middle of or surrounded by.",
  },
  {
    id: "h3",
    sentence: "The decision was made _____ consultation with the legal team.",
    answers: ["without", "after", "following", "in", "prior to"],
    hint: "Preposition indicating absence or sequence of consultation.",
  },
  {
    id: "h4",
    sentence: "The project was initiated in _____ of the new corporate strategy.",
    answers: ["pursuit", "furtherance", "support"],
    hint: "Noun phrase meaning to advance or follow a goal.",
  },
  {
    id: "h5",
    sentence: "We must avoid making _____ generalizations about the user base.",
    answers: ["sweeping", "broad", "hasty", "unwarranted"],
    hint: "Adjective meaning wide-ranging or oversimplified.",
  },
  {
    id: "h6",
    sentence: "The program was discontinued due to its _____ high maintenance costs.",
    answers: ["prohibitively", "extremely", "exorbitantly"],
    hint: "Adverb meaning to a degree that forbids or prevents something.",
  },
  {
    id: "h7",
    sentence: "He was accused of using _____ tactics to win the debate.",
    answers: ["underhanded", "deceptive", "devious", "cunning", "unfair"],
    hint: "Adjective meaning dishonest or sneaky.",
  },
  {
    id: "h8",
    sentence: "The device is designed to operate under _____ conditions.",
    answers: ["adverse", "harsh", "extreme", "severe", "difficult"],
    hint: "Adjective meaning unfavorable or hostile.",
  },
  {
    id: "h9",
    sentence: "She has been working in close _____ with the research department.",
    answers: ["collaboration", "cooperation", "coordination", "association"],
    hint: "Noun meaning working with someone to produce something.",
  },
  {
    id: "h10",
    sentence: "His arguments were not _____ with the primary objectives of the group.",
    answers: ["aligned", "consistent", "congruent", "compatible"],
    hint: "Prepositional adjective meaning matching or agreeing.",
  },

  // --- Conjunctions & Clause Connectors ---
  {
    id: "h11",
    sentence: "_____ had we finished setting up the servers than the power grid failed.",
    answers: ["no sooner", "scarcely", "hardly"],
    hint: "Correlative conjunction pair starting with 'No sooner' used with 'than'.",
  },
  {
    id: "h12",
    sentence: "_____ how hard they tried, the engineering team could not trace the origin of the glitch.",
    answers: ["no matter", "regardless of", "however"],
    hint: "Phrase indicating lack of effect of an action.",
  },
  {
    id: "h13",
    sentence: "We decided to proceed with the release, _____ the risk of data leakage.",
    answers: ["mindful of", "knowing", "aware of", "notwithstanding"],
    hint: "Phrase indicating conscious awareness.",
  },
  {
    id: "h14",
    sentence: "He refused to sign the contract _____ he was given a higher equity stake.",
    answers: ["unless", "until", "except if"],
    hint: "Conditional connector indicating 'if not'.",
  },
  {
    id: "h15",
    sentence: "The system crashed _____ after the update was pushed to production.",
    answers: ["shortly", "immediately", "soon"],
    hint: "Adverb indicating small time gap.",
  },
  {
    id: "h16",
    sentence: "_____ we analyze the root cause, we cannot formulate a permanent patch.",
    answers: ["until", "unless", "before"],
    hint: "Conjunction indicating time boundary or condition.",
  },

  // --- Idiomatic Expressions ---
  {
    id: "h17",
    sentence: "The contract was declared null and _____ because it lacked proper witness signatures.",
    answers: ["void", "invalid", "useless"],
    hint: "Idiomatic term meaning legally invalid.",
  },
  {
    id: "h18",
    sentence: "The project collapsed because the team members were working at _____ purposes.",
    answers: ["cross", "different", "opposing"],
    hint: "Idiomatic phrase 'at cross purposes' meaning conflicting goals.",
  },
  {
    id: "h19",
    sentence: "The team had to work _____ the clock to complete the launch in time.",
    answers: ["around", "against", "round"],
    hint: "Idiomatic preposition meaning continuously all day and night.",
  },
  {
    id: "h20",
    sentence: "He won the competition _____ down, surpassing all opponents easily.",
    answers: ["hands", "easily"],
    hint: "Idiomatic phrase 'hands down' meaning easily or without effort.",
  },
  {
    id: "h21",
    sentence: "She took the manager's criticism _____ heart and worked hard to improve.",
    answers: ["to", "in"],
    hint: "Idiomatic phrase 'take to heart' meaning to be deeply affected.",
  },
  {
    id: "h22",
    sentence: "He was kept in the _____ about the details of the merger until the last minute.",
    answers: ["dark", "loop"],
    hint: "Idiomatic phrase 'keep in the dark' meaning uninformed.",
  },

  // --- Advanced Contextual Vocabulary ---
  {
    id: "h23",
    sentence: "The sudden resignation of the CEO served to _____ the instability within the company.",
    answers: ["exacerbate", "aggravate", "worsen", "highlight", "expose", "increase", "accentuate"],
    hint: "Verb meaning to make a problem or bad situation worse.",
  },
  {
    id: "h24",
    sentence: "The scientist's claims were highly controversial and did not _____ scrutiny by peers.",
    answers: ["withstand", "survive", "bear", "stand up to", "pass"],
    hint: "Verb meaning to hold out against or remain undamaged.",
  },
  {
    id: "h25",
    sentence: "He argued that the new policy would only serve to _____ the existing social divide.",
    answers: ["widen", "perpetuate", "deepen", "exacerbate", "increase", "heighten"],
    hint: "Verb meaning to make larger or continue indefinitely.",
  },
  {
    id: "h26",
    sentence: "The treaty was intended to _____ the territorial disputes once and for all.",
    answers: ["settle", "resolve", "end", "terminate", "finalize"],
    hint: "Verb meaning to resolve or reach an agreement.",
  },
  {
    id: "h27",
    sentence: "His speech was full of convoluted metaphors that tended to _____ the main point.",
    answers: ["obscure", "hide", "mask", "dilute", "confuse", "cloud", "blur"],
    hint: "Verb meaning to make unclear or difficult to see.",
  },
  {
    id: "h28",
    sentence: "She was commended for her _____ efforts in maintaining the archives.",
    answers: ["painstaking", "meticulous", "diligent", "tireless", "exceptional", "sterling"],
    hint: "Adjective meaning done with or employing great care and thoroughness.",
  },
  {
    id: "h30",
    sentence: "The company faced an _____ shortage of skilled developers during peak season.",
    answers: ["acute", "severe", "intense", "extreme", "unprecedented"],
    hint: "Adjective meaning present to a severe or intense degree.",
  },
  {
    id: "h31",
    sentence: "He was known for his _____ memory, which allowed him to recall strings of numbers instantly.",
    answers: ["photographic", "eidetic", "prodigious", "remarkable", "retentive", "exceptional"],
    hint: "Adjective retaining visual images with high accuracy.",
  },
  {
    id: "h32",
    sentence: "The government has promised to take _____ measures to curb inflation.",
    answers: ["stringent", "drastic", "strict", "concrete", "decisive", "firm"],
    hint: "Adjective meaning strict, precise, and exacting.",
  },
  {
    id: "h33",
    sentence: "The judge's ruling was based on a _____ interpretation of the constitution.",
    answers: ["literal", "strict", "liberal", "rigid", "narrow"],
    hint: "Adjective indicating reading text exactly as written.",
  },
  {
    id: "h34",
    sentence: "His contributions to the project were so minor as to be practically _____.",
    answers: ["negligible", "insignificant", "inconsequential", "trivial", "worthless"],
    hint: "Adjective meaning so small or unimportant as to be not worth considering.",
  },
  {
    id: "h35",
    sentence: "The new system is designed to seamlessly _____ with existing databases.",
    answers: ["integrate", "merge", "interface", "link", "blend", "connect"],
    hint: "Verb meaning to combine with another to form a whole.",
  },
  {
    id: "h36",
    sentence: "He is highly qualified, but his lack of experience is a major _____.",
    answers: ["drawback", "disadvantage", "hindrance", "obstacle", "limitation", "setback"],
    hint: "Noun meaning a feature that renders something less acceptable.",
  },
  {
    id: "h37",
    sentence: "Her argument was supported by a wealth of _____ evidence.",
    answers: ["empirical", "factual", "concrete", "solid", "substantial"],
    hint: "Adjective meaning verified by observation or experience rather than theory.",
  },
  {
    id: "h38",
    sentence: "The two countries signed a pact to _____ mutual trade relations.",
    answers: ["foster", "enhance", "boost", "promote", "strengthen", "improve"],
    hint: "Verb meaning to encourage the development of.",
  },
  {
    id: "h39",
    sentence: "His behavior was so erratic that it defied any logical _____.",
    answers: ["explanation", "justification", "analysis", "comprehension", "rationalization"],
    hint: "Noun meaning a statement or account that makes something clear.",
  },
  {
    id: "h40",
    sentence: "The software update is intended to _____ the bugs reported by users.",
    answers: ["resolve", "fix", "remedy", "mitigate", "address", "rectify"],
    hint: "Verb meaning to set right or correct a problem.",
  },
  {
    id: "h41",
    sentence: "The new tax laws have caused widespread _____ among small business owners.",
    answers: ["consternation", "confusion", "anxiety", "dissent", "dissatisfaction", "unrest"],
    hint: "Noun meaning feelings of anxiety or dismay, typically at something unexpected.",
  },
  {
    id: "h42",
    sentence: "The report offers an _____ look into the state of renewable energy.",
    answers: ["in-depth", "exhaustive", "comprehensive", "analytical", "unbiased", "objective"],
    hint: "Adjective meaning detailed and thorough.",
  },
  {
    id: "h43",
    sentence: "The negotiations collapsed because neither side would _____ an inch.",
    answers: ["budge", "yield", "give", "concede"],
    hint: "Idiomatic verb meaning to make the slightest movement or concession.",
  },
  {
    id: "h44",
    sentence: "The new product was launched with a massive advertising _____.",
    answers: ["blitz", "campaign", "drive", "push"],
    hint: "Noun meaning a sudden, energetic, and concerted effort.",
  },
  {
    id: "h45",
    sentence: "He was praised for his _____ handling of the delicate situation.",
    answers: ["tactful", "deft", "skilful", "diplomatic", "prudent", "judicious"],
    hint: "Adjective meaning showing sensitivity and skill in dealing with others.",
  },
  {
    id: "h46",
    sentence: "The changes will be implemented in a _____ manner to minimize disruption.",
    answers: ["phased", "gradual", "step-by-step", "systematic"],
    hint: "Adjective meaning carried out in stages.",
  },
  {
    id: "h47",
    sentence: "The company's profits have been _____ due to intense competition.",
    answers: ["dwindling", "declining", "shrinking", "falling", "eroded", "squeezed"],
    hint: "Verb meaning gradually diminishing in size, amount, or strength.",
  },
  {
    id: "h48",
    sentence: "The program is designed to identify and _____ potential security threats.",
    answers: ["neutralize", "mitigate", "eliminate", "prevent", "address", "defuse"],
    hint: "Verb meaning to render ineffective or harmless.",
  },
  {
    id: "h49",
    sentence: "She was known for her _____ writing style, which avoided unnecessary adjectives.",
    answers: ["succinct", "laconic", "concise", "sparse", "brief"],
    hint: "Adjective meaning briefly and clearly expressed.",
  },
  {
    id: "h50",
    sentence: "The company has gained a _____ hold in the European market.",
    answers: ["firm", "solid", "strong", "secure"],
    hint: "Adjective indicating a secure or stable position.",
  },
  {
    id: "h51",
    sentence: "The new policy was met with _____ protests from the student community.",
    answers: ["vehement", "fierce", "widespread", "strong", "vigorous", "intense"],
    hint: "Adjective meaning showing strong feeling; forceful, passionate, or intense.",
  },
  {
    id: "h52",
    sentence: "The board was _____ in its support for the new environmental measures.",
    answers: ["unanimous", "firm", "strong", "divided"],
    hint: "Adjective indicating complete agreement.",
  },
  {
    id: "h53",
    sentence: "The new law is designed to _____ the rights of independent contractors.",
    answers: ["safeguard", "protect", "ensure", "guarantee"],
    hint: "Verb meaning to protect from harm or damage.",
  },
  {
    id: "h54",
    sentence: "Her research was widely cited due to its _____ contributions to the field.",
    answers: ["significant", "major", "substantial", "profound"],
    hint: "Adjective meaning important or noteworthy.",
  },
  {
    id: "h55",
    sentence: "He was forced to _____ his argument after his methodology was found to be flawed.",
    answers: ["reconsider", "abandon", "change", "modify", "withdraw"],
    hint: "Verb meaning to think about again, especially to make changes.",
  },
];

// Fisher-Yates shuffle algorithm for true randomization
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get randomized questions for a given difficulty
export function getRandomQuestions(difficulty, count = 20) {
  let pool;
  switch (difficulty) {
    case "easy":
      pool = easyQuestions;
      break;
    case "medium":
      pool = mediumQuestions;
      break;
    case "hard":
      pool = hardQuestions;
      break;
    default:
      pool = easyQuestions;
  }
  return shuffleArray(pool).slice(0, count);
}
