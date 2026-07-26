import {
  Heart,
  Star,
  ShoppingCart,
} from "lucide-react";

export default function ProductCard({
  image,
  title,
  store,
  oldPrice,
  price,
  discount,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative">

        <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>

        <img
          src={image}
          alt={title}
          className="h-64 w-full object-contain p-6 transition duration-300 group-hover:scale-105"
        />

      </div>

      <div className="space-y-3 p-6">

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
          {discount}
        </span>

        <h3 className="line-clamp-2 text-lg font-bold">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-yellow-500">

          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />

          <span className="ml-2 text-sm text-gray-500">
            Loja: {store}
          </span>

        </div>

        <p className="text-sm text-gray-400 line-through">
          {oldPrice}
        </p>

        <p className="text-3xl font-black text-blue-600">
          {price}
        </p>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700">

          <ShoppingCart size={20} />

          Ver Oferta

        </button>

      </div>

    </article>
  );
}