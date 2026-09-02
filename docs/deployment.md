# Deployment Guide

## Build Contract

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

The deployable artifact is the generated `dist` directory. Never commit local
environment files, provider credentials, or generated build output.

## Host Configuration

- Serve the site over HTTPS.
- Rewrite unknown application paths to `/index.html`.
- Preserve static file paths under `/assets` and `/image`.
- Use immutable caching only for fingerprinted build assets.
- Keep `index.html`, sitemap, and robots policy refreshable.

## Release Checklist

1. Review the branch and successful quality checks.
2. Build from the lockfile in a clean environment.
3. Deploy to a preview destination and exercise direct deep links.
4. Confirm metadata, structured data, media, and responsive layouts.
5. Promote the verified artifact and monitor availability.

## Rollback

Retain the last known-good deployment artifact or provider release. If a release
breaks navigation, content, or availability, restore that release first and
diagnose the failed change separately.
