export default function ProductCard({ produto }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-60 items-center justify-center bg-gray-100 text-6xl">
        📦
      </div>

      <div className="p-5">
        <span className="text-sm text-gray-500">
          {produto.loja}
        </span>

        <h3 className="mt-2 text-lg font-bold">
          {produto.nome}
        </h3>

        <div className="mt-2 text-yellow-500">
          ⭐ {produto.avaliacao}
        </div>

        <p className="mt-3 text-sm text-gray-400 line-through">
          R$ {produto.precoAnterior.toLocaleString("pt-BR")}
        </p>

        <p className="text-3xl font-bold text-blue-600">
          R$ {produto.preco.toLocaleString("pt-BR")}
        </p>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Ver Oferta
        </button>
      </div>
    </div>
  );
}