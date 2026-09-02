# ADR-0001: Client-Rendered Frontend

- Status: Accepted
- Date: 2025-10-29

## Context

The website presents public institutional content across multiple collections
and education units. The initial delivery requires responsive navigation,
reusable interfaces, and static-host deployment without a private application
server in this repository.

## Decision

Build the public experience as a client-rendered React and TypeScript
application. Use React Router for route composition and Vite for development and
production bundles. Configure the production host with an SPA fallback.

## Consequences

- Page and component behavior share one typed frontend runtime.
- Static hosts can deploy the generated bundle without server application code.
- Direct deep links depend on correct host rewrite configuration.
- Search metadata must be maintained deliberately for client-side route changes.
- A future server-rendering requirement would need a separate migration decision.

## Alternatives

A multi-page static site would simplify direct document delivery but duplicate
shared page composition. A server-rendered framework would improve document-level
rendering but introduce operational scope not required by the initial project.
