import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-gray-300">
      {/* Newsletter */}
      <section className="border-b border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 lg:flex-row">
          <div>
            <h2 className="text-3xl font-black text-white">
              Receba as melhores ofertas.
            </h2>

            <p className="mt-2 text-gray-400">
              Promoções reais, cupons e descontos todos os dias.
            </p>
          </div>

          <div className="flex w-full max-w-xl overflow-hidden rounded-xl bg-white">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="flex-1 px-5 py-4 text-black outline-none"
            />

            <button className="bg-blue-600 px-8 font-bold text-white transition hover:bg-blue-700">
              Inscrever
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Logo */}
        <div>
          <h3 className="text-3xl font-black text-white">
            Compra<span className="text-blue-500">EmFoco</span>
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Compare preços entre diversas lojas antes de comprar e economize
            com segurança.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Navegação
          </h4>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white">
                Ofertas
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white">
                Categorias
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Contato
          </h4>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>contato@compraemfoco.com.br</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Brasil</span>
            </div>
          </div>
        </div>

        {/* Redes */}
        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Redes Sociais
          </h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
            >
              <FaFacebookF size={22} />
            </a>

            <a
              href="#"
              className="rounded-xl bg-slate-800 p-3 transition hover:bg-pink-600"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="#"
              className="rounded-xl bg-slate-800 p-3 transition hover:bg-red-600"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CompraEmFoco. Todos os direitos reservados.
      </div>
    </footer>
  );
}