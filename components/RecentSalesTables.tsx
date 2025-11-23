export default function RecentSalesTables() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-text-primary">Últimas Ventas</h3>
        <button className="text-text-accent text-sm font-medium hover:underline">
          Ver todas
        </button>
      </div>

      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-text-secondary uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4 font-semibold">Producto</th>
            <th className="px-6 py-4 font-semibold">Cantidad</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Hora</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="hover:bg-surface-hover-table transition-colors">
            <td className="px-6 py-4 font-medium text-text-primary">
              Trufa Chocolate Negro
            </td>
            <td className="px-6 py-4 text-text-primary">2 un.</td>
            <td className="px-6 py-4 font-medium text-text-accent">$3.000</td>
            <td className="px-6 py-4 text-text-muted">10:42 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
