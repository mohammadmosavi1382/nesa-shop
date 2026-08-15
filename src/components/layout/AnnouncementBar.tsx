import { motion } from "framer-motion";

function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-[#e5e1da] bg-[#f8f7f4] px-4 py-2 text-center text-xs text-[#6f6b65]"
    >
      ارسال رایگان برای سفارش‌های بالای ۲ میلیون تومان
    </motion.div>
  );
}

export default AnnouncementBar;