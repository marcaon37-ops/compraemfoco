import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Logo({ light = false, compact = false }) {
  const textColor = light ? "text-white" : "text-slate-950";

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-2.5"
      aria-label="CompraEmFoco — página inicial"
    >
      <span className="relative grid size-10 place-items-center rounded-xl bg-blue-600 shadow-sm shadow-blue-950/20 transition-transform group-hover:-rotate-3 group-hover:scale-105 sm:size-11">
        <ShoppingCart className="size-5 text-white sm:size-6" strokeWidth={2.5} />
        <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-amber-400 ring-2 ring-white">
          <Search className="size-2.5 text-slate-950" strokeWidth={3} />
        </span>
      </span>
      {!compact && (
        <span className={`text-lg font-extrabold tracking-tight sm:text-xl ${textColor}`}>
          Compra<span className="text-blue-500">EmFoco</span>
        </span>
      )}
    </Link>
  );
}
