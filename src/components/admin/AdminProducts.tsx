import { useState } from "react";
import {
  FiEdit2,
  FiPlus,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useProducts } from "../../contexts/ProductContext";

function AdminProducts() {
  const { products, deleteProduct } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const query = search.trim().toLowerCase();

    if (!query) return true;

    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  const handleDelete = (productId: number) => {
    const product = products.find(
      (item) => item.id === productId
    );

    if (!product) return;

    const confirmed = window.confirm(
      `آیا از حذف «${product.title}» مطمئن هستید؟`
    );

    if (!confirmed) return;

    deleteProduct(productId);
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-[#e1ddd6] pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
            NESA / PRODUCTS
          </span>

          <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
            محصولات
          </h1>

          <p className="mt-2 text-xs text-[#77716a]">
            مدیریت محصولات فروشگاه
          </p>
        </div>

        <Link
          to="/admin/products/new"
          className="flex items-center justify-center gap-2 bg-[#181818] px-5 py-3 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
        >
          <FiPlus size={16} />
          افزودن محصول
        </Link>
      </div>

      {/* Toolbar */}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-[#77716a]">
          <span>تعداد محصولات:</span>

          <strong className="text-[#181818]">
            {products.length.toLocaleString("fa-IR")}
          </strong>
        </div>

        <div className="flex items-center gap-3 border border-[#ddd8d0] bg-[#f8f7f4] px-4 py-3 sm:w-80">
          <FiSearch
            size={16}
            className="text-[#aaa49c]"
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="جستجوی محصول..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-[#aaa49c]"
          />
        </div>
      </div>

      {/* Products */}
      <div className="mt-8 overflow-hidden border border-[#e1ddd6] bg-[#f8f7f4]">
        {/* Table Header */}
        <div className="hidden grid-cols-[80px_1fr_150px_130px_120px] items-center gap-4 border-b border-[#e1ddd6] bg-[#eeeae4] px-5 py-4 text-[10px] text-[#77716a] md:grid">
          <span>تصویر</span>
          <span>محصول</span>
          <span>قیمت</span>
          <span>وضعیت</span>
          <span>عملیات</span>
        </div>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="grid gap-4 border-b border-[#e5e1da] px-5 py-5 last:border-b-0 md:grid-cols-[80px_1fr_150px_130px_120px] md:items-center"
            >
              {/* Image */}
              <div className="h-20 w-16 overflow-hidden bg-[#e9e4dc]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product */}
              <div>
                <p className="font-['Estedad'] text-sm font-medium">
                  {product.title}
                </p>

                <p className="mt-1 text-[10px] text-[#8a6a4a]">
                  {product.category}
                </p>
              </div>

              {/* Price */}
              <div>
                <span className="text-sm font-semibold">
                  {new Intl.NumberFormat("fa-IR").format(
                    product.price
                  )}
                </span>

                <span className="mr-1 text-[10px] text-[#77716a]">
                  تومان
                </span>
              </div>

              {/* Status */}
              <div>
                <span className="inline-flex bg-[#e7eee7] px-3 py-1.5 text-[10px] text-green-700">
                  فعال
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link
                  to={`/admin/products/${product.id}/edit`}
                  className="flex h-9 w-9 items-center justify-center border border-[#ddd8d0] transition-colors hover:bg-[#eeeae4]"
                  aria-label="ویرایش محصول"
                >
                  <FiEdit2 size={14} />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(product.id)
                  }
                  className="flex h-9 w-9 items-center justify-center border border-[#ddd8d0] text-red-600 transition-colors hover:bg-red-50"
                  aria-label="حذف محصول"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="px-5 py-20 text-center">
            <p className="font-['Estedad'] text-sm">
              محصولی پیدا نشد
            </p>

            <p className="mt-2 text-xs text-[#77716a]">
              عبارت جستجوی دیگری را امتحان کنید.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminProducts;