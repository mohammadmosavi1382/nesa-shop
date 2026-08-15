import { useMemo, useState } from "react";
import { FiEdit2, FiPlus, FiSearch, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import { products } from "../../data/products";

function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const categories = [
    "همه",
    "کت و پوشاک",
    "کیف",
    "کفش",
    "شلوار",
    "لباس",
    "اکسسوری",
  ];

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "همه" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <span className="text-xs tracking-wider text-[#8a6a4a]">
            PRODUCT MANAGEMENT
          </span>

          <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold">
            مدیریت محصولات
          </h1>

          <p className="mt-2 text-sm text-[#77716a]">
            محصولات فروشگاه را مدیریت، ویرایش یا حذف کنید.
          </p>
        </div>

        <Link
          to="/admin/products/new"
          className="inline-flex items-center justify-center gap-2 bg-[#181818] px-5 py-3 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
        >
          <FiPlus size={17} />
          افزودن محصول
        </Link>
      </div>

      {/* Filters */}
      <div className="border border-[#e5e1da] bg-white p-4">

        <div className="flex flex-col gap-4 md:flex-row">

          {/* Search */}
          <div className="relative flex-1">
            <FiSearch
              size={17}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa49c]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="جستجوی محصول..."
              className="w-full border border-[#ddd8d0] bg-[#f8f7f4] py-3 pr-11 pl-4 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
            />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
            className="border border-[#ddd8d0] bg-[#f8f7f4] px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        <StatCard
          title="کل محصولات"
          value={products.length}
        />

        <StatCard
          title="محصولات جدید"
          value={products.filter((product) => product.isNew).length}
        />

        <StatCard
          title="تخفیف‌دار"
          value={
            products.filter(
              (product) => product.oldPrice !== undefined
            ).length
          }
        />

        <StatCard
          title="نتایج فعلی"
          value={filteredProducts.length}
        />

      </div>

      {/* Product Table */}
      <div className="overflow-hidden border border-[#e5e1da] bg-white">

        {/* Table Header */}
        <div className="hidden grid-cols-[80px_1fr_150px_150px_120px] gap-4 border-b border-[#e5e1da] bg-[#f8f7f4] px-5 py-4 text-xs text-[#77716a] md:grid">
          <span>تصویر</span>
          <span>محصول</span>
          <span>دسته‌بندی</span>
          <span>قیمت</span>
          <span className="text-center">عملیات</span>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="grid gap-4 border-b border-[#eeeae4] px-5 py-5 last:border-b-0 md:grid-cols-[80px_1fr_150px_150px_120px] md:items-center"
              >

                {/* Image */}
                <div className="h-16 w-14 overflow-hidden bg-[#e9e4dc]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product */}
                <div>
                  <div className="flex items-center gap-2">

                    <h3 className="font-['Estedad'] text-sm font-medium">
                      {product.title}
                    </h3>

                    {product.isNew && (
                      <span className="bg-[#181818] px-2 py-1 text-[9px] text-white">
                        جدید
                      </span>
                    )}

                  </div>

                  <p className="mt-1 text-xs text-[#aaa49c]">
                    ID: {product.id}
                  </p>
                </div>

                {/* Category */}
                <span className="text-xs text-[#77716a]">
                  {product.category}
                </span>

                {/* Price */}
                <div>
                  <span className="text-sm font-semibold">
                    {formatPrice(product.price)}
                  </span>

                  <span className="mr-1 text-[10px] text-[#8a6a4a]">
                    تومان
                  </span>

                  {product.oldPrice && (
                    <div className="mt-1 text-xs text-[#aaa49c] line-through">
                      {formatPrice(product.oldPrice)}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:justify-center">

                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="flex h-9 w-9 items-center justify-center border border-[#ddd8d0] text-[#77716a] transition-all hover:border-[#181818] hover:bg-[#181818] hover:text-white"
                    aria-label={`ویرایش ${product.title}`}
                  >
                    <FiEdit2 size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        `حذف محصول «${product.title}» در مرحله بعد به API متصل می‌شود.`
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center border border-[#ead8d5] text-[#a05a50] transition-all hover:bg-[#a05a50] hover:text-white"
                    aria-label={`حذف ${product.title}`}
                  >
                    <FiTrash2 size={15} />
                  </button>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty */
          <div className="py-20 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eeeae4]">
              <FiSearch
                size={22}
                className="text-[#8a6a4a]"
              />
            </div>

            <h3 className="mt-4 font-['Estedad'] text-sm font-semibold">
              محصولی پیدا نشد
            </h3>

            <p className="mt-2 text-xs text-[#77716a]">
              عبارت جستجو یا دسته‌بندی دیگری را امتحان کنید.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="border border-[#e5e1da] bg-white p-5">

      <p className="text-xs text-[#77716a]">
        {title}
      </p>

      <p className="mt-3 font-['Estedad'] text-2xl font-semibold">
        {value.toLocaleString("fa-IR")}
      </p>

    </div>
  );
}

export default ProductManagement;