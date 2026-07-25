const categorias = [
  "📱 Celulares",
  "💻 Notebooks",
  "📺 TVs",
  "🎧 Fones",
  "⌚ Smartwatches",
  "🖥️ Monitores",
];

export default function Categories() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Categorias</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {categorias.map((categoria) => (
          <div
            key={categoria}
            style={{
              padding: "15px 20px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)",
              cursor: "pointer",
            }}
          >
            {categoria}
          </div>
        ))}
      </div>
    </section>
  );
}