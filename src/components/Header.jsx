"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  Search,
  User,
  Ticket,
  X,
} from "lucide-react";
import Logo from "@/components/Logo";

const navigation = ["Celulares", "Notebooks", "TVs", "Games", "Casa e cozinha", "Moda e beleza"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    const target = query.trim() ? `#ofertas?q=${encodeURIComponent(query.trim())}` : "#ofertas";
    window.location.assign(target);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-20 sm:gap-6 lg:px-6">
        <Logo />

        <form onSubmit={handleSearch} className="hidden min-w-0 flex-1 md:block">
          <label className="sr-only" htmlFor="site-search">Buscar produto</label>
          <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-slate-50 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
            <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none" placeholder="Busque produtos, marcas e ofertas" />
            <button className="grid w-12 place-items-center bg-blue-600 text-white transition hover:bg-blue-700" aria-label="Buscar"><Search className="size-5" /></button>
          </div>
        </form>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          <button className="header-action" type="button"><User className="size-5" /><span>Entrar</span></button>
          <button className="header-action" type="button"><Heart className="size-5" /><span>Favoritos</span></button>
          <a href="#cupons" className="header-action"><Ticket className="size-5" /><span>Cupons</span></a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-600"><FaWhatsapp className="size-5" /><span className="leading-tight">Grupo<br />WhatsApp</span></a>
        </div>
        <button className="grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Abrir menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="hidden border-t border-slate-100 md:block">
        <nav className="mx-auto flex h-12 max-w-7xl items-center gap-6 overflow-x-auto px-4 text-sm font-medium text-slate-600 lg:px-6" aria-label="Categorias principais">
          <a href="#categorias" className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-slate-900 hover:text-blue-600"><Menu className="size-4" />Todas as categorias<ChevronDown className="size-4" /></a>
          {navigation.map((item) => <a key={item} href="#ofertas" className="shrink-0 transition hover:text-blue-600">{item}</a>)}
          <a href="#ofertas" className="ml-auto shrink-0 font-semibold text-blue-600 hover:text-blue-700">Ver ofertas</a>
        </nav>
      </div>

      {menuOpen && <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
        <form onSubmit={handleSearch} className="mb-4 flex overflow-hidden rounded-xl border border-slate-300">
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 px-3 py-2.5 text-sm outline-none" placeholder="O que você procura?" />
          <button className="grid w-11 place-items-center bg-blue-600 text-white" aria-label="Buscar"><Search className="size-5" /></button>
        </form>
        <nav className="divide-y divide-slate-100" aria-label="Menu mobile">
          {navigation.map((item) => <a href="#ofertas" onClick={() => setMenuOpen(false)} key={item} className="flex items-center justify-between py-3 text-sm font-medium text-slate-700">{item}<ChevronRight className="size-4 text-slate-400" /></a>)}
          <a href="#cupons" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-3 text-sm font-semibold text-blue-600"><Ticket className="size-4" />Cupons</a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white"><FaWhatsapp className="size-5" />Entrar no Grupo WhatsApp</a>
        </nav>
      </div>}
    </header>
  );
}
