import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import { useCart } from "../contexts/CartContext";

function Cart() {
  const {
    items,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 text-5xl">🛒</div>

          <h1 className="font-['Estedad'] text-2xl font-semibold">
            سبد خرید شما خالی است
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#6f6b65]">
            هنوز محصولی به سبد خرید اضافه نکرده‌اید.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex bg-[#181818] px-7 py-3.5 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link
          to="/"
          className="mb-5 flex items-center gap-2 text-xs text-[#77716a] hover:text-[#8a6a4a]"
        >
          <FiArrowRight size={14} />
          بازگشت به فروشگاه
        </Link>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-[#8a6a4a]">
              سبد خرید
            </span>

            <h1 className="mt-2 font-['Estedad'] text-3xl font-semibold">
              محصولات انتخاب‌شده
            </h1>
          </div>

          <span className="text-sm text-[#77716a]">
            {totalItems.toLocaleString("fa-IR")} محصول
          </span>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Products */}
        <div>
          <div className="border-t border-[#e5e1da]">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 border-b border-[#e5e1da] py-6"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="h-32 w-24 shrink-0 overflow-hidden rounded-md bg-[#e9e4dc]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="h-full w-full object-cover"
                  />
                </Link>

                {/* Info */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#8a6a4a]">
                      {item.product.category}
                    </span>

                    <Link
                      to={`/product/${item.product.id}`}
                      className="mt-1 block font-['Estedad'] text-sm font-medium"
                    >
                      {item.product.title}
                    </Link>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#ddd8d0]">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.product.id)
                        }
                        className="flex h-9 w-9 items-center justify-center hover:bg-[#eeeae4]"
                      >
                        <FiMinus size={14} />
                      </button>

                      <span className="w-9 text-center text-xs">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.product.id)
                        }
                        className="flex h-9 w-9 items-center justify-center hover:bg-[#eeeae4]"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>

                    <span className="text-sm font-semibold">
                      {formatPrice(
                        item.product.price * item.quantity
                      )}{" "}
                      تومان
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() =>
                    removeFromCart(item.product.id)
                  }
                  aria-label="حذف محصول"
                  className="self-start p-2 text-[#aaa49c] transition-colors hover:text-red-700"
                >
                  <FiTrash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="mt-5 text-xs text-[#8a6a4a] hover:text-red-700"
          >
            پاک کردن سبد خرید
          </button>
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-xl bg-[#eeeae4] p-6">
          <h2 className="font-['Estedad'] text-lg font-semibold">
            خلاصه سفارش
          </h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6f6b65]">
                مجموع محصولات
              </span>

              <span>
                {formatPrice(totalPrice)} تومان
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6f6b65]">
                هزینه ارسال
              </span>

              <span>رایگان</span>
            </div>

            <div className="h-px bg-[#d8d2c9]" />

            <div className="flex justify-between font-semibold">
              <span>مبلغ نهایی</span>

              <span>
                {formatPrice(totalPrice)} تومان
              </span>
            </div>
          </div>

          <Link
  to="/checkout"
  className="mt-7 flex w-full items-center justify-center bg-[#181818] py-4 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
>
  ادامه فرآیند خرید
</Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;