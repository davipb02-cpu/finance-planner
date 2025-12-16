"use client";

import { useState } from "react";
import Link from "next/link";
import TransactionsHeader from "@/components/ui/TransactionsHeader";

// Extended mock data for transactions page
const mockTransactionsByDate = [
  {
    date: "Today, Oct 24",
    total: -28.39,
    transactions: [
      {
        id: "1",
        name: "Starbucks Coffee",
        category: "Food & Drink",
        amount: -5.4,
        date: "2023-10-24T10:42:00Z",
        type: "expense" as const,
        icon: "☕",
      },
      {
        id: "2",
        name: "Spotify Premium",
        category: "Subscriptions",
        amount: -11.99,
        date: "2023-10-24T09:00:00Z",
        type: "expense" as const,
        description: "Recurring",
        icon: "🎵",
      },
      {
        id: "3",
        name: "Uber Ride",
        category: "Transport",
        amount: -11.0,
        date: "2023-10-24T08:15:00Z",
        type: "expense" as const,
        icon: "🚗",
      },
    ],
  },
  {
    date: "Yesterday, Oct 23",
    total: 3175.5,
    transactions: [
      {
        id: "4",
        name: "Salary Deposit",
        category: "Income",
        amount: 3200.0,
        date: "2023-10-23T09:00:00Z",
        type: "income" as const,
        description: "TechCorp Inc.",
        icon: "💼",
      },
      {
        id: "5",
        name: "Whole Foods Market",
        category: "Groceries",
        amount: -24.5,
        date: "2023-10-23T18:30:00Z",
        type: "expense" as const,
        icon: "🛒",
      },
    ],
  },
  {
    date: "Oct 21, 2023",
    total: -145.0,
    transactions: [
      {
        id: "6",
        name: "Uniqlo Store",
        category: "Clothing",
        amount: -85.0,
        date: "2023-10-21T15:20:00Z",
        type: "expense" as const,
        description: "Weekend Shopping",
        icon: "🛍️",
      },
      {
        id: "7",
        name: "AMC Theatres",
        category: "Entertainment",
        amount: -30.0,
        date: "2023-10-21T19:00:00Z",
        type: "expense" as const,
        description: "2 Tickets",
        icon: "🎭",
      },
      {
        id: "8",
        name: "Burger King",
        category: "Dining Out",
        amount: -30.0,
        date: "2023-10-21T12:30:00Z",
        type: "expense" as const,
        description: "Lunch",
        icon: "🍔",
      },
    ],
  },
];

export default function TransactionsPage() {
  const [selectedMonth, setSelectedMonth] = useState("October 2023");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");

  const totalIncome = 4250.0;
  const totalExpenses = 1245.5;
  const netBalance = 3004.5;

  const getIconBg = (category: string, type: string) => {
    if (type === "income") return "bg-primary/20 text-text-main";
    if (category === "Subscriptions") return "bg-green-50 text-green-600";
    if (category === "Transport") return "bg-orange-50 text-orange-600";
    if (category === "Clothing") return "bg-blue-50 text-blue-600";
    if (category === "Entertainment") return "bg-purple-50 text-purple-600";
    if (category === "Dining Out") return "bg-red-50 text-red-600";
    return "bg-gray-100";
  };

  return (
    <div className="bg-background-light font-display text-text-main antialiased min-h-screen flex flex-col">
      <TransactionsHeader />

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 py-8 max-w-7xl mx-auto w-full">
        {/* Page Header & Stats */}
        <div className="flex flex-col gap-8 mb-10">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Your Activity
              </h1>
              <p className="text-text-muted text-lg font-normal">
                A narrative view of your spending in {selectedMonth}
              </p>
            </div>
            {/* Mobile only action */}
            <Link
              href="/upload"
              className="md:hidden flex cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-primary text-text-main text-sm font-bold"
            >
              Import CSV
            </Link>
          </div>

          {/* Summary Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded-full text-green-700">
                  <span className="text-sm">📈</span>
                </div>
                <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                  Total Income
                </p>
              </div>
              <p className="text-text-main text-3xl font-bold tracking-tight">
                ${totalIncome.toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-red-100 rounded-full text-red-700">
                  <span className="text-sm">📉</span>
                </div>
                <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                  Total Expenses
                </p>
              </div>
              <p className="text-text-main text-3xl font-bold tracking-tight">
                ${totalExpenses.toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col gap-1 rounded-xl p-6 bg-white border border-border-color shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-blue-100 rounded-full text-blue-700">
                  <span className="text-sm">🏛️</span>
                </div>
                <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                  Net Balance
                </p>
              </div>
              <p className="text-text-main text-3xl font-bold tracking-tight">
                ${netBalance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-[80px] z-40 bg-background-light/95 backdrop-blur-sm py-4 -mx-4 px-4 md:-mx-10 md:px-10 border-b border-transparent transition-all">
          <div className="flex flex-nowrap overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {/* Active Filter */}
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-text-main px-5 transition-transform active:scale-95 shadow-sm">
              <p className="text-sm font-bold">{selectedMonth}</p>
              <span className="text-lg">▼</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-border-color px-5 hover:border-gray-400 transition-colors">
              <p className="text-text-main text-sm font-medium">
                {selectedCategory}
              </p>
              <span className="text-lg text-text-muted">▼</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-border-color px-5 hover:border-gray-400 transition-colors">
              <p className="text-text-main text-sm font-medium">{selectedType}</p>
              <span className="text-lg text-text-muted">▼</span>
            </button>
            <div className="w-px h-8 bg-gray-300 my-auto mx-1"></div>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-transparent hover:bg-gray-200 px-3 transition-colors text-text-muted">
              <span className="text-xl">☰</span>
              <span className="text-sm font-medium">More Filters</span>
            </button>
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-transparent hover:bg-gray-200 transition-colors text-text-muted ml-auto">
              <span className="text-xl">🔍</span>
            </button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="flex flex-col mt-4 gap-8 pb-20">
          {mockTransactionsByDate.map((day, dayIndex) => (
            <section key={dayIndex}>
              <div className="flex items-center gap-3 mb-4 pl-2">
                <h3 className="text-text-main text-lg font-bold">{day.date}</h3>
                <div className="h-px bg-border-color flex-1"></div>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    day.total >= 0
                      ? "text-green-700"
                      : "text-text-muted"
                  }`}
                >
                  {day.total >= 0 ? "+" : ""}
                  ${Math.abs(day.total).toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {day.transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={`group flex items-center justify-between p-3 md:p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-border-color ${
                      transaction.type === "income"
                        ? "bg-white/40"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-12 rounded-full flex items-center justify-center text-2xl shrink-0 overflow-hidden relative ${getIconBg(
                          transaction.category,
                          transaction.type
                        )}`}
                      >
                        {transaction.icon || "💳"}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-text-main text-base font-bold leading-tight group-hover:text-black group-hover:text-primary transition-colors">
                          {transaction.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-text-muted text-xs font-medium px-2 py-0.5 rounded-md bg-gray-100">
                            {transaction.category}
                          </span>
                          {transaction.description && (
                            <>
                              <span className="text-text-muted text-xs">•</span>
                              <span className="text-text-muted text-xs">
                                {transaction.description}
                              </span>
                            </>
                          )}
                          {!transaction.description && (
                            <>
                              <span className="text-text-muted text-xs">•</span>
                              <span className="text-text-muted text-xs">
                                {new Date(transaction.date).toLocaleTimeString(
                                  "en-US",
                                  {
                                    hour: "numeric",
                                    minute: "2-digit",
                                  }
                                )}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-text-main font-semibold text-lg ${
                        transaction.type === "income"
                          ? "text-green-700 font-bold"
                          : ""
                      }`}
                    >
                      {transaction.amount >= 0 ? "+" : ""}
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Pagination/Footer */}
        <div className="flex justify-center pb-12">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border-color text-text-main font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <span>Load More Transactions</span>
            <span className="text-lg">⬇</span>
          </button>
        </div>
      </main>
    </div>
  );
}
