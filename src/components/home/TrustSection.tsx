import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#181818] px-6 py-12 text-white md:px-12 md:py-16">
          {/* Decorative */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            {/* Text */}
            <div className="max-w-2xl">
              <span className="text-xs tracking-wide text-[#c5a98b]">
                NESA COLLECTION
              </span>

              <h2 className="mt-4 font-['Estedad'] text-2xl font-semibold leading-relaxed md:text-4xl">
                انتخاب ساده،
                <br />
                استایل ماندگار.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/60">
                ما در NESA تلاش می‌کنیم محصولاتی را انتخاب کنیم
                که در کنار طراحی زیبا، کاربردی و ماندگار باشند.
                مجموعه‌ای برای کسانی که سادگی را متفاوت می‌بینند.
              </p>

              <Link
                to="/collections"
                className="mt-7 inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs transition-colors duration-300 hover:bg-white hover:text-[#181818]"
              >
                مشاهده مجموعه‌ها

                <FiArrowLeft size={15} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-7 border-t border-white/10 pt-7 md:border-t-0 md:border-r md:pr-10 md:pt-0">
              <div>
                <span className="text-2xl font-semibold">
                  100%
                </span>

                <p className="mt-1 text-[11px] text-white/50">
                  توجه به کیفیت
                </p>
              </div>

              <div>
                <span className="text-2xl font-semibold">
                  24/7
                </span>

                <p className="mt-1 text-[11px] text-white/50">
                  امکان ثبت سفارش
                </p>
              </div>

              <div>
                <span className="text-2xl font-semibold">
                  NESA
                </span>

                <p className="mt-1 text-[11px] text-white/50">
                  سبک متفاوت
                </p>
              </div>

              <div>
                <span className="text-2xl font-semibold">
                  +8
                </span>

                <p className="mt-1 text-[11px] text-white/50">
                  محصول منتخب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;