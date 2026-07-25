export default function Home() {
  return (
    <main
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#0a7cff",
          marginBottom: "10px",
        }}
      >
        CompraEmFoco
      </h1>

      <h2>As melhores ofertas da internet em um só lugar.</h2>

      <p style={{ color: "#666", fontSize: "20px" }}>
        Em breve você poderá comparar preços, encontrar promoções e economizar
        nas suas compras.
      </p>

      <button
        style={{
          marginTop: "30px",
          background: "#0a7cff",
          color: "#fff",
          padding: "15px 30px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Ver Ofertas
      </button>
    </main>
  );
}