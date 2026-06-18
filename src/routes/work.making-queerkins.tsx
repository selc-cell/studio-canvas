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

const SLUG = "making-queerkins";

export const Route = createFileRoute("/work/making-queerkins")({
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
          Visual identity for queer rave collective Shimai Tribe, celebrating
          Pride Month at Eaton Workshop Hong Kong.
        </p>
      </ProjectMeta>
      <ProjectSection label="Brief" title="Identity for Pride Month">
        <p>
          Develop a visual identity for Shimai Tribe — a queer rave collective —
          for their Pride Month residency at Eaton Workshop Hong Kong.
        </p>
      </ProjectSection>
      <ProjectSection label="Project" title="Making Oddkin">
        <p>
          Biomorphic humans floating in a celestial garden, and blob creatures
          hugging across species.
        </p>
        <p className="mt-6">
          I drew inspiration from Donna Haraway's notion of{" "}
          <em>Making Oddkin</em>, which encourages forming a new way of kinship
          that includes nature and other creatures — beyond the nuclear family.
        </p>
      </ProjectSection>
      <ProjectGallery images={project.gallery ?? []} title={project.title} />
      <NextProjectFooter currentSlug={SLUG} />
    </Layout>
  );
}
