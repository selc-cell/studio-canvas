import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CATEGORIES, PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Selina Wong" },
      { name: "description", content: "A selected archive of motion, branding, editorial, interface, photography, and illustration projects." },
      { property: "og:title", content: "Work — Selina Wong" },
      { property: "og:description", content: "A selected archive of motion, branding, editorial, interface, photography, and illustration projects." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-light">
        <div className="container-wide py-20 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
            Index — {PROJECTS.length} projects
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Selected Work.
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[69px] z-30 border-b border-border bg-background">
        <div className="container-wide flex gap-2 overflow-x-auto py-4">
          {CATEGORIES.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          {visible.length === 0 ? (
            <div className="py-24 text-center text-foreground-muted">No projects in this category yet.</div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
