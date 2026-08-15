import { useState } from "react";
import {
  FiBell,
  FiMail,
  FiPhone,
  FiSave,
  FiShoppingBag,
} from "react-icons/fi";

function AdminSettings() {
  const [storeName, setStoreName] =
    useState("NESA");

  const [email, setEmail] =
    useState("admin@nesa.com");

  const [phone, setPhone] =
    useState("09120000000");

  const [storeActive, setStoreActive] =
    useState(true);

  const [orderNotifications, setOrderNotifications] =
    useState(true);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    alert("تنظیمات با موفقیت ذخیره شد.");
  };

  return (
    <>
      {/* Header */}
      <div className="border-b border-[#e1ddd6] pb-7">
        <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
          NESA / SETTINGS
        </span>

        <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
          تنظیمات
        </h1>

        <p className="mt-2 text-xs text-[#77716a]">
          مدیریت اطلاعات و تنظیمات فروشگاه NESA
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]"
      >
        {/* Main */}
        <div className="space-y-6">
          {/* Store Information */}
          <section className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#eeeae4]">
                <FiShoppingBag
                  size={17}
                  className="text-[#8a6a4a]"
                />
              </div>

              <div>
                <h2 className="font-['Estedad'] text-base font-semibold">
                  اطلاعات فروشگاه
                </h2>

                <p className="mt-1 text-[10px] text-[#77716a]">
                  اطلاعات اصلی فروشگاه
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {/* Store Name */}
              <div>
                <label className="mb-2 block text-xs">
                  نام فروشگاه
                </label>

                <input
                  type="text"
                  value={storeName}
                  onChange={(event) =>
                    setStoreName(event.target.value)
                  }
                  className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs">
                  <FiMail size={13} />
                  ایمیل مدیریت
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs">
                  <FiPhone size={13} />
                  شماره تماس
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#eeeae4]">
                <FiBell
                  size={17}
                  className="text-[#8a6a4a]"
                />
              </div>

              <div>
                <h2 className="font-['Estedad'] text-base font-semibold">
                  اعلان‌ها
                </h2>

                <p className="mt-1 text-[10px] text-[#77716a]">
                  مدیریت اعلان‌های پنل
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-[#e5e1da] pt-5">
              <div>
                <p className="text-sm">
                  اعلان سفارش جدید
                </p>

                <p className="mt-1 text-[10px] text-[#77716a]">
                  هنگام ثبت سفارش جدید به شما اطلاع داده شود.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setOrderNotifications(
                    (value) => !value
                  )
                }
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  orderNotifications
                    ? "bg-[#181818]"
                    : "bg-[#cfc9c0]"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                    orderNotifications
                      ? "translate-x-1"
                      : "translate-x-6"
                  }`}
                />
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="h-fit border border-[#e1ddd6] bg-[#eeeae4] p-6">
          <div className="flex items-center gap-3">
            <FiShoppingBag
              size={18}
              className="text-[#8a6a4a]"
            />

            <h2 className="font-['Estedad'] text-base font-semibold">
              وضعیت فروشگاه
            </h2>
          </div>

          <div className="mt-6 flex items-center justify-between border-b border-[#d8d2c9] pb-5">
            <div>
              <p className="text-sm">
                فروشگاه فعال
              </p>

              <p className="mt-1 text-[10px] text-[#77716a]">
                فروشگاه برای مشتریان قابل مشاهده باشد.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setStoreActive(
                  (value) => !value
                )
              }
              className={`relative h-6 w-11 rounded-full transition-colors ${
                storeActive
                  ? "bg-[#181818]"
                  : "bg-[#cfc9c0]"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                  storeActive
                    ? "translate-x-1"
                    : "translate-x-6"
                }`}
              />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs">
            <span
              className={`h-2 w-2 rounded-full ${
                storeActive
                  ? "bg-green-600"
                  : "bg-red-500"
              }`}
            />

            <span>
              {storeActive
                ? "فروشگاه فعال است"
                : "فروشگاه غیرفعال است"}
            </span>
          </div>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2 bg-[#181818] py-4 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
          >
            <FiSave size={16} />
            ذخیره تنظیمات
          </button>
        </aside>
      </form>
    </>
  );
}

export default AdminSettings;