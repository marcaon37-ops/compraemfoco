import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-950 text-slate-300">
      <section className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:py-12 lg:flex-row lg:px-6">
          <div><h2 className="text-2xl font-black text-white sm:text-3xl">Receba as melhores ofertas.</h2><p className="mt-2 text-sm text-slate-400 sm:text-base">Promoções reais, cupons e descontos todos os dias.</p></div>
          <form className="flex w-full max-w-xl overflow-hidden rounded-xl bg-white" action="#contato"><label className="sr-only" htmlFor="newsletter-email">Seu e-mail</label><input id="newsletter-email" type="email" required placeholder="Digite seu e-mail" className="min-w-0 flex-1 px-4 py-3.5 text-sm text-slate-950 outline-none sm:px-5 sm:text-base" /><button className="bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700 sm:px-8">Inscrever</button></form>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6 lg:py-16">
        <div><Logo light /><p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Compare preços entre diversas lojas antes de comprar e economize com segurança.</p></div>
        <div><h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Navegação</h2><ul className="space-y-3 text-sm"><li><Link href="/" className="hover:text-white">Home</Link></li><li><Link href="#ofertas" className="hover:text-white">Ofertas</Link></li><li><Link href="#categorias" className="hover:text-white">Categorias</Link></li><li><Link href="#contato" className="hover:text-white">Contato</Link></li></ul></div>
        <div><h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Contato</h2><div className="space-y-4 text-sm"><a href="mailto:contato@compraemfoco.com.br" className="flex items-center gap-3 hover:text-white"><Mail className="size-4" />contato@compraemfoco.com.br</a><span className="flex items-center gap-3"><MapPin className="size-4" />Brasil</span></div></div>
        <div><h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Redes sociais</h2><div className="flex gap-3"><a href="https://www.facebook.com/" aria-label="Facebook" className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"><FaFacebookF size={18} /></a><a href="https://www.instagram.com/" aria-label="Instagram" className="rounded-lg bg-slate-800 p-3 transition hover:bg-pink-600"><FaInstagram size={18} /></a><a href="https://www.youtube.com/" aria-label="YouTube" className="rounded-lg bg-slate-800 p-3 transition hover:bg-red-600"><FaYoutube size={18} /></a></div></div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} CompraEmFoco. Todos os direitos reservados.</div>
    </footer>
  );
}
