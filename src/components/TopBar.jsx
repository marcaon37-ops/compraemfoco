import {
  BadgePercent,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";

const items = [
  {
    icon: <BadgePercent size={18} />,
    text: "Ofertas atualizadas diariamente",
  },
  {
    icon: <Truck size={18} />,
    text: "Compare fretes",
  },
  {
    icon: <CreditCard size={18} />,
    text: "Parcele nas melhores lojas",
  },
  {
    icon: <ShieldCheck size={18} />,
    text: "Compras mais seguras",
  },
];

export default function TopBar() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-2.5 text-xs font-medium sm:justify-center sm:text-sm lg:px-6">
        {items.map((item, index) => (
          <div key={index} className="flex shrink-0 items-center gap-2 text-slate-200">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
