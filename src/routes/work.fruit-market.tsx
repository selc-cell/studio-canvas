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

const SLUG = "fruit-market";

export const Route = createFileRoute("/work/fruit-market")({
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
          An animated piece reimagining 果欄 — the Yau Ma Tei Wholesale Fruit
          Market — a living fragment of Hong Kong's working-class urban
          fabric.
        </p>
      </ProjectMeta>
      <ProjectSection label="Brief" title="Animating a place under pressure">
        <p>
          Create an animated piece documenting and reimagining the 果欄 (Yau
          Ma Tei Wholesale Fruit Market) — one of Hong Kong's last surviving
          wholesale markets. The work captures the sensory intensity and
          cultural significance of a place under pressure from modernisation.
        </p>
      </ProjectSection>
      <ProjectSection label="Insight" title="More than a market">
        <p>
          The 果欄 is not just a market — it is a way of life. The chaos of
          pre-dawn trading, the stacked crates, the neon glow on wet concrete,
          the social rituals between vendors and regulars — it holds a kind of
          collective memory that photographs alone can't fully convey.
          Animation allows the texture and rhythm of the place to be
          reconstructed and felt.
        </p>
      </ProjectSection>
      <ProjectSection label="Problem" title="Honouring without flattening">
        <p>
          How do you animate a real place without flattening it into
          nostalgia? The challenge was finding a visual style that honoured
          the grit and energy of the 果欄 without romanticising or exoticising
          it — and choosing what to animate versus what to leave raw.
        </p>
      </ProjectSection>
      <ProjectSection label="Outcome" title="Final piece" muted>
        <p>
          [To be written — final animation: duration, style, whether it was
          exhibited, screened, or released online, and any feedback received.]
        </p>
      </ProjectSection>
      <ProjectGallery images={project.gallery ?? []} title={project.title} />
      <NextProjectFooter currentSlug={SLUG} />
    </Layout>
  );
}
