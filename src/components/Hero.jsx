export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Compare preços e economize
        </span>

        <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
          Encontre a melhor oferta antes de comprar
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Pesquise produtos, compare preços entre diversas lojas e compre pelo
          menor valor.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl rounded-xl border bg-white p-2 shadow-lg">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="flex-1 rounded-lg px-4 py-3 outline-none"
          />

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}