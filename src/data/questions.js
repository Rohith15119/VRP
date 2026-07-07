// Verbal Ability - Sentence Completion Question Bank (Fill-in-the-Blanks Template)
// Curated specifically for TCS NQT Verbal Ability preparation.
// Focuses on: Prepositions, Conjunctions, Vocabulary, and Idioms (NO phrasal verbs).
// Contains 40+ questions per difficulty level to ensure true randomized subsets of 20 each attempt.
// Each question has multiple acceptable synonyms. The first element is the primary/best answer.

export const easyQuestions = [
  // --- USER'S ERROR BANK (The 20 questions they struggled with) ---
  {
    id: "e1",
    sentence: "She _____ her friend a birthday card.",
    answers: ["sent", "mailed", "wrote", "posted", "gave"],
    hint: "Think: We send cards, but we give gifts.",
  },
  {
    id: "e2",
    sentence: "The teacher asked the students to _____ their homework by Friday.",
    answers: ["submit", "hand in", "turn in", "complete", "finish", "do"],
    hint: "To officially hand in an assignment.",
  },
  {
    id: "e3",
    sentence: "It is important to _____ regularly to stay healthy.",
    answers: ["exercise", "train", "workout", "jog", "run", "walk"],
    hint: "Physical activity for fitness (distinct from diet, which relates to food).",
  },
  {
    id: "e4",
    sentence: "He was very _____ to receive the award.",
    answers: ["happy", "glad", "delighted", "thrilled", "pleased", "proud", "honored"],
    hint: "A feeling of joy and pleasure upon receiving recognition.",
  },
  {
    id: "e5",
    sentence: "The night sky was _____ with thousands of stars.",
    answers: ["filled", "studded", "covered", "bright", "sparkling"],
    hint: "Pattern: '_____ with' + noun.",
  },
  {
    id: "e6",
    sentence: "The cake was _____ by everyone at the party.",
    answers: ["enjoyed", "liked", "loved", "appreciated", "eaten", "consumed"],
    hint: "Passive voice: 'The cake was _____ by everyone' means everyone liked it.",
  },
  {
    id: "e7",
    sentence: "He felt _____ after running the marathon.",
    answers: ["exhausted", "tired", "fatigued", "drained", "spent", "weary"],
    hint: "Refers to being extremely tired (Tired < Very tired < Exhausted).",
  },
  {
    id: "e8",
    sentence: "He _____ the door quietly so as not to wake the baby.",
    answers: ["closed", "shut", "latched", "pulled", "pushed"],
    hint: "To shut a doorway to prevent noise.",
  },
  {
    id: "e9",
    sentence: "They decided to _____ the old building into a museum.",
    answers: ["convert", "transform", "turn", "change", "rebuild", "make"],
    hint: "Pattern: '_____ A into B' (to change into another form).",
  },
  {
    id: "e10",
    sentence: "The movie was so _____ that the audience gave a standing ovation.",
    answers: ["impressive", "outstanding", "amazing", "incredible", "wonderful", "great", "excellent"],
    hint: "Causing admiration or making a strong positive impact.",
  },
  {
    id: "e11",
    sentence: "The road was _____ due to heavy rainfall.",
    answers: ["flooded", "blocked", "waterlogged", "impassable", "closed", "muddy"],
    hint: "Covered with water because of rain.",
  },
  {
    id: "e12",
    sentence: "The bridge was _____ over a wide river.",
    answers: ["built", "constructed", "made", "erected", "created"],
    hint: "Constructed or created (built is the most common form).",
  },
  {
    id: "e13",
    sentence: "The weather was very _____ during the winter season.",
    answers: ["cold", "chilly", "freezing", "harsh", "severe", "frosty"],
    hint: "Having a low temperature.",
  },
  {
    id: "e14",
    sentence: "The flowers in the garden looked very _____.",
    answers: ["beautiful", "pretty", "lovely", "gorgeous", "attractive", "colorful", "fresh", "bright"],
    hint: "Very attractive and pleasing to the eye.",
  },
  {
    id: "e15",
    sentence: "She was so _____ that she could not stop laughing.",
    answers: ["amused", "entertained", "happy", "giddy", "tickled", "excited"],
    hint: "Use 'amused' to describe the person's feeling, whereas 'funny' describes the thing itself.",
  },
  {
    id: "e16",
    sentence: "The student _____ hard for the final examination.",
    answers: ["studied", "prepared", "worked", "revised", "learned"],
    hint: "To read or learn to gain knowledge (we practice skills like coding, but study for exams).",
  },
  {
    id: "e17",
    sentence: "Water is _____ for the survival of all living beings.",
    answers: ["essential", "vital", "necessary", "crucial", "needed", "important"],
    hint: "Absolutely necessary or indispensable.",
  },
  {
    id: "e18",
    sentence: "She _____ a beautiful painting for the art competition.",
    answers: ["created", "made", "painted", "drew", "produced", "submitted"],
    hint: "Verb indicating she made a new piece of art.",
  },
  {
    id: "e19",
    sentence: "He always _____ to school on time.",
    answers: ["arrives", "comes", "gets", "goes", "walks", "runs"],
    hint: "To reach a destination ('Arrives' means reach, whereas 'goes' means travel).",
  },
  {
    id: "e20",
    sentence: "The baby _____ peacefully in the cradle.",
    answers: ["slept", "rested", "lay", "slumbered", "dozed"],
    hint: "Past tense of sleep.",
  },

  // --- ADDITIONAL EASY QUESTIONS FOR VARIETY (e21 - e42) ---
  {
    id: "e21",
    sentence: "The conference will take place _____ Wednesday morning.",
    answers: ["on", "this", "next"],
    hint: "Preposition used before days of the week.",
  },
  {
    id: "e22",
    sentence: "He went to the library _____ order to find a quiet study space.",
    answers: ["in", "with"],
    hint: "Phrase expressing purpose: '_____ order to'.",
  },
  {
    id: "e23",
    sentence: "She is very good _____ mathematics and logical reasoning.",
    answers: ["at", "in", "with"],
    hint: "Preposition indicating competence in a subject.",
  },
  {
    id: "e24",
    sentence: "_____ it was late, the developers kept working on the bug.",
    answers: ["although", "though", "even though", "while"],
    hint: "Conjunction indicating contrast or concession.",
  },
  {
    id: "e25",
    sentence: "You will receive the login link _____ you register on the portal.",
    answers: ["if", "once", "when", "after", "provided"],
    hint: "Conjunction expressing condition or time sequence.",
  },
  {
    id: "e26",
    sentence: "The phone rang _____ he was writing the email.",
    answers: ["while", "when", "as"],
    hint: "Conjunction indicating simultaneous actions.",
  },
  {
    id: "e27",
    sentence: "Please turn _____ the computer when you are finished.",
    answers: ["off", "down"],
    hint: "Opposite of turn on.",
  },
  {
    id: "e28",
    sentence: "The office remains closed _____ Sundays.",
    answers: ["on", "every"],
    hint: "Preposition used for calendar days.",
  },
  {
    id: "e29",
    sentence: "He has been living in New York _____ three years.",
    answers: ["for"],
    hint: "Preposition used to express a duration of time.",
  },
  {
    id: "e30",
    sentence: "We should arrive _____ the airport early to check in.",
    answers: ["at", "in"],
    hint: "Preposition used for specific coordinates or places.",
  },
  {
    id: "e31",
    sentence: "The manager was pleased _____ the team's presentation.",
    answers: ["with", "by", "about"],
    hint: "Preposition following 'pleased' to show satisfaction.",
  },
  {
    id: "e32",
    sentence: "They had to delay the launch _____ to server issues.",
    answers: ["due", "owing"],
    hint: "Phrase meaning 'because of' when followed by 'to'.",
  },
  {
    id: "e33",
    sentence: "She has registered _____ the python coding challenge.",
    answers: ["for", "in"],
    hint: "Preposition following 'registered'.",
  },
  {
    id: "e34",
    sentence: "He excels _____ programming in Java.",
    answers: ["in", "at"],
    hint: "Preposition indicating a field of excellence.",
  },
  {
    id: "e35",
    sentence: "We walked _____ the corridor to reach the meeting room.",
    answers: ["down", "through", "along"],
    hint: "Preposition indicating direction or passage.",
  },
  {
    id: "e36",
    sentence: "The coffee was _____ hot for me to drink immediately.",
    answers: ["too", "so", "very"],
    hint: "Adverb meaning excessively.",
  },
  {
    id: "e37",
    sentence: "He is interested _____ learning web development.",
    answers: ["in", "on"],
    hint: "Preposition indicating attention or desire.",
  },
  {
    id: "e38",
    sentence: "You must choose _____ these two programming tracks.",
    answers: ["between", "from"],
    hint: "Preposition used when selecting between two options.",
  },
  {
    id: "e39",
    sentence: "The project got _____ a rocky start but ended well.",
    answers: ["off to", "to"],
    hint: "Collocation: To get _____ a start.",
  },
  {
    id: "e40",
    sentence: "I cannot agree _____ you on this strategy.",
    answers: ["with", "to", "on"],
    hint: "Preposition following 'agree' when referring to a person.",
  },
  {
    id: "e41",
    sentence: "The leaves fall from the trees _____ autumn.",
    answers: ["in", "during"],
    hint: "Preposition used for seasons.",
  },
  {
    id: "e42",
    sentence: "She is married _____ a famous software architect.",
    answers: ["to", "with"],
    hint: "Preposition that follows 'married' in standard grammar.",
  },
];

export const mediumQuestions = [
  // --- COLLOCATIONS & HIGH FREQUENCY VOCABULARY ---
  {
    id: "m1",
    sentence: "The CEO had to _____ a difficult decision regarding the project budget.",
    answers: ["make", "take", "reach", "finalize"],
    hint: "Collocation: We _____ a decision.",
  },
  {
    id: "m2",
    sentence: "The match was called off because of _____ rain.",
    answers: ["heavy", "torrential", "continuous", "hard"],
    hint: "Collocation: We say _____ rain (not strong rain).",
  },
  {
    id: "m3",
    sentence: "You must _____ attention to the instructions during the exam.",
    answers: ["pay", "give", "show"],
    hint: "Collocation: To listen or watch closely.",
  },
  {
    id: "m4",
    sentence: "The detective was able to _____ a logical conclusion from the evidence.",
    answers: ["draw", "reach", "make", "formulate"],
    hint: "Collocation: To _____ a conclusion.",
  },
  {
    id: "m5",
    sentence: "We finally managed to _____ our destination after a long journey.",
    answers: ["reach", "arrive at", "get to"],
    hint: "Collocation: To reach or arrive at a place.",
  },
  {
    id: "m6",
    sentence: "The engineer was hired because she was a _____ learner.",
    answers: ["fast", "quick", "rapid"],
    hint: "Collocation: Someone who learns things very quickly.",
  },
  {
    id: "m7",
    sentence: "She is a _____ qualified software engineer with five years of experience.",
    answers: ["highly", "very", "fully", "well"],
    hint: "Collocation: Extremely qualified.",
  },
  {
    id: "m8",
    sentence: "The team will _____ research on artificial intelligence next term.",
    answers: ["conduct", "do", "perform", "carry out"],
    hint: "Collocation: To do research.",
  },
  {
    id: "m9",
    sentence: "The two files are _____ related in terms of coding structure.",
    answers: ["closely", "directly", "highly", "strongly"],
    hint: "Collocation: Very near or similar.",
  },
  {
    id: "m10",
    sentence: "This framework will help developers _____ experience in backend technologies.",
    answers: ["gain", "get", "acquire", "obtain"],
    hint: "Collocation: To acquire experience.",
  },
  {
    id: "m11",
    sentence: "We must find a way to _____ the expenses to stay within budget.",
    answers: ["reduce", "decrease", "cut", "limit", "lower"],
    hint: "Verb meaning to make smaller in size, amount, or degree.",
  },
  {
    id: "m12",
    sentence: "The security system will _____ unauthorized access to the server.",
    answers: ["prevent", "block", "restrict", "stop", "avoid"],
    hint: "Verb meaning to keep something from happening.",
  },
  {
    id: "m13",
    sentence: "The client decided to _____ our project proposal due to high costs.",
    answers: ["reject", "decline", "refuse", "turn down"],
    hint: "Verb meaning to dismiss or refuse to accept.",
  },
  {
    id: "m14",
    sentence: "It is important to _____ a clean database to prevent errors.",
    answers: ["maintain", "keep", "ensure", "preserve"],
    hint: "Verb meaning to cause or enable to continue.",
  },
  {
    id: "m15",
    sentence: "The company managed to _____ its quarterly target successfully.",
    answers: ["achieve", "reach", "hit", "attain", "meet"],
    hint: "Verb meaning to reach or accomplish a goal.",
  },
  {
    id: "m16",
    sentence: "The new coding editor is highly _____ and responsive.",
    answers: ["efficient", "effective", "fast", "useful", "reliable"],
    hint: "Adjective meaning working productively without wasting time.",
  },
  {
    id: "m17",
    sentence: "The server crash caused a _____ delay in the deployment timeline.",
    answers: ["significant", "major", "huge", "substantial", "serious"],
    hint: "Adjective meaning important or noteworthy.",
  },
  {
    id: "m18",
    sentence: "The candidate gave a _____ performance during the technical round.",
    answers: ["remarkable", "outstanding", "impressive", "brilliant", "stellar"],
    hint: "Adjective meaning worthy of attention; striking.",
  },
  {
    id: "m19",
    sentence: "This tool is very _____ for detecting syntax errors in Python.",
    answers: ["useful", "helpful", "effective", "efficient", "handy"],
    hint: "Adjective meaning able to be used for a practical purpose.",
  },
  {
    id: "m20",
    sentence: "She provided _____ data to support her research conclusions.",
    answers: ["accurate", "precise", "reliable", "solid", "correct"],
    hint: "Adjective meaning correct in all details; exact.",
  },

  // --- ADDITIONAL MEDIUM QUESTIONS FOR VARIETY (m21 - m40) ---
  {
    id: "m21",
    sentence: "The argument was based _____ the data gathered from the survey.",
    answers: ["on", "upon"],
    hint: "Preposition following 'based' to show foundation.",
  },
  {
    id: "m22",
    sentence: "He has a strong aversion _____ waking up early in the morning.",
    answers: ["to", "towards", "for"],
    hint: "Preposition meaning dislike or opposition.",
  },
  {
    id: "m23",
    sentence: "She is capable _____ handling difficult tasks under pressure.",
    answers: ["of", "for"],
    hint: "Preposition following 'capable'.",
  },
  {
    id: "m24",
    sentence: "He was advised to refrain _____ making personal comments.",
    answers: ["from", "of"],
    hint: "Preposition meaning to stop oneself from doing something.",
  },
  {
    id: "m25",
    sentence: "The changes were made in accordance _____ the new regulations.",
    answers: ["with", "to"],
    hint: "Preposition following 'in accordance' meaning conforming to.",
  },
  {
    id: "m26",
    sentence: "She was completely oblivious _____ the noise outside.",
    answers: ["to", "of"],
    hint: "Preposition meaning not aware of or not noticing.",
  },
  {
    id: "m27",
    sentence: "The new system is compatible _____ older computers.",
    answers: ["with", "to"],
    hint: "Preposition meaning able to exist together without conflict.",
  },
  {
    id: "m28",
    sentence: "The manager was reluctant to commit _____ a final budget.",
    answers: ["to", "on"],
    hint: "Preposition following 'commit'.",
  },
  {
    id: "m29",
    sentence: "He took great pride _____ completing the assignment on his own.",
    answers: ["in", "with"],
    hint: "Preposition following 'pride'.",
  },
  {
    id: "m30",
    sentence: "We arrived _____ a decision after debating for two hours.",
    answers: ["at", "to", "on"],
    hint: "Preposition following 'arrived' when referring to a conclusion.",
  },
  {
    id: "m31",
    sentence: "The project was successful _____ the technical problems we faced.",
    answers: ["despite", "in spite of", "notwithstanding"],
    hint: "Conjunction indicating contrast (followed by a noun/phrase).",
  },
  {
    id: "m32",
    sentence: "We will proceed _____ we receive further objections from the client.",
    answers: ["unless", "until", "if"],
    hint: "Conjunction meaning 'except if'.",
  },
  {
    id: "m33",
    sentence: "He was offered the job, _____ he decided to decline it.",
    answers: ["yet", "but", "however", "nevertheless"],
    hint: "Conjunction indicating contradiction.",
  },
  {
    id: "m34",
    sentence: "_____ the traffic was sparse, we reached the center quickly.",
    answers: ["since", "because", "as", "seeing that"],
    hint: "Conjunction indicating reason.",
  },
  {
    id: "m35",
    sentence: "You must register now, _____ you will miss the placement drive.",
    answers: ["otherwise", "else", "or"],
    hint: "Conjunction showing negative consequence.",
  },
  {
    id: "m36",
    sentence: "Please _____ your email address before submitting the form.",
    answers: ["verify", "check", "confirm", "validate"],
    hint: "Verb meaning to make sure that something is correct.",
  },
  {
    id: "m37",
    sentence: "The government plans to _____ new laws to protect consumer rights.",
    answers: ["introduce", "enact", "implement", "pass", "create"],
    hint: "Verb meaning to start or bring into effect.",
  },
  {
    id: "m38",
    sentence: "We need to _____ the code to find the source of the error.",
    answers: ["analyze", "examine", "check", "inspect", "review"],
    hint: "Verb meaning to examine in detail.",
  },
  {
    id: "m39",
    sentence: "The CEO was impressed _____ the technical expertise of the team.",
    answers: ["by", "with", "at"],
    hint: "Preposition following 'impressed'.",
  },
  {
    id: "m40",
    sentence: "He has a great talent _____ playing the violin.",
    answers: ["for", "in"],
    hint: "Preposition following the noun 'talent'.",
  },
];

export const hardQuestions = [
  // --- IDIOMS BANK ---
  {
    id: "h1",
    sentence: "She had to burn the _____ oil to complete the project before the deadline.",
    answers: ["midnight"],
    hint: "Idiom meaning to read or work late into the night (burn the _____ oil).",
  },
  {
    id: "h2",
    sentence: "Such opportunities come only once in a _____ moon, so do not miss it.",
    answers: ["blue"],
    hint: "Idiom meaning very rarely (once in a _____ moon).",
  },
  {
    id: "h3",
    sentence: "The icebreaker activity helped the team members to break the _____.",
    answers: ["ice"],
    hint: "Idiom meaning to relieve tension or start a conversation (break the _____).",
  },
  {
    id: "h4",
    sentence: "Don't spill the _____ about the surprise promotion before the announcement.",
    answers: ["beans"],
    hint: "Idiom meaning to reveal secret information (spill the _____).",
  },
  {
    id: "h5",
    sentence: "He missed the _____ because he delayed submitting his application.",
    answers: ["boat", "bus"],
    hint: "Idiom meaning to miss an opportunity (miss the _____).",
  },
  {
    id: "h6",
    sentence: "Your analysis of the database glitch hit the nail on the _____.",
    answers: ["head"],
    hint: "Idiom meaning to describe exactly what is causing a situation (hit the nail on the _____).",
  },
  {
    id: "h7",
    sentence: "I am feeling a bit under the _____ today, so I might skip the coding session.",
    answers: ["weather"],
    hint: "Idiom meaning to feel slightly unwell (under the _____).",
  },
  {
    id: "h8",
    sentence: "We had to bite the _____ and accept the budget cuts to keep the project alive.",
    answers: ["bullet"],
    hint: "Idiom meaning to face a difficult situation with courage (bite the _____).",
  },
  {
    id: "h9",
    sentence: "The new framework is excellent, but licensing costs an arm and a _____.",
    answers: ["leg"],
    hint: "Idiom meaning to be extremely expensive (cost an arm and a _____).",
  },
  {
    id: "h10",
    sentence: "Losing that client was a blessing in _____ because we found a much better project.",
    answers: ["disguise"],
    hint: "Idiom meaning a misfortune that eventually results in something good.",
  },
  {
    id: "h11",
    sentence: "The project manager told us to keep our chin _____ despite the delays.",
    answers: ["up"],
    hint: "Idiom meaning to remain cheerful in a difficult situation (keep your chin _____).",
  },
  {
    id: "h12",
    sentence: "He was on cloud _____ after securing the job at TCS NQT.",
    answers: ["nine", "9"],
    hint: "Idiom meaning to be extremely happy (on cloud _____).",
  },
  {
    id: "h13",
    sentence: "Let's call it a _____ and resume the debugging tomorrow morning.",
    answers: ["day"],
    hint: "Idiom meaning to stop working for the rest of the day (call it a _____).",
  },
  {
    id: "h14",
    sentence: "They decided to face the _____ and admit their coding error to the client.",
    answers: ["music"],
    hint: "Idiom meaning to accept the unpleasant consequences of one's actions (face the _____).",
  },
  {
    id: "h15",
    sentence: "She has been feeling butterflies in her _____ before the technical interview.",
    answers: ["stomach"],
    hint: "Idiom meaning to feel nervous or anxious.",
  },
  {
    id: "h16",
    sentence: "We must get our act _____ if we want to finish the sprint on time.",
    answers: ["together"],
    hint: "Idiom meaning to organize oneself to perform effectively.",
  },
  {
    id: "h17",
    sentence: "The manager's speech really added fuel to the _____ during the argument.",
    answers: ["fire", "flames"],
    hint: "Idiom meaning to make a bad situation even worse.",
  },
  {
    id: "h18",
    sentence: "He has a habit of leaving things to the eleventh _____ before starting.",
    answers: ["hour"],
    hint: "Idiom meaning at the last possible moment (eleventh _____).",
  },
  {
    id: "h19",
    sentence: "It's no use crying over spilled _____ since we cannot change the past.",
    answers: ["milk"],
    hint: "Idiom meaning to worry about things that have already happened and cannot be changed.",
  },
  {
    id: "h20",
    sentence: "They are still in the dark and don't know the first _____ about the new database.",
    answers: ["thing"],
    hint: "Idiom meaning to know nothing at all about a subject.",
  },

  // --- ADDITIONAL HARD QUESTIONS FOR VARIETY (h21 - h40) ---
  {
    id: "h21",
    sentence: "His behavior was not _____ with the values of our organization.",
    answers: ["consistent", "compatible", "aligned", "congruent"],
    hint: "Adjective meaning in agreement or harmony with.",
  },
  {
    id: "h22",
    sentence: "She remained calm and focused _____ the chaotic environment.",
    answers: ["amid", "amidst", "despite", "throughout"],
    hint: "Preposition meaning in the middle of or surrounded by.",
  },
  {
    id: "h23",
    sentence: "The contract was signed _____ prior consultation with the legal advisor.",
    answers: ["without", "after", "following"],
    hint: "Preposition indicating absence or presence of prior action.",
  },
  {
    id: "h24",
    sentence: "The program was discontinued due to its _____ high operational cost.",
    answers: ["prohibitively", "extremely", "exorbitantly", "highly"],
    hint: "Adverb meaning to a degree that prevents or forbids something.",
  },
  {
    id: "h25",
    sentence: "We must avoid making _____ statements without concrete evidence.",
    answers: ["sweeping", "broad", "general", "hasty", "unwarranted"],
    hint: "Adjective meaning wide-ranging or oversimplified.",
  },
  {
    id: "h26",
    sentence: "The device is built to operate under _____ environmental conditions.",
    answers: ["extreme", "adverse", "severe", "harsh", "difficult"],
    hint: "Adjective meaning unfavorable or very challenging.",
  },
  {
    id: "h27",
    sentence: "The decision was made in _____ of our long-term growth plan.",
    answers: ["pursuit", "furtherance", "support"],
    hint: "Noun meaning the action of trying to achieve something.",
  },
  {
    id: "h28",
    sentence: "He was accused of using _____ methods to bypass the security wall.",
    answers: ["deceptive", "unfair", "underhanded", "devious", "cunning"],
    hint: "Adjective meaning dishonest or sneaky.",
  },
  {
    id: "h29",
    sentence: "The new rules are not _____ to candidates who registered early.",
    answers: ["applicable", "relevant", "applied"],
    hint: "Adjective meaning relevant or appropriate.",
  },
  {
    id: "h30",
    sentence: "Her research was praised for its _____ contributions to quantum physics.",
    answers: ["significant", "profound", "major", "substantial", "great"],
    hint: "Adjective meaning having great depth or impact.",
  },
  {
    id: "h31",
    sentence: "_____ had they deployed the patch than the server crashed again.",
    answers: ["no sooner", "scarcely", "hardly"],
    hint: "Correlative conjunction pair starting with 'No sooner' used with 'than'.",
  },
  {
    id: "h32",
    sentence: "_____ how hard they tried, they could not recover the deleted database.",
    answers: ["no matter", "regardless of", "however"],
    hint: "Phrase meaning 'without being affected by'.",
  },
  {
    id: "h33",
    sentence: "He refused to sign the deal _____ they agreed to his terms.",
    answers: ["unless", "until", "except if"],
    hint: "Conjunction meaning 'if not'.",
  },
  {
    id: "h34",
    sentence: "We decided to continue the launch, _____ the potential security warning.",
    answers: ["despite", "notwithstanding", "ignoring", "regardless of"],
    hint: "Conjunction indicating concession.",
  },
  {
    id: "h35",
    sentence: "The update was rolled back _____ after several errors were reported.",
    answers: ["immediately", "shortly", "soon"],
    hint: "Adverb meaning without delay.",
  },
  {
    id: "h36",
    sentence: "Adding wrong parameters will only _____ the compilation error.",
    answers: ["exacerbate", "aggravate", "worsen", "increase"],
    hint: "Verb meaning to make a problem or bad situation worse.",
  },
  {
    id: "h37",
    sentence: "The current system was unable to _____ the load during peak traffic hours.",
    answers: ["withstand", "handle", "bear", "manage", "sustain"],
    hint: "Verb meaning to hold out against or remain undamaged.",
  },
  {
    id: "h38",
    sentence: "The government has taken _____ measures to regulate internet piracy.",
    answers: ["stringent", "drastic", "strict", "concrete", "decisive"],
    hint: "Adjective meaning strict, precise, and exacting.",
  },
  {
    id: "h39",
    sentence: "The judge's ruling was based on a _____ reading of the guidelines.",
    answers: ["literal", "strict", "rigid", "narrow"],
    hint: "Adjective meaning exactly as written; not metaphorical.",
  },
  {
    id: "h40",
    sentence: "His contribution to the project was so minor as to be _____.",
    answers: ["negligible", "insignificant", "inconsequential", "trivial", "minor"],
    hint: "Adjective meaning so small or unimportant as to be not worth considering.",
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
