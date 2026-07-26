import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Flame,
  ShieldCheck,
  Truck,
  BadgePercent,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <TopBar />
      <Categories />

      <main className="bg-gray-100">

        {/* HERO */}

        <section className="mx-auto max-w-7xl px-4 py-8">

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Banner principal */}

            <div className="col-span-2 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white">

              <div className="flex h-full flex-col justify-center p-10">

                <span className="mb-4 w-fit rounded-full bg-white/20 px-4 py-2 text-sm">
                  🔥 Promoções Atualizadas
                </span>

                <h1 className="max-w-xl text-5xl font-black leading-tight">
                  Compare preços antes de comprar.
                </h1>

                <p className="mt-6 max-w-lg text-lg text-blue-100">
                  Encontre as melhores ofertas da Amazon, Mercado Livre,
                  Magazine Luiza, Shopee e muito mais.
                </p>

                <button className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105">

                  Ver Ofertas

                  <ArrowRight size={20} />

                </button>

              </div>

            </div>

            {/* Cards laterais */}

            <div className="flex flex-col gap-5">

              <div className="rounded-3xl bg-white p-6 shadow">

                <Flame className="mb-3 text-red-500" size={34} />

                <h3 className="text-xl font-bold">
                  Ofertas Relâmpago
                </h3>

                <p className="mt-2 text-gray-600">
                  Produtos com grandes descontos por tempo limitado.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow">

                <BadgePercent
                  className="mb-3 text-blue-600"
                  size={34}
                />

                <h3 className="text-xl font-bold">
                  Cupons Exclusivos
                </h3>

                <p className="mt-2 text-gray-600">
                  Economize ainda mais utilizando cupons disponíveis.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* BENEFÍCIOS */}

        <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-10 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow">

            <Truck
              className="mb-3 text-blue-600"
              size={32}
            />

            <h2 className="font-bold">
              Compare Fretes
            </h2>

            <p className="mt-2 text-gray-600">
              Descubra onde o frete vale mais a pena.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <ShieldCheck
              className="mb-3 text-green-600"
              size={32}
            />

            <h2 className="font-bold">
              Lojas Confiáveis
            </h2>

            <p className="mt-2 text-gray-600">
              Apenas parceiros reconhecidos.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <BadgePercent
              className="mb-3 text-orange-500"
              size={32}
            />

            <h2 className="font-bold">
              Promoções Diárias
            </h2>

            <p className="mt-2 text-gray-600">
              Novas oportunidades todos os dias.
            </p>

          </div>

        </section>

        {/* TÍTULO */}

        <section className="mx-auto max-w-7xl px-4">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-3xl font-black">
              🔥 Ofertas em Destaque
            </h2>

            <button className="font-semibold text-blue-600 hover:underline">
              Ver todas
            </button>

          </div>

          <Products />

        </section>

      </main>

      <Footer />
    </>
  );
}