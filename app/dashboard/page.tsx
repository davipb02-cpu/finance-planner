import Link from "next/link";
import DashboardHeader from "@/components/ui/DashboardHeader";
import {
  mockMonthSummary,
  mockCategoryBreakdown,
  mockTransactions,
  mockBiggestExpense,
  mockTopSpending,
} from "@/lib/mockData";

export default function DashboardPage() {
  const totalExpenses = mockCategoryBreakdown.reduce(
    (sum, cat) => sum + cat.amount,
    0
  );

  return (
    <div className="bg-background min-h-screen flex flex-col font-display text-text-main overflow-x-hidden">
      <DashboardHeader />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[800px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col gap-10 md:gap-14">
        {/* Greeting & Summary */}
        <section className="flex flex-col gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Sua História de Janeiro
            </h2>
            <p className="text-gray-500 text-lg">
              Veja como seu mês está se desenvolvendo até agora.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Income */}
            <div className="bg-surface-light p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent flex flex-col justify-between h-32 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <span className="text-[20px] text-green-600">⬇</span>
                <span className="text-sm font-medium">Receitas</span>
              </div>
              <p className="text-3xl font-bold tracking-tight">
                R${mockMonthSummary.income.toLocaleString()}
              </p>
            </div>

            {/* Expenses */}
            <div className="bg-surface-light p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent flex flex-col justify-between h-32 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <span className="text-[20px] text-red-500">⬆</span>
                <span className="text-sm font-medium">Despesas</span>
              </div>
              <p className="text-3xl font-bold tracking-tight">
                R${mockMonthSummary.expenses.toLocaleString()}
              </p>
            </div>

            {/* Balance (Highlighted) */}
            <div className="bg-primary p-6 rounded-2xl shadow-lg shadow-primary/20 flex flex-col justify-between h-32 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-white/20 size-24 rounded-full blur-xl"></div>
              <div className="flex items-center gap-2 text-black/70 mb-2 relative z-10">
                <span className="text-[20px]">🏛️</span>
                <span className="text-sm font-bold">Saldo</span>
              </div>
              <p className="text-3xl font-bold tracking-tight text-black relative z-10">
                R${mockMonthSummary.leftover.toLocaleString()}
              </p>
            </div>
          </div>
        </section>

        {/* Feed Section */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-primary">✨</span>
              Feed de Insights
            </h3>
          </div>

          {/* Insight: Chart Card */}
          <div className="bg-surface-light rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 w-full space-y-4">
              <h4 className="text-lg font-bold">
                Para onde foi seu dinheiro
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Moradia continua sendo seu maior compromisso, mas os gastos com{" "}
                <strong className="text-black">Entretenimento</strong> aumentaram
                15% em relação ao mês passado.
              </p>
              <Link
                href="/transactions"
                className="text-sm font-bold border-b-2 border-primary pb-0.5 hover:text-gray-600 transition-colors inline-block"
              >
                Ver relatório completo
              </Link>
            </div>

            {/* Custom CSS Donut Chart */}
            <div className="relative size-48 shrink-0">
              <div
                className="w-full h-full relative rounded-full"
                style={{
                  background: `conic-gradient(
                    #f9f506 0% 35%,
                    #181811 35% 60%,
                    #e5e5e0 60% 85%,
                    #a3a3a3 85% 100%
                  )`,
                }}
              ></div>
              <div className="absolute inset-0 m-auto size-28 bg-surface-light rounded-full flex flex-col items-center justify-center">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Total
                </span>
                <span className="text-lg font-bold">
                  R${totalExpenses.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col justify-center gap-3 w-full md:w-auto min-w-[140px]">
              {mockCategoryBreakdown.map((cat) => (
                <div key={cat.category} className="flex items-center gap-3 text-sm">
                  <div
                    className="size-3 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  ></div>
                  <span className="font-medium">
                    {cat.category} ({cat.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Biggest Expense */}
            <div className="bg-surface-light rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-[80px]">🧾</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="text-[14px]">⚠️</span>
                    Maior Despesa
                  </div>
                  <h4 className="text-xl font-bold">{mockBiggestExpense.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {mockBiggestExpense.date} • {mockBiggestExpense.category}
                  </p>
                </div>
                <div className="text-3xl font-bold tabular-nums">
                  R${Math.abs(mockBiggestExpense.amount).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Top Category */}
            <div className="bg-surface-light rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-[80px] text-primary">🛍️</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-black text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="text-[14px]">📈</span>
                    Maior Gasto
                  </div>
                  <h4 className="text-xl font-bold">{mockTopSpending.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {mockTopSpending.transactionCount} Transações
                  </p>
                </div>
                <div className="text-3xl font-bold tabular-nums">
                  R${Math.abs(mockTopSpending.amount).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Feed */}
        <section className="flex flex-col gap-6 pb-20">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold">Atividade Recente</h3>
            <Link
              href="/transactions"
              className="text-sm font-bold text-gray-500 hover:text-black transition-colors"
            >
              Ver Todas
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-surface-light rounded-2xl border border-transparent hover:border-primary/50 transition-all hover:shadow-md cursor-pointer gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors ${
                      transaction.type === "income"
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100"
                    }`}
                  >
                    <span className="text-2xl">{transaction.icon || "💳"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{transaction.name}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>
                        {new Date(transaction.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="size-1 rounded-full bg-gray-300"></span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-md text-xs font-medium">
                        {transaction.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`text-right font-bold text-lg tabular-nums ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-text-main"
                  }`}
                >
                  {transaction.amount >= 0 ? "+" : ""}
                  R${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/upload"
          aria-label="Adicionar transação"
          className="size-16 rounded-full bg-primary text-black shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        >
          <span className="text-[32px] group-hover:rotate-90 transition-transform duration-300">
            +
          </span>
        </Link>
      </div>
    </div>
  );
}
