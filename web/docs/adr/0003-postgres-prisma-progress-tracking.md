# ADR 0003: Use PostgreSQL with Prisma for Progress Tracking

## Status
Accepted

## Date
2026-05-28

## Context
The platform needs to store users, lesson progress, quiz outcomes, and future assignment records in a structured way that works well with Next.js and server-side features.

## Decision
Use PostgreSQL as the primary database and Prisma as the ORM for user records, lesson records, and progress tracking.

## Alternatives Considered
1. NoSQL document store - would be flexible, but weaker for relational progress tracking and reporting.
2. File-based state - would not work for multi-user progress and analytics.
3. Direct SQL without an ORM - possible, but increases maintenance cost for a small team.

## Consequences
The schema is explicit and easy to evolve with migrations, and future analytics queries remain straightforward. The trade-off is the need to manage a database connection and migration workflow.

## References
- [web/prisma/schema.prisma](../../../prisma/schema.prisma)
