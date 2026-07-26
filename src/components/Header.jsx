"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="mx-auto flex h-24 max-w-7xl items-center gap-6 px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white text-2xl">
            🛒
          </div>

          <div>
            <h1 className="text-3xl font-black leading-none">
              Compra
              <span className="text-blue-600">Em</span>
              <span className="text-green-600">Foco</span>
            </h1>

            <p className="text-xs text-gray-500">
              Compare preços. Economize sempre.
            </p>
          </div>

        </Link>

        {/* Pesquisa */}

        <div className="hidden flex-1 lg:flex">

          <div className="flex w-full overflow-hidden rounded-full border-2 border-blue-600">

            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="flex-1 px-6 py-4 outline-none"
            />

            <button className="flex w-20 items-center justify-center bg-blue-600 text-white hover:bg-blue-700">

              <Search size={24} />

            </button>

          </div>

        </div>

        {/* Menu */}

        <div className="flex items-center gap-8">

          <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
            <Heart size={26} />
            <span className="text-sm">Favoritos</span>
          </button>

          <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
            <ShoppingBag size={26} />
            <span className="text-sm">Ofertas</span>
          </button>

          <button className="flex flex-col items-center text-gray-700 hover:text-blue-600">
            <Menu size={26} />
            <span className="text-sm">Menu</span>
          </button>

        </div>

      </div>

    </header>
  );
}