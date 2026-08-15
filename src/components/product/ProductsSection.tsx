import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { products } from "../../data/products";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f7f4] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-10 flex items-end justify-between border-b border-[#e5e1da] pb-6">
          <div>
            <span className="text-xs text-[#8a6a4a]">
              NESA / PRODUCTS
            </span>

            <h2 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
              انتخاب‌های محبوب
            </h2>
          </div>

          <span className="hidden text-xs text-[#77716a] md:block">
            محصولات منتخب NESA
          </span>
        </div>

        {/* Products */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
        >
          {products.slice(0, 8).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;