---
name: La Festiva Restaurant & Banquet
description: Ankleshwar's finest pure vegetarian dining and celebration venue
colors:
  primary: "#3D0C11"
  accent: "#C9A84C"
  neutral-bg: "#FDF6EC"
  neutral-bg-alt: "#F5EDE0"
  surface-dark: "#1A1A1A"
  surface-card: "#222222"
  ink-dark: "#1A1A1A"
  ink-light: "#F5F5F0"
  ink-muted: "#8B8B85"
  ink-ivory: "#EFE8DC"
  near-black: "#0F0F0F"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
    typography: "label"
  button-primary-hover:
    backgroundColor: "#E0C872"
    textColor: "{colors.near-black}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
    border: "2px solid {colors.accent}"
  card-light:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.xl}"
    border: "1px solid {colors.neutral-bg-alt}"
  card-dark:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.xl}"
    border: "1px solid rgba(201, 168, 76, 0.1)"
---

# Design System: La Festiva Restaurant & Banquet

## 1. Overview

**Creative North Star: "The Celebration Table"**

A warm, premium design rooted in family hospitality. The palette pairs deep burgundy with aged gold against an ivory backdrop — colors found in traditional Indian celebration textiles and festive decor. Typography contrasts elegant serif display headings with crisp sans-serif body text, creating a voice that is simultaneously gracious and grounded.

This system explicitly rejects: generic AI website aesthetics (purple gradients, Inter-only stacks, nested card-in-card layouts), cold minimalist SaaS designs, and anything that feels industrial or uninviting. The design does not shout — it welcomes.

**Key Characteristics:**
- Warmth through rich, deep color (burgundy + gold), not through beige or sand backgrounds
- Premium restraint: fewer elements, intentional whitespace, no decorative clutter
- Celebration-first: every visual leads toward hospitality and action
- Typographic contrast: serif display commands attention, sans body stays readable
- Mobile-priority but never mobile-compromised

## 2. Colors

A palette drawn from celebration textiles, festive decor, and the rich culinary tradition of Gujarat.

### Primary
- **Deep Burgundy** (#3D0C11): The brand anchor. Used for dark section backgrounds, footer, CTA sections, and as an accent surface color. Carries 30–50% of any hero or banner section.

### Accent
- **Aged Gold** (#C9A84C): The celebratory accent. Used for CTAs, hover effects, active nav states, decorative underlines, star ratings, and the WhatsApp icon treatment. Never exceeds ~10% of a given screen.

### Neutral
- **Ivory** (#FDF6EC): The primary background for content sections. Warm but not aggressively tinted. Paired with **Ivory Dark** (#F5EDE0) for borders and card dividers.
- **Near-Black** (#0F0F0F): Hero sections, footer, dark card backgrounds. Not pure black (#000) — the slight warmth keeps it from feeling industrial.
- **Dark Surface** (#1A1A1A) / **Dark Card** (#222222): Layered dark surfaces for cards on dark backgrounds.

### Ink
- **Dark** (#1A1A1A): Body text on light backgrounds.
- **Light** (#F5F5F0): Body text on dark backgrounds.
- **Muted** (#8B8B85): Secondary text, captions, labels.

### Named Rules

**The Warmth-Not-Beige Rule.** The background is ivory, not cream, sand, or parchment. The difference is deliberate: cream/sand is the AI default; ivory carries a cooler, more refined undertone that pairs with burgundy and gold without clashing.

**The Gold Rarity Rule.** Gold appears on ≤10% of any given screen. Its scarcity is the point — when gold appears (CTA, star, underline), it signals importance.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia / Times New Roman fallback)
**Body Font:** Inter (with system sans fallback)

**Character:** Cormorant Garamond brings old-world elegance and warmth to headings — it evokes printed menus, formal invitations, and celebration signage. Inter provides a clean, modern counterpoint for body text, keeping the experience grounded and highly readable. The pairing says "traditional warmth, modern execution."

### Hierarchy
- **Display** (700, clamp(2.25rem, 6vw, 5rem), 1.1): Hero headlines only. Use `text-wrap: balance`.
- **Headline** (600, clamp(1.75rem, 4vw, 3rem), 1.2): Section titles, page headings. Use `text-wrap: balance`.
- **Title** (600, clamp(1.25rem, 2.5vw, 1.5rem), 1.3): Card titles, feature names, modal headings.
- **Body** (400, 0.875rem / 14px, 1.6): Paragraphs, descriptions, menu items. Max line length 70ch.
- **Label** (500, 0.75rem / 12px, 0.05em uppercase): Button text, small captions, eyebrow labels, navigation links.

### Named Rules

**The Serif-At-Scale Rule.** Cormorant Garamond is reserved for headings at title size and above. It never appears at body size (below 1.25rem). At small sizes, serifs cluttered; Inter handles all sub-headline text.

## 4. Elevation

The system uses tonal layering rather than shadows to convey depth. Dark cards on dark backgrounds shift by lightness step (#1A1A1A → #222222). Light cards on light backgrounds use a subtle border (#F5EDE0).

Shadows are avoided in favor of border treatments and color contrast. Between sections, the natural shift from ivory to ivory-dark creates visual separation without shadowing.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Hover states use border color shifts and background tint changes, not shadows or lifts. A white card gains a gold-tinted border on hover (rgba(201, 168, 76, 0.2)), not a drop shadow.

## 5. Components

### Buttons
- **Shape:** Subtly squared corners (4px radius).
- **Primary (Gold filled):** Background #C9A84C, text #0F0F0F, uppercase label, 14px/32px padding. Hover: lighter gold (#E0C872).
- **Outline (Gold border):** Transparent background, gold border (2px), gold text. Hover: gold background at 10% opacity.
- **WhatsApp (Green):** Background #22C55E (green-500), white icon. Fixed floating position bottom-right.

### Cards / Containers
- **Light cards:** White background, ivory-dark border (1px), 4px radius, 32px internal padding. Hover: gold-tinted border.
- **Dark cards:** Dark surface (#222222) background, gold-tinted border (1px at 10% opacity), 4px radius, 32–40px padding. Hover: gold border at 30% opacity.

### Navigation
- **Style:** Fixed top bar, near-black background with backdrop blur on scroll.
- **Links:** Uppercase Inter at 12px, heavy tracking. Default: light ivory at 80% opacity. Hover/active: gold.
- **Active indicator:** Animated gold underline via Framer Motion layoutId.
- **Mobile:** Hamburger menu with animated bars, full-height dropdown.

### Feature / Stat Bar
- **Stats:** Burgundy background, scrolling marquee with Framer Motion. Gold value, ivory label.
- **Feature cards:** Light card style, burgundy icons that transition to gold on hover.

### Testimonial
- **Quote:** Large serif text on near-black background. Gold quotation mark SVG. 5-star rating in gold.
- **Author:** Small Inter label with initial avatar in gold-tinted circle.

## 6. Do's and Don'ts

### Do:
- **Do** use deep burgundy (#3D0C11) as the dominant dark color — near-black (#0F0F0F) for hero/footer, burgundy for CTA sections.
- **Do** use gold (#C9A84C) sparingly as a premium accent on CTAs, underlines, and active states.
- **Do** pair Cormorant Garamond (display/headings) with Inter (body/labels) for typographic contrast.
- **Do** use the ivory palette (#FDF6EC / #F5EDE0) for content section backgrounds.
- **Do** animate with Framer Motion using ease-out curves (quart/quint/expo).
- **Do** respect `prefers-reduced-motion` — every animation should degrade gracefully.
- **Do** use `text-wrap: balance` on h1–h3 for even line breaks.

### Don't:
- **Don't** use purple gradients, glassmorphism, or bounce animations — generic AI visual language.
- **Don't** use pure black (#000) or pure gray (#808080). All dark colors have warmth.
- **Don't** create nested card-in-card layouts (card inside card inside card).
- **Don't** use side-stripe borders (border-left/right >1px as accent decoration).
- **Don't** use gradient text (`background-clip: text` with gradients).
- **Don't** put Cormorant Garamond at body text sizes (<1.25rem).
- **Don't** gate content visibility behind entrance animations (content should be visible by default, animation enhances).
- **Don't** use the hero-metric template (big number, small label, gradient accent) — restaurant, not SaaS.
- **Don't** put an uppercase tracked "eyebrow" above every section heading; use it once or twice at most.
