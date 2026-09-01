# Hart Dental Visual System

Direction: **Northern Warmth / Clinical Precision**

## Colour

| Token | Value | Use |
| --- | --- | --- |
| Forest Ink | `#18332d` | Primary text, header, deep sections |
| Near Black | `#101916` | Highest-contrast type and overlays |
| Warm Paper | `#f4efe6` | Primary background |
| Soft Paper | `#e8e0d3` | Alternating sections and separators |
| Clean White | `#fffdf8` | Form fields and high-clarity panels |
| Hart Orange | `#f28a25` | Primary actions, key rules, active states |
| Orange Dark | `#b95616` | Accessible orange text/hover on light surfaces |
| Moss | `#8f9b82` | Secondary accent and enamel depth |
| Muted Ink | `#5d6964` | Supporting copy |

Orange is an accent, not a background wash. The site uses no decorative gradients; subtle photographic and SVG shading may use controlled tonal transitions.

## Typography

### Display

- Family: Newsreader Variable, self-hosted.
- Use: H1, major H2, editorial pull quotes.
- Weight range: 400–600.
- Tracking: slightly tight at display scale.
- Maximum line length: approximately 13–16 characters per line for the largest hero compositions when practical.

### Utility/body

- Family: Manrope Variable, self-hosted.
- Use: body, labels, navigation, buttons, tables.
- Weight range: 400–700.
- Body: `clamp(1rem, 0.97rem + 0.15vw, 1.125rem)`.
- Body line height: 1.6.
- Practical copy max width: 68ch.

## Grid and spacing

- 12-column desktop grid.
- Content max width: 1480 px.
- Desktop gutter: `clamp(24px, 4vw, 72px)`.
- Mobile gutter: 18–22 px.
- Major section spacing: `clamp(72px, 10vw, 160px)`.
- Minor section spacing: `clamp(36px, 5vw, 80px)`.
- Use alignment, negative space, and rules before containers.

## Shape language

- Predominantly square/rectilinear media crops.
- A single enamel-curve motif introduces organic contrast.
- Border radius is small (0–14 px) and functional.
- No pill overload, floating card clusters, or rounded-everything system.
- Rules are 1 px and low contrast; selected orange rules may be 2 px.

## Logo

- Use a clean text/mark lockup derived from the Hart identity.
- Maintain generous clear space.
- Never place the raster source on visually noisy imagery.
- Request the original vector/source file before production; the current raster file is a temporary reference.

## Buttons and links

### Primary action

- Solid Forest Ink or Hart Orange depending on surface.
- Minimum 46 px height, 48 px on mobile.
- Compact rectangular geometry with 2–6 px radius.
- Clear verb: `Book an Appointment`, `Call 250-962-5351`, `View Services`.

### Secondary action

- Text link with directional arrow and animated underline.
- Never rely on colour alone.
- External links expose their destination in accessible names when needed.

### Focus

- 3 px orange outline with 3 px offset on light surfaces.
- Light outline on dark surfaces, with a secondary orange shadow when needed.

## Navigation

- Header overlays or directly meets the hero; it does not create a boxed pre-hero region.
- Brand, phone, and appointment action remain obvious.
- Desktop service navigation is a readable panel with crawlable anchors.
- Mobile menu is a native-button controlled region with `aria-expanded`, focus management, Escape support, and body-scroll lock only while open.

## Forms

- Visible labels above every field.
- One column on mobile; two columns only for short paired fields at wide widths.
- Inputs use white surfaces, dark text, and strong focus states.
- Error summary plus field-level errors; announce status with `aria-live`.
- Collect only first name, last name, email, phone, preferred contact, and a short non-medical note.
- Explicit copy: do not include private medical or dental information.
- Honeypot hidden from normal navigation.

## Imagery

- Real Hart photography leads every high-value page where suitable.
- Portrait crops keep eye lines consistent but avoid generic card grids.
- Use `object-position` per image so faces are never clipped on mobile.
- Service pages may use typographic linework rather than stock procedure photography.
- Always include explicit dimensions and meaningful alt text; decorative images use empty alt text.

## Motion

Duration scale:

- Micro: 140–220 ms.
- Navigation/panels: 260–420 ms.
- Hero sequence: 600–900 ms total.

Easing:

- Primary: `cubic-bezier(.22,.75,.2,1)`.
- Exit: `cubic-bezier(.4,0,1,1)`.

Rules:

- Animate opacity, transforms, crop masks, and lines.
- Never animate layout in a way that moves a user's target unexpectedly.
- No bounce, scale-pop, forced loader, or scroll hijacking.
- Under reduced motion, remove scroll coupling and reveal transforms; content is immediately visible.

## Responsive principles

- Design for 320 px through large desktop, with explicit QA at 390 × 844, 768 × 1024, 1440 × 900, and 1920 × 1080.
- Initial mobile viewport must show Hart Dental, Prince George, and at least one direct action.
- Avoid text over busy faces; reposition or introduce a solid text plane.
- Keep long service titles readable without shrinking below practical sizes.
- Footer stays useful: services, patients, team, reviews, contact, NAP, and legal links.

## Accessibility and content rules

- One H1 per page.
- Heading order remains semantic despite visual styling.
- Minimum AA contrast.
- Touch targets at least 44 × 44 px, targeting 48 px.
- Links make sense out of context.
- No text embedded into photographs.
- No fake ratings, awards, credentials, prices, outcomes, or urgency.
- Medical copy stays general and always defers diagnosis to an examination.

