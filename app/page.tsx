import DashboardHeader from "@/components/DashboardHeader";
import MetricCard from "@/components/MetricCard";
import React from "react";
import { Package, TrendingUp, AlertTriangle } from "lucide-react";
import RecentSalesTables from "@/components/RecentSalesTables";

export default function Dashboard() {
  return (
    <div className="flex h-screen b g-gray-100 font-sans text-slate-800">
      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto">
        {/* Header Móvil / Superior
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 md:hidden">
          <span className="font-bold text-lg">Trufadas</span>
          {/* Aquí iría un botón de menú hamburguesa */}

        <div className="p-6 max-w-7xl mx-auto">
          <DashboardHeader />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Ventas del Día"
              value="$45.000"
              icon={<TrendingUp size={20} />}
              trend="+12% vs ayer"
              trendColor="success"
            />

            <MetricCard
              title="Total Productos"
              value="24"
              icon={<Package size={20} />}
            />

            <MetricCard
              title="Stock Bajo"
              value="3"
              icon={<AlertTriangle size={20} />}
              alert={true}
              trendColor="danger"
            />
          </div>

          <RecentSalesTables />
        </div>
      </main>
    </div>
  );
}
