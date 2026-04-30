# Web UI Kit

Marketing-site recreation modeled on kokkeloren.no and the brand brief. Click-through prototype with three screens: home → signup → thank-you.

## Files

- `WebKit.jsx` — shared primitives: `Nav`, `Footer`, `CTALink`, `Sticker`, `Eyebrow`, `H1`, `H2`, `Body`, `Section`, `ProducerCard`, `MealCard`.
- `HomeSections.jsx` — full landing page: `Hero`, `HowItWorks`, `WeekMenu`, `Producers`, `QuoteBand`, `SignupStrip`, `MascotBand`.
- `FlowViews.jsx` — `SignupView` (radio-pills + email input, live order summary) and `ThankYouView` with mascot sign-off.
- `index.html` — mounts a tiny client-side router; route persists in `localStorage` so refresh keeps your place.

## Design notes

- Hero is full-bleed **White** (`#F1EDE2`) with a produce cut-out on the right and a yellow sticker bursting out of the grid. One CTA: "Prøv første kasse" (underline, not pill).
- Alternating colour bands: White → Curry → White → Surf → White → Red → White. Never gradient, never overlay, never more than one accent per section.
- Meal cards and producer cards are **flat coloured surfaces** with rounded corners — no shadow, no border, no kitschy left-border accents.
- Typography scale steps up to `104px` Valizas on the hero; body stays `18/1.55` GT Flexa Light.
- **Known substitution:** real producer photography is not available — producer cards show colour placeholders where photos would go. Imagery swap is one line per card.
