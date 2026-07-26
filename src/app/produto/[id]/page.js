import products from "../../../data/products";
import Link from "next/link";

export default async function Produto({ params }) {
  const { id } = await params;

  const produto = products.find(
    (p) => p.id === Number(id)
  );

  if (!produto) {
    return (
      <main className="mx-auto max-w-5xl p-10">
        <h1 className="text-3xl font-bold">
          Produto não encontrado
        </h1>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Voltar
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-10">

      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Voltar
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">

        <div className="flex h-[450px] items-center justify-center rounded-2xl bg-gray-100 text-8xl">
          📦
        </div>

        <div>

          <p className="text-gray-500">
            {produto.loja}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {produto.nome}
          </h1>

          <p className="mt-4 text-xl text-yellow-500">
            ⭐ {produto.avaliacao}
          </p>

          <p className="mt-8 text-lg text-gray-400 line-through">
            R$ {produto.precoAnterior.toLocaleString("pt-BR")}
          </p>

          <p className="text-5xl font-bold text-blue-600">
            R$ {produto.preco.toLocaleString("pt-BR")}
          </p>

          <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white hover:bg-blue-700">
            Ver Oferta
          </button>

        </div>

      </div>

    </main>
  );
}