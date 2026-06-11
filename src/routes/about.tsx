import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mira Hale" },
      { name: "description", content: "Bio, disciplines, and selected experience of digital media artist Mira Hale." },
      { property: "og:title", content: "About — Mira Hale" },
      { property: "og:description", content: "Bio, disciplines, and selected experience of digital media artist Mira Hale." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const SKILLS = [
  "Motion Graphics",
  "Brand Identity",
  "Editorial Design",
  "UI / UX",
  "Photography",
  "Illustration",
  "Art Direction",
  "Type Design",
];

const TIMELINE = [
  { year: "2022 — Present", title: "Independent Practice", place: "Lisbon" },
  { year: "2019 — 2022", title: "Senior Designer, Field Studio", place: "Berlin" },
  { year: "2016 — 2019", title: "Designer, Pentagram (Berlin)", place: "Berlin" },
  { year: "2014 — 2016", title: "BA Visual Communication", place: "HfG Karlsruhe" },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-gradient-light">
        <div className="container-wide py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">About</div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            A designer with a soft spot for monochrome, hard grids, and patient work.
          </h1>
        </div>
      </section>

      {/* Profile */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-border bg-surface">
              <img
                src={profile}
                alt="Portrait of Mira Hale in studio"
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
                I'm Mira — a digital media artist and designer working independently from a small studio in Lisbon. My practice sits between motion, identity, and interface, with frequent detours into print and photography.
              </p>
              <p>
                Before going independent I spent six years at studios in Berlin, working with publishers, cultural institutions, and a handful of technology companies. I still believe the best work comes from longer relationships and quieter rooms.
              </p>
              <p>
                I write when I have something to say, lecture occasionally, and answer email within a day or two.
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
