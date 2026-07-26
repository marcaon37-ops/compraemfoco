"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mx-auto max-w-3xl">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg shadow-sm focus:border-blue-600 focus:outline-none"
      />
    </div>
  );
}