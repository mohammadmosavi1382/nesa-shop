# 🛍️ NESA Shop

یک فروشگاه اینترنتی مدرن و ریسپانسیو با **React + TypeScript** که با تمرکز روی تجربه کاربری، طراحی مینیمال و ساختار قابل توسعه پیاده‌سازی شده است.

🔗 **Live Demo:**
https://nesa-shop.vercel.app/

---

## 📌 درباره پروژه

**NESA Shop** یک پروژه فروشگاهی Front-end است که با هدف شبیه‌سازی یک فروشگاه اینترنتی واقعی طراحی و توسعه داده شده است.

در این پروژه تلاش شده بخش‌های مختلف یک فروشگاه آنلاین، از مشاهده محصولات و سبد خرید تا احراز هویت و پنل مدیریت، در قالب یک پروژه واقعی پیاده‌سازی شوند.

این پروژه همچنین به‌عنوان نمونه‌کار برای نمایش مهارت‌های من در توسعه Front-end با React و TypeScript ساخته شده است.

---

## ✨ امکانات پروژه

### 🛒 بخش فروشگاه

* نمایش محصولات
* نمایش جزئیات هر محصول
* دسته‌بندی محصولات
* جستجوی محصولات
* افزودن محصول به سبد خرید
* افزایش و کاهش تعداد محصولات
* حذف محصول از سبد خرید
* سیستم علاقه‌مندی‌ها
* صفحه Checkout
* صفحه موفقیت سفارش
* طراحی کاملاً Responsive

### 🔐 احراز هویت

* صفحه ورود مدیریت
* Protected Routes
* ورود و خروج مدیر
* ذخیره وضعیت ورود در `localStorage`
* مدیریت Authentication با Context API

### ⚙️ پنل مدیریت

* داشبورد مدیریت
* مشاهده محصولات
* افزودن محصول
* ویرایش محصول
* حذف محصول
* مشاهده سفارش‌ها
* مدیریت مشتریان
* تنظیمات پنل مدیریت

### 🎨 طراحی و تجربه کاربری

* طراحی مدرن و مینیمال
* پشتیبانی از زبان فارسی و RTL
* Responsive Design
* انیمیشن‌های رابط کاربری
* استفاده از GSAP
* استفاده از Framer Motion
* استفاده از React Icons

---

## 🧰 تکنولوژی‌های استفاده‌شده

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Context API**
* **Framer Motion**
* **GSAP**
* **React Icons**
* **ESLint**
* **Git & GitHub**

---

## 🏗️ ساختار پروژه

```text
src
├── assets
├── components
│   ├── admin
│   ├── auth
│   ├── cart
│   ├── home
│   ├── layout
│   ├── product
│   ├── routes
│   └── search
│
├── contexts
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   ├── FavoritesContext.tsx
│   └── ProductContext.tsx
│
├── data
│   └── products.ts
│
├── pages
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── FavoritesPage.tsx
│   ├── NotFound.tsx
│   ├── OrderSuccess.tsx
│   └── ProductDetails.tsx
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## 🔑 اطلاعات ورود Demo

برای مشاهده پنل مدیریت می‌توانید از اطلاعات زیر استفاده کنید:

**Email**

```text
admin@nesa.com
```

**Password**

```text
123456
```

> این اطلاعات صرفاً برای نسخه Demo پروژه هستند.

---

## 🚀 اجرای پروژه

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/mohammadmosavi1382/nasa-shop.git
```

سپس وارد پوشه پروژه شوید:

```bash
cd nasa-shop
```

Dependencies را نصب کنید:

```bash
npm install
```

برای اجرای پروژه در محیط Development:

```bash
npm run dev
```

برای بررسی ESLint:

```bash
npm run lint
```

برای ساخت نسخه Production:

```bash
npm run build
```

---

## 💾 مدیریت داده‌ها

در نسخه فعلی پروژه، برای شبیه‌سازی رفتار یک فروشگاه واقعی، بخشی از داده‌ها با استفاده از **Context API** و **localStorage** مدیریت می‌شوند.

به همین دلیل پروژه در حال حاضر برای اجرای Demo به Backend واقعی وابسته نیست.

---

## 🔌 Backend

ساختار Front-end پروژه به شکلی طراحی شده که در مرحله بعد بتوان API واقعی را به آن متصل کرد.

در نسخه Production می‌توان بخش Backend را با تکنولوژی‌هایی مانند:

* ASP.NET Core
* Node.js
* REST API
* Database

پیاده‌سازی کرد.

بخش‌هایی مانند موارد زیر نیز قابلیت اتصال به Backend واقعی را دارند:

* Authentication
* Products
* Customers
* Orders
* Inventory
* Payment

---

## 📱 Responsive Design

NESA Shop برای نمایش در اندازه‌های مختلف صفحه طراحی شده است:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

---

## 🎯 هدف توسعه

هدف اصلی NESA Shop تبدیل شدن از یک **Demo Store** به یک فروشگاه اینترنتی واقعی است.

مراحل بعدی توسعه می‌توانند شامل موارد زیر باشند:

* اتصال به Backend واقعی
* طراحی Database
* Authentication واقعی
* مدیریت کاربران
* مدیریت سفارش‌ها
* درگاه پرداخت
* Upload تصاویر محصولات
* API محصولات
* مدیریت موجودی
* سیستم ارسال و پیگیری سفارش

---

## 🧪 وضعیت پروژه

**Current Status:** Front-end Demo

این پروژه در حال حاضر به‌عنوان یک پروژه Front-end کامل و قابل توسعه آماده شده است و می‌توان در مرحله بعد Backend و API واقعی را به آن متصل کرد.

---

## 👨‍💻 Developer

**Mohammad Mousavi**

### Front-End Developer

مهارت‌ها:

`React` · `TypeScript` · `JavaScript` · `Tailwind CSS` · `Git` · `REST API`

---

## 📄 License

این پروژه به‌عنوان نمونه‌کار شخصی توسعه داده شده است.
