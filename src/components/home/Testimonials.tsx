import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "سارا محمدی",
    product: "کیف دستی Luna",
    text: "کیفیت محصول خیلی خوب بود و دقیقاً مطابق چیزی بود که در سایت دیدم. بسته‌بندی هم خیلی مرتب بود.",
  },
  {
    name: "نگار احمدی",
    product: "کت لینن مدل آریا",
    text: "طراحی ساده و کیفیت پارچه واقعاً عالیه. برای استفاده روزمره خیلی انتخاب خوبیه.",
  },
  {
    name: "مریم رضایی",
    product: "پیراهن مینیمال",
    text: "سفارش خیلی سریع به دستم رسید و از کیفیت محصول کاملاً راضی بودم.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#f8f7f4] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-[#e5e1da] pb-7 md:flex-row md:items-end">
          <div>
            <span className="text-xs text-[#8a6a4a]">
              تجربه مشتریان
            </span>

            <h2 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
              مشتریان ما چه می‌گویند؟
            </h2>
          </div>

          <p className="max-w-md text-xs leading-7 text-[#77716a]">
            رضایت مشتریان برای ما اهمیت زیادی دارد. تجربه خرید
            بعضی از مشتریان NESA را بخوانید.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-[#e5e1da] bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#8a6a4a]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={14}
                    className="fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-5 text-sm leading-8 text-[#55514c]">
                «{item.text}»
              </p>

              {/* Customer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#e5e1da] pt-5">
                <div>
                  <p className="text-sm font-semibold">
                    {item.name}
                  </p>

                  <p className="mt-1 text-[11px] text-[#77716a]">
                    خریدار {item.product}
                  </p>
                </div>

                <span className="text-[10px] text-green-700">
                  خرید تأیید شده
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;