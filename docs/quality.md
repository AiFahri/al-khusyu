# Quality Strategy

## Automated Checks

| Check | Command | Purpose |
| --- | --- | --- |
| Install | `npm ci` | Reproduce the locked dependency tree |
| Lint | `npm run lint` | Enforce React and TypeScript source rules |
| Types | `npm run typecheck` | Validate project references and contracts |
| Build | `npm run build` | Produce the optimized deployable bundle |

## Manual Checks

- Navigate every route family through links and direct URLs.
- Confirm card links resolve to their intended detail record.
- Review compact mobile, tablet, desktop, and wide desktop layouts.
- Exercise keyboard navigation, focus visibility, zoom, and reduced motion.
- Check meaningful image alternatives and failed-image behavior.
- Validate metadata and canonical URLs on representative pages.

## Content Checks

Institutional facts, dates, names, media rights, and contact details require a
human source of truth. Static analysis cannot validate editorial accuracy.

## Release Evidence

A pull request should record the commands executed, manual routes reviewed, and
screenshots when presentation changes. Known limitations belong in the pull
request rather than being hidden from reviewers.
