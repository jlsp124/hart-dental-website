# Design Research and Chosen Direction

Research date: 2026-09-01

## Visual thesis

**A warm northern clinic rendered with editorial precision: deep forest ink, warm paper, Hart orange, true-to-life team photography, and a fine enamel line that gently moves through the page.**

The site should feel unmistakably like Hart Dental in Prince George—not like a stock clinic template and not like an experimental portfolio.

## Content plan

1. Poster-like hero: Hart Dental, Prince George, clear care statement, appointment and phone actions, real team photography.
2. Care map: a compact editorial service index with the exact high-value treatment routes.
3. Human proof: dentists and current team, led by authentic portraits and concise factual biographies.
4. Patient experience: new-patient essentials, office/community character, verified policies.
5. Reviews: a small number of existing attributed excerpts, no fake stars or counts.
6. Location and appointment: NAP, hours, directions, minimal non-medical form.

## Interaction thesis

- A controlled hero image reveal that feels photographic rather than gimmicky.
- A thin enamel-like SVG line that gains slight depth with scroll/pointer movement, never carrying navigation or content.
- Service and team interactions that use crop, underline, and small positional changes instead of card lift, bounce, or scale-pop.
- All motion becomes static under `prefers-reduced-motion`.

## Primary references

### Awwwards dentist inspiration

Reference: <https://www.awwwards.com/inspiration_search/dentist/>

Useful:

- editorial typography and bolder scale than category-template dental sites;
- image-led composition;
- deliberate whitespace and strong cropping;
- motion used as pacing, not decoration;
- treating healthcare brands as real brands rather than collections of service cards.

Not appropriate for Hart:

- long cinematic loaders;
- hidden navigation;
- scroll hijacking;
- tiny type over video;
- visual effects that delay phone, directions, hours, or booking;
- fashion/luxury language disconnected from family dentistry.

### Studio Brusco by ET Studio

Case study: <https://www.e-t.studio/works/studio-brusco>

The case study explicitly frames people, fluid navigation, readable text, and ease of use as central to a distinctive dental experience. Its strongest transferable ideas are the human focus, large editorial typography, tight palette, generous media, and a visual system that avoids generic dental blue.

Adapt for Hart:

- make people the main visual proof;
- use strong type and decisive crops;
- keep page structures simple enough to feel calm;
- let a small motion system unify the experience.

Do not copy:

- its layout, branding, motion choreography, video assets, or component details;
- agency-case-study framing;
- full-screen video dependence.

### Feel Good Dental case study

Reference: <https://designthropology.com/web-design-case-studies/dental-practice-web-design/>

Useful:

- candid team/community imagery;
- typographic accessibility;
- intuitive navigation;
- clear, prominent calls to action;
- reducing unnecessary pages while keeping meaningful patient information.

Not appropriate for Hart:

- importing another practice's claims, awards, pricing, or tone;
- hand-drawn visual language that conflicts with Hart's existing mark.

### Contemporary dental-site survey

Reference: <https://www.sitebuilderreport.com/inspiration/dentist-websites>

Useful as a pattern survey rather than an authority:

- real clinicians in the first viewport build trust;
- appointment and phone actions must be immediate;
- full service and first-visit information reduces anxiety;
- a design can be expressive without obscuring basic tasks.

Avoid:

- template sameness;
- generic smiling-patient stock photography;
- review widgets and trust badges that dominate the page;
- rounded-card grids as the entire information architecture.

## Hart source material

The current site contributes factual identity, not implementation:

- orange/charcoal mosaic mark;
- real Hart team group photograph;
- current dentist and team portraits;
- office exterior/interior;
- Prince George community references;
- the direct, friendly practice voice;
- existing useful routes and search intent.

The old vendor code, page layout, icons, Optio video library, and unverified stock imagery are excluded.

## Chosen art direction: Northern Warmth / Clinical Precision

The direction combines two seemingly opposite qualities:

- **Northern warmth:** human faces, warm paper tones, community, a practical Prince George voice, and Hart orange.
- **Clinical precision:** disciplined grid, strong alignment, near-black green, restrained fine lines, clear hierarchy, and fast interactions.

The result should look authored and contemporary while remaining readable to a patient who may be in pain, anxious, older, or using one hand on a small phone.

## Typography

- **Newsreader Variable:** editorial display face for H1/H2 and carefully selected pull quotes. It adds warmth without using a luxury-fashion script.
- **Manrope Variable:** navigation, body copy, labels, buttons, and practical information. It remains highly legible at small sizes.
- Maximum two type families.
- Headlines use responsive `clamp()` sizing; body copy stays near 17–19 px with generous line height.

## Photography

Priority:

1. current group photograph;
2. Dr. Jas Pahal;
3. Dr. Gary Sidhu;
4. Dr. Edward Walker;
5. current team portraits;
6. office exterior/interior;
7. owner-approved community photography.

No generic treatment stock image is necessary for the initial build. Service pages use typography, procedural linework, and related Hart imagery so they remain replaceable when commissioned photography becomes available.

The preview may use current Hart-specific site assets, but owner confirmation of copyright/reuse is required before production. Original-resolution files should replace scraped derivatives.

## Motion

- Hero: photo reveal and slight text sequencing, below 900 ms total.
- Enamel line: low-amplitude scroll/pointer depth on capable devices.
- Navigation: underline and menu-panel motion, no bounce.
- Services: image crop/line motion with a clear static fallback.
- Page transitions are not required; standard navigation is faster and more robust.

## 3D decision

No literal WebGL tooth is shipped in version one.

Reasoning:

- the available authentic photography is a stronger trust signal;
- a rotating tooth risks feeling generic and ornamental;
- WebGL adds payload/GPU cost to every first visit;
- the brief prioritizes mobile, accessibility, and SEO continuity.

Instead, a layered SVG/CSS enamel form provides subtle three-dimensional depth as progressive enhancement. It is decorative, inert, and absent from the accessibility tree. A future educational 3D treatment model should be a separately budgeted, measured enhancement with a static fallback.

## Mobile principles

- Phone and appointment actions remain in the first viewport.
- The navigation becomes a full-width accessible menu, not hidden gestures.
- Hero photography preserves faces with art-directed object positions.
- Service index rows have 48 px minimum touch height.
- The form uses one column and correct input types.
- No horizontal carousels are required to understand content.
- Sticky mobile call/book actions are restrained and never cover form controls.

## Accessibility principles

- Semantic landmarks and one H1 per page.
- Visible skip link and focus states.
- Keyboard-operable menu and disclosures.
- Text contrast targeting WCAG 2.2 AA.
- Decorative visuals hidden from assistive technology.
- Form labels remain visible; errors are announced.
- No autoplay audio/video.
- Reduced-motion support and no scroll hijacking.
- Service content avoids diagnosis and directs urgent users to call.

## Performance principles

- Static Astro output for all content routes.
- Self-hosted variable font subsets.
- Responsive, transformed local images with explicit dimensions.
- No client framework runtime.
- One small enhancement script shared across pages.
- No map JavaScript on first load; use a direct directions link and a lightweight location panel.
- No analytics or marketing scripts in preview.
- Pages Function invoked only for the form route.

## Rejected directions

- Generic blue-and-white dental template.
- Dark luxury clinic with gold and fake exclusivity.
- Glassmorphism/gradient SaaS page.
- Playful children's-clinic illustration as the whole brand.
- Full-screen video and long page transitions.
- Clinical sterility with anonymous stock photography.
- Copy-led abstract portfolio with unclear location/services.

