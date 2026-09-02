# Accessibility Baseline

Every public release should complete the following checks.

## Structure

- One clear page-level heading and a logical heading sequence.
- Semantic landmarks for navigation, main content, and footer.
- Descriptive link text that makes sense outside its surrounding paragraph.
- Lists, tables, and buttons use their native semantic elements.

## Input And Navigation

- Every interactive control is reachable and operable by keyboard.
- Visible focus is retained against every background.
- Mobile navigation exposes an accurate expanded state and accessible name.
- Route changes move users into a predictable reading position.

## Content And Media

- Informative images have concise, contextual alternative text.
- Decorative images use empty alternative text.
- Text and controls meet WCAG AA contrast expectations.
- Meaning is not communicated by color alone.

## Verification

Run automated browser accessibility checks, then manually review keyboard order,
zoom at 200 percent, reduced motion, screen-reader landmarks, and representative
mobile and desktop viewports. Automated checks do not replace manual review.
