# ADR 0001: Store Lessons as MDX Files in Git and Compile on the Server

## Status
Accepted

## Date
2026-05-28

## Context
The learning platform needs a content model that supports public reading, Git-based review, and a predictable workflow for lesson updates. The content should be easy for developers to edit without requiring a CMS from day one.

## Decision
Store lesson content as `.mdx` files in the repository and load them on the server with a filesystem-based lesson loader. Compile MDX at request/build time for lesson pages and list views.

## Alternatives Considered
1. CMS-backed content management - would make editing easier for non-developers, but adds operational overhead and a separate publishing system.
2. Database-backed rich text content - would complicate authoring and make Git review harder.
3. Hard-coded React pages - would be simple initially, but would not scale as a content workflow.

## Consequences
Lesson updates stay reviewable in pull requests and content authors can work in plain Markdown/MDX. The downside is that content changes still require a deploy to publish.

## References
- [web/src/lib/lessons.ts](../../../src/lib/lessons.ts)
- [web/src/app/lessons/[...slug]/page.tsx](../../../src/app/lessons/%5B...slug%5D/page.tsx)
