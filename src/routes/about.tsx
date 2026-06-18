import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import bioAsset from "@/assets/bio.jpg.asset.json";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Selina Wong" },
      { name: "description", content: "Bio, disciplines, and experience of digital artist & designer Selina Wong." },
      { property: "og:title", content: "About — Selina Wong" },
      { property: "og:description", content: "Bio, disciplines, and experience of digital artist & designer Selina Wong." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const SKILLS = [
  "Visual Identity",
  "Graphic Design",
  "3D Production",
  "Photography",
];

const TIMELINE = [
  { year: "2025", title: "3D Production Specialist", place: "Canada" },
  { year: "2023", title: "3D Intern — Spicy Banana Creations Co", place: "Hong Kong" },
  { year: "2023", title: "Freelance Graphic Designer — Shimai Tribe", place: "Hong Kong" },
];


function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-gradient-light">
        <div className="container-wide py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">About</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            A digital artist working across photography, video, graphic design, animation, and 3D.
          </h1>
        </div>
      </section>

      {/* Profile */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-border bg-surface">
              <img
                src={bioAsset.url}
                alt="Portrait of Selina Wong"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />

            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">Bio</div>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                I'm Selina — a digital artist and designer based in Montreal, Canada. I specialize in photography, video, graphic design, animation, and 3D production.
              </p>
              <p>
                My passion lies in high-quality digital content that blends storytelling and technical precision. I work confidently both independently and in teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border bg-surface section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">Disciplines</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Practice</h2>
          </div>
          <div className="lg:col-span-9">
            <ul className="flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <li
                  key={s}
                  className="border border-foreground/15 bg-background px-4 py-2 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">Selected</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Experience</h2>
          </div>
          <div className="lg:col-span-9">
            <ul className="divide-y divide-border border-y border-border">
              {TIMELINE.map((t) => (
                <li
                  key={t.title}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-6 sm:grid-cols-[160px_minmax(0,1fr)_auto]"
                >
                  <span className="hidden text-sm text-foreground-muted sm:block">{t.year}</span>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold tracking-tight">{t.title}</div>
                    <div className="mt-1 text-sm text-foreground-muted sm:hidden">{t.year}</div>
                  </div>
                  <span className="shrink-0 text-sm text-foreground-muted">{t.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-dark text-[#F4F4F4]">
        <div className="container-wide grid gap-8 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for a collaborator on something quiet and considered?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/work" className="inline-flex h-12 items-center border border-white/30 px-6 text-sm font-semibold hover:bg-white hover:text-foreground transition-colors">
              See the Work
            </Link>
            <Link to="/contact" className="inline-flex h-12 items-center bg-white px-6 text-sm font-semibold text-foreground hover:bg-[#E8E8E8] transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
