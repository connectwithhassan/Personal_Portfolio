# Design System Master File — Hassan Abbas Portfolio
> **Architecture & Visual Identity:** Executive Engineer & Technical Project Manager  
> **Aesthetic:** Editorial High-Contrast Dark OLED / Precision Architectural Grid  
> **Source of Truth:** All components, layouts, and pages must strictly adhere to the tokens and specifications below.

---

## 1. Brand Philosophy & Positioning

The portfolio presents **S.M Hassan Abbas** as a **Technical Project Manager & Full-Stack Developer**. The interface must reflect dual excellence:
1. **Engineering Precision:** Clean technical typography, structured layout grids, authentic system architecture tags, and zero frivolous decoration.
2. **Project Delivery Leadership:** Clear milestone metrics, transparent agile methodologies, enterprise-grade UX, and structured case-study disclosures.

---

## 2. Color Palette & Semantic Tokens

### Core Design Tokens (OLED & High-Contrast Systems)

All text combinations are engineered to exceed **WCAG 2.2 AA (4.5:1)** and target **AAA (7:1)** for primary content.

| Token | CSS Variable | Hex / Value | Usage & Contrast Ratio |
|---|---|---|---|
| **Canvas Background** | `--color-bg-canvas` | `#070707` | Deepest OLED black, primary base canvas |
| **Surface Subtle** | `--color-surface-subtle` | `#0c0c0e` | Section contrasts, subtle alternations |
| **Surface Card** | `--color-surface-card` | `#111216` | Project cards, experience containers, modals |
| **Surface Elevated** | `--color-surface-elevated` | `#17181f` | Hover states, active dropdowns, popovers |
| **Border Subtle** | `--color-border-subtle` | `#1c1d24` | Default grid lines, dividers, passive borders |
| **Border Strong** | `--color-border-strong` | `#282a35` | Card borders, inputs, interactive edges |
| **Border Focus** | `--color-border-focus` | `#3b82f6` | Keyboard focus indicators, active states |
| **Accent Primary** | `--color-accent` | `#2563eb` | Primary brand blue, action buttons, active tags |
| **Accent Hover** | `--color-accent-hover` | `#3b82f6` | Hover state for buttons and links |
| **Accent Glow** | `--color-accent-glow` | `rgba(37,99,235,0.18)` | Subtle focus rings and active backdrop glows |
| **Status Success** | `--color-status-success` | `#10b981` | Available for hire, sprint completion pulse |
| **Status Error** | `--color-status-error` | `#ef4444` | Form errors, validation alerts |
| **Text Primary** | `--color-text-primary` | `#f9fafb` | Headings, bold labels (16.2:1 contrast against #070707) |
| **Text Secondary** | `--color-text-secondary` | `#cbd5e1` | Body paragraphs, key descriptions (10.4:1 contrast) |
| **Text Muted** | `--color-text-muted` | `#94a3b8` | Subtitles, timestamps, tech tags (5.6:1 contrast - passes AA) |
| **Text Dim** | `--color-text-dim` | `#64748b` | Solely for decorative non-essential elements |

---

## 3. Typography Hierarchy

### Font Family Allocations
1. **Headings & Technical Structure:** `Space Grotesk` (`--font-space`, sans-serif)  
   *Weights:* 600 (SemiBold), 700 (Bold), 800 (ExtraBold).  
   *Tracking:* `-0.02em` to `-0.01em`. Line-height: `1.1` to `1.25`.
2. **Architectural Display & Monograms:** `Bebas Neue` (`--font-bebas`, sans-serif)  
   *Weights:* 400 (Regular).  
   *Tracking:* `0.02em` to `0.05em`. Line-height: `0.9` to `1.0`.
3. **Body & Form Inputs:** `Inter` (`--font-inter`, sans-serif)  
   *Weights:* 400 (Regular), 500 (Medium), 600 (SemiBold).  
   *Line-height:* `1.6` for long-form reading, `1.4` for compact UI.
4. **Code & Metrics:** System Monospace / JetBrains Mono  
   *Tracking:* `0.05em` to `0.15em` uppercase.

### Typographic Scale
* **Display Hero Title:** `clamp(2.5rem, 5vw, 4.5rem)` — Bold, uppercase, `text-wrap: balance`
* **Section Heading (H2):** `clamp(1.75rem, 3.2vw, 2.5rem)` — ExtraBold, uppercase
* **Card & Subsection Heading (H3):** `1.25rem` to `1.5rem` (`20px–24px`) — Bold
* **Category Kicker:** `0.6875rem` (`11px`) — Font-mono, uppercase, `tracking-[0.2em]`, color: `#3b82f6`
* **Body Text:** `0.875rem` (`14px`) to `1rem` (`16px`) — Line-height `1.6`, color: `#cbd5e1`
* **Caption / Meta:** `0.75rem` (`12px`) — Font-mono, uppercase, `tracking-wider`

---

## 4. Spacing, Grid & Layout Rhythm

* **Grid Base Unit:** `8px` (`0.5rem`)
* **Maximum Canvas Width:** `1920px` (centered with `mx-auto`)
* **Section Padding:**
  * Mobile (`< 640px`): `px-5 py-12`
  * Tablet (`640px - 1024px`): `px-8 py-16`
  * Desktop (`≥ 1024px`): `px-12 py-20`
* **Border Rhythm:** Continuous `#1c1d24` structural dividers separating each quadrant and section (1px solid).
* **Responsive Breakpoints:**
  * `xs`: `375px` (small phone minimum)
  * `sm`: `640px`
  * `md`: `768px` (desktop navigation shift)
  * `lg`: `1024px` (grid split: 2-column & 3-column layouts)
  * `xl`: `1280px`
  * `2xl`: `1536px`

---

## 5. Interaction States & Transitions

* **Hover Durations:** `150ms` to `200ms` with `ease-out` timing function.
* **Layout Stability:** **Never** shift surrounding content on hover (avoid expanding outer dimensions or changing borders from 1px to 2px without compensation).
* **Keyboard Focus Visibility:**  
  All focusable elements must display a distinct focus ring:
  ```css
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  ```
* **Reduced Motion:**  
  When `prefers-reduced-motion: reduce` is active:
  * Animation duration: `0.01ms !important`
  * Scroll behavior: `auto !important`
  * Scale and slide transforms disabled; immediate opacity resolution.

---

## 6. Component Specifications

### 6.1 Buttons
* **Primary Action:**
  * Background: `#2563eb`, Text: `#ffffff`, Font: Mono/Sans Bold uppercase, tracking: `0.05em`.
  * Padding: `10px 20px` (`px-5 py-2.5`), Border radius: `2px` (`rounded-sm`).
  * Hover: Background `#1d4ed8`, shadow: `0 0 16px rgba(37,99,235,0.4)`.
* **Secondary / Outline:**
  * Background: `#111216`, Border: `1px solid #282a35`, Text: `#e2e8f0`.
  * Hover: Border `#3b82f6`, Text `#3b82f6`, Background: `rgba(37,99,235,0.06)`.
* **Ghost / Icon Control:**
  * Background: Transparent or `#111216`, Border: `1px solid #1c1d24`.
  * Touch target hit area: minimum `44px × 44px`.

### 6.2 Badges & Tech Chips
* **Style:** Monospace `10px` or `11px`, uppercase, tracking: `0.05em`.
* **Colors:** Background `#121318`, Border `1px solid #1f222a`, Text `#94a3b8`.
* **Accent Badge:** Background `rgba(37,99,235,0.12)`, Border `1px solid rgba(59,130,246,0.3)`, Text `#60a5fa`.

### 6.3 Project Cards
* **Container:** `<article>` with structural border, dark slate background (`#0e0f14`), and subtle top status bar.
* **Thumbnail / Visual:** Authentic UI preview, high-density screenshot or responsive mockup.
* **Interactivity:** Keyboard accessible with visible focus ring, explicit button trigger for modal or external link.

### 6.4 Forms & Validation
* **Inputs:** Background `#0a0b0e`, Border `1px solid #242630`, Text `#f9fafb`, placeholder `#64748b`.
* **Focused Input:** Border `#3b82f6`, Outline `2px solid rgba(59,130,246,0.4)`.
* **Validation Error State:**
  * Input border turns `#ef4444`.
  * Input receives `aria-invalid="true"`.
  * Inline message connects via `aria-describedby` with icon `<AlertCircle />` and text `#f87171`.

### 6.5 Modal Dialogs
* **Backdrop:** `rgba(0, 0, 0, 0.85)` with `backdrop-blur-sm`.
* **Container:** `#0e0f14`, border `1px solid #2a2d39`, max-width `680px`, padding `32px`.
* **Accessibility:** Trapped focus (`Tab` / `Shift+Tab`), `Escape` listener, focus restoration to opener on exit.

---

## 7. Anti-Patterns & Quality Standards

- ❌ **No Emojis as Icons:** Always use vector icons from `lucide-react`.
- ❌ **No Low-Contrast Text:** Never render normal text below 4.5:1 against its background.
- ❌ **No Fake Links:** Every clickable action must have a valid destination or verified interactive trigger.
- ❌ **No Unlabeled Buttons:** Icon-only buttons must have `aria-label`.
- ❌ **No Nested Interactive Elements:** Avoid `<button>` inside `<button>` or `<button>` inside `role="button"`.
