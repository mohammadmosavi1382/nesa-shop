import { Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./components/product/ProductCard";
import { products } from "./data/products";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import ProductsSection from "./components/product/ProductsSection";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import TrustSection from "./components/home/TrustSection";
import ContactSection from "./components/home/ContactSection";
import Testimonials from "./components/home/Testimonials";
import StyleSection from "./components/home/StyleSection";
import FavoritesPage from "./pages/FavoritesPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProducts from "./components/admin/AdminProducts";
import AddProduct from "./components/admin/AddProduct";
import EditProduct from "./components/admin/EditProduct";
import AdminLayout from "./components/admin/AdminLayout";

import { useLocation } from "react-router-dom";
import AdminOrders from "./components/admin/AdminOrders"
import AdminCustomers from "./components/admin/AdminCustomers";
import AdminLogin from "./components/auth/AdminLogin";
import AdminProtectedRoute from "./components/routes/AdminProtectedRoute";
import AdminSettings from "./components/admin/AdminSettings";
import NotFound from "./pages/NotFound";
function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductsSection />
      <StyleSection />
      <Testimonials />
      <TrustSection />
      <ContactSection />
    </>
  );
}

function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] py-8 md:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative overflow-hidden border-b border-[#e5e1da] pb-6 md:pb-7"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-end">

            {/* Title */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8a6a4a]" />

                <span className="text-[10px] tracking-[0.2em] text-[#8a6a4a]">
                  NESA / SHOP
                </span>
              </div>

              <h1 className="mt-4 font-['Estedad'] text-3xl font-semibold leading-[1.5] sm:text-4xl md:text-5xl">
                انتخاب کن،
                <br />
                <span className="text-[#8a6a4a]">
                  متفاوت باش.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="md:col-span-5 md:pb-1">
              <p className="max-w-md text-xs leading-7 text-[#77716a] md:text-sm md:leading-8">
                مجموعه‌ای از محصولات منتخب NESA؛
                از لباس و کیف تا کفش و اکسسوری،
                برای ساختن استایلی که مخصوص خودت باشد.
              </p>
            </div>
          </div>

          {/* Decorative Number */}
          <span className="pointer-events-none absolute -bottom-8 left-0 hidden font-['Estedad'] text-[90px] font-bold leading-none text-[#e9e4dc] md:block">
            02
          </span>
        </motion.div>

        {/* Products */}
        <div className="mt-7 md:mt-8">
          <ProductsSection />
        </div>

      </div>
    </main>
  );
}
function CollectionsPage() {
  const [activeCollection, setActiveCollection] = useState("new");

  const collections = [
    {
      id: "new",
      title: "جدیدترین‌ها",
      description: "تازه‌ترین انتخاب‌های NESA",
    },
    {
      id: "clothing",
      title: "پوشاک",
      description: "انتخابی از لباس‌ها و پوشاک مینیمال",
    },
    {
      id: "bags",
      title: "کیف و اکسسوری",
      description: "جزئیات کوچک برای کامل کردن استایل",
    },
    {
      id: "special",
      title: "پیشنهاد ویژه",
      description: "محصولاتی با قیمت ویژه",
    },
  ];

  const filteredProducts = useMemo(() => {
    switch (activeCollection) {
      case "new":
        return products.filter((product) => product.isNew);

      case "clothing":
        return products.filter((product) =>
          ["کت و پوشاک", "لباس", "شلوار"].includes(
            product.category
          )
        );

      case "bags":
        return products.filter((product) =>
          ["کیف", "اکسسوری"].includes(product.category)
        );

      case "special":
        return products.filter(
          (product) => product.oldPrice !== undefined
        );

      default:
        return products;
    }
  }, [activeCollection]);

  return (
    <main className="min-h-screen bg-[#f8f7f4] py-10 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Header */}
     {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative overflow-hidden border-b border-[#e5e1da] pb-6 md:pb-7"
>
  <div className="grid gap-6 md:grid-cols-12 md:items-end">
    
    {/* Title */}
    <div className="md:col-span-7">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#8a6a4a]" />

        <span className="text-[10px] tracking-[0.2em] text-[#8a6a4a]">
          NESA / COLLECTIONS
        </span>
      </div>

      <h1 className="mt-4 font-['Estedad'] text-3xl font-semibold leading-[1.5] sm:text-4xl md:text-5xl">
        انتخاب‌های
        <span className="text-[#8a6a4a]"> شما.</span>
      </h1>
    </div>

    {/* Description */}
    <div className="md:col-span-5 md:pb-1">
      <p className="max-w-md text-xs leading-7 text-[#77716a] md:text-sm md:leading-8">
        مجموعه‌های NESA برای انتخاب راحت‌تر؛
        از تازه‌ترین محصولات تا انتخاب‌های ویژه،
        همه در یک نگاه.
      </p>
    </div>
  </div>

  {/* Decorative Number */}
  <span className="pointer-events-none absolute -bottom-8 left-0 hidden font-['Estedad'] text-[90px] font-bold leading-none text-[#e9e4dc] md:block">
    01
  </span>
</motion.div>

        {/* Collection Tabs */}
<div className="mt-5 flex gap-2 overflow-x-auto pb-1 md:mt-6">
          {collections.map((collection) => (
            <button
              key={collection.id}
              type="button"
              onClick={() =>
                setActiveCollection(collection.id)
              }
              className={`shrink-0 border px-5 py-3 text-sm transition-all ${
                activeCollection === collection.id
                  ? "border-[#181818] bg-[#181818] text-white"
                  : "border-[#ddd8d0] text-[#77716a] hover:border-[#181818] hover:text-[#181818]"
              }`}
            >
              {collection.title}
            </button>
          ))}
        </div>

        {/* Active Collection */}
        <motion.div
          key={activeCollection}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8"
        >
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-['Estedad'] text-xl font-semibold">
                {
                  collections.find(
                    (collection) =>
                      collection.id === activeCollection
                  )?.title
                }
              </h2>

              <p className="mt-2 text-xs text-[#77716a]">
                {
                  collections.find(
                    (collection) =>
                      collection.id === activeCollection
                  )?.description
                }
              </p>
            </div>

            <span className="text-xs text-[#8a6a4a]">
              {filteredProducts.length.toLocaleString("fa-IR")} محصول
            </span>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-['Estedad'] text-lg">
                محصولی در این مجموعه وجود ندارد.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] py-10 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Hero */}
        <section className="grid items-center gap-10 border-b border-[#e5e1da] pb-14 lg:grid-cols-2">
          
          <div>
            <span className="text-xs tracking-wide text-[#8a6a4a]">
              ABOUT NESA
            </span>

            <h1 className="mt-3 font-['Estedad'] text-3xl font-semibold leading-relaxed md:text-5xl">
              سادگی، کیفیت و انتخاب درست
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#77716a]">
              NESA با تمرکز بر طراحی مینیمال و انتخاب محصولاتی
              کاربردی شکل گرفته است. هدف ما این است که خرید کردن
              ساده، لذت‌بخش و بدون پیچیدگی باشد.
            </p>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#e9e4dc]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
              alt="NESA Store"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Values */}
        <section className="py-14">
          <div className="mb-8">
            <span className="text-xs text-[#8a6a4a]">
              OUR VALUES
            </span>

            <h2 className="mt-2 font-['Estedad'] text-2xl font-semibold">
              چیزی که برای ما مهم است
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-xl border border-[#e5e1da] bg-white p-7">
              <span className="text-xs text-[#8a6a4a]">
                01
              </span>

              <h3 className="mt-5 font-['Estedad'] text-lg font-semibold">
                طراحی ساده
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#77716a]">
                محصولاتی با ظاهر ساده و مدرن که بتوانند در
                سبک‌های مختلف استفاده شوند.
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1da] bg-white p-7">
              <span className="text-xs text-[#8a6a4a]">
                02
              </span>

              <h3 className="mt-5 font-['Estedad'] text-lg font-semibold">
                کیفیت
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#77716a]">
                تلاش می‌کنیم محصولاتی را انتخاب کنیم که علاوه
                بر ظاهر مناسب، کاربرد و کیفیت خوبی داشته باشند.
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1da] bg-white p-7">
              <span className="text-xs text-[#8a6a4a]">
                03
              </span>

              <h3 className="mt-5 font-['Estedad'] text-lg font-semibold">
                تجربه خرید
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#77716a]">
                هدف ما ایجاد تجربه‌ای ساده و روان از انتخاب
                محصول تا ثبت سفارش است.
              </p>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-xl bg-[#181818] px-6 py-12 text-center text-white md:px-10">
          <span className="text-xs text-[#c5a889]">
            NESA STORE
          </span>

          <h2 className="mt-3 font-['Estedad'] text-2xl font-semibold">
            انتخاب ساده‌تر، خرید بهتر
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#aaa49c]">
            مجموعه محصولات ما را ببینید و محصول موردنظر خود
            را پیدا کنید.
          </p>
        </section>

      </div>
    </main>
  );
}

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f8f7f4] text-[#181818]"
    >
      {/* Public Website Header */}
      {!isAdminPage && (
        <>
          <AnnouncementBar />
          <Navbar />
        </>
      )}
<Routes>
  {/* ================= PUBLIC ================= */}

  <Route
    path="/"
    element={<HomePage />}
  />

  <Route
    path="/product/:id"
    element={<ProductDetails />}
  />

  <Route
    path="/cart"
    element={<Cart />}
  />

  <Route
    path="/shop"
    element={<ShopPage />}
  />

  <Route
    path="/collections"
    element={<CollectionsPage />}
  />

  <Route
    path="/about"
    element={<AboutPage />}
  />

  <Route
    path="/checkout"
    element={<Checkout />}
  />

  <Route
    path="/order-success"
    element={<OrderSuccess />}
  />

  <Route
    path="/favorites"
    element={<FavoritesPage />}
  />

  {/* ================= ADMIN LOGIN ================= */}

  <Route
    path="/admin-login"
    element={<AdminLogin />}
  />

  {/* ================= ADMIN PANEL ================= */}

  <Route element={<AdminProtectedRoute />}>
    <Route
      path="/admin"
      element={<AdminLayout />}
    >
      {/* Dashboard */}

      <Route
        index
        element={<AdminDashboard />}
      />

      {/* Products */}

      <Route
        path="products"
        element={<AdminProducts />}
      />

      <Route
        path="products/new"
        element={<AddProduct />}
      />

      <Route
        path="products/:id/edit"
        element={<EditProduct />}
      />

      {/* Orders */}

      <Route
        path="orders"
        element={<AdminOrders />}
      />

      {/* Customers */}

      <Route
        path="customers"
        element={<AdminCustomers />}
      />

      {/* Settings */}

      <Route
        path="settings"
        element={<AdminSettings/>}
      />
   
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
    </div>
  );
}
export default App;