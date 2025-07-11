import portfolioData from "./config/portfolio-data";
import ProjectData from "./config/project-data";

// lib/navigation.ts
export interface NavItemType {
  label: string;
  href: string;
  isExternal?: boolean;
  isAnchor?: boolean;
  isHome?: boolean; // New flag for home button
}

interface AllNavItemType extends NavItemType {
  type: "primary" | "secondary";
  show: boolean;
}

// Navigation items configuration - can be reused in header and footer
const NAV_ITEMS: AllNavItemType[] = [
  { label: "Home", href: "/", isHome: true, type: "primary", show: true },
  {
    label: "Projects",
    href: "#projects",
    isAnchor: true,
    type: "primary",
    show: ProjectData.length > 0,
  },
  {
    label: "Blogs",
    href: "#blogs",
    isAnchor: true,
    type: "primary",
    show: false,
  },
  {
    label: "Experience",
    href: "#experience",
    isAnchor: true,
    type: "primary",
    show: portfolioData.workExperience.length > 0,
  },
  {
    label: "Works",
    href: "#works",
    isAnchor: true,
    type: "primary",
    show: false,
  },
  {
    label: "Skills",
    href: "#skills",
    isAnchor: true,
    type: "secondary",
    show:
      portfolioData.skills.tools.length > 0 ||
      portfolioData.skills.languages.length > 0 ||
      portfolioData.skills.technologies.length > 0,
  },
  {
    label: "Socials",
    href: "#socials",
    isAnchor: true,
    type: "secondary",
    show: portfolioData.socialLinks.length > 0,
  },
  {
    label: "Resume",
    href: "/resume",
    isExternal: true,
    type: "secondary",
    show: true,
  },
];

export const PRIMARY_NAV_ITEMS = (): NavItemType[] => {
  return NAV_ITEMS.filter((item) => item.type === "primary" && item.show).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ type: _type, show: _show, ...rest }) => rest,
  );
};

// Filter secondary nav items
export const SECONDARY_NAV_ITEMS = (): NavItemType[] => {
  return NAV_ITEMS.filter((item) => item.type === "secondary" && item.show).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ type: _type, show: _show, ...rest }) => rest,
  );
};

// Or if you want to get all visible nav items regardless of type
export const ALL_NAV_ITEMS = (): NavItemType[] => {
  return NAV_ITEMS.filter((item) => item.show).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ type: _type, show: _show, ...rest }) => rest,
  );
};

// Navigation constants
export const NAVIGATION_CONSTANTS = {
  SCROLL_THRESHOLD: 10,
  HIDE_HEADER_THRESHOLD: 100,
  MENU_CLOSE_DELAY: 350,
  ANIMATION_DURATION: 1000,
  LENIS_SCROLL_DURATION: 2.5,
  LENIS_SCROLL_OFFSET: 0,
} as const;
