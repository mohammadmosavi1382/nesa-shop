import { Link,useLocation } from "react-router-dom";
import { FiCheck, FiArrowLeft } from "react-icons/fi";

function OrderSuccess() {
    const location = useLocation();
const order = location.state;
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f8f7f4] px-5 py-16">
      <div className="w-full max-w-lg text-center">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eeeae4]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#181818] text-white">
            <FiCheck size={24} />
          </div>
        </div>

        {/* Title */}
        <span className="mt-8 block text-xs text-[#8a6a4a]">
          سفارش شما ثبت شد
        </span>

        <h1 className="mt-3 font-['Estedad'] text-2xl font-semibold md:text-3xl">
          ممنون از خرید شما 🌿
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-[#77716a]">
          سفارش شما با موفقیت ثبت شد و در حال آماده‌سازی
          برای ارسال است.
        </p>

        {/* Order Info */}
        <div className="mt-8 rounded-xl border border-[#e5e1da] bg-white p-6 text-right">
          <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
            <span className="text-xs text-[#77716a]">
              شماره سفارش
            </span>

            <span className="text-sm font-semibold">
  #{order?.orderId ?? "NES-10245"}
</span>
          </div>

          <div className="space-y-4">
  {/* Order ID */}
  <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
    <span className="text-xs text-[#77716a]">
      شماره سفارش
    </span>

    <span className="text-sm font-semibold">
      #{order?.orderId ?? "NES-10245"}
    </span>
  </div>

  {/* Products Count */}
  <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
    <span className="text-xs text-[#77716a]">
      تعداد محصولات
    </span>

    <span className="text-sm font-medium">
      {order?.totalItems?.toLocaleString("fa-IR") ?? "0"} محصول
    </span>
  </div>

  {/* Total Price */}
  <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
    <span className="text-xs text-[#77716a]">
      مبلغ سفارش
    </span>

    <span className="text-sm font-semibold">
      {order?.totalPrice
        ? new Intl.NumberFormat("fa-IR").format(order.totalPrice)
        : "0"}{" "}
      تومان
    </span>
  </div>

  {/* Payment Method */}
  <div className="flex items-center justify-between border-b border-[#e5e1da] pb-4">
    <span className="text-xs text-[#77716a]">
      روش پرداخت
    </span>

    <span className="text-sm">
      {order?.paymentMethod === "online"
        ? "پرداخت آنلاین"
        : "پرداخت هنگام تحویل"}
    </span>
  </div>

  {/* Payment Status */}
  <div className="flex items-center justify-between">
    <span className="text-xs text-[#77716a]">
      وضعیت پرداخت
    </span>

    <span className="text-xs font-medium text-green-700">
      پرداخت موفق
    </span>
  </div>
</div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="flex flex-1 items-center justify-center gap-2 bg-[#181818] py-4 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
          >
            بازگشت به فروشگاه

            <FiArrowLeft size={17} />
          </Link>

          <Link
            to="/cart"
            className="flex flex-1 items-center justify-center border border-[#dcd6ce] py-4 text-sm transition-colors hover:bg-[#eeeae4]"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;