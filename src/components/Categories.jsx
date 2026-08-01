import {
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Watch,
  Refrigerator,
  Gamepad2,
  Shirt,
} from "lucide-react";

const categories = [
  { icon: Smartphone, name: "Celulares" },
  { icon: Laptop, name: "Notebooks" },
  { icon: Tv, name: "TVs" },
  { icon: Headphones, name: "Áudio" },
  { icon: Watch, name: "Smartwatch" },
  { icon: Refrigerator, name: "Eletro" },
  { icon: Gamepad2, name: "Games" },
  { icon: Shirt, name: "Moda" },
];

export default function Categories() {
  return (
    <section id="categorias" className="bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">Encontre mais rápido</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Compre por categoria</h2>
          </div>
          <a href="#ofertas" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700">Ver todas</a>
        </div>
        <div className="grid grid-flow-col auto-cols-[88px] gap-3 overflow-x-auto pb-2 sm:grid-flow-row sm:grid-cols-4 sm:overflow-visible md:grid-cols-8">
        {categories.map(({ icon: Icon, name }) => (
          <a
            href="#ofertas"
            key={name}
            className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm"
          >
            <Icon className="size-6 text-blue-600 transition-transform group-hover:scale-110" strokeWidth={2.1} />
            <span className="text-xs font-semibold text-slate-700">{name}</span>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
