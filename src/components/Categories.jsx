import {
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Watch,
  Monitor,
  Home,
  Grid2x2,
} from "lucide-react";

const categories = [
  { name: "Início", icon: Grid2x2, active: true },
  { name: "Celulares", icon: Smartphone },
  { name: "Notebooks", icon: Laptop },
  { name: "TVs", icon: Tv },
  { name: "Áudio", icon: Headphones },
  { name: "Smartwatch", icon: Watch },
  { name: "Monitores", icon: Monitor },
  { name: "Casa", icon: Home },
];

export default function Categories() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto px-6 py-4">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={`flex min-w-fit flex-col items-center gap-2 border-b-2 px-4 pb-3 transition ${
                category.active
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              <Icon size={24} />
              <span className="text-sm font-medium">
                {category.name}
              </span>
            </button>
          );
        })}

      </div>
    </section>
  );
}