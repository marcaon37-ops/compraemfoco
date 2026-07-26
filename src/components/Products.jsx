"use client";

import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

export default function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Cabeçalho */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Produtos em destaque
          </span>

          <h2 className="mt-2 text-4xl font-black text-gray-900">
            🔥 Ofertas do Dia
          </h2>

          <p className="mt-2 text-gray-500">
            Compare preços e encontre as melhores oportunidades.
          </p>
        </div>

        <div className="w-full md:w-96">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>

      {/* Mensagem caso não encontre */}
      {filteredProducts.length === 0 && (
        <div className="mt-16 rounded-2xl bg-gray-100 py-12 text-center">
          <h3 className="text-xl font-bold text-gray-700">
            Nenhum produto encontrado
          </h3>

          <p className="mt-2 text-gray-500">
            Tente pesquisar por outro nome.
          </p>
        </div>
      )}
    </section>
  );
}