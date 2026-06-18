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

const SLUG = "night-of-living-monsters";

export const Route = createFileRoute("/work/night-of-living-monsters")({
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
          A visual identity playing on horror iconography and monster
          mythology — somewhere between camp creature feature and genuine
          dread.
        </p>
      </ProjectMeta>
      <ProjectSection label="Brief" title="Designing horror">
        <p>
          Design a visual identity and set of graphics for{" "}
          <em>The Night of Living Monsters</em>, playing on horror iconography
          and monster mythology.
        </p>
      </ProjectSection>
      <ProjectSection label="Insight" title="What we fear">
        <p>
          Monsters in folklore have always represented what society fears,
          misunderstands, or excludes. There's rich visual territory between
          camp horror aesthetics and something more psychologically
          unsettling — between creature-feature fun and genuine dread.
        </p>
      </ProjectSection>
      <ProjectSection label="Problem" title="Designed, not pastiche" muted>
        <p>
          [To be written — the specific design challenge, e.g. making
          something that reads as horror while still feeling designed rather
          than pastiche, or balancing playfulness and menace for a specific
          audience.]
        </p>
      </ProjectSection>
      <ProjectSection label="Outcome" title="Final deliverables" muted>
        <p>
          [To be written — final deliverables: posters, identity, print, and
          any response or distribution.]
        </p>
      </ProjectSection>
      <ProjectGallery images={project.gallery ?? []} title={project.title} />
      <NextProjectFooter currentSlug={SLUG} />
    </Layout>
  );
}
