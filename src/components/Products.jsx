import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://placehold.co/500x500/png",
    title: "iPhone 16 Pro Max 256GB",
    store: "Amazon",
    oldPrice: "R$ 10.499",
    price: "R$ 8.999",
    discount: "-14%",
  },
  {
    image: "https://placehold.co/500x500/png",
    title: "Samsung Galaxy S25 Ultra",
    store: "Mercado Livre",
    oldPrice: "R$ 8.999",
    price: "R$ 7.499",
    discount: "-17%",
  },
  {
    image: "https://placehold.co/500x500/png",
    title: "Notebook Gamer RTX 4060",
    store: "Kabum",
    oldPrice: "R$ 7.999",
    price: "R$ 6.499",
    discount: "-19%",
  },
  {
    image: "https://placehold.co/500x500/png",
    title: 'Smart TV LG OLED 55"',
    store: "Magazine Luiza",
    oldPrice: "R$ 5.299",
    price: "R$ 4.499",
    discount: "-15%",
  },
  {
    image: "https://placehold.co/500x500/png",
    title: "PlayStation 5 Slim",
    store: "Amazon",
    oldPrice: "R$ 4.699",
    price: "R$ 3.999",
    discount: "-15%",
  },
  {
    image: "https://placehold.co/500x500/png",
    title: "Apple Watch Ultra 2",
    store: "Amazon",
    oldPrice: "R$ 6.299",
    price: "R$ 5.399",
    discount: "-14%",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}

      </div>

    </section>
  );
}