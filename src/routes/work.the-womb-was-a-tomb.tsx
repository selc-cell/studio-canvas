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

const SLUG = "the-womb-was-a-tomb";

export const Route = createFileRoute("/work/the-womb-was-a-tomb")({
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
          A 3D short film dissecting the bodily and emotional impact of sexual
          violence — and the mind–body connection in recovery.
        </p>
      </ProjectMeta>
      <ProjectSection label="Project" title="Transmutation in cycles">
        <p>
          This 3D short film dissects the bodily and emotional impact of sexual
          violence and prompts reflection on the mind–body connection in
          recovery. Organs are said to store emotions, beliefs, and memories
          in Eastern healing systems.
        </p>
        <p className="mt-6">
          The womb carries a psyche, recording the event and co-creating a
          shifting inner-body landscape. Driven by the Tower and the Star in
          the tarot, the womb-tower crumbles and transforms into a lighter
          form in repeating cycles.
        </p>
      </ProjectSection>
      <ProjectSection label="Result" title="Storytelling through motion">
        <p>
          Explored digital storytelling through motion graphics — skills
          transferable to brand narrative videos.
        </p>
      </ProjectSection>
      <ProjectGallery images={project.gallery ?? []} title={project.title} />
      <NextProjectFooter currentSlug={SLUG} />
    </Layout>
  );
}
