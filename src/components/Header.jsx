"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Menu, Search, Tag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-md">
            <Tag className="text-white" size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Compra<span className="text-blue-600">EmFoco</span>
            </h1>

            <p className="text-xs text-gray-500">
              Compare preços e economize
            </p>
          </div>

        </Link>

        {/* Pesquisa */}

        <div className="hidden flex-1 px-10 lg:block">

          <div className="flex overflow-hidden rounded-full border border-gray-300">

            <input
              type="text"
              placeholder="Busque celulares, notebooks, TVs..."
              className="w-full px-6 py-4 outline-none"
            />

            <button className="bg-blue-600 px-7 text-white transition hover:bg-blue-700">
              <Search size={22} />
            </button>

          </div>

        </div>

        {/* Menu */}

        <div className="flex items-center gap-8">

          <button className="hidden flex-col items-center text-sm text-gray-600 transition hover:text-blue-600 md:flex">
            <Heart size={22} />
            <span>Favoritos</span>
          </button>

          <button className="hidden flex-col items-center text-sm text-gray-600 transition hover:text-blue-600 md:flex">
            <Tag size={22} />
            <span>Ofertas</span>
          </button>

          <button className="flex flex-col items-center text-sm text-gray-600 transition hover:text-blue-600">
            <Menu size={24} />
            <span>Menu</span>
          </button>

        </div>

      </div>
    </header>
  );
}