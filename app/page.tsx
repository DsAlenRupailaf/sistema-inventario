import SideBar from "@/components/SideBar";
import React from "react";
import {
  Package,
  LogOut,
  PlusCircle,
  TrendingUp,
  AlertTriangle,
  Search,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-slate-800">
      <SideBar />

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto">
        {/* Header Móvil / Superior */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 md:hidden">
          <span className="font-bold text-lg">Trufadas</span>
          {/* Aquí iría un botón de menú hamburguesa */}
        </header>

        <div className="p-6 max-w-7xl mx-auto">
          {/* Saludo y Acciones Rápidas */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Buenos días, Usuario
              </h2>
              <p className="text-slate-500">Aquí tienes el resumen de hoy.</p>
            </div>

            {/* Estos botones reemplazan "Ingresar Venta" e "Ingresar Producto" */}
            <div className="flex gap-3">
              <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm text-sm font-medium transition-all">
                <Package size={16} />
                Nuevo Producto
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm font-medium transition-all">
                <PlusCircle size={16} />
                Nueva Venta
              </button>
            </div>
          </div>

          {/* 3. TARJETAS DE ESTADÍSTICAS (KPIs) - Valor agregado que no tenías antes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">
                    Ventas del Día
                  </p>
                  <h3 className="text-3xl font-bold text-slate-800">$45.000</h3>
                </div>
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <TrendingUp size={20} />
                </div>
              </div>
              <span className="text-emerald-600 text-xs font-medium flex items-center gap-1 mt-2">
                +12% vs ayer
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">
                    Total Productos
                  </p>
                  <h3 className="text-3xl font-bold text-slate-800">24</h3>
                </div>
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Package size={20} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">
                    Stock Bajo
                  </p>
                  <h3 className="text-3xl font-bold text-red-600">3</h3>
                </div>
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  <AlertTriangle size={20} />
                </div>
              </div>
              <span className="text-slate-400 text-xs mt-2 block">
                Requieren atención urgente
              </span>
            </div>
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
