import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

export type Category = "3D Production" | "Graphic Design" | "Animation" | "Branding" | "Print" | "Digital" | "Photography" | "Illustration";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  year: number;
  client: string;
  role: string;
  tools?: string;
  brief?: string;
  description: string;
  outcome?: string;
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
    slug: "making-queerkins",
    title: "Making Queerkins",
    category: "Graphic Design",
    year: 2024,
    client: "Shimai Tribe, Eaton Workshop Hong Kong",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Playground AI, Blender",
    brief: "Visual identity for queer rave collective Shimai Tribe celebrating Pride Month.",
    description:
      "Biomorphic humans floating in a celestial garden, and blob creatures hug across species. I drew inspiration from Donna Haraway's notion of \"Making Oddkin\", which encourages forming a new way of kinship that includes nature and other creatures, beyond the nuclear family.",
    image: work2,
    gallery: [work2],
  },
  {
    slug: "the-womb-was-a-tomb",
    title: "The Womb Was A Tomb: Transmutation of Sexual Violence",
    category: "3D Production",
    year: 2024,
    client: "Personal",
    role: "3D Artist",
    tools: "Blender, Substance Painter, Adobe After Effects",
    description:
      "This 3D short film dissects the bodily and emotional impact of sexual violence and prompts reflection on the mind–body connection in recovery. Organs are said to store emotions, beliefs, and memories in Eastern healing systems. The womb carries a psyche, recording the event and co-creating a shifting inner-body landscape. Driven by the Tower and the Star in the tarot, the womb-tower crumbles and transforms into a lighter form in repeating cycles.",
    outcome: "Explored digital storytelling through motion graphics — skills transferable to brand narrative videos.",
    image: work3,
    gallery: [work3],
  },
  {
    slug: "night-of-living-monsters",
    title: "The Night of Living Monsters",
    category: "Graphic Design",
    year: 2023,
    client: "Personal",
    role: "Graphic Designer",
    tools: "Adobe Photoshop",
    brief:
      "Design a visual identity and set of graphics for The Night of Living Monsters, playing on horror iconography and monster mythology.",
    description:
      "Monsters in folklore have always represented what society fears, misunderstands, or excludes. There's rich visual territory between camp horror aesthetics and something more psychologically unsettling — between creature-feature fun and genuine dread.",
    image: work4,
    gallery: [work4],
  },
  {
    slug: "fruit-market",
    title: "Fruit Market 果欄",
    category: "Animation",
    year: 2023,
    client: "Personal",
    role: "Animator & Director",
    tools: "After Effects, Procreate, Premiere Pro",
    brief:
      "Create an animated piece documenting and reimagining the 果欄 (Yau Ma Tei Wholesale Fruit Market) — one of Hong Kong's last surviving wholesale markets and a living fragment of the city's working-class urban fabric.",
    description:
      "The 果欄 is not just a market — it is a way of life. The chaos of pre-dawn trading, the stacked crates, the neon glow on wet concrete, the social rituals between vendors and regulars — it holds a kind of collective memory that photographs alone can't fully convey. Animation allows the texture and rhythm of the place to be reconstructed and felt. The challenge was finding a visual style that honoured the grit and energy of the 果欄 without romanticising or exoticising it.",
    image: work5,
    gallery: [work5],
  },
];

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "3D Production",
  "Graphic Design",
  "Animation",
  "Branding",
  "Print",
  "Digital",
  "Photography",
  "Illustration",
];
