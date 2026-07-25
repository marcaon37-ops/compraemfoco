export default function Benefits() {
  const itens = [
    {
      titulo: "Compare preços",
      descricao: "Encontre rapidamente o menor preço entre diversas lojas.",
      icone: "💰",
    },
    {
      titulo: "Ofertas verificadas",
      descricao: "Promoções selecionadas diariamente.",
      icone: "🔥",
    },
    {
      titulo: "Compra segura",
      descricao: "Links para lojas reconhecidas no mercado.",
      icone: "🛡️",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {itens.map((item) => (
          <div
            key={item.titulo}
            className="rounded-2xl bg-white p-8 shadow-md"
          >
            <div className="mb-4 text-5xl">{item.icone}</div>
            <h3 className="text-xl font-bold">{item.titulo}</h3>
            <p className="mt-3 text-gray-600">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}