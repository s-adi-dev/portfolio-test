import { PortfolioConfig, SocialPlatform } from "./portfolio-types";

const portfolioData: PortfolioConfig = {
  personalInfo: {
    firstName: "Aditya",
    lastName: "Singh",
    title: "Bakchod Developer",
    location: "Mumbai, India",
    email: "sr.aditya.dev@gmail.com",
  },

  content: {
    tagline:
      "a self-taught front-end web developer based in Maharashtra, India, with a passion for building clean and performant web apps",
    about: [
      "Hi there! I'm a developer who loves digging into how stuff works on the web and getting all excited about making websites run faster. I'm always on the lookout to learn more about web development and what's new in the tech world. ",
      "My current jam is delving into React performance, exploring best coding practices and leveling up my skills. ",
      "When I'm not busy churning out code, you can probably find me watching anime or tinkering around with my Linux setup. ",
    ],
    svgLink: "https://schar.dev/images/saurabh-charde.svg",
  },

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    tools: ["Git", "Neovim", "Linux", "VS Code", "Figma", "Postman"],
  },

  socialLinks: [
    {
      platform: SocialPlatform.GITHUB,
      url: "https://github.com/s-aditya-dev",
      username: "s-aditya-dev",
    },
    {
      platform: SocialPlatform.LINKEDIN,
      url: "https://linkedin.com/in/adityasingh-dev",
      username: "adityasingh-dev",
    },
    {
      platform: SocialPlatform.TWITTER,
      url: "https://twitter.com/adityadev",
      username: "adityadev",
    },
    {
      platform: SocialPlatform.TELEGRAM,
      url: "https://t.me/adityasingh",
      username: "adityasingh",
    },
    {
      platform: SocialPlatform.YOUTUBE,
      url: "https://discordapp.com/users/aditya#1234",
      username: "aditya#1234",
      displayName: "Aditya Singh",
    },
    {
      platform: SocialPlatform.DISCORD,
      url: "https://discordapp.com/users/aditya#1234",
      username: "aditya#1234",
      displayName: "Aditya Singh",
    },
  ],

  workExperience: [
    {
      company: "TechNova Labs",
      position: "Full Stack Developer",
      startDate: new Date("2023-01-01"),
      endDate: null,
      description:
        "Building modern web applications for startups and enterprises.",
      achievements: [
        "Redesigned core dashboard improving performance by 30%",
        "Built reusable component library with Tailwind and ShadCN",
        "Integrated real-time chat using WebSocket",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      company: "OpenSource Contributions",
      position: "Contributor",
      startDate: new Date("2022-05-01"),
      endDate: new Date("2022-12-01"),
      description:
        "Actively contributed to open-source projects in the React and Node ecosystem.",
      achievements: [
        "Merged 10+ PRs in high-traffic repositories",
        "Improved documentation and onboarding experience",
      ],
      technologies: ["React", "Node.js", "Markdown", "Git"],
    },
  ],

  education: [
    {
      institution: "Indian Institute of Technology",
      degree: "B.Tech in Computer Science",
      startDate: new Date("2019-07-01"),
      endDate: new Date("2023-06-30"),
    },
  ],

  footerMarquee: [
    "Front End Web Developer",
    "Not A UI/UX Guy",
    "Linux Enthusiast",
    "Weeb",
  ],

  includeGitHubInProjects: true,
};

export default portfolioData;
