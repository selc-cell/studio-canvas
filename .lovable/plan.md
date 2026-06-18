Update the first project in the work grid so it reflects Selina's Fort York project, and keep the existing click-through project detail page behavior.

## Changes

1. **Update `src/lib/projects.ts`**
   - Change the first project (`resonance-titles`) to:
     - `title`: "Reimagining Fort York Digitally"
     - `year`: 2025
     - `category`: "3D Production"
     - `client`: "Fort York National Historic Site"
     - `role`: "3D Production"
     - `description`: "Builds on Fort York's 'Echoes of Home' exhibit to extend it digitally."
     - Keep the existing placeholder image and gallery for now (to be swapped later when the user provides project images).
   - Add `"3D Production"` to the `Category` union and the `CATEGORIES` filter array so it appears as a real filter option.

2. **Detail page behavior**
   - No new route is needed. The existing `/work/$slug` route already renders a detail page when a project card is clicked. After updating the project data, clicking the first card will automatically show the Fort York project with the updated title, description, client, role, year, and gallery.
   - Keep the existing case-study template layout.

## Assumptions
- The project title is "Reimagining Fort York Digitally" and the year is displayed separately as 2025 (the current layout already shows the year beside the title on cards).
- The client is "Fort York National Historic Site" and the role is "3D Production", matching the user's recent experience entry on the About page.
- The existing `work-1.jpg` placeholder image is kept until the user uploads a project-specific image.

## Verification
- Build the project and check that the `/work` page shows the new first card, the filter bar includes "3D Production", and clicking the card opens a detail page with the updated content.