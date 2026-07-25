export default function ProductCard({ nome, preco }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-gray-100 text-7xl">
        📦
      </div>

      <div className="p-5">
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          15% OFF
        </span>

        <h3 className="mt-4 text-lg font-bold text-gray-900">
          {nome}
        </h3>

        <div className="mt-2 text-yellow-500 text-lg">
          ★★★★★
        </div>

        <p className="mt-3 text-sm text-gray-400 line-through">
          R$ 4.999
        </p>

        <p className="text-3xl font-bold text-blue-600">
          {preco}
        </p>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Ver Oferta
        </button>
      </div>
    </div>
  );
}