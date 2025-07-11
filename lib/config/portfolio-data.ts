import { PortfolioConfig, SocialPlatform } from "./portfolio-types"; // Update path as needed

const dummyPortfolioConfig: PortfolioConfig = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
  },

  content: {
    tagline: "Innovating with code and creativity.",
    about: [
      "I'm John Doe, a passionate software engineer with a focus on frontend development and cloud infrastructure.",
      "I enjoy building performant, user-friendly applications using modern technologies.",
      "When I'm not coding, I explore design systems, write technical blogs, and contribute to open-source projects.",
    ],
    svgLink: "https://dummyimage.com/600x400/000/fff&text=SVG+Illustration",
  },

  skills: {
    languages: ["JavaScript", "TypeScript", "Go", "Ruby"],
    technologies: ["React", "Next.js", "Rails", "Node.js", "GraphQL", "AWS"],
    tools: ["Git", "Docker", "Webpack", "Postman", "Figma"],
  },

  socialLinks: [
    {
      platform: SocialPlatform.GITHUB,
      url: "https://github.com/johndoe",
      username: "johndoe",
    },
    {
      platform: SocialPlatform.LINKEDIN,
      url: "https://linkedin.com/in/johndoe",
      username: "johndoe",
    },
    {
      platform: SocialPlatform.TWITTER,
      url: "https://twitter.com/johndoe",
      username: "johndoe",
    },
    {
      platform: SocialPlatform.INSTAGRAM,
      url: "https://instagram.com/john.codes",
      username: "john.codes",
      displayName: "John Codes",
    },
  ],

  workExperience: [
    {
      company: "TechCorp Inc.",
      position: "Frontend Developer",
      description: "Built and maintained enterprise-scale React applications.",
      startDate: new Date("2021-05-01"),
      endDate: new Date("2023-04-01"),
      achievements: [
        "Reduced page load time by 40% by optimizing bundle size",
        "Led migration from Redux to React Query",
        "Created internal component library with Storybook",
      ],
      technologies: ["React", "TypeScript", "Tailwind", "Storybook"],
    },
    {
      company: "CloudSoft Solutions",
      position: "Full Stack Developer",
      description: "Developed full-stack web apps with GraphQL backend.",
      startDate: new Date("2023-05-01"),
      endDate: null,
      achievements: [
        "Built real-time dashboard for monitoring IoT devices",
        "Implemented CI/CD pipeline using GitHub Actions and AWS",
        "Created GraphQL APIs with proper caching strategies",
      ],
      technologies: ["Next.js", "GraphQL", "Docker", "AWS"],
    },
  ],

  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: new Date("2017-08-01"),
      endDate: new Date("2021-05-01"),
    },
  ],

  footerMarquee: [
    "Lifelong Learner",
    "Open Source Advocate",
    "React Enthusiast",
    "Cloud Native",
    "Code, Coffee, Repeat",
  ],

  includeGitHubInProjects: true,
};

export default dummyPortfolioConfig;
