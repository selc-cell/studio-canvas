import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-surface aspect-[4/3] border border-border">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="truncate text-base font-semibold tracking-tight">{project.title}</h3>
        <span className="shrink-0 text-xs text-foreground-muted">{project.year}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-foreground-muted">
        {project.category}
      </div>
    </Link>
  );
}
