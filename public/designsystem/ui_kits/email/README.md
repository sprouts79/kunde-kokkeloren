# Email UI Kit

HubSpot-safe 600 px emails, patterned on the Kokkeløren Figma email library. Renders close to Gmail / Apple Mail / Outlook behaviour (inline styles, table-based shell).

## Files

- `EmailKit.jsx` — shared primitives: `EmailShell`, `LogoRow`, `HeroPhoto`, `Section`, `H2`, `P`, `CTA`, `Sticker`, `MenuAccordion`, `TwoColTextImage`, `Signoff`, `SocialRow`, `Footer`.
- `WelcomeReminder.jsx` — velkomstserie e-post 1. Pink hero w/ sticker, three USPs, weekly menu call-out, sign-off.
- `AutumnMenu.jsx` — three-course menu drop (forrett / hovedrett / dessert) with ingredient accordion per course.
- `Giftcard.jsx` — digital giftcard with mono code and dome-mascot sign-off.
- `index.html` — renders all three side by side, scaled to fit.

## Rules applied

- Max width **600 px**.
- **Underline CTA** in GT Flexa Medium — never a filled pill (legacy pill present in some Figma frames; replaced here).
- Text colour always Black `#31261D` on coloured backgrounds; White `#F1EDE2` only on Black.
- Mascot **only at the bottom** of a composition.
- Email fallback stack: `system-ui, -apple-system, Arial`.
