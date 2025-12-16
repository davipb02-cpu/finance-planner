interface ExpenseCardProps {
  label: string;
  title: string;
  subtitle: string;
  amount: string;
  variant?: "default" | "warning";
}

export default function ExpenseCard({
  label,
  title,
  subtitle,
  amount,
  variant = "default",
}: ExpenseCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            variant === "warning"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {label}
        </span>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-bold mb-1">{title}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{amount}</p>
        </div>
      </div>
    </div>
  );
}
