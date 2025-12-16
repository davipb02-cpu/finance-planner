# FinancePlanner MVP

A personal finance planner application built with Next.js, featuring a narrative-driven approach to viewing financial activity.

## Tech Stack

- **Frontend**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Runtime**: React 19

## Project Structure

```
/app
  /dashboard       # Main dashboard with monthly overview
  /login          # Authentication page
  /transactions   # Transaction feed view
  /upload         # CSV upload (UI only)
  /api            # API routes (future)

/components
  /ui             # Reusable UI components
    - SummaryCard.tsx
    - TransactionRow.tsx
    - InsightCard.tsx
    - ExpenseCard.tsx

/lib
  /services       # Business logic (future)
  /repositories   # Data access (future)
  /utils          # Utility functions
  - types.ts      # TypeScript types
  - mockData.ts   # Mock data for development
```

## Current Features (MVP Scope)

✅ Login page with email/password and Google OAuth UI
✅ Dashboard with:
  - Monthly summary (income, expenses, leftover)
  - Spending breakdown visualization
  - Recent activity feed
  - Biggest expense and top spending insights
✅ Transactions page with:
  - Chronological transaction feed
  - Filter controls (UI only)
  - Monthly summaries
✅ Responsive design
✅ Clean component architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

The app will redirect to `/login`. Click "Sign In" or "Continue with Google" to navigate to the dashboard.

## Pages

- **`/login`** - Authentication interface
- **`/dashboard`** - Main overview with insights
- **`/transactions`** - Full transaction history

## Next Steps (Not Yet Implemented)

- [ ] Supabase authentication integration
- [ ] Prisma + PostgreSQL setup
- [ ] CSV upload and parsing
- [ ] Database CRUD operations
- [ ] API routes for data handling
- [ ] n8n workflow automation
- [ ] Advanced filtering and search
- [ ] Charts with Recharts/Chart.js

## Design Philosophy

- Feed-oriented layout (inspired by Spotify/YouTube activity)
- Vertical scroll, chronological sections
- Calm, neutral visuals with yellow accent
- Cards and lists over data tables
- Narrative storytelling approach

## Development Notes

- All data is currently **mocked** in `lib/mockData.ts`
- Components are ready for backend integration
- Type definitions in `lib/types.ts` reflect expected data structure
- Server components used by default, client components marked with `"use client"`
