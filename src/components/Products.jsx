import ProductCard from "./ProductCard";

const produtos = [
  {
    nome: "Samsung Galaxy S25",
    preco: "R$ 4.299",
  },
  {
    nome: "Notebook Lenovo IdeaPad",
    preco: "R$ 3.199",
  },
  {
    nome: "Smart TV LG 55'' 4K",
    preco: "R$ 2.699",
  },
];

export default function Products() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>🔥 Ofertas do Dia</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {produtos.map((produto) => (
          <ProductCard
            key={produto.nome}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </div>
    </section>
  );
}