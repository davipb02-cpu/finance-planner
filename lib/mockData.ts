import { Transaction, MonthSummary, CategoryBreakdown } from "./types";

export const mockMonthSummary: MonthSummary = {
  income: 5200,
  expenses: 3150,
  leftover: 2050,
};

export const mockCategoryBreakdown: CategoryBreakdown[] = [
  { category: "Housing", amount: 1102.5, percentage: 35, color: "#f9f506" },
  { category: "Food", amount: 787.5, percentage: 25, color: "#181811" },
  { category: "Transport", amount: 787.5, percentage: 25, color: "#e5e5e0" },
  { category: "Others", amount: 472.5, percentage: 15, color: "#a3a3a3" },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    name: "Starbucks",
    category: "Food & Drink",
    amount: -12.5,
    date: "2025-01-18T09:00:00Z",
    type: "expense",
    icon: "☕",
  },
  {
    id: "2",
    name: "Whole Foods Market",
    category: "Groceries",
    amount: -145.2,
    date: "2025-01-17T14:30:00Z",
    type: "expense",
    icon: "🛒",
  },
  {
    id: "3",
    name: "Freelance Payment",
    category: "Income",
    amount: 850.0,
    date: "2025-01-18T10:00:00Z",
    type: "income",
    description: "TechCorp Inc.",
    icon: "💰",
  },
  {
    id: "4",
    name: "Shell Station",
    category: "Transport",
    amount: -45.0,
    date: "2025-01-17T08:15:00Z",
    type: "expense",
    icon: "⛽",
  },
];

export const mockBiggestExpense = {
  name: "Apple Store",
  category: "Electronics",
  amount: -1299.0,
  date: "Jan 14",
};

export const mockTopSpending = {
  name: "Shopping",
  transactionCount: 12,
  amount: -840.5,
};
