import { useLayoutEffect, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    const imageElement = imageElementRef.current;
    const label = labelRef.current;

    if (!hero || !text || !image || !imageElement || !label) {
      return;
    }

    const ctx = gsap.context(() => {
      const elements = text.children;

      gsap.set(elements, {
        opacity: 0,
        y: 35,
      });

      gsap.set(image, {
        opacity: 0,
        scale: 1.05,
      });

      gsap.set(label, {
        opacity: 0,
        y: 15,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
        })
        .to(
          image,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.4"
        );

      gsap.to(imageElement, {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="overflow-hidden border-b border-[#e5e1da] bg-[#f8f7f4]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          {/* Text */}
          <div
            ref={textRef}
            className="order-2 md:order-1"
          >
            <div className="mb-4 flex items-center gap-3 text-xs text-[#8a6a4a]">
              <span className="h-px w-8 bg-[#8a6a4a]" />
              <span>مجموعه جدید / ۱۴۰۵</span>
            </div>

            <h1 className="font-['Estedad'] text-4xl font-semibold leading-[1.4] sm:text-5xl">
              استایل تو،
              <br />
              <span className="text-[#8a6a4a]">
                انتخاب تو.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#6f6b65]">
              مجموعه‌ای از لباس‌ها و اکسسوری‌های خاص برای
              ساختن یک استایل ساده، شیک و متفاوت.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <Link
                to="/shop"
                className="group flex items-center gap-3 bg-[#181818] px-6 py-3 text-sm text-white transition-all duration-300 hover:bg-[#8a6a4a]"
              >
                مشاهده محصولات

                <FiArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="border-b border-[#181818] pb-1 text-sm transition-colors hover:border-[#8a6a4a] hover:text-[#8a6a4a]"
              >
                درباره ما
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="order-1 md:order-2"
          >
            <div className="relative h-[300px] overflow-hidden rounded-sm bg-[#e9e4dc] sm:h-[380px]">
              <img
                ref={imageElementRef}
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85"
                alt="مجموعه جدید"
                className="h-full w-full object-cover"
              />

              <div
                ref={labelRef}
                className="absolute bottom-4 right-4 bg-[#f8f7f4]/90 px-4 py-2 text-xs backdrop-blur-sm"
              >
                New Collection
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;