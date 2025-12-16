import { Transaction } from "@/lib/types";

interface TransactionRowProps {
  transaction: Transaction;
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(transaction.amount);

  const formattedDate = new Date(transaction.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
          {transaction.icon || "💳"}
        </div>
        <div>
          <p className="font-semibold text-base">{transaction.name}</p>
          <p className="text-sm text-gray-500">
            {formattedDate} • {transaction.category}
          </p>
        </div>
      </div>
      <p
        className={`font-bold text-lg ${
          transaction.type === "income" ? "text-green-600" : "text-text"
        }`}
      >
        {formattedAmount}
      </p>
    </div>
  );
}
