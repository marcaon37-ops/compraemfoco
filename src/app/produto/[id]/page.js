import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Star, Truck } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import products from "@/data/products";
import { formatPrice } from "@/utils/formatPrice";

export default async function Produto({ params }) {
  const { id } = await params;
  const produto = products.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <><TopBar /><Header /><main className="mx-auto min-h-[60vh] max-w-5xl px-4 py-16 lg:px-6"><h1 className="text-3xl font-black text-slate-950">Produto não encontrado</h1><p className="mt-3 text-slate-500">A oferta pode ter sido atualizada ou removida.</p><Link href="/" className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">Voltar para a Home</Link></main><Footer /></>
    );
  }

  const discount = Math.round((1 - produto.preco / produto.precoAnterior) * 100);

  return (
    <>
      <TopBar /><Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:px-6">
        <Link href="/#ofertas" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"><ArrowLeft className="size-4" />Voltar para as ofertas</Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:min-h-112"><Image src={produto.imagem} alt={produto.nome} width={720} height={720} priority className="max-h-80 w-full object-contain sm:max-h-100" /></div>
          <div>
            <div className="flex flex-wrap items-center gap-3"><span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">{produto.loja}</span><span className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-extrabold text-red-600">-{discount}%</span></div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{produto.nome}</h1>
            <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-amber-500"><Star className="size-4 fill-current" />{produto.avaliacao.toFixed(1)} <span className="ml-1 font-normal text-slate-500">Avaliação dos compradores</span></p>
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5"><p className="text-sm text-slate-500 line-through">De {formatPrice(produto.precoAnterior)}</p><p className="mt-1 text-4xl font-black text-blue-700 sm:text-5xl">{formatPrice(produto.preco)}</p><p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-700"><Truck className="size-4" />{produto.frete}</p></div>
            <button type="button" className="mt-5 w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white transition hover:bg-blue-700">Ver oferta na {produto.loja}</button>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2"><p className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-600" />Preço monitorado</p><p className="flex items-center gap-2"><ShieldCheck className="size-4 text-emerald-600" />Loja parceira confiável</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
