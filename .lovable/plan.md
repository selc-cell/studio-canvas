Update the portfolio with Selina Wong's identity and content across the site, keeping the existing design system intact.

## Scope
- Replace placeholder name, tagline, location, and bio with the new content.
- Update the About page, Contact page, Footer, and any home page hero copy that references the old name.
- Keep the existing monochrome blocky layout, colors, and typography.

## Content to apply
- Name: Selina Wong
- Tagline: Digital artist & designer
- Location: Montreal, Canada
- Contact email: selcheung712@gmail.com
- LinkedIn: https://www.linkedin.com/in/selina-wong-37bb86312/
- Bio: "I specialize in photography, video, graphic design, animation, and 3D production. My passion lies in high-quality digital content that blends storytelling and technical precision. I work confidently both independently and in teams."
- Skills: Visual Identity, Graphic Design, 3D production, Photography
- Experience: 3D Production Specialist, 2025, Canada

## Files to update
- `src/routes/about.tsx` — hero heading, bio, skills list, timeline, and SEO meta tags.
- `src/routes/contact.tsx` — email, location, and social links.
- `src/components/site/Footer.tsx` — name, location, and social links.
- `src/routes/index.tsx` — hero name and tagline if they reference the old name.

## Out of scope
- No image changes in this pass (user said they have their own images; this update is text-only).
- No navigation structure changes.