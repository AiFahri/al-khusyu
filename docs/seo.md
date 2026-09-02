# Search And Social Metadata

## Page Contract

Each indexable route should provide a distinct title, concise description,
canonical URL, and relevant preview image. The shared `SEO` component updates
document metadata and publishes educational-organization JSON-LD.

## Domain Contract

The canonical production origin is `https://www.alkhusyu.com`. Domain changes
must be applied together across metadata helpers, structured data, sitemap,
robots policy, deployment settings, and external search-console properties.

## Crawler Files

- `public/sitemap.xml` lists canonical public routes.
- `public/robots.txt` allows public pages and points to the sitemap.
- Draft, private, and duplicate pages should receive an explicit `noindex` rule.

## Release Review

1. Open every sitemap URL directly on the production host.
2. Confirm unique titles and descriptions on representative route families.
3. Validate organization JSON-LD with a structured-data testing tool.
4. Inspect Open Graph and Twitter preview output.
5. Confirm canonical URLs match the final HTTPS destination.

Metadata must describe the rendered content accurately; it is not a place for
unsupported claims or unrelated search terms.
