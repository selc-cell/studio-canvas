import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Selina Wong — Digital Artist & Designer" },
      { name: "description", content: "Selected work in photography, video, graphic design, animation, and 3D production by Selina Wong." },
      { property: "og:title", content: "Selina Wong — Digital Artist & Designer" },
      { property: "og:description", content: "Selected work in photography, video, graphic design, animation, and 3D production by Selina Wong." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-light border-b border-border">
        <div className="container-wide grid gap-10 py-24 md:py-36 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
              Portfolio — 2014 / 2025
            </div>
            <h1 className="mt-6 text-[44px] font-bold leading-[0.95] tracking-[-0.02em] sm:text-6xl lg:text-[96px]">
              Selina Wong.
              <br />
              <span className="text-foreground-muted">Digital Artist & Designer.</span>
            </h1>
            <p className="mt-10 max-w-xl text-base text-foreground-muted sm:text-lg">
              I specialize in photography, video, graphic design, animation, and 3D production — creating high-quality digital content that blends storytelling and technical precision.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="inline-flex h-12 items-center bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
              >
                View Selected Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center border border-foreground px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">01 — Selected Work</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Recent projects</h2>
            </div>
            <Link to="/work" className="hidden shrink-0 text-sm font-semibold underline underline-offset-4 sm:inline">
              All Work →
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link to="/work" className="text-sm font-semibold underline underline-offset-4">
              All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="border-y border-border bg-surface">
        <div className="container-wide grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">02 — About</div>
          </div>
          <div className="lg:col-span-9">
            <p className="text-2xl font-medium leading-[1.3] tracking-[-0.01em] sm:text-3xl">
              I specialize in photography, video, graphic design, animation, and 3D production. My passion lies in high-quality digital content that blends storytelling and technical precision. I work confidently both independently and in teams.
            </p>
            <Link to="/about" className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">
              Learn more →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
