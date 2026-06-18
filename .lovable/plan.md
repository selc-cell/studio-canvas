Create 5 dedicated route files — one per project — each with a bespoke layout tailored to that project's content (Brief, Insight, Problem, Outcome, Tools, etc.). Update project cards to link to the new routes.

## New route files

Each is a standalone `createFileRoute(...)` page with its own `head()` metadata, hero, meta block, and body sections shaped to the project's specific fields. All use the existing `<Layout>`, design tokens (no hardcoded colors), and link back to `/work` + a "Next Project" footer.

1. `src/routes/work.reimagining-fort-york.tsx` → `/work/reimagining-fort-york`
   - Sections: Hero · Meta (Client / Year / Role / Category) · Brief
   - Keep current placeholder image + gallery

2. `src/routes/work.making-queerkins.tsx` → `/work/making-queerkins`
   - Sections: Hero · Meta (+ Tools) · Brief · Project (Donna Haraway "Making Oddkin" narrative)

3. `src/routes/work.the-womb-was-a-tomb.tsx` → `/work/the-womb-was-a-tomb`
   - Sections: Hero · Meta (+ Tools) · Project (Tower/Star narrative) · Result

4. `src/routes/work.night-of-living-monsters.tsx` → `/work/night-of-living-monsters`
   - Sections: Hero · Meta (+ Tools) · Brief · Insight · Problem · Outcome
   - Problem/Outcome use the user's placeholder copy as italic muted "TBD" notes so the layout is ready when copy arrives

5. `src/routes/work.fruit-market.tsx` → `/work/fruit-market`
   - Sections: Hero · Meta (+ Tools) · Brief · Insight · Problem · Outcome (Outcome marked TBD)

Each file imports its image + data from `src/lib/projects.ts` (single source of truth) and hardcodes only the bespoke narrative copy.

## Wiring

- `src/components/site/ProjectCard.tsx`: keep the card markup, but change its `Link` to point to each project's dedicated route based on `project.slug` (a small map: slug → route path).
- Delete `src/routes/work.$slug.tsx` so the only detail pages are the 5 new ones. (Removes the generic fallback per "5 separate route files".)
- `src/lib/projects.ts`: no schema changes needed — already has `tools`, `brief`, `outcome` fields. Existing data stays the source of truth for card grid + meta blocks.

## Layout system

To avoid duplicating the hero/meta/footer chrome 5 times, add a tiny shared building-block file:

- `src/components/site/ProjectShell.tsx` — exports `<ProjectHero>`, `<ProjectMeta>`, `<NextProjectFooter>`. Each route composes these + writes its own body sections. This keeps the 5 routes truly bespoke in the middle while sharing the frame.

## Verification

- `/work` cards click through to the new routes.
- Each new URL renders with route-specific `<title>` and meta description.
- "Next Project" footer cycles through the 5 projects in `PROJECTS` order.
- No reference to the deleted `work.$slug.tsx` remains.
