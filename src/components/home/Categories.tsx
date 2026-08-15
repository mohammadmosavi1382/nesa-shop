import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "لباس",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "شلوار",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "کفش",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "کیف",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "اکسسوری",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85",
  },
];

function Categories() {
  return (
    <section className="border-b border-[#e5e1da] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <span className="text-xs text-[#8a6a4a]">
              انتخاب بر اساس دسته‌بندی
            </span>

            <h2 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
              دسته‌بندی محصولات
            </h2>
          </div>

          <button
            type="button"
            className="hidden border-b border-[#181818] pb-1 text-sm transition-colors hover:border-[#8a6a4a] hover:text-[#8a6a4a] sm:block"
          >
            مشاهده همه
          </button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <CategoryCard
                title={category.title}
                image={category.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;