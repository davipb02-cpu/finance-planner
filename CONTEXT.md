# FinancePlanner – Project Context

## Project Goal

Personal finance planner MVP built as a portfolio project.

The goal is to help a user understand their monthly finances in a narrative, feed-based way, inspired by Spotify / YouTube activity history.

Data is currently mocked. CSV import, database, and automations will be added later.

---

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- PostgreSQL (Supabase – not connected yet)
- Prisma (planned)
- n8n (planned)

---

## Design Philosophy

- Feed-oriented layout
- Narrative, chronological flow
- Vertical scrolling
- Minimal grids
- Cards and lists over tables
- Calm, neutral visuals
- Not a traditional fintech dashboard

---

## Current State

- App Router initialized
- Dashboard page implemented with mock data
- UI components created (SummaryCard, InsightCard, ExpenseCard, TransactionRow)
- Header currently being refactored into a global layout
- No backend, no auth, no database integration yet

---

## Architecture Rules

- Single repository
- Feature-based folder structure
- Business logic must not live inside UI components
- Mock data lives in lib/mockData.ts
- No premature abstractions

---

## MVP Scope

### Included

- Dashboard (feed-style)
- Transactions page (UI only)
- Upload page (UI only)
- Shared layout and navigation

### Not Included Yet

- CSV parsing
- API routes
- Database writes
- Open Finance integrations
- n8n workflows

---

## Development Priorities

1. Create a global app layout (Header / App Shell)
2. Connect pages through navigation
3. Reuse components across pages
4. Keep code clean and readable
