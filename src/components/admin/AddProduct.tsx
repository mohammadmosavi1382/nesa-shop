import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiImage, FiSave } from "react-icons/fi";

import { useProducts } from "../../contexts/ProductContext";

function AddProduct() {
  const navigate = useNavigate();

  const { products, addProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("کت و پوشاک");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isNew, setIsNew] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    /*
     * پیدا کردن بزرگ‌ترین ID فعلی
     * و ساختن ID جدید
     */
    const newId =
      products.length > 0
        ? Math.max(
            ...products.map((product) => product.id)
          ) + 1
        : 1;
        const newProduct = {
          id: newId,
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
    // اضافه کردن محصول واقعی به ProductContext
    addProduct(newProduct);

    alert("محصول با موفقیت اضافه شد.");

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
          NESA / ADD PRODUCT
        </span>

        <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
          افزودن محصول
        </h1>

        <p className="mt-2 text-xs text-[#77716a]">
          اطلاعات محصول جدید را وارد کنید.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]"
      >
        {/* Main */}
        <div className="space-y-6">

          {/* Basic Info */}
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">
            <h2 className="font-['Estedad'] text-base font-semibold">
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
                  placeholder="مثلاً کت لینن مدل آریا"
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
                  className="w-full appearance-none border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
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
                    قیمت
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(event) =>
                      setPrice(event.target.value)
                    }
                    placeholder="1890000"
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
                    placeholder="2290000"
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
                  placeholder="توضیحات محصول..."
                  rows={5}
                  required
                  className="w-full resize-none border border-[#ddd8d0] bg-white px-4 py-3 text-sm leading-7 outline-none focus:border-[#8a6a4a]"
                />
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="border border-[#e1ddd6] bg-[#f8f7f4] p-6">

            <h2 className="font-['Estedad'] text-base font-semibold">
              تصویر محصول
            </h2>

            <div className="mt-6">

              <label className="mb-2 block text-xs">
                آدرس تصویر
              </label>

              <input
                type="url"
                value={image}
                onChange={(event) =>
                  setImage(event.target.value)
                }
                placeholder="https://..."
                required
                className="w-full border border-[#ddd8d0] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6a4a]"
              />

            </div>

            {image ? (
              <div className="mt-5 overflow-hidden bg-[#e9e4dc]">
                <img
                  src={image}
                  alt={title || "پیش‌نمایش محصول"}
                  className="h-64 w-full object-cover"
                />
              </div>
            ) : (
              <div className="mt-5 flex h-48 items-center justify-center border border-dashed border-[#d5d0c8]">
                <div className="text-center text-[#aaa49c]">

                  <FiImage
                    size={28}
                    className="mx-auto"
                  />

                  <p className="mt-3 text-xs">
                    پیش‌نمایش تصویر
                  </p>

                </div>
              </div>
            )}

          </div>
        </div>

        {/* Sidebar */}
        <aside className="h-fit border border-[#e1ddd6] bg-[#eeeae4] p-6">

          <h2 className="font-['Estedad'] text-base font-semibold">
            وضعیت محصول
          </h2>

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
              aria-label="محصول جدید"
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

          <div className="mt-6 text-xs leading-7 text-[#77716a]">
            این محصول بعد از ثبت، مستقیماً به
            لیست محصولات فروشگاه اضافه خواهد شد.
          </div>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-2 bg-[#181818] py-4 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
          >
            <FiSave size={16} />
            ثبت محصول
          </button>

        </aside>
      </form>
    </>
  );
}

export default AddProduct;