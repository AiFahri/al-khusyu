# ADR-0002: Typed Local Editorial Content

- Status: Accepted
- Date: 2025-10-30

## Context

Programs, activities, and achievements are finite public collections maintained
with the frontend. The project does not currently include a content-management
service, authentication boundary, or editorial API.

## Decision

Represent current editorial collections as exported TypeScript records under
`src/data`. Define explicit item types and let collection and detail pages share
those records through stable slug generation.

## Consequences

- Missing required fields are detected during type checking.
- Collection cards and detail pages use one source record.
- Content changes follow the same review and deployment workflow as source code.
- Published title changes can affect generated slugs and must be reviewed.
- Non-technical editorial workflows remain limited until a managed content
  source is introduced.

## Alternatives

Unstructured JSON would reduce TypeScript syntax but weaken authoring feedback.
A remote CMS would improve editorial independence while adding authentication,
schema, preview, caching, migration, and operational responsibilities that are
outside the current scope.
