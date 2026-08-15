import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchOverlay from "../search/SearchOverlay";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import CartDrawer from "../cart/CartDrawer";
function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e5e1da] bg-[#f8f7f4]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-8">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="باز کردن منو"
          >
            <FiMenu size={21} />
          </button>

          {/* Logo */}
          <Link
  to="/"
  className="font-['Estedad'] text-xl font-bold tracking-tight md:text-2xl"
>
  NESA
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
  <Link
    to="/"
    className="text-sm transition-colors duration-300 hover:text-[#8a6a4a]"
  >
    خانه
  </Link>

  <Link
    to="/shop"
    className="text-sm transition-colors duration-300 hover:text-[#8a6a4a]"
  >
    فروشگاه
  </Link>

  <Link
    to="/collections"
    className="text-sm transition-colors duration-300 hover:text-[#8a6a4a]"
  >
    مجموعه‌ها
  </Link>

  <Link
    to="/about"
    className="text-sm transition-colors duration-300 hover:text-[#8a6a4a]"
  >
    درباره ما
  </Link>
</nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
          <button
  type="button"
  onClick={() => setIsSearchOpen(true)}
  className="hidden h-10 w-10 items-center justify-center md:flex"
  aria-label="جستجو"
>
  <FiSearch size={19} />
</button>

<Link
  to="/favorites"
  className="hidden h-10 w-10 items-center justify-center sm:flex"
  aria-label="علاقه‌مندی‌ها"
>
  <FiHeart size={19} />
</Link>
            <button
  type="button"
  onClick={() => setIsCartOpen(true)}
  className="relative flex h-10 w-10 items-center justify-center"
  aria-label="سبد خرید"
>
  <FiShoppingBag size={20} />

  <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#181818] px-1 text-[9px] text-white">
    {totalItems}
  </span>
</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-[#f8f7f4] p-6 md:hidden"
            >
              <div className="flex items-center justify-between border-b border-[#e5e1da] pb-5">
                <span className="font-['Estedad'] text-lg font-semibold">
                  منو
                </span>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center"
                  aria-label="بستن منو"
                >
                  <FiX size={22} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col">
  {[
    { title: "خانه", path: "/" },
    { title: "فروشگاه", path: "/shop" },
    { title: "مجموعه‌ها", path: "/collections" },
    { title: "درباره ما", path: "/about" },
  ].map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.06,
      }}
    >
      <Link
        to={item.path}
        onClick={() => setIsMenuOpen(false)}
        className="block border-b border-[#e5e1da] py-5 font-['Estedad'] text-base transition-colors hover:text-[#8a6a4a]"
      >
        {item.title}
      </Link>
    </motion.div>
  ))}
</nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
<SearchOverlay
  isOpen={isSearchOpen}
  onClose={() => setIsSearchOpen(false)}
/>
<CartDrawer
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
/>
    </>
  );
}

export default Navbar;