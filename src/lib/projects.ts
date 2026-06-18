import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Category = "3D Production" | "Branding" | "Print" | "Digital" | "Photography" | "Illustration";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  year: number;
  client: string;
  role: string;
  description: string;
  image: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "reimagining-fort-york",
    title: "Reimagining Fort York Digitally",
    category: "3D Production",
    year: 2025,
    client: "Fort York National Historic Site",
    role: "3D Production",
    description:
      "Builds on Fort York's 'Echoes of Home' exhibit to extend it digitally.",
    image: work1,
    gallery: [work1, work5],
  },
  {
    slug: "north-stationery",
    title: "North — Brand Identity",
    category: "Branding",
    year: 2024,
    client: "North Coffee Co.",
    role: "Identity, Art Direction",
    description:
      "A complete identity system for a single-origin roaster. The mark draws on Swiss type traditions paired with quietly tactile stationery — uncoated stocks, edge paint, and a restrained two-tone palette.",
    image: work2,
    gallery: [work2, work3],
  },
  {
    slug: "fold-quarterly",
    title: "Fold Quarterly — Issue 04",
    category: "Print",
    year: 2024,
    client: "Fold Publishing",
    role: "Editorial Design",
    description:
      "Editorial design for the fourth issue of an independent culture journal. The grid leans on wide outer margins and a single column for long-form, with photographic spreads bleeding across the gutter.",
    image: work3,
    gallery: [work3, work2],
  },
  {
    slug: "atlas-dashboard",
    title: "Atlas — Interface System",
    category: "Digital",
    year: 2025,
    client: "Atlas Labs",
    role: "UI/UX, Design System",
    description:
      "A monochrome operations dashboard for a logistics platform. The system prioritises information density without losing breathing room, with components calibrated for long working sessions on large displays.",
    image: work4,
    gallery: [work4],
  },
  {
    slug: "concrete-survey",
    title: "Concrete Survey",
    category: "Photography",
    year: 2023,
    client: "Personal",
    role: "Photography",
    description:
      "An ongoing photographic survey of brutalist civic architecture, shot on medium format and printed silver gelatin. The series documents structures often overlooked in their own cities.",
    image: work5,
    gallery: [work5],
  },
  {
    slug: "graph-studies",
    title: "Graph Studies",
    category: "Illustration",
    year: 2023,
    client: "Personal",
    role: "Illustration",
    description:
      "A set of ink drawings exploring nodes, edges, and the visual language of diagrams divorced from data. Drawn on a single sitting per piece, no corrections.",
    image: work6,
    gallery: [work6],
  },
];

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Motion",
  "Branding",
  "Print",
  "Digital",
  "Photography",
  "Illustration",
];
