interface InsightCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function InsightCard({
  title,
  description,
  children,
}: InsightCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {children}
      <button className="text-sm font-semibold mt-4 hover:underline">
        View full report
      </button>
    </div>
  );
}
