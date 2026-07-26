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
    <section className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl justify-between overflow-x-auto px-4 py-5">
        {categories.map(({ icon: Icon, name }) => (
          <button
            key={name}
            className="flex min-w-[90px] flex-col items-center gap-2 rounded-xl p-3 transition hover:bg-gray-100"
          >
            <Icon className="text-blue-600" size={28} />
            <span className="text-sm font-medium">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}