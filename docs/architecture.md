# Frontend Architecture

## Runtime Boundary

The browser loads a Vite bundle and React mounts the application in `src/main`.
React Router maps URLs to page modules inside the shared application layout.
Pages compose reusable components and typed local content; no application API
or persistence layer is included in this repository.

## Source Responsibilities

| Path | Responsibility |
| --- | --- |
| `src/routes` | Public route registration |
| `src/layout` | Navigation, footer, and route outlet |
| `src/pages` | Journey and route-level composition |
| `src/components` | Reusable interface and metadata behavior |
| `src/data` | Typed editorial collections |
| `src/lib` | Shared deterministic utilities |
| `public` | Directly served media and crawler files |

## Deployment Boundary

Vite emits static output to `dist`. The host must serve those files over HTTPS
and rewrite unknown paths to `index.html`. Domain, caching, monitoring, analytics,
and incident response remain deployment responsibilities outside the bundle.

## Change Guidance

Prefer existing components and typed data contracts. Introduce a new abstraction
only when it represents repeated behavior or a stable responsibility shared by
multiple routes.
