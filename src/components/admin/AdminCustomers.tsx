import {
    FiEye,
    FiUsers,
    FiShoppingBag,
    FiTrendingUp,
  } from "react-icons/fi";
  
  const customers = [
    {
      id: 1,
      name: "محمد رضایی",
      email: "mohammad@example.com",
      orders: 8,
      totalSpent: "۱۲,۸۵۰,۰۰۰",
      status: "فعال",
    },
    {
      id: 2,
      name: "سارا احمدی",
      email: "sara@example.com",
      orders: 5,
      totalSpent: "۸,۴۲۰,۰۰۰",
      status: "فعال",
    },
    {
      id: 3,
      name: "علی محمدی",
      email: "ali@example.com",
      orders: 3,
      totalSpent: "۵,۲۰۰,۰۰۰",
      status: "فعال",
    },
    {
      id: 4,
      name: "نگار کریمی",
      email: "negar@example.com",
      orders: 1,
      totalSpent: "۱,۸۹۰,۰۰۰",
      status: "غیرفعال",
    },
  ];
  
  function AdminCustomers() {
    return (
      <div>
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#e1ddd6] pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
              NESA / CUSTOMERS
            </span>
  
            <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
              مشتریان
            </h1>
  
            <p className="mt-2 text-xs leading-6 text-[#77716a]">
              مدیریت مشتریان و بررسی فعالیت آن‌ها در فروشگاه
            </p>
          </div>
  
          <div className="flex items-center gap-2 text-xs text-[#77716a]">
            <FiUsers size={15} />
  
            <span>
              {customers.length.toLocaleString("fa-IR")} مشتری
            </span>
          </div>
        </div>
  
        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[#77716a]">
                  کل مشتریان
                </p>
  
                <p className="mt-4 font-['Estedad'] text-xl font-semibold">
                  ۱۲۸
                </p>
              </div>
  
              <div className="flex h-10 w-10 items-center justify-center bg-[#eeeae4]">
                <FiUsers
                  size={17}
                  className="text-[#8a6a4a]"
                />
              </div>
            </div>
          </div>
  
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[#77716a]">
                  مشتریان فعال
                </p>
  
                <p className="mt-4 font-['Estedad'] text-xl font-semibold">
                  ۱۱۲
                </p>
              </div>
  
              <div className="flex h-10 w-10 items-center justify-center bg-[#eeeae4]">
                <FiTrendingUp
                  size={17}
                  className="text-[#8a6a4a]"
                />
              </div>
            </div>
          </div>
  
          <div className="border border-[#181818] bg-[#181818] p-5 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-white/60">
                  میانگین خرید
                </p>
  
                <p className="mt-4 font-['Estedad'] text-xl font-semibold">
                  ۳,۴۵۰,۰۰۰
                </p>
  
                <span className="text-[10px] text-white/50">
                  تومان
                </span>
              </div>
  
              <div className="flex h-10 w-10 items-center justify-center bg-white/10">
                <FiShoppingBag size={17} />
              </div>
            </div>
          </div>
        </div>
  
        {/* Customers */}
        <div className="mt-8 overflow-hidden border border-[#e1ddd6] bg-[#f8f7f4]">
          <div className="border-b border-[#e1ddd6] px-5 py-5">
            <h2 className="font-['Estedad'] text-base font-semibold">
              لیست مشتریان
            </h2>
  
            <p className="mt-1 text-[10px] text-[#77716a]">
              مشتریان ثبت‌شده در فروشگاه NESA
            </p>
          </div>
  
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-right">
              <thead>
                <tr className="border-b border-[#e1ddd6] text-[10px] text-[#aaa49c]">
                  <th className="px-5 py-4 font-normal">
                    مشتری
                  </th>
  
                  <th className="px-5 py-4 font-normal">
                    ایمیل
                  </th>
  
                  <th className="px-5 py-4 font-normal">
                    سفارش‌ها
                  </th>
  
                  <th className="px-5 py-4 font-normal">
                    مجموع خرید
                  </th>
  
                  <th className="px-5 py-4 font-normal">
                    وضعیت
                  </th>
  
                  <th className="px-5 py-4 font-normal">
                    عملیات
                  </th>
                </tr>
              </thead>
  
              <tbody>
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-[#e9e5df] last:border-b-0 transition-colors hover:bg-[#f1eee9]"
                  >
                    {/* Customer */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#181818] text-xs text-white">
                          {customer.name.charAt(0)}
                        </div>
  
                        <div>
                          <p className="font-['Estedad'] text-xs font-medium">
                            {customer.name}
                          </p>
  
                          <p className="mt-1 text-[9px] text-[#aaa49c]">
                            مشتری #{customer.id}
                          </p>
                        </div>
                      </div>
                    </td>
  
                    {/* Email */}
                    <td className="px-5 py-5 text-xs text-[#77716a]">
                      {customer.email}
                    </td>
  
                    {/* Orders */}
                    <td className="px-5 py-5">
                      <span className="text-xs">
                        {customer.orders.toLocaleString("fa-IR")}
                      </span>
  
                      <span className="mr-1 text-[9px] text-[#aaa49c]">
                        سفارش
                      </span>
                    </td>
  
                    {/* Total */}
                    <td className="px-5 py-5">
                      <span className="text-xs">
                        {customer.totalSpent}
                      </span>
  
                      <span className="mr-1 text-[9px] text-[#aaa49c]">
                        تومان
                      </span>
                    </td>
  
                    {/* Status */}
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-[10px] ${
                          customer.status === "فعال"
                            ? "bg-green-50 text-green-700"
                            : "bg-[#eeeae4] text-[#77716a]"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
  
                    {/* Action */}
                    <td className="px-5 py-5">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center border border-[#ddd8d0] transition-colors hover:border-[#181818] hover:bg-white"
                        aria-label={`مشاهده ${customer.name}`}
                      >
                        <FiEye size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminCustomers;