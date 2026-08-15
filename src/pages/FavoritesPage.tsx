import { FiHeart, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProductCard from "../components/product/ProductCard";
import { useFavorites } from "../contexts/FavoritesContext";

function FavoritesPage() {
  const {
    favorites,
    removeFavorite,
    clearFavorites,
  } = useFavorites();

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-[#e5e1da] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] tracking-[0.18em] text-[#8a6a4a]">
              NESA / FAVORITES
            </span>

            <h1 className="mt-3 font-['Estedad'] text-3xl font-semibold md:text-4xl">
              علاقه‌مندی‌های من
            </h1>

            <p className="mt-3 text-sm leading-7 text-[#77716a]">
              محصولاتی که برای خرید بعدی خود ذخیره کرده‌اید.
            </p>
          </div>

          {favorites.length > 0 && (
            <button
              type="button"
              onClick={clearFavorites}
              className="flex items-center gap-2 self-start text-xs text-[#77716a] transition-colors hover:text-red-600 md:self-auto"
            >
              <FiTrash2 size={15} />
              پاک کردن همه
            </button>
          )}
        </div>

        {/* Products */}
        {favorites.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="relative"
              >
                <ProductCard product={product} />

                <button
                  type="button"
                  onClick={() =>
                    removeFavorite(product.id)
                  }
                  aria-label="حذف از علاقه‌مندی‌ها"
                  className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#181818] text-white transition-all hover:bg-red-600"
                >
                  <FiTrash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-[55vh] items-center justify-center">
            <div className="max-w-md text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eeeae4]">
                <FiHeart
                  size={28}
                  className="text-[#8a6a4a]"
                />
              </div>

              <h2 className="mt-6 font-['Estedad'] text-xl font-semibold">
                هنوز محصولی ذخیره نکرده‌اید
              </h2>

              <p className="mt-3 text-sm leading-8 text-[#77716a]">
                محصولاتی که دوست دارید را با زدن روی
                علامت قلب ذخیره کنید تا بعداً راحت‌تر
                آن‌ها را پیدا کنید.
              </p>

              <Link
                to="/shop"
                className="mt-7 inline-flex items-center justify-center bg-[#181818] px-7 py-3 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
              >
                مشاهده فروشگاه
              </Link>

            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default FavoritesPage;