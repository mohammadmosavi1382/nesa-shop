import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  image: string;
}

function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#e9e4dc]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

        <div className="absolute bottom-0 right-0 left-0 p-5">
          <div className="bg-[#f8f7f4]/95 px-4 py-3 text-center backdrop-blur-sm">
            <span className="font-['Estedad'] text-sm font-medium">
              {title}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;