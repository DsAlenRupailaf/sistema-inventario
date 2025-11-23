import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import MetricCard from "@/components/MetricCard";
import React from "react";
import { Package, TrendingUp, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-slate-800">
      <SideBar />

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

          {/* 4. SECCIÓN DE VENTAS RECIENTES (Reemplaza "Listar Ventas") */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">
                Últimas Ventas
              </h3>
              <button className="text-emerald-600 text-sm font-medium hover:underline">
                Ver todas
              </button>
            </div>

            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Producto</th>
                  <th className="px-6 py-4 font-semibold">Cantidad</th>
                  <th className="px-6 py-4 font-semibold">Total</th>
                  <th className="px-6 py-4 font-semibold">Hora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">
                    Trufa Chocolate Negro
                  </td>
                  <td className="px-6 py-4 text-slate-600">2 un.</td>
                  <td className="px-6 py-4 font-medium text-emerald-600">
                    $3.000
                  </td>
                  <td className="px-6 py-4 text-slate-400">10:42 AM</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">
                    Caja Mixta (6un)
                  </td>
                  <td className="px-6 py-4 text-slate-600">1 un.</td>
                  <td className="px-6 py-4 font-medium text-emerald-600">
                    $8.500
                  </td>
                  <td className="px-6 py-4 text-slate-400">11:15 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
