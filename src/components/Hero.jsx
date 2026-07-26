"use client";

import { Search, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-16">

        {/* Texto */}

        <div className="max-w-2xl text-white">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            <TrendingUp size={18} />
            Mais de 10.000 ofertas atualizadas
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight">
            Compare preços antes de comprar.
          </h1>

          <p className="mt-5 text-xl text-blue-100">
            Encontre as melhores ofertas do Brasil em um único lugar.
            Compare preços entre diversas lojas e economize.
          </p>

          {/* Pesquisa */}

          <div className="mt-10 flex overflow-hidden rounded-2xl bg-white shadow-xl">

            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="flex-1 px-6 py-5 text-gray-700 outline-none"
            />

            <button className="flex items-center gap-2 bg-green-600 px-8 font-bold text-white hover:bg-green-700">
              <Search size={22} />
              Pesquisar
            </button>

          </div>

        </div>

        {/* Card lateral */}

        <div className="hidden w-96 rounded-3xl bg-white p-8 shadow-2xl lg:block">

          <p className="text-sm font-bold text-blue-600">
            🔥 Oferta em destaque
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Samsung Galaxy S25
          </h3>

          <p className="mt-3 text-gray-500 line-through">
            R$ 5.499,00
          </p>

          <p className="text-4xl font-black text-green-600">
            R$ 4.299,00
          </p>

          <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700">
            Ver Oferta
          </button>

        </div>

      </div>
    </section>
  );
}