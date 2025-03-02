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

import roadmap5 from "../assets/roadmap/image-5.png";
import roadmap6 from "../assets/roadmap/image-6.png";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Events",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Schedule",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Benefits",
    url: "#features",
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
    imageUrl: roadmap5
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
    text: "🎥 Showcase Your Creativity & Capture the Spirit of Navonmesh 2025! Create engaging Instagram reels highlighting the technological innovations and exciting moments of the event.",
    date: "Navonmesh 2025",
    status: "progress",
    details: {
      description: "Unleash your creativity and storytelling skills in the Reel Making Competition at Navonmesh 2025, the flagship technology event of DES Pune University! Capture the most exciting moments, blending creativity with clear and effective technology communication, highlight key insights, and share your unique perspective through engaging reels.",
      guidelines: [
        "Theme: Event Highlights of Navonmesh 2025",
        "Platform: Instagram Reels",
        "Mandatory Hashtag: #DESPU",
        "Maximum Duration: 30 seconds",
        "Video Orientation: Vertical (Instagram Standard)",
        "Resolution: 720p or higher"
      ],
      technical_specs: {
        frame_rates: [
          "24fps for a cinematic look",
          "30fps for standard reels",
          "60fps+ for smooth slow-motion shots"
        ],
        filming_tips: [
          "Focus on key moments and impactful highlights",
          "Use a tripod or stabilizer for steady shots",
          "Capture extra clips for smooth transitions",
          "Ensure seamless edits and natural cuts"
        ]
      },
      evaluation_criteria: [
        "Showcasing Technology: Highlight innovative technologies, experiments, or engineering principles",
        "Clarity & Conciseness: Present the subject in a crisp and engaging manner",
        "Scientific Depth: Add insightful context through captions, overlays, or narration"
      ],
      important_guidelines: [
        "Appropriate Content: Reels must maintain professionalism and avoid slang",
        "Responsible Filming: Content must be suitable for public platforms"
      ],
      disclaimer: "This competition is an educational initiative. Participants retain full ownership of their reels and are solely responsible for their content. DES Pune University bears no liability for any submissions.",
      submission: "Submit your reel by posting it on Instagram with the hashtag #DESPU and sending the link to the organizers.",
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
    imageUrl: roadmap6
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
    title: "Day 1 - March 16, 2025",
    description: "Opening Day Events",
    features: [
      "9:00 AM - Registration Begins",
      "10:00 AM - Poster Competition Setup",
      "11:00 AM - algoCraft Round 1",
      "2:00 PM - Circuit Design Competition",
      "4:00 PM - Fall Guys Tournament"
    ],
  },
  {
    id: "1",
    title: "Day 2 - March 17, 2025",
    description: "Main Competition Day",
    features: [
      "9:00 AM - algoCraft Round 2",
      "11:00 AM - Promptopia AI Battle",
      "2:00 PM - Reels Competition",
      "4:00 PM - algoCraft Finals",
      "6:00 PM - Awards Ceremony"
    ],
  },
  {
    id: "2",
    title: "Important Notes",
    description: "Event Information",
    features: [
      "Venue: DES Pune University",
      "Bring Valid ID Cards",
      "Registration Required",
      "Refreshments Provided",
      "Technical Support Available"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Showcase Innovation",
    text: "Present your groundbreaking ideas and research through poster presentations, circuit designs, and AI challenges.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Learn & Grow",
    text: "Enhance your skills through hands-on competitions in programming, circuit design, and emerging technologies.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Network & Connect",
    text: "Meet like-minded tech enthusiasts, industry experts, and potential collaborators in a vibrant environment.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Win Exciting Prizes",
    text: "Compete for attractive prizes and recognition across various events and competitions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Diverse Events",
    text: "From technical competitions to gaming tournaments, experience a wide range of engaging activities.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Professional Growth",
    text: "Develop essential skills in problem-solving, teamwork, and technical expertise valued by the industry.",
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
