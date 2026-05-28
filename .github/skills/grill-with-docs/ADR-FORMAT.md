# ADR Format

Create ADRs only when all are true:
- Hard to reverse
- Surprising without context
- Real trade-off among alternatives

## Filename

Use zero-padded numbering:

```text
docs/adr/0001-short-kebab-title.md
```

## Template

```markdown
# ADR <number>: <Title>

## Status
Accepted | Proposed | Superseded

## Date
YYYY-MM-DD

## Context
What problem or constraint requires a decision?

## Decision
What was decided?

## Alternatives Considered
1. <Option A> - Pros/Cons
2. <Option B> - Pros/Cons

## Consequences
Expected benefits, risks, and follow-up impacts.

## References
Links to related docs, code, tickets, or discussions.
```
