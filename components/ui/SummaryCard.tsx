interface SummaryCardProps {
  label: string;
  amount: number;
  variant?: "default" | "highlight";
  icon?: string;
}

export default function SummaryCard({
  label,
  amount,
  variant = "default",
  icon,
}: SummaryCardProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Math.abs(amount));

  return (
    <div
      className={`rounded-3xl p-6 ${
        variant === "highlight"
          ? "bg-primary text-text"
          : "bg-white text-text"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-xl">{icon}</span>}
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>
      <p className="text-3xl font-bold">{formattedAmount}</p>
    </div>
  );
}
