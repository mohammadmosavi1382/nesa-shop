import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

function MiniCart({
  isOpen,
  onClose,
}: MiniCartProps) {
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

          {/* Mini Cart */}
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
                className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-[#eeeae4]"
                aria-label="بستن سبد خرید"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Products */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 text-4xl">
                    🛒
                  </div>

                  <h3 className="font-['Estedad'] text-base font-semibold">
                    سبد خرید خالی است
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#77716a]">
                    هنوز محصولی به سبد خرید اضافه نکرده‌اید.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#e5e1da]">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 py-5"
                    >
                      {/* Image */}
                      <div className="h-28 w-20 shrink-0 overflow-hidden rounded-md bg-[#e9e4dc]">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-1 flex-col justify-between">
                        <div>
                          <p className="truncate font-['Estedad'] text-sm font-medium">
                            {item.product.title}
                          </p>

                          <p className="mt-1 text-xs text-[#8a6a4a]">
                            {formatPrice(item.product.price)} تومان
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center border border-[#ddd8d0]">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(
                                  item.product.id
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center hover:bg-[#eeeae4]"
                            >
                              <FiMinus size={13} />
                            </button>

                            <span className="w-8 text-center text-xs">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(
                                  item.product.id
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center hover:bg-[#eeeae4]"
                            >
                              <FiPlus size={13} />
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.product.id
                              )
                            }
                            className="text-[#aaa49c] transition-colors hover:text-red-700"
                            aria-label="حذف محصول"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#e5e1da] bg-[#eeeae4] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm text-[#6f6b65]">
                    مبلغ کل
                  </span>

                  <span className="font-['Estedad'] text-base font-semibold">
                    {formatPrice(totalPrice)} تومان
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="border border-[#181818] py-3 text-xs transition-colors hover:bg-[#181818] hover:text-white"
                  >
                    ادامه خرید
                  </button>

                  <Link
  to="/cart"
  onClick={onClose}
  className="flex items-center justify-center bg-[#181818] py-3 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
>
  مشاهده سبد خرید
</Link>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MiniCart;