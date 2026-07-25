export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#0a7cff",
          color: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>CompraEmFoco</h1>

        <nav>
          <span style={{ marginRight: 20 }}>Início</span>
          <span style={{ marginRight: 20 }}>Categorias</span>
          <span>Ofertas</span>
        </nav>
      </header>

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>
          Encontre as melhores ofertas da internet
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "20px",
          }}
        >
          Compare preços e economize nas suas compras.
        </p>

        <input
          type="text"
          placeholder="🔍 Pesquise um produto..."
          style={{
            width: "60%",
            padding: "18px",
            marginTop: "30px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "18px",
          }}
        />
      </section>
    </main>
  );
}