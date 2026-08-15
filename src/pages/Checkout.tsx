import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    province?: string;
    city?: string;
    address?: string;
    postalCode?: string;
  }
  
function Checkout() {
    const navigate = useNavigate();
    const {
        items,
        totalItems,
        totalPrice,
        clearCart,
      } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (items.length === 0) {
      alert("سبد خرید شما خالی است.");
      return;
    }
  
    const newErrors: FormErrors = {};
  
    // فقط حروف فارسی و انگلیسی
    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;
  
    // شماره موبایل ایران
    const phoneRegex = /^09\d{9}$/;
  
    // ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // کد پستی
    const postalCodeRegex = /^\d{10}$/;
  
    // نام
    if (!formData.firstName.trim()) {
      newErrors.firstName = "نام را وارد کنید.";
    } else if (!nameRegex.test(formData.firstName.trim())) {
      newErrors.firstName = "نام فقط باید شامل حروف باشد.";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "نام باید حداقل ۲ حرف باشد.";
    }
  
    // نام خانوادگی
    if (!formData.lastName.trim()) {
      newErrors.lastName = "نام خانوادگی را وارد کنید.";
    } else if (!nameRegex.test(formData.lastName.trim())) {
      newErrors.lastName = "نام خانوادگی فقط باید شامل حروف باشد.";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "نام خانوادگی باید حداقل ۲ حرف باشد.";
    }
  
    // شماره موبایل
    if (!formData.phone.trim()) {
      newErrors.phone = "شماره موبایل را وارد کنید.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone =
        "شماره موبایل باید ۱۱ رقم باشد و با 09 شروع شود.";
    }
  
    // ایمیل
    if (formData.email.trim()) {
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "ایمیل واردشده معتبر نیست.";
      }
    }
  
    // استان
    if (!formData.province.trim()) {
      newErrors.province = "استان را وارد کنید.";
    } else if (!nameRegex.test(formData.province.trim())) {
      newErrors.province = "استان فقط باید شامل حروف باشد.";
    }
  
    // شهر
    if (!formData.city.trim()) {
      newErrors.city = "شهر را وارد کنید.";
    } else if (!nameRegex.test(formData.city.trim())) {
      newErrors.city = "شهر فقط باید شامل حروف باشد.";
    }
  
    // آدرس
    if (!formData.address.trim()) {
      newErrors.address = "آدرس کامل را وارد کنید.";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "آدرس باید حداقل ۱۰ کاراکتر باشد.";
    }
  
    // کد پستی
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "کد پستی را وارد کنید.";
    } else if (!postalCodeRegex.test(formData.postalCode.trim())) {
      newErrors.postalCode = "کد پستی باید دقیقاً ۱۰ رقم باشد.";
    }
  
    setErrors(newErrors);
  
    // اگر خطایی وجود دارد، سفارش ثبت نشود
    if (Object.keys(newErrors).length > 0) {
      return;
    }
  
    // همه چیز معتبر است
    console.log("Checkout data:", {
      customer: formData,
      paymentMethod,
      items,
      totalPrice,
    });
    const orderData = {
        orderId: `NES-${Math.floor(10000 + Math.random() * 90000)}`,
        totalPrice,
        totalItems,
        paymentMethod,
      };
      
      clearCart();
      
      navigate("/order-success", {
        state: orderData,
      });
  };
  return (
    <main className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link
          to="/cart"
          className="mb-5 flex items-center gap-2 text-xs text-[#77716a] hover:text-[#8a6a4a]"
        >
          <FiArrowRight size={14} />
          بازگشت به سبد خرید
        </Link>

        <span className="text-xs text-[#8a6a4a]">
          تکمیل سفارش
        </span>

        <h1 className="mt-2 font-['Estedad'] text-3xl font-semibold">
          اطلاعات ارسال و پرداخت
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-10 lg:grid-cols-[1fr_380px]"
      >
        {/* Left */}
        <div className="space-y-8">
          {/* Customer Information */}
          <section className="rounded-xl border border-[#e5e1da] bg-[#f8f7f4] p-6 md:p-8">
            <div className="mb-6">
              <h2 className="font-['Estedad'] text-lg font-semibold">
                اطلاعات گیرنده
              </h2>

              <p className="mt-2 text-xs text-[#77716a]">
                اطلاعات دریافت‌کننده سفارش را وارد کنید.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs">
                  نام
                </label>

                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="نام"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.firstName && (
  <p className="mt-2 text-xs text-red-600">
    {errors.firstName}
  </p>
)}
              </div>

              <div>
                <label className="mb-2 block text-xs">
                  نام خانوادگی
                </label>

                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="نام خانوادگی"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.lastName && (
  <p className="mt-2 text-xs text-red-600">
    {errors.lastName}
  </p>
)}
              </div>

              <div>
                <label className="mb-2 block text-xs">
                  شماره موبایل
                </label>

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="09123456789"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.phone && (
  <p className="mt-2 text-xs text-red-600">
    {errors.phone}
  </p>
)}
              </div>

              <div>
                <label className="mb-2 block text-xs">
                  ایمیل
                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@email.com"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.email && (
  <p className="mt-2 text-xs text-red-600">
    {errors.email}
  </p>
)}
              </div>
            </div>
          </section>

          {/* Address */}
          <section className="rounded-xl border border-[#e5e1da] bg-[#f8f7f4] p-6 md:p-8">
            <div className="mb-6">
              <h2 className="font-['Estedad'] text-lg font-semibold">
                آدرس ارسال
              </h2>

              <p className="mt-2 text-xs text-[#77716a]">
                آدرس دقیق برای ارسال سفارش را وارد کنید.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs">
                  استان
                </label>

                <input
                  required
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  type="text"
                  placeholder="مثلاً تهران"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.province && (
  <p className="mt-2 text-xs text-red-600">
    {errors.province}
  </p>
)}
              </div>

              <div>
                <label className="mb-2 block text-xs">
                  شهر
                </label>

                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="مثلاً تهران"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.city && (
  <p className="mt-2 text-xs text-red-600">
    {errors.city}
  </p>
)}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs">
                  آدرس کامل
                </label>

                <input
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="آدرس کامل محل تحویل"
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.address && (
  <p className="mt-2 text-xs text-red-600">
    {errors.address}
  </p>
)}
              </div>

              <div>
                <label className="mb-2 block text-xs">
                  کد پستی
                </label>

                <input
                  required
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  type="text"
                  placeholder="۱۰ رقم"
                  maxLength={10}
                  className="h-12 w-full border border-[#dcd6ce] bg-white px-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
                {errors.postalCode && (
  <p className="mt-2 text-xs text-red-600">
    {errors.postalCode}
  </p>
)}
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-xl border border-[#e5e1da] bg-[#f8f7f4] p-6 md:p-8">
            <div className="mb-6">
              <h2 className="font-['Estedad'] text-lg font-semibold">
                روش پرداخت
              </h2>
            </div>

            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-4 border border-[#dcd6ce] bg-white p-4">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                  className="accent-[#181818]"
                />

                <div>
                  <p className="text-sm font-medium">
                    پرداخت آنلاین
                  </p>

                  <p className="mt-1 text-xs text-[#77716a]">
                    پرداخت از طریق درگاه بانکی
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-4 border border-[#dcd6ce] bg-white p-4">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(event) =>
                    setPaymentMethod(event.target.value)
                  }
                  className="accent-[#181818]"
                />

                <div>
                  <p className="text-sm font-medium">
                    پرداخت هنگام تحویل
                  </p>

                  <p className="mt-1 text-xs text-[#77716a]">
                    فعلاً به صورت آزمایشی
                  </p>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-xl bg-[#eeeae4] p-6 lg:sticky lg:top-28">
          <h2 className="font-['Estedad'] text-lg font-semibold">
            خلاصه سفارش
          </h2>

          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3"
              >
                <div className="h-16 w-12 shrink-0 overflow-hidden rounded-md bg-[#e9e4dc]">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium">
                    {item.product.title}
                  </p>

                  <p className="mt-1 text-[11px] text-[#77716a]">
                    تعداد:{" "}
                    {item.quantity.toLocaleString("fa-IR")}
                  </p>
                </div>

                <span className="text-xs font-semibold">
                  {formatPrice(
                    item.product.price * item.quantity
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 h-px bg-[#d8d2c9]" />

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6f6b65]">
                تعداد محصولات
              </span>

              <span>
                {totalItems.toLocaleString("fa-IR")}
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

          <button
            type="submit"
            className="group mt-7 flex w-full items-center justify-center gap-2 bg-[#181818] py-4 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
          >
            <FiCheck size={17} />

            ثبت سفارش و پرداخت
          </button>

          <p className="mt-4 text-center text-[10px] leading-5 text-[#77716a]">
            با ثبت سفارش، اطلاعات وارد شده برای پردازش سفارش استفاده خواهد شد.
          </p>
        </aside>
      </form>
    </main>
  );
}

export default Checkout;