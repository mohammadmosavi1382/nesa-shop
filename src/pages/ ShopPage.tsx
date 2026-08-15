import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiFilter, FiX } from "react-icons/fi";

import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [sortBy, setSortBy] = useState("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    "همه",
    "کت و پوشاک",
    "کیف",
    "کفش",
    "شلوار",
    "لباس",
    "اکسسوری",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "همه") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "new") {
      result.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew)
      );
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#f8f7f4] py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-[#e5e1da] pb-7"
        >
          <span className="text-xs text-[#8a6a4a]">
            NESA STORE
          </span>

          <h1 className="mt-2 font-['Estedad'] text-3xl font-semibold md:text-4xl">
            فروشگاه
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-7 text-[#77716a]">
            مجموعه‌ای از محصولات منتخب با طراحی ساده،
            کاربردی و مدرن.
          </p>
        </motion.div>

        {/* Toolbar */}
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Desktop Categories */}
          <div className="hidden items-center gap-2 md:flex">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`relative border px-5 py-3 text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-[#181818] bg-[#181818] text-white"
                    : "border-[#e0dbd3] text-[#77716a] hover:border-[#181818] hover:text-[#181818]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter */}
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center gap-2 border border-[#dcd6ce] px-4 py-3 text-sm md:hidden"
          >
            <FiFilter size={16} />
            فیلتر محصولات
          </button>

          {/* Sort */}
          <div className="flex items-center justify-between md:justify-end md:gap-3">
            <span className="text-xs text-[#77716a]">
              {filteredProducts.length.toLocaleString("fa-IR")} محصول
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#77716a]">
                مرتب‌سازی:
              </span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                  className="appearance-none bg-transparent pl-7 text-sm outline-none"
                >
                  <option value="default">
                    پیش‌فرض
                  </option>

                  <option value="new">
                    جدیدترین
                  </option>

                  <option value="low">
                    ارزان‌ترین
                  </option>

                  <option value="high">
                    گران‌ترین
                  </option>
                </select>

                <FiChevronDown
                  size={14}
                  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-[#e5e1da]" />

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-['Estedad'] text-lg">
              محصولی پیدا نشد
            </p>

            <p className="mt-2 text-sm text-[#77716a]">
              دسته‌بندی دیگری را امتحان کنید.
            </p>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimateFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={(category) => {
          setSelectedCategory(category);
          setIsFilterOpen(false);
        }}
      />
    </main>
  );
}

interface AnimateFilterProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

function AnimateFilter({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onSelect,
}: AnimateFilterProps) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-[90] bg-black/30 md:hidden"
        />
      )}

      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : "100%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="fixed right-0 top-0 z-[100] h-full w-[85%] max-w-sm bg-[#f8f7f4] p-6 shadow-2xl md:hidden"
      >
        <div className="flex items-center justify-between border-b border-[#e5e1da] pb-5">
          <h2 className="font-['Estedad'] text-lg font-semibold">
            فیلتر محصولات
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="بستن فیلتر"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="mt-6 flex flex-col">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`border-b border-[#e5e1da] py-4 text-right text-sm transition-colors ${
                selectedCategory === category
                  ? "text-[#8a6a4a]"
                  : "text-[#181818]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.aside>
    </>
  );
}

export default ShopPage;