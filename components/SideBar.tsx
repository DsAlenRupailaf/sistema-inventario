import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Package, Settings } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-64 md:flex-col hidden md:flex bg-surface-dark text-foreground-on-dark">
      <div className="p-6 border-b border-surface-hover">
        <h1 className="text-2xl font-bold text-text-accent tracking-tight">
          Sistema<span className="text-foreground-on-dark">Inventario</span>
        </h1>
        <p className="text-xs">Sistema de Gestión</p>
      </div>

      <nav className="flex-1 p-4 mt-4 space-y-2">
        <Link
          href="#"
          className="flex font-medium items-center gap-3 px-4 py-3 text-text-muted hover:bg-surface-hover rounded-xl transition-colors"
        >
          <LayoutDashboard size={20} />
          <span>Inicio</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-surface-hover hover:text-foreground-on-dark rounded-xl transition-colors"
        >
          <ShoppingBag size={20} />
          <span>Ventas</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-surface-hover hover:text-foreground-on-dark rounded-xl transition-colors"
        >
          <Package size={20} />
          <span>Productos</span>
        </Link>

        <div className="pt-4 mt-4 border-t border-border-dark">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-surface-hover hover:text-foreground-on-dark rounded-xl transition-colors"
          >
            <Settings size={20} />
            <span>Configuración</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
