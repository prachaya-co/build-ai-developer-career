---
name: grill-with-docs
description: "Grilling session that stress-tests a plan against the existing domain model, sharpens terminology, and updates documentation (CONTEXT.md, ADRs) inline as decisions are made. Use when the user wants to challenge a plan against project language and documented decisions."
argument-hint: "Describe the plan to grill"
user-invocable: true
---

# Grill With Docs

## What This Skill Does

Run a rigorous design interrogation that turns fuzzy plans into precise, documented decisions.
Default mode is balanced: challenge major assumptions without exhaustive interrogation unless requested.

## When To Use

- User asks to stress-test a design or architecture plan.
- Domain terms are ambiguous, overloaded, or contradictory.
- Team needs decisions captured in CONTEXT.md and ADRs during discussion.

## Procedure

### 1. Interview One Question At A Time

- Ask focused questions that cover each branch of the design tree.
- Wait for the user answer before asking the next question.
- Provide a recommended answer with each question.

### 2. Resolve With Evidence

- If a question can be answered by inspecting code or docs, investigate first.
- Surface contradictions between stated behavior and actual implementation.

### 3. Enforce Domain Language Quality

- Challenge terms that conflict with existing glossary entries.
- Replace vague terms with precise canonical terminology.
- Use concrete edge-case scenarios to force boundary clarity.

### 4. Update Documentation Inline

- Propose each CONTEXT.md update when a term is resolved, then apply only after user confirmation.
- Keep CONTEXT.md glossary-only with no implementation detail.
- Propose an ADR only if all are true, and create it after user confirmation:
  - Hard to reverse later
  - Surprising without context
  - Result of a real trade-off

## Domain Awareness

During exploration, check for documentation layouts:

Single-context pattern:

```text
/
|-- CONTEXT.md
|-- docs/
|   |-- adr/
|       |-- 0001-example.md
|-- src/
```

Multi-context pattern:

```text
/
|-- CONTEXT-MAP.md
|-- docs/
|   |-- adr/
|-- src/
|   |-- ordering/
|   |   |-- CONTEXT.md
|   |   |-- docs/adr/
|   |-- billing/
|       |-- CONTEXT.md
|       |-- docs/adr/
```

Create files lazily. If CONTEXT.md or docs/adr/ do not exist, create them only when you have content to write.

## References

- CONTEXT format: [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md)
- ADR format: [ADR-FORMAT.md](./ADR-FORMAT.md)
