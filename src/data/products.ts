import type { Product } from "../components/product/ProductCard";

export const products: Product[] = [
  {
    id: 1,
    title: "کت لینن مدل آریا",
    category: "کت و پوشاک",
    price: 1890000,
    oldPrice: 2290000,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "کت لینن مدل آریا با طراحی مینیمال و پارچه‌ای سبک، انتخابی مناسب برای استایل روزمره و نیمه‌رسمی است.",
    isNew: true,
  },

  {
    id: 2,
    title: "کیف دستی مدل Luna",
    category: "کیف",
    price: 1290000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "کیف دستی Luna با طراحی ساده و کاربردی، مناسب استفاده روزمره و استایل‌های مینیمال.",
    isNew: true,
  },

  {
    id: 3,
    title: "کفش روزمره کلاسیک",
    category: "کفش",
    price: 1650000,
    oldPrice: 1950000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "کفش روزمره کلاسیک با طراحی ساده و راحتی مناسب برای استفاده روزانه.",
  },

  {
    id: 4,
    title: "شلوار جین Straight",
    category: "شلوار",
    price: 980000,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "شلوار جین Straight با فرم کلاسیک و مناسب استفاده روزمره.",
  },

  {
    id: 5,
    title: "پیراهن مینیمال",
    category: "لباس",
    price: 1150000,
    oldPrice: 1390000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "پیراهن مینیمال با طراحی ساده و مناسب استایل‌های روزمره.",
    isNew: true,
  },

  {
    id: 6,
    title: "کیف دوشی Daily",
    category: "کیف",
    price: 890000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "کیف دوشی Daily با طراحی کاربردی برای استفاده روزانه.",
  },

  {
    id: 7,
    title: "کت پاییزه Premium",
    category: "کت و پوشاک",
    price: 2490000,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "کت پاییزه Premium با ظاهر مدرن و مناسب فصل‌های سرد.",
  },

  {
    id: 8,
    title: "اکسسوری مینیمال",
    category: "اکسسوری",
    price: 590000,
    oldPrice: 720000,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "اکسسوری مینیمال برای کامل کردن استایل روزمره.",
  },
];