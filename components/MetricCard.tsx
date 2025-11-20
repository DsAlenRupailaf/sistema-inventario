type MetricCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendColor?: "success" | "danger" | "neutral";
  alert?: boolean;
};

export default function MetricCard({
  title,
  value,
  icon,
  trend,
  trendColor = "neutral",
  alert = false,
}: MetricCardProps) {
  const trendStyles = {
    success: "text-text-accent",
    danger: "text-text-danger",
    neutral: "text-text-primary",
  };

  const iconContainerStyle = alert
    ? "bg-red-100 text-text danger"
    : "bg-slate-100 text-text-accent";

  const valueStyle = alert ? "text-text-danger" : "text-foreground";

  return (
    <div className="bg-surface-light p-6 rounded-2xl shadow-sm border border-border-primary flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
          <h3 className={`text-3xl font-bold tracking-tight ${valueStyle}`}>
            {value}
          </h3>
        </div>

        <div className={`p-2 rounded-lg ${iconContainerStyle}`}>{icon}</div>
      </div>
      {trend && (
        <div className="mt-auto pt-2">
          <span
            className={`text-xs font-medium flex items-center gap-1 ${trendStyles[trendColor]}`}
          >
            {trend}
          </span>
        </div>
      )}
      {alert && !trend && (
        <span className="text-text-muted text-xs mt-auto block">
          Requiere atención
        </span>
      )}
    </div>
  );
}
