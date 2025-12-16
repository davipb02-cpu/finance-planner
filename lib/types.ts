export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
  description?: string;
  icon?: string;
}

export interface MonthSummary {
  income: number;
  expenses: number;
  leftover: number;
}

export interface CategoryBreakdown {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}
