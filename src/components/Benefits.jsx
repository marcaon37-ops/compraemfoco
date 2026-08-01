import { BadgeCheck, PackageCheck, Tags } from "lucide-react";

export default function Benefits() {
  const itens = [
    {
      titulo: "Preços comparados",
      descricao: "Veja rapidamente onde sua compra vale mais a pena.",
      icone: Tags,
    },
    {
      titulo: "Ofertas verificadas",
      descricao: "Monitoramos promoções para você comprar com confiança.",
      icone: BadgeCheck,
    },
    {
      titulo: "Lojas confiáveis",
      descricao: "Encontre grandes varejistas em um único lugar.",
      icone: PackageCheck,
    },
  ];

  return (
    <section className="bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {itens.map(({ titulo, descricao, icone: Icon }) => (
            <div key={titulo} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon className="size-5" /></span>
              <div><h2 className="font-bold text-slate-900">{titulo}</h2><p className="mt-1 text-sm leading-5 text-slate-500">{descricao}</p></div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
