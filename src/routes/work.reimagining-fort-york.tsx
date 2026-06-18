import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PROJECTS } from "@/lib/projects";
import {
  NextProjectFooter,
  ProjectGallery,
  ProjectHero,
  ProjectMeta,
  ProjectSection,
  projectHead,
} from "@/components/site/ProjectShell";

const SLUG = "reimagining-fort-york";

export const Route = createFileRoute("/work/reimagining-fort-york")({
  head: () => projectHead(SLUG),
  component: Page,
});

function Page() {
  const project = PROJECTS.find((p) => p.slug === SLUG)!;
  return (
    <Layout>
      <ProjectHero project={project} />
      <ProjectMeta project={project}>
        <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
          {project.description}
        </p>
      </ProjectMeta>
      <ProjectSection label="Brief" title="A digital extension of Echoes of Home">
        <p>
          Builds on Fort York's <em>Echoes of Home</em> exhibit to extend it
          into a digital space — translating the textures, scale, and
          atmosphere of the historic site into a 3D-led experience.
        </p>
      </ProjectSection>
      <ProjectGallery images={project.gallery ?? []} title={project.title} />
      <NextProjectFooter currentSlug={SLUG} />
    </Layout>
  );
}
