# STYLE-REFERENCE.md — Prime Cyprus (primecyprus.xyz)

> Read this before creating or editing any HTML file for the main site.
> The full CSS lives inline in each HTML file (no external stylesheet).

---

## Color Palette

```css
--bg-primary: #0a0e17        /* page background — very dark navy */
--bg-secondary: #111827      /* alternate section background */
--bg-card: #161e2e           /* card background */
--bg-card-hover: #1c2640     /* card hover state */
--bg-accent: #1a1f35         /* accent background */

--text-primary: #f1f5f9      /* headings, strong text */
--text-secondary: #94a3b8    /* body copy */
--text-muted: #64748b        /* labels, captions */

--gold: #d4a853              /* primary accent */
--gold-light: #e8c97a        /* hover state */
--gold-dark: #b8922e         /* pressed/active */
--gold-glow: rgba(212,168,83,0.15)   /* background tints */

--border: rgba(255,255,255,0.06)     /* subtle borders */
--border-gold: rgba(212,168,83,0.25) /* gold-tinted borders */
```

---

## Typography

```css
--font-display: 'Playfair Display', Georgia, serif   /* headings, logo */
--font-body: 'DM Sans', -apple-system, sans-serif    /* all body text */
```

Font sizes:
- `h1`: `clamp(2.5rem, 5vw, 4rem)`
- `h2`: `clamp(2rem, 4vw, 3rem)` — `margin-bottom: 24px`
- `h3`: `clamp(1.3rem, 2.5vw, 1.6rem)` — `margin-bottom: 16px`
- `.lead`: `1.15rem`, `line-height: 1.8`
- `.section-label`: `0.8rem`, `font-weight: 600`, `letter-spacing: 0.15em`, uppercase, gold

---

## Layout

```css
--max-width: 1200px
--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

.container: max-width 1200px, margin auto, padding 0 24px
.section: padding 100px 0
.section--alt: background var(--bg-secondary)
```

---

## Navigation

- Fixed, top, full width
- `background: rgba(10,14,23,0.85)` + `backdrop-filter: blur(20px)`
- `height: 72px`
- `border-bottom: 1px solid var(--border)`
- Logo: Playfair Display, 1.4rem, `◆` symbol in gold
- Links: DM Sans, 0.9rem, `color: var(--text-secondary)` → hover `var(--text-primary)`
- Underline animation on hover/active (gold, 1.5px)
- CTA button: `.btn--primary .btn--sm` — right side
- Mobile: hamburger shows at `768px`, links stack vertically

---

## Buttons

```css
/* Primary */
.btn--primary: background var(--gold), color var(--bg-primary)
hover: background var(--gold-light), translateY(-2px), gold box-shadow

/* Outline */
.btn--outline: transparent bg, gold border (1.5px), gold text
hover: var(--gold-glow) bg

/* Sizes */
default: padding 14px 32px, font-size 0.95rem
.btn--sm: padding 10px 24px, font-size 0.85rem
```

---

## Cards

- `background: var(--bg-card)`, `border: 1px solid var(--border)`, `border-radius: 12px`
- `padding: 36px 32px`
- Hover: `bg-card-hover`, gold border, `translateY(-4px)`
- Top gold gradient line appears on hover (opacity 0 → 1)
- Icon box: 48×48px, `border-radius: 10px`, gold-glow bg

---

## Key Components

**Stats bar:** 4-column grid, `border-right` separators, hover gold-glow
**Audience grid:** `auto-fit minmax(240px,1fr)`, flex items with icon + text
**Two-col layout:** `1fr 1fr`, gap 64px, stacks at 1024px
**Feature list:** checklist with gold circle check icons
**FAQ accordion:** max-height animation, `+` icon rotates 45deg when open
**Comparison table:** `.comparison-table`, Cyprus column highlighted with gold-glow

---

## Animations

```css
@keyframes fadeInUp — hero elements on load
@keyframes pulse — hero badge dot
.animate-in — opacity 0, translateY 24px → visible class triggers transition
```
IntersectionObserver adds `.visible` class with staggered 80ms delay per element.

---

## Footer

- `background: var(--bg-secondary)`, `border-top: 1px solid var(--border)`
- 4-column grid: brand (2fr) + 3× link columns (1fr each)
- Stacks to 2-col at 1024px, 1-col at 768px
- Disclaimer text in footer bottom

---

## Responsive Breakpoints

- `1024px`: two-col → single col, footer 2-col
- `768px`: nav collapses to hamburger, sections 64px padding, hero auto height
- `480px`: stats bar single column

---

## File Structure Notes

- CSS is **inline** in `<style>` tag in each HTML file — no external stylesheet
- JS is **inline** in `<script>` tag at bottom of each file — no external JS file
- Shared logic (FAQ, hamburger, scroll effect) is duplicated across pages
- Google Fonts loaded via `<link>` in `<head>`
