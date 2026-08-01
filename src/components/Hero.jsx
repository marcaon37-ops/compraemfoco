"use client";

import { ArrowRight, CheckCircle2, Search, TrendingDown } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    window.location.assign(query.trim() ? `#ofertas?q=${encodeURIComponent(query.trim())}` : "#ofertas");
  }

  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:px-6 lg:py-20">
        <div className="absolute -left-36 top-0 size-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 sm:text-sm"><span className="size-2 rounded-full bg-emerald-400" />Ofertas monitoradas em tempo real</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Compare preços. <span className="text-blue-300">Compre melhor.</span></h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Encontre as melhores ofertas das lojas mais confiáveis do Brasil em um só lugar, com preço e frete lado a lado.</p>
          <form onSubmit={handleSearch} className="mt-8 flex max-w-2xl overflow-hidden rounded-xl bg-white p-1.5 shadow-2xl shadow-blue-950/40">
            <label className="sr-only" htmlFor="hero-search">Pesquisar produto</label>
            <Search className="mx-3 my-auto size-5 shrink-0 text-slate-400" />
            <input id="hero-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="O que você está procurando?" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base" />
            <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 sm:px-6"><span className="hidden sm:inline">Buscar ofertas</span><ArrowRight className="size-5" /></button>
          </form>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-300 sm:text-sm"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" />Lojas verificadas</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" />Compare fretes</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" />Cupons exclusivos</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="absolute inset-4 rounded-3xl bg-blue-500/30 blur-2xl" />
          <div className="relative rounded-2xl border border-white/15 bg-white p-5 text-slate-900 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-600">Oferta em foco</p><h2 className="mt-1 text-lg font-bold">Samsung Galaxy S25 Ultra</h2></div><span className="rounded-lg bg-red-50 px-2.5 py-1 text-sm font-extrabold text-red-600">-14%</span></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="flex items-center gap-3"><div className="grid size-11 place-items-center rounded-full bg-blue-100 text-blue-700"><TrendingDown className="size-5" /></div><div><p className="text-sm font-semibold">Menor preço encontrado</p><p className="text-xs text-slate-500">Atualizado há poucos minutos</p></div></div><div className="mt-4 flex items-end justify-between"><div><p className="text-xs text-slate-400 line-through">R$ 4.999,00</p><p className="text-3xl font-black text-blue-700">R$ 4.299,00</p></div><span className="text-xs font-semibold text-emerald-700">Frete grátis</span></div></div>
            <a href="#ofertas" className="mt-5 block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700">Comparar esta oferta</a>
          </div>
        </div>
      </div>
    </section>
  );
}
