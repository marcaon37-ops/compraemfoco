export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#ffffff",
          padding: "50px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,.1)",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ color: "#0f172a", fontSize: "48px" }}>
          CompraEmFoco
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginTop: "20px",
          }}
        >
          Encontre os melhores produtos, compare preços e compre com confiança.
        </p>

        <button
          style={{
            marginTop: "35px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Em breve
        </button>
      </div>
    </main>
  );
}