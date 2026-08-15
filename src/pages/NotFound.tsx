import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome,
  FiCompass,
} from "react-icons/fi";
import gsap from "gsap";

function NotFound() {
  const pageRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        pageRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
        .fromTo(
          numberRef.current,
          {
            opacity: 0,
            scale: 0.75,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        )
        .fromTo(
          lineRef.current,
          {
            width: 0,
          },
          {
            width: "32px",
            duration: 0.5,
          },
          "-=0.5"
        )
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.25"
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#f8f7f4] text-[#181818]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e5dfd6]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#e5dfd6]" />

        <div className="absolute right-1/2 top-0 h-full w-px bg-[#eee9e1]" />

        <div className="absolute left-20 top-1/4 h-24 w-px bg-[#e5dfd6]" />

        <div className="absolute bottom-24 right-20 h-px w-24 bg-[#e5dfd6]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-10 lg:px-14">
        <Link
          to="/"
          className="group flex items-center gap-2 text-[10px] tracking-wide text-[#77716a] transition-colors hover:text-[#8a6a4a]"
        >
          <FiArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          بازگشت به سایت
        </Link>

        <div className="text-right">
          <div className="font-['Estedad'] text-xl font-bold tracking-wide">
            NESA
          </div>

          <div className="mt-1 text-[8px] tracking-[0.3em] text-[#8a6a4a]">
            EST. 1405
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 flex min-h-[calc(100vh-150px)] items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* 404 */}
          <div
            ref={numberRef}
            className="select-none font-['Estedad'] text-[clamp(120px,25vw,280px)] font-semibold leading-none tracking-[-0.08em] text-[#e9e4dc]"
          >
            404
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="relative z-20 -mt-8 sm:-mt-14"
          >
            <div className="flex items-center justify-center gap-3">
              <span
                ref={lineRef}
                className="h-px bg-[#8a6a4a]"
              />

              <span className="text-[9px] tracking-[0.3em] text-[#8a6a4a]">
                PAGE NOT FOUND
              </span>

              <span className="h-px w-8 bg-[#8a6a4a]" />
            </div>

            <h1 className="mt-6 font-['Estedad'] text-2xl font-semibold sm:text-3xl">
              این صفحه پیدا نشد
            </h1>

            <p className="mx-auto mt-4 max-w-md text-xs leading-8 text-[#77716a]">
              به نظر می‌رسد صفحه‌ای که به دنبال آن هستید
              وجود ندارد، حذف شده یا آدرس آن تغییر کرده است.
            </p>
          </div>

          {/* Actions */}
          <div
            ref={buttonRef}
            className="relative z-20 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/"
              className="group flex w-full items-center justify-center gap-3 bg-[#181818] px-7 py-4 text-xs text-white transition-all duration-300 hover:bg-[#8a6a4a] sm:w-auto"
            >
              <FiHome size={15} />

              صفحه اصلی

              <FiArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex w-full items-center justify-center gap-3 border border-[#dcd6ce] bg-transparent px-7 py-4 text-xs text-[#55504a] transition-all duration-300 hover:border-[#181818] hover:bg-white sm:w-auto"
            >
              <FiCompass size={15} />

              بازگشت به صفحه قبل
            </button>
          </div>

          {/* Footer */}
          <div className="mt-14">
            <div className="mx-auto h-px max-w-md bg-[#e5e1da]" />

            <p className="mt-5 text-[8px] tracking-[0.25em] text-[#aaa49c]">
              NESA / DIGITAL EXPERIENCE
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;

