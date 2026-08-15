import { FiArrowLeft, FiMail, FiPhone } from "react-icons/fi";

function ContactSection() {
  return (
    <section className="bg-[#181818] px-5 py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="grid gap-10 md:grid-cols-2 md:items-end">

          <div>
            <span className="text-xs text-[#b89a7a]">
              NESA / CONTACT
            </span>

            <h2 className="mt-4 font-['Estedad'] text-3xl font-semibold leading-relaxed md:text-5xl">
              سوالی دارید؟
              <br />
              با ما در ارتباط باشید.
            </h2>
          </div>

          <div>
            <p className="max-w-md text-sm leading-8 text-[#aaa49c]">
              اگر درباره محصولات، ثبت سفارش، ارسال یا انتخاب محصول
              سوالی دارید، می‌توانید با ما در ارتباط باشید.
              خوشحال می‌شویم راهنمایی‌تان کنیم.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">

          {/* Phone */}
          <a
            href="tel:02112345678"
            className="group border border-[#343434] p-6 transition-colors duration-300 hover:border-[#8a6a4a]"
          >
            <FiPhone
              size={20}
              className="text-[#b89a7a]"
            />

            <p className="mt-8 text-xs text-[#77716a]">
              تماس با فروشگاه
            </p>

            <p className="mt-2 text-sm">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@nesastore.ir"
            className="group border border-[#343434] p-6 transition-colors duration-300 hover:border-[#8a6a4a]"
          >
            <FiMail
              size={20}
              className="text-[#b89a7a]"
            />

            <p className="mt-8 text-xs text-[#77716a]">
              ایمیل
            </p>

            <p className="mt-2 text-sm">
              info@nesastore.ir
            </p>
          </a>

          {/* Support */}
          <div className="border border-[#343434] p-6">

            <p className="text-xs text-[#77716a]">
              ساعات پاسخگویی
            </p>

            <p className="mt-3 text-sm">
              شنبه تا پنجشنبه
            </p>

            <p className="mt-1 text-xs text-[#aaa49c]">
              ۹ صبح تا ۱۸ عصر
            </p>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-5 border-t border-[#343434] pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-[#77716a]">
            برای انتخاب بهتر، می‌توانید با ما مشورت کنید.
          </p>

          <button
            type="button"
            className="group flex items-center justify-center gap-3 text-sm transition-colors hover:text-[#b89a7a]"
          >
            ارتباط با ما

            <FiArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;