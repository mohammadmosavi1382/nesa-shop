import {
    FiBox,
    FiShoppingBag,
    FiUsers,
    FiTrendingUp,
  } from "react-icons/fi";
  

  
  const stats = [
    {
      title: "فروش امروز",
      value: "۱۲,۸۵۰,۰۰۰",
      unit: "تومان",
      icon: FiTrendingUp,
    },
    {
      title: "سفارش‌ها",
      value: "۲۴",
      unit: "سفارش",
      icon: FiShoppingBag,
    },
    {
      title: "محصولات",
      value: "۸",
      unit: "محصول",
      icon: FiBox,
    },
    {
      title: "مشتریان",
      value: "۱۲۸",
      unit: "نفر",
      icon: FiUsers,
    },
  ];
  
  function AdminDashboard() {
    return (
      <>
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-[#e1ddd6] pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
              NESA / ADMIN
            </span>
  
            <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
              داشبورد
            </h1>
  
            <p className="mt-2 text-xs text-[#77716a]">
              نمای کلی وضعیت فروشگاه NESA
            </p>
          </div>
  
          <span className="text-xs text-[#aaa49c]">
            امروز
          </span>
        </div>
  
        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
  
            return (
              <div
                key={stat.title}
                className="border border-[#e1ddd6] bg-[#f8f7f4] p-5"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-[#77716a]">
                    {stat.title}
                  </span>
  
                  <div className="flex h-9 w-9 items-center justify-center bg-[#eeeae4]">
                    <Icon
                      size={17}
                      className="text-[#8a6a4a]"
                    />
                  </div>
                </div>
  
                <div className="mt-6">
                  <span className="font-['Estedad'] text-xl font-semibold">
                    {stat.value}
                  </span>
  
                  <span className="mr-2 text-[10px] text-[#77716a]">
                    {stat.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
  
        {/* Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <h2 className="font-['Estedad'] text-base font-semibold">
              آخرین سفارش‌ها
            </h2>
  
            <p className="mt-2 text-xs leading-6 text-[#77716a]">
              سفارش‌های جدید فروشگاه در این بخش نمایش داده می‌شوند.
            </p>
  
            <div className="mt-6 border-t border-[#e5e1da] pt-5 text-center">
              <p className="text-xs text-[#aaa49c]">
                هنوز اطلاعات واقعی سفارش‌ها متصل نشده است.
              </p>
            </div>
          </div>
  
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <h2 className="font-['Estedad'] text-base font-semibold">
              وضعیت محصولات
            </h2>
  
            <p className="mt-2 text-xs leading-6 text-[#77716a]">
              موجودی و وضعیت محصولات فروشگاه در این بخش قرار می‌گیرد.
            </p>
  
            <div className="mt-6 border-t border-[#e5e1da] pt-5 text-center">
              <p className="text-xs text-[#aaa49c]">
                مدیریت محصولات در مرحله بعد فعال می‌شود.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default AdminDashboard;