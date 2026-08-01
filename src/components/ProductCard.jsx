import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Truck } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductCard({ product }) {
  const discount = Math.round((1 - product.preco / product.precoAnterior) * 100);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative border-b border-slate-100 bg-slate-50">
        <Image
          src={product.imagem}
          width={400}
          height={400}
          alt={product.nome}
          className="h-48 w-full object-contain p-5 transition duration-300 group-hover:scale-105 sm:h-52"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">{product.loja}</span>
        <span className="absolute right-3 top-3 rounded-md bg-red-600 px-2 py-1 text-xs font-extrabold text-white">-{discount}%</span>
        <button className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-red-500" type="button" aria-label={`Adicionar ${product.nome} aos favoritos`}><Heart className="size-4" /></button>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-1 text-xs font-semibold text-amber-500"><Star className="size-3.5 fill-current" /><span>{product.avaliacao.toFixed(1)}</span><span className="ml-1 font-normal text-slate-400">Avaliação dos compradores</span></div>
        <h3 className="mt-2 min-h-11 text-sm font-bold leading-5 text-slate-800 sm:text-base">{product.nome}</h3>
        <p className="mt-3 text-xs text-slate-400 line-through">De {formatPrice(product.precoAnterior)}</p>
        <p className="text-2xl font-black tracking-tight text-blue-700 sm:text-3xl">{formatPrice(product.preco)}</p>
        <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-emerald-700"><Truck className="size-3.5" />{product.frete}</p>
        <Link href={`/produto/${product.id}`} className="mt-4 block rounded-xl border border-blue-600 py-2.5 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white">Ver oferta</Link>
      </div>
    </article>
  );
}
