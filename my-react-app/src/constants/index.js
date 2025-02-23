import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "EVENTS",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Poster Competition",
    text: "Showcase your research through creative poster presentations on topics like AI, Cybersecurity, Emerging Technologies, and more. Open to all students with teams of up to 4 members.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "🎨 Ignite Creativity, Inspire Innovation! A Poster Presentation is a great way to visually share your work, spark discussions, and build your communication and design skills.",
      topics: [
        "🚀 AI & Machine Learning for Social Good",
        "🔒 Cybersecurity & Blockchain",
        "⚡ Emerging Technologies & Electronics",
        "💻 Computational Sciences & Advanced Engineering",
        "🤖 AI Agents & Future Technologies",
        "🌍 Sustainability & Beyond"
      ],
      guidelines: [
        "The poster should be well-structured and include: Title, Introduction, Objective, Abstract, Methodology, Results, and Conclusion, with high-resolution visuals.",
        "Design must be created using Canva, Adobe Illustrator or other graphic designing tools, with A0 size (48x36 inches, vertical orientation).",
        "All posters must be submitted within deadline, with 5-10 minutes presentation time.",
        "All sources must be properly cited using IEEE or APA format."
      ],
      submission: "Participants are required to submit both a hard copy (mandatory) and a soft copy of their poster at the time of Event.",
      eligibility: [
        "Open to All students",
        "Maximum 4 students are allowed per poster(group)"
      ],
      prizes: "Exciting prizes for Winners",
      contacts: [
        { name: "Sameer sorte", phone: "93224 92678" },
        { name: "Krishna Dhamdhere", phone: "9322872997" }
      ]
    },
    colorful: true,
    imageUrl: roadmap1
  },
  {
    id: "1",
    title: "Fall Guys Tournament",
    text: "Battle it out in Fall Guys: Ultimate Knockout! Individual competition with 40 players per match. Top players advance to the Final Match where the ultimate champion will be crowned.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "🎮 Stumble, Battle, Triumph – Claim the Crown! An exciting individual competition where you battle against everyone to become the ultimate champion.",
      guidelines: [
        "Epic Games Account is mandatory",
        "Ensure you have an account before the event!",
        "The player who survives all levels and wins the final round is the champion!",
        "Players are eliminated as levels get tougher!",
        "If 200 players enter, we will have 5 matches",
        "The winners of each match (5 players) will face off in a Final Match",
        "The Top 3 players from the Final Match will be declared Winners!"
      ],
      submission: "Participants are required to have an Epic Games account before the event.",
      eligibility: [
        "Open to all students",
        "Maximum 1 participant per game"
      ],
      prizes: "Exciting prizes for Winners",
      contacts: [
        { name: "Atharva Kardile", phone: "8625848939" },
        { name: "Megha Teli", phone: "8308124360" }
      ]
    },
    colorful: true,
    imageUrl: roadmap2
  },
  {
    id: "2",
    title: "Promptopia AI Battle Royale",
    text: "Test your prompt engineering skills in this AI competition. Craft precise, creative prompts to generate the best outputs from AI tools. Individual competition with multiple rounds.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "🌟 Showcase Your Skills with a Prompt Engineering Competition! Join Promptopia - the ultimate platform to showcase your innovative prompt engineering skills. Ignite engaging discussions, refine your ability to shape AI responses, and transform the way you interact with technology!",
      guidelines: [
        "Participants will work on a predefined AI platform or tool provided during the competition",
        "No external tools or assistance are allowed",
        "Code of Conduct: Participants must maintain professionalism and respect towards peers and organizers",
        "Disqualification: Plagiarism, offensive content, or late submissions will result in immediate disqualification",
        "Tie-Breaker Rules: Efficiency Score – Highest score wins",
        "Time Factor – Fastest submission (meeting quality standards) wins",
        "Sudden Death Task – A 10-minute challenge judged on creativity and relevance"
      ],
      eligibility: [
        "Open to All students",
        "It is an individual competition"
      ],
      prizes: "Exciting prizes for Winners",
      contacts: [
        { name: "P. Varsha", phone: "+91 7051118842" },
        { name: "Viraj Shah", phone: "+91 9175036206" }
      ]
    },
    colorful: true,
    imageUrl: roadmap3
  },
  {
    id: "3",
    title: "Reels Making Competition",
    text: "Create engaging video content with professional quality standards. Focus on steady footage, proper resolution, and smooth transitions. Online submissions only.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "🎬 Showcase Your Creativity Through Video! Unleash your innovation and storytelling skills in our exciting Reels Making Competition. Stand out with your editing techniques and visual storytelling!",
      guidelines: [
        "Use a tripod or stabilizer for steady footage",
        "16:9 for most videos, 9:16 for vertical content",
        "Capture extra clips for smooth transitions",
        "Use at least 1080p or 4K resolution",
        "24fps for cinematic look, 30fps for general videos, 60fps+ for slow motion",
        "Ensure smooth transitions and natural cuts"
      ],
      submission: "Submit your reel via the provided Google Drive link, email, or designated submission portal.",
      prizes: "Exciting prizes for Winners",
      contacts: [
        { name: "Abhishek Mayanalle", phone: "7058292809" },
        { name: "Nikhil karad", phone: "8483948935" }
      ]
    },
    colorful: true,
    imageUrl: roadmap4
  },
  {
    id: "4",
    title: "Circuit Designing Competition",
    text: "Test your circuit design skills in this team competition. Design, troubleshoot, and optimize circuits. Open to undergraduate students in teams of two.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "⚡ Ultimate Circuit Challenge – Test your circuit design skills! Solve circuit problems and implement solutions within the given time. Showcase problem-solving, innovation, and circuit optimization abilities.",
      guidelines: [
        "Design circuits based on provided problem statements",
        "Follow standard electrical and electronic engineering principles",
        "Simulation tools or breadboard testing are allowed",
        "Maintain respect and professionalism"
      ],
      eligibility: [
        "Open to all Undergraduate students",
        "Teams of two participants"
      ],
      judging_criteria: [
        "Functionality – Does the circuit work as expected?",
        "Efficiency – Optimization of power, space, and components",
        "Innovation – Unique or creative design approaches",
        "Communication – Clarity in documentation and presentation",
        "Ethical Standards – Original designs only; plagiarism leads to disqualification"
      ],
      submission: "Participants must submit circuit designs within the allotted time. Submissions will be evaluated based on circuit diagrams, simulations, or live testing results",
      prizes: "Exciting prizes for Winners",
      contacts: [
        { name: "Ritesh Ghonge", phone: "7666029088" },
        { name: "Chinmay Kulkarni", phone: "7559406620" }
      ]
    },
    colorful: true,
    imageUrl: roadmap1
  },
  {
    id: "5",
    title: "algoCraft",
    text: "Challenge your data structures and algorithms skills through multiple rounds. Solve problems efficiently and compete for the top spot. Registration deadline: March 16, 2025.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "🚀 Think Fast, Code Faster! Are you ready to test your data structures and algorithms skills? algoCraft is a thrilling coding competition designed to challenge your problem-solving abilities and optimize your coding speed.",
      rounds: [
        {
          name: "Round 1: Elimination Round",
          questions: [
            "4 Easy Questions (10 pts each)",
            "3 Medium Questions (20 pts each)",
            "Top 50% of participants will advance to Round 2"
          ]
        },
        {
          name: "Round 2: Advanced Coding Round",
          questions: [
            "1 Easy Question (10 pts)",
            "5 Medium Questions (20 pts each)",
            "3 Hard Questions (30 pts each)"
          ]
        },
        {
          name: "Final Round: Ultimate Challenge",
          questions: [
            "5 Hard Questions (30 pts each)",
            "5 Medium Questions (20 pts each)",
            "Surprise (50 pts)"
          ]
        }
      ],
      guidelines: [
        "Participants must write efficient and optimized code",
        "Code can be written in C, C++ or Java",
        "Solutions must be submitted within the given time limit for each round",
        "Use of online resources or AI tools is strictly prohibited during the contest",
        "Any form of plagiarism will result in immediate disqualification",
        "The judges' decisions are final in case of disputes"
      ],
      submission: "Participants will submit their solutions on the competition portal",
      eligibility: ["Open to all students with programming knowledge"],
      prizes: "Exciting prizes for winners",
      venue: "Mukunddas Lohia Academic Complex, Behind BMCC, 182, Agharkar Road, Shivajinagar, Pune 411 004",
      important_dates: {
        registration_deadline: "16th March 2025",
        event_duration: "Two Days Event"
      },
      contacts: [
        { name: "Krrish Rebbawar", phone: "+91-84 68 971 679" },
        { name: "Ayush Ghodake", phone: "+91-81 80 973 523" },
        { name: "Darshan Patil", phone: "+91-77 75 047 255" }
      ]
    },
    colorful: true,
    imageUrl: roadmap2
  }
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
