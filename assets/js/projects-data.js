/**
 * Centralized Project Database for Tejendra Purohit Portfolio
 * Easily extensible - to add a new project in the future, simply push an object to this array.
 */
const PORTFOLIO_PROJECTS = [
  {
    id: "secretletter",
    slug: "secretletter",
    title: "SecretLetter",
    tagline: "Stateless zero-storage cryptography platform with headless PHP API",
    shortDescription: "A security-first messaging platform using multi-layer OpenSSL encryption with a completely stateless backend architecture where sensitive data is never persisted.",
    featured: true,
    order: 1,
    categories: ["Full-Stack", "Backend", "Security", "Web Application"],
    techStack: ["PHP", "OpenSSL", "JavaScript", "HTML/CSS", "REST API", "MVC"],
    githubUrl: "https://github.com/bluecitydude/SecretLetter_FullCodeStructure",
    liveUrl: "https://secretletter-livid.vercel.app/",
    caseStudyUrl: "projects/secretletter.html",
    thumbnail: "assets/images/projects/secretletter-preview.svg",
    metrics: [
      { label: "Storage Footprint", value: "0 bytes (Stateless)" },
      { label: "Encryption", value: "OpenSSL Multi-layer" },
      { label: "Architecture", value: "Headless Decoupled API" }
    ],
    overview: "SecretLetter is an end-to-end secure messaging platform developed with decoupled static frontend client and a headless PHP API service. The core design principle is absolute zero-persistence: message payloads and cryptographic keys exist solely in memory during the execution lifecycle and are wiped immediately upon response delivery.",
    theProblem: "Conventional secure messaging tools frequently store encrypted payloads or communication metadata in databases, creating persistent targets for forensic recovery or unauthorized database leaks. Users who require transient confidential transmission need an architecture with mathematically verifiable zero-storage guarantees.",
    whatIBuilt: "Engineered a headless REST API with custom MVC routing in native PHP that handles client requests without frameworks. Built custom encryption and decryption handlers leveraging PHP's native OpenSSL module with initialization vector (IV) prepending, base64 formatting, and parameterized passphrases. Built a reactive vanilla client interface with interactive key toggles and instant clipboard export.",
    architecture: {
      type: "Decoupled Headless API",
      steps: [
        { layer: "Client (Browser)", desc: "Static UI captures payload, passphrase, & iteration count" },
        { layer: "JSON API Transport", desc: "HTTPS POST payload to stateless PHP API endpoint" },
        { layer: "Request Middleware", desc: "Validates JSON structure, rate limits, and sanitizes input" },
        { layer: "Controller & Model", desc: "Invokes Encrypter/Decrypter models using OpenSSL ciphers" },
        { layer: "Zero-Storage Output", desc: "Transmits cipher payload immediately; RAM purged, no database writes" }
      ]
    },
    keyFeatures: [
      "Zero-Storage Philosophy: Zero persistence layer ensures forensic privacy",
      "Configurable Multi-Round Iterations: Allows 1 to 5 rounds of cryptographic passes",
      "Decoupled Deployment: Frontend on Vercel edge, PHP backend API containerized independently",
      "Standardized JSON API: Enables external programmatic consumption by other services",
      "Client Validation: Real-time entropy feedback and clean error handling"
    ],
    engineeringDecisions: [
      "Separated Frontend & Backend: Chose a headless API pattern rather than monolithic PHP server rendering, allowing the static frontend to load instantly and scale across CDNs.",
      "Native OpenSSL over Third-Party Libraries: Leveraged standard PHP OpenSSL primitives for predictability, minimal overhead, and strict adherence to cryptographic standards.",
      "Strict MVC Organization: Separated routing middleware, controller handlers, and encryption models cleanly to maintain readable, testable code without enterprise framework bloat."
    ],
    challenges: [
      "Cross-platform IV handling and base64 string padding during multi-pass decryption cycles.",
      "CORS management between static Vercel edge domains and remote API instances while maintaining secure headers."
    ],
    learnings: [
      "Hands-on mastery of symmetric encryption workflows and initialization vectors.",
      "Designing clean headless APIs that treat HTTP status codes and JSON envelopes with production discipline.",
      "Understanding memory lifecycles and why avoiding disk persistence is the strongest defense for ephemeral communications."
    ]
  },
  {
    id: "elyra",
    slug: "elyra",
    title: "Elyra",
    tagline: "Mental wellness web platform with custom PHP backend & authentication engine",
    shortDescription: "BCA final-year mental wellness platform featuring structured MVC architecture, user & admin authentication middleware, and personalized wellness dashboards.",
    featured: true,
    order: 2,
    categories: ["Full-Stack", "Backend", "Web Application", "Academic"],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Authentication", "MVC"],
    githubUrl: "https://github.com/bluecitydude/Elyra-mental-health",
    liveUrl: "http://elyra.ct.ws/",
    caseStudyUrl: "projects/elyra.html",
    thumbnail: "assets/images/projects/elyra-preview.svg",
    metrics: [
      { label: "Role", value: "Backend Engineering Lead" },
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Context", value: "BCA Final Year Capstone" }
    ],
    overview: "Elyra is a comprehensive mental wellness application built as my BCA final year project. While collaborating with frontend teammates, I engineered the entire backend architecture: schema design, session authentication middleware, protected route gates, and database CRUD operations for wellness tracking.",
    theProblem: "Mental health platforms require high data privacy and reliable user journey tracking (mood logging, assessments, personalized recommendations). Building this without heavy bloated frameworks required robust session security, strict request validation, and clean role separation between general users and administrative moderators.",
    whatIBuilt: "Structured a full MVC PHP backend with modular directory separation (`Controller/`, `Model/`, `View/`, `necessary/`). Developed custom authentication middleware (`auth.php` and `admin_auth.php`) that enforces guest redirection, authenticated user sessions, role checks, and database-driven dashboard queries for wellness data.",
    architecture: {
      type: "MVC with Session Middleware",
      steps: [
        { layer: "User Request", desc: "User accesses landing, dashboard, or assessment views" },
        { layer: "Auth Middleware", desc: "Inspects active session tokens and validates role privileges" },
        { layer: "Controllers", desc: "Parses request inputs, verifies CSRF tokens, and processes business logic" },
        { layer: "Data Models", desc: "Executes parameterized SQL queries against MySQL database" },
        { layer: "View Engine", desc: "Renders authenticated dashboards with dynamic wellness logs" }
      ]
    },
    keyFeatures: [
      "Role-Based Access Control: Dedicated user dashboard and protected admin management portal",
      "Custom Authentication Engine: Session management, password hashing, and login state guards",
      "Dynamic Dashboard: Aggregates user wellness assessments and mood history",
      "Theme Personalization: User-selected wellness color schemes stored across sessions",
      "Structured MVC Layout: Clean modular boundaries enabling team collaboration"
    ],
    engineeringDecisions: [
      "Custom Middleware over Heavy CMS: Implemented lightweight `auth.php` middleware guards directly rather than relying on bloated CMS packages, providing total transparency and control over security flow.",
      "Database Normalization: Designed relational MySQL tables for user credentials, mood assessments, and activity logs with foreign key constraints to maintain relational integrity."
    ],
    challenges: [
      "Coordinating frontend template integration with backend dynamic sessions without breaking layout state.",
      "Managing database connection pools and query efficiency on shared hosting environments."
    ],
    learnings: [
      "Translating academic capstone requirements into a dependable, production-ready relational architecture.",
      "Team pair programming, Git collaboration, and owning the backend responsibility of an application.",
      "Securing user input and managing session state across diverse authentication flows."
    ]
  },
  {
    id: "zen-master",
    slug: "zen-master",
    title: "Zen Master",
    tagline: "Interactive patience and focus assessment web application",
    shortDescription: "An interactive assessment platform testing user patience, reflexes, and cognitive perseverance through gamified timer trials and behavioral analytics.",
    featured: false,
    order: 3,
    categories: ["Web Application", "Interactive / Utility"],
    techStack: ["JavaScript", "HTML/CSS", "Bootstrap"],
    githubUrl: "https://github.com/bluecitydude/Zen-master-challenge-How-patient-are-you-",
    liveUrl: "https://patience-test.netlify.app/",
    caseStudyUrl: "projects/zen-master.html",
    thumbnail: "assets/images/projects/zen-master-preview.svg",
    metrics: [
      { label: "Interaction", value: "Real-time DOM Assessment" },
      { label: "Stack", value: "Modern Vanilla JavaScript" },
      { label: "Deployment", value: "Netlify Edge" }
    ],
    overview: "Zen Master is an interactive web experience designed to assess and challenge user patience. It engages users with deceptive timing challenges, deliberate cognitive friction, and progressive behavioral feedback.",
    theProblem: "Modern digital interfaces cater to microsecond attention spans. Zen Master turns this on its head by gamifying patience, calculating delay-tolerance metrics, and visualizing psychological restraint.",
    whatIBuilt: "Developed the dynamic JavaScript engine that orchestrates countdown intervals, event-listener interruption triggers, scoring algorithms, and a sleek dark/light mode UI built on custom CSS and Bootstrap.",
    architecture: {
      type: "Event-Driven State Engine",
      steps: [
        { layer: "User Interaction", desc: "User initiates assessment or responds to behavioral prompts" },
        { layer: "Timer & Event Engine", desc: "JavaScript state machine tracks elapsed time and click interruptions" },
        { layer: "Scoring Metric", desc: "Calculates focus percentile based on impulse resistance" },
        { layer: "Visual Feedback", desc: "Real-time DOM updates render outcome animations and guidance" }
      ]
    },
    keyFeatures: [
      "Precision Event Tracking: Tracks user impulse timing down to the millisecond",
      "Dynamic Score Evaluation: Tiered scoring categorizing user patience thresholds",
      "Accessible Theming: Integrated dark/light mode toggle with smooth contrast transitions",
      "Responsive UI: Fluid experience optimized across mobile touchscreens and desktops"
    ],
    engineeringDecisions: [
      "State-Driven State Machine: Managed quiz phases with simple pure JavaScript state objects rather than bloated external libraries, guaranteeing zero lag during timing trials."
    ],
    challenges: [
      "Ensuring accurate timer intervals across browser background tabs without drifting.",
      "Fine-tuning cognitive challenge curves to keep the interaction engaging rather than frustrating."
    ],
    learnings: [
      "Deep understanding of browser timing APIs (`requestAnimationFrame`, `setTimeout`, `performance.now()`).",
      "Designing UI interactions that elicit genuine user emotional feedback and engagement."
    ]
  },
  {
    id: "sporty-countdown",
    slug: "sporty-countdown",
    title: "Sporty Countdown",
    tagline: "High-precision animated timer & counter utility",
    shortDescription: "A responsive, animated countdown timer and interval tool featuring custom display typography, smooth state transitions, and responsive controls.",
    featured: false,
    order: 4,
    categories: ["Interactive / Utility", "Web Application"],
    techStack: ["JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/bluecitydude/Basic-Counter",
    liveUrl: "https://basiccountertej.netlify.app/",
    caseStudyUrl: "projects/sporty-countdown.html",
    thumbnail: "assets/images/projects/counter-preview.svg",
    metrics: [
      { label: "Engine", value: "Vanilla JS Timer" },
      { label: "Styling", value: "Custom CSS Keyframes" },
      { label: "Performance", value: "Zero Dependencies" }
    ],
    overview: "A lightweight workout and interval countdown tool engineered with Vanilla JavaScript and custom CSS keyframe animations, emphasizing smooth numerical updates and mobile ergonomy.",
    theProblem: "Many generic countdown utilities on the web are either bloated with ad scripts or lack tactile visual feedback during active countdown cycles.",
    whatIBuilt: "Crafted a clean standalone counter application with start/pause/reset states, dynamic input validation, and high-contrast digital typography.",
    architecture: {
      type: "Client-Side Interval Machine",
      steps: [
        { layer: "Input Controls", desc: "User defines duration and countdown targets" },
        { layer: "Interval Handler", desc: "Manages active decrement ticks and handles pause/resume buffers" },
        { layer: "Animation Renderer", desc: "Applies CSS transform keyframes on second changes" },
        { layer: "Completion Alert", desc: "Triggers visual state completion indicator" }
      ]
    },
    keyFeatures: [
      "Interval Validation: Prevents negative values and bounds inputs to valid numbers",
      "Responsive Layout: Large legible numerals readable during physical activity",
      "Pure Vanilla Implementation: Zero dependencies, loads in under 50ms"
    ],
    engineeringDecisions: [
      "Pure CSS Keyframes: Handled digit transitions using hardware-accelerated CSS transforms rather than JS layout recalcs."
    ],
    challenges: [
      "Preventing timer double-invocation bugs when users rapidly tap 'Start' multiple times."
    ],
    learnings: [
      "Managing timer IDs and defensive state cleansing in JavaScript.",
      "The value of building focused, highly responsive utility tools."
    ]
  },
  {
    id: "tejendra-presents",
    slug: "tejendra-presents",
    title: "TejendraPresents",
    tagline: "Curated technical presentations on Cloud Computing & Cybersecurity",
    shortDescription: "An interactive presentation hub showcasing deep dives into cloud architecture patterns, threat modeling, and distributed infrastructure fundamentals.",
    featured: false,
    order: 5,
    categories: ["Security", "Web Application"],
    techStack: ["JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/bluecitydude/TejendraPresents",
    liveUrl: "https://tejendra-presents.vercel.app/",
    caseStudyUrl: "projects/tejendra-presents.html",
    thumbnail: "assets/images/projects/presents-preview.svg",
    metrics: [
      { label: "Focus", value: "Cloud & Cybersecurity" },
      { label: "Architecture", value: "Single-Page Interactive" },
      { label: "Deployment", value: "Vercel Edge" }
    ],
    overview: "TejendraPresents is a technical presentation showcase dedicated to making complex Cloud Computing and Cybersecurity principles accessible, visually engaging, and structured.",
    theProblem: "Technical slides often exist as static PDFs without interactive structure, making it difficult for peers and recruiters to explore specific case studies and architectural patterns on the web.",
    whatIBuilt: "Built a cyber-aesthetic interactive presentation showcase featuring categorized technical decks on cloud migration, zero-trust security concepts, and security audits.",
    architecture: {
      type: "Interactive Content Portal",
      steps: [
        { layer: "Deck Selector", desc: "User toggles between Cloud Computing and Cybersecurity topics" },
        { layer: "Interactive Canvas", desc: "Lightweight canvas ambient background enhances focus" },
        { layer: "Slide Viewer", desc: "Custom card-based navigation presents architecture case studies" }
      ]
    },
    keyFeatures: [
      "Topic Organization: Clear division between Cloud Computing and Cybersecurity",
      "Hardware-Accelerated Ambient Canvas: Subtle interactive particle backdrop",
      "Accessible Navigation: Mobile drawer menu and keyboard-friendly controls"
    ],
    engineeringDecisions: [
      "Modular Slide Components: Structured topic cards so new technical presentations can be added directly via simple HTML blocks."
    ],
    challenges: [
      "Keeping canvas animation smooth on lower-end mobile devices while maintaining 60fps."
    ],
    learnings: [
      "Synthesizing complex technical topics into concise architecture summaries.",
      "Optimizing canvas render loops to respect power and frame budgets."
    ]
  }
];

if (typeof window !== "undefined") {
  window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_PROJECTS;
}
