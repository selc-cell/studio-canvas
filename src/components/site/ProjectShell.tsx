import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";
import { PROJECTS } from "@/lib/projects";

export const SLUG_TO_PATH: Record<string, string> = {
  "reimagining-fort-york": "/work/reimagining-fort-york",
  "making-queerkins": "/work/making-queerkins",
  "the-womb-was-a-tomb": "/work/the-womb-was-a-tomb",
  "night-of-living-monsters": "/work/night-of-living-monsters",
  "fruit-market": "/work/fruit-market",
};

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-wide pt-10">
        <Link
          to="/work"
          className="text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-foreground"
        >
          ← All Work
        </Link>
      </div>
      <div className="container-wide py-10">
        <div className="aspect-[16/9] overflow-hidden border border-border">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function ProjectMeta({
  project,
  children,
}: {
  project: Project;
  children?: React.ReactNode;
}) {
  return (
    <section className="section-pad">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
            {project.category}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            {project.title}
          </h1>
          <dl className="mt-10 grid grid-cols-[auto_1fr] gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
            <dt className="text-foreground-muted">Client</dt>
            <dd>{project.client}</dd>
            <dt className="text-foreground-muted">Year</dt>
            <dd>{project.year}</dd>
            <dt className="text-foreground-muted">Role</dt>
            <dd>{project.role}</dd>
            {project.tools ? (
              <>
                <dt className="text-foreground-muted">Tools</dt>
                <dd>{project.tools}</dd>
              </>
            ) : null}
            <dt className="text-foreground-muted">Category</dt>
            <dd>{project.category}</dd>
          </dl>
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}

export function ProjectSection({
  label,
  title,
  children,
  muted,
}: {
  label?: string;
  title?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className="border-t border-border section-pad">
      <div className="container-wide grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-3">
          {label ? (
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
              {label}
            </div>
          ) : null}
          {title ? (
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
          ) : null}
        </div>
        <div
          className={`lg:col-span-8 lg:col-start-5 text-lg leading-relaxed ${
            muted ? "text-foreground-muted italic" : "text-foreground"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  if (!images?.length) return null;
  return (
    <section className="border-t border-border bg-surface section-pad">
      <div className="container-wide grid gap-10">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden border border-border bg-background">
            <img
              src={src}
              alt={`${title} — image ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function NextProjectFooter({ currentSlug }: { currentSlug: string }) {
  const idx = PROJECTS.findIndex((p) => p.slug === currentSlug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextPath = SLUG_TO_PATH[next.slug] ?? "/work";
  return (
    <section className="border-t border-border">
      <Link
        to={nextPath}
        className="group block bg-gradient-dark text-[#F4F4F4]"
      >
        <div className="container-wide grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-20">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">
              Next Project
            </div>
            <div className="mt-3 truncate text-3xl font-semibold tracking-tight sm:text-4xl">
              {next.title}
            </div>
          </div>
          <span className="shrink-0 text-sm font-semibold underline underline-offset-4">
            View →
          </span>
        </div>
      </Link>
    </section>
  );
}

export function projectHead(slug: string) {
  const p = PROJECTS.find((x) => x.slug === slug)!;
  const title = `${p.title} — Selina Wong`;
  const desc = p.description.slice(0, 160);
  const path = SLUG_TO_PATH[slug];
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { property: "og:image", content: p.image },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
