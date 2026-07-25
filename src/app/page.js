export default function Home() {
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

  return (
    <main style={{ background: "#f5f7fa", minHeight: "100vh", fontFamily: "Arial" }}>
      <header
        style={{
          background: "#0A66FF",
          color: "#fff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🛒 CompraEmFoco</h1>

        <div>
          <span style={{ marginRight: 25 }}>Início</span>
          <span style={{ marginRight: 25 }}>Categorias</span>
          <span>Ofertas</span>
        </div>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: 42 }}>
          Encontre o menor preço antes de comprar.
        </h2>

        <p style={{ color: "#555", fontSize: 20 }}>
          Compare preços das maiores lojas do Brasil.
        </p>

        <input
          placeholder="Pesquisar produto..."
          style={{
            width: "60%",
            maxWidth: 600,
            padding: 18,
            marginTop: 30,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 18,
          }}
        />
      </section>

      <section style={{ padding: 40 }}>
        <h2 style={{ marginBottom: 30 }}>🔥 Ofertas do Dia</h2>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              style={{
                width: 280,
                background: "#fff",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              }}
            >
              <div
                style={{
                  height: 180,
                  background: "#ececec",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 50,
                }}
              >
                📦
              </div>

              <h3>{produto.nome}</h3>

              <p
                style={{
                  color: "#0A66FF",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {produto.preco}
              </p>

              <button
                style={{
                  width: "100%",
                  background: "#0A66FF",
                  color: "#fff",
                  padding: 14,
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                Ver Oferta
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: 30,
          color: "#666",
        }}
      >
        © 2026 CompraEmFoco - Compare preços antes de comprar.
      </footer>
    </main>
  );
}