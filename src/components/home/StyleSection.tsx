import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowUpLeft } from "react-icons/fi";

import { products } from "../../data/products";

gsap.registerPlugin(ScrollTrigger);

function StyleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const imageOneRef = useRef<HTMLDivElement>(null);
  const imageTwoRef = useRef<HTMLDivElement>(null);

  const centerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      intro
        .fromTo(
          eyebrowRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          imageOneRef.current,
          {
            opacity: 0,
            y: 100,
            rotate: -3,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          imageTwoRef.current,
          {
            opacity: 0,
            y: 120,
            rotate: 3,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.85"
        )
        .fromTo(
          centerRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        );

      gsap.to(imageOneRef.current, {
        y: -45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(imageTwoRef.current, {
        y: 55,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(numberRef.current, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const firstProduct = products[1];
  const secondProduct = products[4];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eeeae4] px-5 py-24 md:px-8 md:py-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d8cbbd]/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#e1d9d0]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">

        {/* ================= HEADER ================= */}

        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">

          {/* Left / Main title */}
          <div className="md:col-span-8">

            <div className="flex items-center gap-4">
              <span
                ref={eyebrowRef}
                className="text-[10px] font-medium tracking-[0.22em] text-[#8a6a4a]"
              >
                NESA / STYLE EDIT
              </span>

              <span className="h-px w-16 bg-[#c8bcae]" />

              <span className="text-[10px] tracking-[0.16em] text-[#aaa49c]">
                2026
              </span>
            </div>

            <div className="relative mt-6">

              {/* Decorative number */}
              <span className="pointer-events-none absolute -right-3 -top-10 select-none font-['Estedad'] text-[110px] font-semibold leading-none text-[#e2dcd4] md:-right-8 md:-top-14 md:text-[160px]">
                01
              </span>

              <h2
                ref={titleRef}
                className="relative z-10 max-w-3xl font-['Estedad'] text-4xl font-semibold leading-[1.5] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                استایل تو،
                <br />

                <span className="relative inline-block text-[#8a6a4a]">
                  انتخاب تو.

                  <span className="absolute -bottom-2 right-0 h-px w-16 bg-[#8a6a4a]" />
                </span>
              </h2>
            </div>
          </div>

          {/* Right description */}
          <div
            ref={descriptionRef}
            className="relative md:col-span-4 md:pb-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cfc7bd]">
                <FiArrowUpLeft size={14} />
              </span>

              <span className="text-[10px] tracking-[0.12em] text-[#8a6a4a]">
                OUR PHILOSOPHY
              </span>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#77716a]">
              بعضی انتخاب‌ها برای دیده شدن نیستند؛
              برای این‌اند که وقتی می‌پوشی،
              احساس کنی دقیقاً خودت هستی.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8a6a4a]" />

              <span className="text-[11px] text-[#aaa49c]">
                انتخاب ساده، تأثیر ماندگار
              </span>
            </div>
          </div>
        </div>

        {/* ================= VISUAL AREA ================= */}

        <div className="relative mt-20 md:mt-28">

          {/* Top line */}
          <div className="mb-8 flex items-center justify-between border-t border-[#d6cfc7] pt-4">

            <span className="text-[10px] tracking-[0.18em] text-[#aaa49c]">
              CURATED SELECTION
            </span>

            <span className="text-[10px] text-[#aaa49c]">
              NESA / 01 — 02
            </span>
          </div>

          <div className="grid gap-12 md:grid-cols-12 md:gap-8">

            {/* ================= IMAGE ONE ================= */}

            <div
              ref={imageOneRef}
              className="relative md:col-span-5 md:col-start-1"
            >
              <div className="group relative">

                <div className="absolute -left-3 -top-3 z-0 h-full w-full border border-[#d2c8be]" />

                <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#ded7ce]">
                  <img
                    src={firstProduct.image}
                    alt={firstProduct.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#f8f7f4]/90 px-3 py-2 text-[10px] backdrop-blur-sm">
                      EDIT 01
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">

                <div>
                  <span className="text-[10px] tracking-wide text-[#8a6a4a]">
                    {firstProduct.category}
                  </span>

                  <h3 className="mt-2 font-['Estedad'] text-sm font-medium">
                    {firstProduct.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-[11px] leading-6 text-[#8b857e]">
                    انتخابی آرام برای استایلی که نیازی به توضیح ندارد.
                  </p>
                </div>

                <span
                  ref={numberRef}
                  className="font-['Estedad'] text-4xl font-light text-[#c8beb3]"
                >
                  ۰۱
                </span>
              </div>
            </div>

            {/* ================= CENTER ================= */}

            <div
              ref={centerRef}
              className="relative flex items-center justify-center md:col-span-3"
            >
              <div className="relative w-full max-w-[250px] text-center">

                {/* Vertical line */}
                <div className="mx-auto mb-8 h-16 w-px bg-[#cfc6bc]" />

                <span className="text-[10px] tracking-[0.18em] text-[#8a6a4a]">
                  THE NESA WAY
                </span>

                <h3 className="mt-5 font-['Estedad'] text-2xl font-medium leading-[2] md:text-3xl">
                  کمتر،
                  <br />
                  اما بهتر.
                </h3>

                <p className="mt-5 text-xs leading-7 text-[#77716a]">
                  ما به انتخاب‌هایی فکر می‌کنیم
                  که بعد از مدت‌ها هنوز
                  بخشی از استایل شما باشند.
                </p>

                <Link
                  to="/collections"
                  className="group mt-7 inline-flex items-center gap-3 border-b border-[#bfb5aa] pb-2 text-xs transition-all duration-300 hover:border-[#8a6a4a] hover:text-[#8a6a4a]"
                >
                  مشاهده مجموعه‌ها

                  <FiArrowLeft
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </Link>

                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-[#d2c8be]" />

                <div className="pointer-events-none absolute -left-8 bottom-0 h-2 w-2 rounded-full bg-[#8a6a4a]" />
              </div>
            </div>

            {/* ================= IMAGE TWO ================= */}

            <div
              ref={imageTwoRef}
              className="relative md:col-span-4 md:mt-16"
            >
              <div className="group relative">

                <div className="absolute -bottom-3 -right-3 z-0 h-full w-full border border-[#d2c8be]" />

                <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#ded7ce]">
                  <img
                    src={secondProduct.image}
                    alt={secondProduct.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-4 right-4">
                    <span className="bg-[#f8f7f4]/90 px-3 py-2 text-[10px] backdrop-blur-sm">
                      EDIT 02
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">

                <div>
                  <span className="text-[10px] tracking-wide text-[#8a6a4a]">
                    {secondProduct.category}
                  </span>

                  <h3 className="mt-2 font-['Estedad'] text-sm font-medium">
                    {secondProduct.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-[11px] leading-6 text-[#8b857e]">
                    جزئیاتی ساده برای کامل کردن یک ظاهر روزمره.
                  </p>
                </div>

                <span className="font-['Estedad'] text-4xl font-light text-[#c8beb3]">
                  ۰۲
                </span>
              </div>
            </div>
          </div>

          {/* Bottom editorial line */}
          <div className="mt-20 flex flex-col gap-5 border-t border-[#d6cfc7] pt-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#8a6a4a]" />

              <span className="text-[11px] text-[#77716a]">
                طراحی شده برای زندگی روزمره
              </span>
            </div>

            <span className="text-[10px] tracking-[0.15em] text-[#aaa49c]">
              SIMPLE / MODERN / NESA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleSection;