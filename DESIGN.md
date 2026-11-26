## Visual Theme
Clean, airy corporate site for a financial services consultancy: white canvas with faint vertical hairline guides, a deep indigo/purple (#200055) brand color, grey display serif headlines in Libre Baskerville, and small tracked-out sans-serif navigation.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(0 0% 20%)
- muted-foreground: hsl(0 0% 53%)
- border: hsl(0 0% 53%)
- surface: hsl(213 92% 95%)
- primary: hsl(262 100% 17%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(262 100% 7%)
- secondary: hsl(217 100% 44%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(217 100% 34%)
- dark-background: hsl(262 100% 17%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted-foreground: hsl(0 0% 80%)
- dark-border: hsl(262 40% 30%)
- accent: hsl(262 100% 17%)

## Page Background
solid hsl(0 0% 100%). The page and header are white. The main content area carries a decorative background image (source URL: https://static.wixstatic.com/media/89a094_0f0b2afe86bb4895819977cfece78a3d~mv2.png/v1/crop/x_0,y_0,w_983,h_900,q_90,enc_auto/89a094_0f0b2afe86bb4895819977cfece78a3d~mv2.png). It renders as faint vertical hairlines. This URL is only a match key; the builder must render the CDN URL from `data/pages/index.images.json`. Render it with background-size auto, position 50% 50%, and NO added darkening/overlay layer. Base color is transparent behind the image. A light-blue band (rgb(229, 240, 254), i.e. surface) exists as a section theme, but it does not appear visibly in the screenshot.

## Typography

**Pagesmith resolved these fonts against its self-hosted registry. Use the slugs verbatim in DESIGN.md and the @font-face declarations. DO NOT substitute alternatives — these have already been verified.**

- headingFont: libre-baskerville (weight 400; the registry has 400, 500, 600, 700)
- bodyFont: helvetica-w01-roman (self-hosted). The builder must set `--font-sans` to 'helvetica-w01-roman' and must NOT add an @font-face, call check_font_availability, or substitute a registry font.

Exact sizes (do not invent responsive variations):
- H1 (hero): Libre Baskerville 400, 50px / line-height 65px, letter-spacing 1px, text-transform none, left-aligned. Mixed color runs: grey hsl(0 0% 53%) for "From Strategy to Implementation: Empowering Your" and "on the"; indigo hsl(262 100% 17%) for "Financial Services Company" and "Path to Continued Success". The hero H1 wraps across 4 lines at ~920px width.
- Subheading "Join our mailing list": Libre Baskerville 400, 26px / 39px, color indigo hsl(262 100% 17%).
- Body paragraph ("Reach out to us today"): Helvetica light/roman, 18px / 32.4px, letter-spacing 0.36px, color hsl(0 0% 53%).
- Text link ("⟶ Our solutions"): 16px / 28.8px, letter-spacing 0.32px, color indigo hsl(262 100% 17%), no underline.
- Nav links: helvetica-w01-roman, 16px (resolved value; ignore the 10px port-styles reading), weight 400, letter-spacing 0.8px, no text-transform. Default color hsl(0 0% 20%); active (Home) color hsl(217 100% 44%) (rgb(0,87,225)).
- Form label / field text: Libre Baskerville 16px, color hsl(0 0% 53%); required asterisk 16px/20px in the same grey.
- Checkbox label ("I want to subscribe to your mailing list."): Libre Baskerville 16px / 24px, color hsl(0 0% 53%).
- Footer text: 14px / 19.6px, letter-spacing 0.7px, color hsl(0 0% 20%), helvetica-w01-roman / light.

## Components
- Buttons: "Subscribe" is an outlined/ghost button with a transparent (rgba(255,255,255,0)) fill, a 2px solid border in hsl(0 0% 53%), square corners (0 radius), padding 11px 8.5px, Libre Baskerville 16px weight 400, text color hsl(0 0% 53%), no text-transform. Its approximate size is 171x45px, placed to the right of the email field. The hover state is driven by Wix CSS variables and has no explicit extracted value, so keep the default look unless specified.
- Form: the email input is a bottom-border-only field (2px grey underline, transparent background) about 353px wide, with the label "Email *" above it. The form sits in a white panel with a 2px grey border on its checkbox. A checkbox (2px solid hsl(0 0% 53%) border, square) accompanies the label "I want to subscribe to your mailing list."
- Nav links: transparent background, 10px padding, 4px margin, ~144px pitch, centered group. Logo is an SVG, 159x39px (fill purple hsl(275 100% 71%) accent dot, indigo letters), in the header at left; it renders at 112x27px in the footer.
- Cookie banner: a fixed bottom white bar with a soft shadow, text "We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies." with an underlined "Privacy Policy" link. It has two square buttons: "Settings" (white with a 1px dark border) and "Accept" (solid black with white text), plus a close "X" icon at the far right. Text is about 14px Helvetica/Arial in black.
- Cards: none.