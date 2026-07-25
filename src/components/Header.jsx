export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
            🛒
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              CompraEmFoco
            </h1>

            <p className="text-sm text-gray-500">
              Compare antes de comprar
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 font-medium md:flex">
          <a href="#" className="hover:text-blue-600">
            Início
          </a>

          <a href="#" className="hover:text-blue-600">
            Categorias
          </a>

          <a href="#" className="hover:text-blue-600">
            Ofertas
          </a>

          <a href="#" className="hover:text-blue-600">
            Contato
          </a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          Entrar
        </button>
      </div>
    </header>
  );
}