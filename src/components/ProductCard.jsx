"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

export default function ProductCard({ produto }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Topo */}

      <div className="relative">

        <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow hover:bg-red-50">
          <Heart size={20} className="text-gray-500 hover:text-red-500" />
        </button>

        <span className="absolute left-4 top-4 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
          -20%
        </span>

        <div className="relative h-64 bg-gray-50">

          <Image
            src={produto.imagem}
            alt={produto.nome}
            fill
            className="object-contain p-6 transition duration-300 group-hover:scale-105"
          />

        </div>

      </div>

      {/* Conteúdo */}

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {produto.loja}
        </p>

        <h3 className="mt-2 line-clamp-2 text-lg font-bold">
          {produto.nome}
        </h3>

        <div className="mt-3 flex items-center gap-1 text-yellow-500">

          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} />

          <span className="ml-2 text-sm text-gray-500">
            ({produto.avaliacao})
          </span>

        </div>

        <p className="mt-4 text-sm text-gray-400 line-through">
          R$ {produto.precoAnterior.toLocaleString("pt-BR")}
        </p>

        <p className="text-3xl font-black text-green-600">
          R$ {produto.preco.toLocaleString("pt-BR")}
        </p>

        <Link
          href={`/produto/${produto.id}`}
          className="mt-6 block rounded-xl bg-blue-600 py-4 text-center font-bold text-white transition hover:bg-blue-700"
        >
          Ver Oferta
        </Link>

      </div>

    </div>
  );
}