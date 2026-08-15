import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const {
    items,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

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

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-[#f8f7f4]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e1da] px-6 py-5">
              <div>
                <h2 className="font-['Estedad'] text-lg font-semibold">
                  سبد خرید
                </h2>

                <p className="mt-1 text-xs text-[#77716a]">
                  {totalItems.toLocaleString("fa-IR")} محصول
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#eeeae4]"
                aria-label="بستن سبد خرید"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eeeae4]">
                    🛍️
                  </div>

                  <h3 className="font-['Estedad'] text-sm font-semibold">
                    سبد خرید خالی است
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#77716a]">
                    هنوز محصولی به سبد خرید اضافه نکرده‌اید.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 bg-[#181818] px-6 py-3 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
                  >
                    مشاهده محصولات
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.product.id}
                      className="flex gap-4 border-b border-[#e5e1da] pb-5"
                    >
                      {/* Image */}
                      <div className="h-28 w-20 shrink-0 overflow-hidden rounded-lg bg-[#e9e4dc]">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] text-[#8a6a4a]">
                              {item.product.category}
                            </span>

                            <h3 className="mt-1 font-['Estedad'] text-sm font-medium">
                              {item.product.title}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.product.id)
                            }
                            className="text-[#aaa49c] transition-colors hover:text-red-700"
                            aria-label="حذف محصول"
                          >
                            <FiTrash2 size={15} />
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between gap-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-[#dcd6ce]">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.product.id)
                              }
                              className="flex h-8 w-8 items-center justify-center hover:bg-[#eeeae4]"
                              aria-label="کاهش تعداد"
                            >
                              <FiMinus size={12} />
                            </button>

                            <span className="flex h-8 w-8 items-center justify-center border-x border-[#dcd6ce] text-xs">
                              {item.quantity.toLocaleString("fa-IR")}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.product.id)
                              }
                              className="flex h-8 w-8 items-center justify-center hover:bg-[#eeeae4]"
                              aria-label="افزایش تعداد"
                            >
                              <FiPlus size={12} />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="text-xs font-semibold">
                            {formatPrice(
                              item.product.price * item.quantity
                            )}{" "}
                            تومان
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#e5e1da] bg-[#f8f7f4] px-6 py-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs text-[#77716a]">
                    جمع کل
                  </span>

                  <span className="font-['Estedad'] text-base font-semibold">
                    {formatPrice(totalPrice)} تومان
                  </span>
                </div>

                <Link
  to="/checkout"
  onClick={onClose}
  className="group flex w-full items-center justify-center gap-3 bg-[#181818] py-4 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
>
  ادامه فرایند خرید

  <FiArrowLeft
    size={17}
    className="transition-transform group-hover:-translate-x-1"
  />
</Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;