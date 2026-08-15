import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiArrowRight,
  FiImage,
  FiSave,
} from "react-icons/fi";


import { useProducts } from "../../contexts/ProductContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    getProductById,
    updateProduct,
  } = useProducts();

  const product = getProductById(Number(id));

  const [title, setTitle] = useState(
    product?.title ?? ""
  );

  const [category, setCategory] = useState(
    product?.category ?? "کت و پوشاک"
  );

  const [price, setPrice] = useState(
    product?.price.toString() ?? ""
  );

  const [oldPrice, setOldPrice] = useState(
    product?.oldPrice?.toString() ?? ""
  );

  const [description, setDescription] = useState(
    product?.description ?? ""
  );

  const [image, setImage] = useState(
    product?.image ?? ""
  );

  const [isNew, setIsNew] = useState(
    product?.isNew ?? false
  );

  if (!product) {
    return (
      <>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eeeae4]">
            <FiImage
              size={24}
              className="text-[#8a6a4a]"
            />
          </div>

          <h1 className="mt-5 font-['Estedad'] text-lg font-semibold">
            محصول پیدا نشد
          </h1>

          <p className="mt-2 text-xs text-[#77716a]">
            محصول موردنظر وجود ندارد یا حذف شده است.
          </p>

          <Link
            to="/admin/products"
            className="mt-6 bg-[#181818] px-6 py-3 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
          >
            بازگشت به محصولات
          </Link>
        </div>
      </>
    );
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      title: title.trim(),
      category,
      price: Number(price),
      oldPrice: oldPrice
        ? Number(oldPrice)
        : undefined,
      description: description.trim(),
      image: image.trim(),
      images: [image.trim()],
      isNew,
    };

    updateProduct(updatedProduct);

    alert(
      "تغییرات محصول با موفقیت ذخیره شد."
    );

    navigate("/admin/products");
  };

  return (
    <>
      {/* Header */}
      <div className="border-b border-[#e1ddd6] pb-7">
        <Link
          to="/admin/products"
          className="mb-5 inline-flex items-center gap-2 text-xs text-[#77716a] transition-colors hover:text-[#8a6a4a]"
        >
          <FiArrowRight size={15} />
          بازگشت به محصولات
        </Link>

        <span className="block text-[10px] tracking-[0.18em] text-[#8a6a4a]">
          NESA / EDIT PRODUCT
        </span>

        <div className="mt-2 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h1 className="font-['Estedad'] text-2xl font-semibold md:text-3xl">
              ویرایش محصول
            </h1>

            <p className="mt-2 text-xs text-[#77716a]">
              اطلاعات محصول را بررسی و تغییر دهید.
            </p>
          </div>

          <span className="text-[10px] text-[#aaa49c]">
            ID: #{product.id}
          </span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]"
      >
        {/* Main */}
        <div className="space-y-6">
          {/* Product Information */}
          <section className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <span className="text-[10px] tracking-wider text-[#8a6a4a]">
              PRODUCT INFO
            </span>

            <h2 className="mt-1 font-['Estedad'] text-base font-semibold">
              اطلاعات محصول
            </h2>

            <div className="mt-6 space-y-5">
              {/* Title */}
              <div>
                <label className="mb-2 block text-xs">
                  نام محصول
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  required
                  className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#8a6a4a]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-xs">
                  دسته‌بندی
                </label>

                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
                >
                  <option value="کت و پوشاک">
                    کت و پوشاک
                  </option>

                  <option value="کیف">
                    کیف
                  </option>

                  <option value="کفش">
                    کفش
                  </option>

                  <option value="شلوار">
                    شلوار
                  </option>

                  <option value="لباس">
                    لباس
                  </option>

                  <option value="اکسسوری">
                    اکسسوری
                  </option>
                </select>
              </div>

              {/* Prices */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs">
                    قیمت فعلی
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(event) =>
                      setPrice(event.target.value)
                    }
                    required
                    className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs">
                    قیمت قبلی
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={oldPrice}
                    onChange={(event) =>
                      setOldPrice(event.target.value)
                    }
                    className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-xs">
                  توضیحات
                </label>

                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  rows={6}
                  required
                  className="w-full resize-none border border-[#ddd8d0] bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-[#8a6a4a]"
                />
              </div>
            </div>
          </section>

          {/* Image */}
          <section className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <span className="text-[10px] tracking-wider text-[#8a6a4a]">
              PRODUCT IMAGE
            </span>

            <h2 className="mt-1 font-['Estedad'] text-base font-semibold">
              تصویر محصول
            </h2>

            <div className="mt-6">
              <input
                type="url"
                value={image}
                onChange={(event) =>
                  setImage(event.target.value)
                }
                required
                placeholder="https://..."
                className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
              />

              {image ? (
                <div className="mt-5 overflow-hidden bg-[#e9e4dc]">
                  <img
                    src={image}
                    alt={title}
                    className="h-72 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="mt-5 flex h-56 items-center justify-center border border-dashed border-[#d5d0c8]">
                  <FiImage
                    size={28}
                    className="text-[#aaa49c]"
                  />
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="h-fit border border-[#e1ddd6] bg-[#eeeae4] p-6">
          <span className="text-[10px] tracking-wider text-[#8a6a4a]">
            STATUS
          </span>

          <h2 className="mt-1 font-['Estedad'] text-base font-semibold">
            وضعیت محصول
          </h2>

          {/* New Product */}
          <div className="mt-6 flex items-center justify-between border-b border-[#d8d2c9] pb-5">
            <div>
              <p className="text-sm">
                محصول جدید
              </p>

              <p className="mt-1 text-[10px] text-[#77716a]">
                نمایش برچسب «جدید»
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsNew((value) => !value)
              }
              className={`relative h-6 w-11 rounded-full transition-colors ${
                isNew
                  ? "bg-[#181818]"
                  : "bg-[#cfc9c0]"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                  isNew
                    ? "translate-x-1"
                    : "translate-x-6"
                }`}
              />
            </button>
          </div>

          {/* Status */}
          <div className="mt-6 border-b border-[#d8d2c9] pb-5">
            <p className="text-xs text-[#77716a]">
              وضعیت فعلی
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />

              <span className="text-xs">
                محصول فعال است
              </span>
            </div>
          </div>

          {/* Save */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 bg-[#181818] py-4 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
          >
            <FiSave size={16} />
            ذخیره تغییرات
          </button>

          {/* Cancel */}
          <Link
            to="/admin/products"
            className="mt-3 flex w-full items-center justify-center border border-[#d4cec5] py-4 text-xs transition-colors hover:bg-white"
          >
            انصراف
          </Link>
        </aside>
      </form>
    </>
  );
}

export default EditProduct;