import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useFavorites } from "../../contexts/FavoritesContext";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  description: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const discount =
    product.oldPrice &&
    Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) *
        100
    );

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#e9e4dc]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#181818] px-3 py-1.5 text-[10px] text-white">
              جدید
            </span>
          )}

          {discount && discount > 0 ? (
            <span className="bg-[#8a6a4a] px-3 py-1.5 text-[10px] text-white">
              {discount}٪ تخفیف
            </span>
          ) : null}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleFavorite(product)}
          aria-label={
            favorite
              ? "حذف از علاقه‌مندی‌ها"
              : "افزودن به علاقه‌مندی‌ها"
          }
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 ${
            favorite
              ? "bg-[#181818] text-white"
              : "bg-[#f8f7f4]/90 hover:bg-[#181818] hover:text-white"
          }`}
        >
          <FiHeart
            size={17}
            className={
              favorite
                ? "fill-current"
                : ""
            }
          />
        </button>

        {/* Product Details */}
        <Link
          to={`/product/${product.id}`}
          className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center bg-[#f8f7f4]/95 py-3 text-xs opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#181818] hover:text-white"
        >
          مشاهده جزئیات
        </Link>
      </div>

      {/* Content */}
      <div className="mt-4">
        <span className="text-[11px] text-[#8a6a4a]">
          {product.category}
        </span>

        <h3 className="mt-1 font-['Estedad'] text-sm font-medium">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-[#aaa49c] line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}

          <span className="text-[10px] text-[#8a6a4a]">
            تومان
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;