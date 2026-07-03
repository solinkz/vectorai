# VectorAI Active Review Prototype

VectorAI is a clickable product-discovery prototype for legal, compliance, and risk teams reviewing large batches of contracts.

The prototype explores a simple idea:

> Help reviewers decide which contracts deserve attention by showing reliable contract facts and human-written context beside the active contract.

This is intentionally not an AI ranking tool, dashboard, or production legal workflow. It is a focused interaction prototype for validating whether an inbox-like contract review flow helps legal teams move faster while still reaching their own conclusions.

## Why This Exists

Legal teams often review long contract queues while the useful context lives somewhere else: spreadsheets, meetings, emails, Slack, internal tools, or someone else's memory. The result is slower triage and more uncertainty about what deserves attention.

The Active Review prototype tests a lightweight institutional memory layer:

- A fast contract queue for moving through many contracts.
- A persistent context panel that updates instantly.
- Reliable contract facts from the system.
- Human-authored reviewer notes for meaning and nuance.
- A compact "remember" input for saving context without leaving the review flow.

Core product principle:

> The system owns facts. Humans own meaning.

## Prototype Features

- Keyboard-first contract review queue.
- Contract selection with arrow keys or `J` / `K`.
- Persistent right-side context panel.
- Contract facts: vendor, type, effective date, risk, last reviewed, previous reviews.
- "What Reviewers Know" section for human-written context.
- Context availability dots in the table.
- Draft autosave per contract.
- Explicit publishing with `Remember` or `Cmd/Ctrl + Enter`.
- Local search by contract name, vendor, type, and risk.
- Lazy loading simulation in batches of 12 contracts.
- LocalStorage persistence for added context, drafts, and selected contract.

## Out Of Scope

This prototype deliberately avoids:

- AI summaries
- AI prioritization or ranking
- Marketplace flows
- Team tagging
- Authentication
- Backend APIs
- Dashboards or metrics
- Production permissions

The goal is to validate the interaction model, not to simulate a full product.

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173/
```

Build for production:

```bash
npm run build
```

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React
- LocalStorage

## Product Discovery Question

Can a legal reviewer move through a large contract list faster, understand what is already known, and decide what deserves attention without relying on opaque AI prioritization?

This prototype is designed to help a product team answer that question through hands-on review.
