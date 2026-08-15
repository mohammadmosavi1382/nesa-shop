import { useEffect, useMemo, useState } from "react";
import {
  FiChevronDown,
  FiEye,
  FiSearch,
  FiShoppingBag,
} from "react-icons/fi";

type OrderStatus =
  | "در انتظار پرداخت"
  | "در حال پردازش"
  | "ارسال شده"
  | "تحویل شده"
  | "لغو شده";

interface Order {
  id: number;
  customer: string;
  phone: string;
  items: number;
  total: number;
  date: string;
  status: OrderStatus;
}

const initialOrders: Order[] = [
  {
    id: 1001,
    customer: "محمد رضایی",
    phone: "09121234567",
    items: 2,
    total: 4850000,
    date: "۱۴۰۴/۰۵/۲۲",
    status: "در حال پردازش",
  },
  {
    id: 1002,
    customer: "سارا احمدی",
    phone: "09129876543",
    items: 1,
    total: 2290000,
    date: "۱۴۰۴/۰۵/۲۲",
    status: "ارسال شده",
  },
  {
    id: 1003,
    customer: "علی محمدی",
    phone: "09351234567",
    items: 3,
    total: 7150000,
    date: "۱۴۰۴/۰۵/۲۱",
    status: "تحویل شده",
  },
  {
    id: 1004,
    customer: "نگار کریمی",
    phone: "09105554433",
    items: 1,
    total: 1890000,
    date: "۱۴۰۴/۰۵/۲۱",
    status: "در انتظار پرداخت",
  },
  {
    id: 1005,
    customer: "رضا موسوی",
    phone: "09212223344",
    items: 2,
    total: 3900000,
    date: "۱۴۰۴/۰۵/۲۰",
    status: "لغو شده",
  },
];

const statusStyles: Record<OrderStatus, string> = {
  "در انتظار پرداخت":
    "bg-amber-50 text-amber-700",
  "در حال پردازش":
    "bg-blue-50 text-blue-700",
  "ارسال شده":
    "bg-purple-50 text-purple-700",
  "تحویل شده":
    "bg-green-50 text-green-700",
  "لغو شده":
    "bg-red-50 text-red-700",
};

function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem("nesa_orders");
  
    if (savedOrders) {
      return JSON.parse(savedOrders);
    }
  
    return initialOrders;
  });
  const [selectedOrder, setSelectedOrder] =
  useState<Order | null>(null);
  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState<"همه" | OrderStatus>("همه");

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
  
    return orders.filter((order) => {
      const matchesSearch =
        !query ||
        order.customer
          .toLowerCase()
          .includes(query) ||
        order.phone.includes(query) ||
        order.id.toString().includes(query);

      const matchesStatus =
        status === "همه" ||
        order.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, status]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);
  const updateOrderStatus = (newStatus: OrderStatus) => {
    if (!selectedOrder) return;
  
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, status: newStatus }
          : order
      )
    );
  
    setSelectedOrder((currentOrder) =>
      currentOrder
        ? { ...currentOrder, status: newStatus }
        : null
    );
  };
  useEffect(() => {
    localStorage.setItem(
      "nesa_orders",
      JSON.stringify(orders)
    );
  }, [orders]);
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-[#e1ddd6] pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
            NESA / ORDERS
          </span>

          <h1 className="mt-2 font-['Estedad'] text-2xl font-semibold md:text-3xl">
            سفارش‌ها
          </h1>

          <p className="mt-2 text-xs text-[#77716a]">
            مدیریت و پیگیری سفارش‌های فروشگاه
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#77716a]">
          <FiShoppingBag size={15} />

          <span>
            {orders.length.toLocaleString("fa-IR")}
            {" "}
            سفارش
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="flex items-center gap-3 border border-[#ddd8d0] bg-[#f8f7f4] px-4 py-3 lg:w-96">
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
            placeholder="جستجوی سفارش، مشتری یا شماره..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-[#aaa49c]"
          />
        </div>

        {/* Status */}
        <div className="relative flex items-center gap-3 border border-[#ddd8d0] bg-[#f8f7f4] px-4 py-3">
          <span className="text-xs text-[#77716a]">
            وضعیت:
          </span>

          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as
                  | "همه"
                  | OrderStatus
              )
            }
            className="appearance-none bg-transparent pl-6 text-xs outline-none"
          >
            <option value="همه">همه سفارش‌ها</option>
            <option value="در انتظار پرداخت">
              در انتظار پرداخت
            </option>
            <option value="در حال پردازش">
              در حال پردازش
            </option>
            <option value="ارسال شده">
              ارسال شده
            </option>
            <option value="تحویل شده">
              تحویل شده
            </option>
            <option value="لغو شده">
              لغو شده
            </option>
          </select>

          <FiChevronDown
            size={14}
            className="pointer-events-none absolute left-3 text-[#77716a]"
          />
        </div>
      </div>

      {/* Orders */}
      <div className="mt-8 overflow-hidden border border-[#e1ddd6] bg-[#f8f7f4]">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[100px_1fr_130px_120px_150px_70px] items-center gap-4 border-b border-[#e1ddd6] bg-[#eeeae4] px-5 py-4 text-[10px] text-[#77716a] lg:grid">
          <span>سفارش</span>
          <span>مشتری</span>
          <span>تعداد</span>
          <span>مبلغ</span>
          <span>وضعیت</span>
          <span>جزئیات</span>
        </div>

        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="grid gap-5 border-b border-[#e5e1da] px-5 py-5 last:border-b-0 lg:grid-cols-[100px_1fr_130px_120px_150px_70px] lg:items-center"
            >
              {/* Order */}
              <div>
                <p className="text-xs font-semibold">
                  #{order.id}
                </p>

                <p className="mt-1 text-[10px] text-[#aaa49c]">
                  {order.date}
                </p>
              </div>

              {/* Customer */}
              <div>
                <p className="font-['Estedad'] text-sm font-medium">
                  {order.customer}
                </p>

                <p className="mt-1 text-[10px] text-[#77716a]">
                  {order.phone}
                </p>
              </div>

              {/* Items */}
              <div className="text-xs text-[#77716a]">
                {order.items.toLocaleString("fa-IR")}
                {" "}
                کالا
              </div>

              {/* Total */}
              <div>
                <span className="text-sm font-semibold">
                  {formatPrice(order.total)}
                </span>

                <span className="mr-1 text-[10px] text-[#77716a]">
                  تومان
                </span>
              </div>

              {/* Status */}
              <div>
                <span
                  className={`inline-flex px-3 py-1.5 text-[10px] ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Details */}
              <button
  type="button"
  onClick={() => setSelectedOrder(order)}
  className="flex h-9 w-9 items-center justify-center border border-[#ddd8d0] transition-colors hover:bg-[#eeeae4]"
  aria-label="مشاهده سفارش"
>
  <FiEye size={14} />
</button>
            </div>
          ))
        ) : (
          <div className="px-5 py-20 text-center">
            <FiShoppingBag
              size={28}
              className="mx-auto text-[#aaa49c]"
            />

            <p className="mt-4 font-['Estedad'] text-sm">
              سفارشی پیدا نشد
            </p>

            <p className="mt-2 text-xs text-[#77716a]">
              جستجو یا فیلتر دیگری را امتحان کنید.
            </p>
          </div>
        )}
      </div>
      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="w-full max-w-lg bg-[#f8f7f4] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#e1ddd6] pb-5">
              <div>
                <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
                  ORDER DETAILS
                </span>

                <h2 className="mt-2 font-['Estedad'] text-lg font-semibold">
                  جزئیات سفارش #{selectedOrder.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="text-xs text-[#77716a] hover:text-[#181818]"
              >
                بستن
              </button>
            </div>

            {/* Customer */}
            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-[#e5e1da] pb-4">
                <span className="text-xs text-[#77716a]">
                  مشتری
                </span>

                <span className="text-xs font-medium">
                  {selectedOrder.customer}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#e5e1da] pb-4">
                <span className="text-xs text-[#77716a]">
                  شماره تماس
                </span>

                <span className="text-xs">
                  {selectedOrder.phone}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#e5e1da] pb-4">
                <span className="text-xs text-[#77716a]">
                  تعداد کالا
                </span>

                <span className="text-xs">
                  {selectedOrder.items.toLocaleString("fa-IR")} کالا
                </span>
              </div>

              <div className="flex justify-between border-b border-[#e5e1da] pb-4">
                <span className="text-xs text-[#77716a]">
                  مبلغ سفارش
                </span>

                <span className="text-sm font-semibold">
                  {formatPrice(selectedOrder.total)} تومان
                </span>
              </div>

              <div className="flex justify-between border-b border-[#e5e1da] pb-4">
                <span className="text-xs text-[#77716a]">
                  تاریخ
                </span>

                <span className="text-xs">
                  {selectedOrder.date}
                </span>
              </div>
              <div className="border-t border-[#e5e1da] pt-5">
  <span className="text-xs text-[#77716a]">
    تغییر وضعیت سفارش
  </span>

  <select
    value={selectedOrder.status}
    onChange={(event) =>
      updateOrderStatus(
        event.target.value as OrderStatus
      )
    }
    className="mt-3 w-full border border-[#ddd8d0] bg-white px-4 py-3 text-xs outline-none focus:border-[#8a6a4a]"
  >
    <option value="در انتظار پرداخت">
      در انتظار پرداخت
    </option>

    <option value="در حال پردازش">
      در حال پردازش
    </option>

    <option value="ارسال شده">
      ارسال شده
    </option>

    <option value="تحویل شده">
      تحویل شده
    </option>

    <option value="لغو شده">
      لغو شده
    </option>
  </select>
</div>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedOrder(null)}
              className="mt-7 w-full bg-[#181818] py-4 text-xs text-white transition-colors hover:bg-[#8a6a4a]"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminOrders;