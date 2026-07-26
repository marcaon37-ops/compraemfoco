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
    <section className="bg-blue-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-3 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}