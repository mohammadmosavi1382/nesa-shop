import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import {
  FiBox,
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiX,
  FiMenu,
} from "react-icons/fi";
import { useState } from "react";



const menuItems = [
  {
    title: "داشبورد",
    path: "/admin",
    icon: FiGrid,
  },
  {
    title: "محصولات",
    path: "/admin/products",
    icon: FiBox,
  },
  {
    title: "سفارش‌ها",
    path: "/admin/orders",
    icon: FiShoppingBag,
  },
  {
    title: "مشتریان",
    path: "/admin/customers",
    icon: FiUsers,
  },
  {
    title: "تنظیمات",
    path: "/admin/settings",
    icon: FiSettings,
  },
];

function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f3ef] text-[#181818]"
    >
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#e5e1da] bg-[#f8f7f4] px-5 lg:hidden">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="باز کردن منو"
        >
          <FiMenu size={21} />
        </button>

        <Link
          to="/admin"
          className="font-['Estedad'] text-lg font-bold"
        >
          NESA
        </Link>

        <span className="text-[10px] tracking-widest text-[#8a6a4a]">
          ADMIN
        </span>
      </header>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="بستن منو"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col border-l border-[#e5e1da] bg-[#f8f7f4] transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-[#e5e1da] px-6">
          <div>
            <Link
              to="/admin"
              className="font-['Estedad'] text-xl font-bold"
            >
              NESA
            </Link>

            <p className="mt-1 text-[9px] tracking-[0.2em] text-[#8a6a4a]">
              ADMIN PANEL
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="flex h-9 w-9 items-center justify-center lg:hidden"
            aria-label="بستن منو"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Admin Info */}
        <div className="border-b border-[#e5e1da] px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-sm text-white">
              N
            </div>

            <div>
              <p className="font-['Estedad'] text-sm font-medium">
                مدیر فروشگاه
              </p>

              <p className="mt-1 text-[10px] text-[#77716a]">
                مدیریت NESA
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] tracking-wider text-[#aaa49c]">
            مدیریت فروشگاه
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm transition-all ${
                    isActive
                      ? "bg-[#181818] text-white"
                      : "text-[#77716a] hover:bg-[#eeeae4] hover:text-[#181818]"
                  }`}
                >
                  <Icon size={17} />

                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-[#e5e1da] p-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-xs text-[#77716a] transition-colors hover:text-[#181818]"
          >
            <FiLogOut size={16} />

            بازگشت به سایت
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:mr-72">
        <main className="min-h-screen p-5 md:p-8 lg:p-10">
        <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;