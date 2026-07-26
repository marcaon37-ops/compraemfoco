"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  Menu,
  ShoppingBag,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <ShoppingBag size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Compra<span className="text-blue-600">EmFoco</span>
            </h1>

            <p className="text-xs text-gray-500">
              Compare preços e economize
            </p>
          </div>
        </Link>

        {/* Pesquisa */}
        <div className="hidden w-full max-w-2xl px-8 lg:block">
          <div className="flex overflow-hidden rounded-xl border bg-gray-100">

            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="w-full bg-transparent px-5 py-3 outline-none"
            />

            <button className="bg-blue-600 px-5 text-white transition hover:bg-blue-700">
              <Search size={20} />
            </button>

          </div>
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-4">

          <button className="rounded-xl p-3 transition hover:bg-gray-100">
            <Heart size={22} />
          </button>

          <button className="rounded-xl p-3 transition hover:bg-gray-100">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}\