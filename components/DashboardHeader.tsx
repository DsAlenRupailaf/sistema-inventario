import { Package, PlusCircle } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Buenos días, Usuario
          </h2>
          <p className="text-text-secondary">Aquí tienes el resumen de hoy</p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm text-sm font-medium transition-all bg-btn-primary-text border-border-primary text-btn-secondary-text hover:bg-slate-50">
            <Package size={16} />
            Nuevo Producto
          </button>
          <button className="px-4 py-2 border rounded-lg flex items-center gap-2 shadow-lg shadow-emerald-600/20 text-sm font-medium transition-all bg-btn-primary-bg hover:bg-btn-primary-hover-bg text-btn-primary-text border-border-button">
            <PlusCircle size={16} />
            Nueva Venta
          </button>
        </div>
      </div>
    </div>
  );
}
