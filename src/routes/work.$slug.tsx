import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Mira Hale` : "Project — Mira Hale";
    const desc = p?.description ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container-wide py-32 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link to="/work" className="mt-6 inline-block text-sm underline underline-offset-4">
          Back to all work
        </Link>
      </div>
    </Layout>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <Layout>
      {/* Hero image */}
      <section className="border-b border-border bg-surface">
        <div className="container-wide pt-10">
          <Link to="/work" className="text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-foreground">
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

      {/* Meta + description */}
      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
              {project.category}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
              {project.title}
            </h1>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-border pt-8 text-sm">
              <dt className="text-foreground-muted">Client</dt>
              <dd>{project.client}</dd>
              <dt className="text-foreground-muted">Year</dt>
              <dd>{project.year}</dd>
              <dt className="text-foreground-muted">Role</dt>
              <dd>{project.role}</dd>
              <dt className="text-foreground-muted">Category</dt>
              <dd>{project.category}</dd>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 ? (
        <section className="border-t border-border bg-surface section-pad">
          <div className="container-wide grid gap-10">
            {project.gallery.map((src: string, i: number) => (
              <div key={i} className="overflow-hidden border border-border bg-background">
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group block bg-gradient-dark text-[#F4F4F4]"
        >
          <div className="container-wide grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-20">
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.22em] text-[#A8A8A8]">Next Project</div>
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
    </Layout>
  );
}
