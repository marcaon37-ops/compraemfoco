import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function Products() {
  return (
    <section id="ofertas" className="mx-auto max-w-7xl px-4 pb-14 sm:pb-20 lg:px-6">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div><p className="text-sm font-semibold text-blue-600">Seleção do dia</p><h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Ofertas em destaque</h2><p className="mt-1 text-sm text-slate-500">Produtos com preços verificados nas principais lojas.</p></div>
        <a href="#ofertas" className="text-sm font-bold text-blue-600 hover:text-blue-700">Ver todas as ofertas</a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
