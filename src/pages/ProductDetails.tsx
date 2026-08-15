import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingBag,
} from "react-icons/fi";

import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart, increaseQuantity } = useCart();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f7f4]">
        <div className="text-center">
          <h1 className="font-['Estedad'] text-xl font-semibold">
            محصول پیدا نشد
          </h1>

          <p className="mt-3 text-sm text-[#77716a]">
            محصول موردنظر وجود ندارد یا حذف شده است.
          </p>
        </div>
      </main>
    );
  }

  const images =
    product.images.length > 0
      ? product.images
      : [product.image];

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleIncreaseQuantity = () => {
    setQuantity((current) => current + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };
  const handleAddToCart = () => {
    addToCart(product);
  
    for (let i = 1; i < quantity; i++) {
      increaseQuantity(product.id);
    }
  };
  return (
    <main className="min-h-screen bg-[#f8f7f4] py-10 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-[#77716a]">
          خانه / فروشگاه /{" "}
          <span className="text-[#181818]">
            {product.title}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Gallery */}
          <div className="grid gap-4 md:grid-cols-[90px_1fr]">

            {/* Thumbnails */}
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all md:h-24 md:w-[70px] ${
                    selectedImage === index
                      ? "border-[#8a6a4a]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div
              layout
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#e9e4dc] md:order-2"
            >
              <motion.img
                key={images[selectedImage]}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={images[selectedImage]}
                alt={product.title}
                className="h-full w-full object-cover"
              />

              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f7f4]/90 backdrop-blur-sm transition-colors hover:bg-[#181818] hover:text-white"
                    aria-label="تصویر قبلی"
                  >
                    <FiChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f7f4]/90 backdrop-blur-sm transition-colors hover:bg-[#181818] hover:text-white"
                    aria-label="تصویر بعدی"
                  >
                    <FiChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#181818]/80 px-3 py-1.5 text-[10px] text-white">
                  {(selectedImage + 1).toLocaleString("fa-IR")} /{" "}
                  {images.length.toLocaleString("fa-IR")}
                </div>
              )}
            </motion.div>
          </div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            {/* Category */}
            <span className="text-xs text-[#8a6a4a]">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="mt-3 font-['Estedad'] text-2xl font-semibold leading-relaxed md:text-3xl">
              {product.title}
            </h1>

            {/* Price */}
            <div className="mt-5 flex items-center gap-3">
              <span className="font-['Estedad'] text-xl font-semibold">
                {formatPrice(product.price)}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-[#aaa49c] line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}

              <span className="text-xs text-[#8a6a4a]">
                تومان
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-[#e5e1da]" />

            {/* Description */}
            <div>
              <h2 className="font-['Estedad'] text-sm font-semibold">
                درباره محصول
              </h2>

              <p className="mt-3 text-sm leading-8 text-[#6f6b65]">
                {product.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs text-[#6f6b65]">
                تعداد
              </span>

              <div className="flex w-fit items-center border border-[#dcd6ce]">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-[#eeeae4]"
                  aria-label="کاهش تعداد"
                >
                  <FiMinus size={14} />
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-[#dcd6ce] text-sm">
                  {quantity.toLocaleString("fa-IR")}
                </span>

                <button
                  type="button"
                  onClick={handleIncreaseQuantity}
                  className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-[#eeeae4]"
                  aria-label="افزایش تعداد"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="group flex flex-1 items-center justify-center gap-3 bg-[#181818] py-4 text-sm text-white transition-colors hover:bg-[#8a6a4a]"
              >
                <FiShoppingBag
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5"
                />

                افزودن به سبد خرید
              </button>

              <button
                type="button"
                aria-label="افزودن به علاقه‌مندی‌ها"
                className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#dcd6ce] transition-colors hover:border-[#181818]"
              >
                <FiHeart size={19} />
              </button>
            </div>

            {/* Product Meta */}
            <div className="mt-8 grid grid-cols-2 border-y border-[#e5e1da] py-5">
              <div>
                <span className="block text-[11px] text-[#8a6a4a]">
                  دسته‌بندی
                </span>

                <span className="mt-1 block text-xs">
                  {product.category}
                </span>
              </div>

              <div>
                <span className="block text-[11px] text-[#8a6a4a]">
                  وضعیت
                </span>

                <span className="mt-1 block text-xs">
                  موجود
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;