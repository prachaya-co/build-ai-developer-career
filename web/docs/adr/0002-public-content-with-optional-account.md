# ADR 0002: Keep Learning Content Public and Make Accounts Optional for Progress Tracking

## Status
Accepted

## Date
2026-05-28

## Context
The platform is intended to be public-facing while still supporting learner progress, assignments, and personalized tracking for people who choose to sign in.

## Decision
Publish the lesson content publicly, and require an account only for personal features such as progress tracking, assignment submission, and saved learning state.

## Alternatives Considered
1. Require sign-in for all content - would reduce accessibility and increase friction for new learners.
2. Make everything anonymous - would make progress tracking and assignment history impossible.
3. Split the site into separate public and private apps - would add unnecessary complexity at this stage.

## Consequences
The public can browse and learn without barriers, which helps adoption and SEO. Personalized features need authentication and a user record, so those flows must be designed as optional but first-class.

## References
- [web/CONTEXT.md](../../../CONTEXT.md)
- [web/src/app/page.tsx](../../../src/app/page.tsx)
