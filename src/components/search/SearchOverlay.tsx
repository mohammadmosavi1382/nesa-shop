import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return products.filter((product) => {
      const title = product.title.toLowerCase();
      const category = product.category.toLowerCase();
      const description = product.description.toLowerCase();

      return (
        title.includes(query) ||
        category.includes(query) ||
        description.includes(query)
      );
    });
  }, [searchTerm]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm"
          />

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-20 z-[90] w-[calc(100%-32px)] max-w-4xl -translate-x-1/2"
          >
            <div className="max-h-[80vh] overflow-hidden rounded-xl border border-[#e5e1da] bg-[#f8f7f4] shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#e5e1da] px-5 py-4">
                <div className="flex items-center gap-3">
                  <FiSearch
                    size={18}
                    className="text-[#8a6a4a]"
                  />

                  <span className="font-['Estedad'] text-sm font-medium">
                    جستجوی محصولات
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#eeeae4]"
                  aria-label="بستن جستجو"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Input */}
              <div className="border-b border-[#e5e1da] p-5">
                <div className="flex items-center gap-3 border border-[#dcd6ce] bg-white px-4 py-3">
                  <FiSearch
                    size={18}
                    className="text-[#aaa49c]"
                  />

                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                    placeholder="نام محصول، دسته‌بندی یا برند..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#aaa49c]"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[55vh] overflow-y-auto p-5">

                {/* Empty */}
                {!searchTerm.trim() && (
                  <div className="py-10 text-center">
                    <FiSearch
                      size={28}
                      className="mx-auto text-[#aaa49c]"
                    />

                    <p className="mt-4 font-['Estedad'] text-sm">
                      محصول موردنظر خود را جستجو کنید
                    </p>

                    <p className="mt-2 text-xs text-[#77716a]">
                      نام محصول یا دسته‌بندی را وارد کنید.
                    </p>
                  </div>
                )}

                {/* Results */}
                {searchTerm.trim() &&
                  filteredProducts.length > 0 && (
                    <>
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs text-[#77716a]">
                          نتایج جستجو
                        </span>

                        <span className="text-xs text-[#8a6a4a]">
                          {filteredProducts.length.toLocaleString(
                            "fa-IR"
                          )}{" "}
                          محصول
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                          />
                        ))}
                      </div>
                    </>
                  )}

                {/* No Results */}
                {searchTerm.trim() &&
                  filteredProducts.length === 0 && (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eeeae4]">
                        <FiSearch
                          size={22}
                          className="text-[#8a6a4a]"
                        />
                      </div>

                      <h3 className="mt-4 font-['Estedad'] text-sm font-semibold">
                        محصولی پیدا نشد
                      </h3>

                      <p className="mt-2 text-xs text-[#77716a]">
                        عبارت دیگری را امتحان کنید.
                      </p>
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;