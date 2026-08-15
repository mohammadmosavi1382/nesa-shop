import {
    useLayoutEffect,
    useRef,
    useState,
    type FormEvent,
  } from "react";
  import { useNavigate } from "react-router-dom";
  import {
    FiArrowLeft,
    FiLock,
    FiMail,
    FiShield,
  } from "react-icons/fi";
  import gsap from "gsap";
  
  import { useAuth } from "../../contexts/AuthContext";
  
  function AdminLogin() {
    const navigate = useNavigate();
    const { login } = useAuth();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const pageRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
  
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });
  
        tl.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.08,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          }
        )
          .fromTo(
            logoRef.current,
            {
              opacity: 0,
              y: -20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            "-=0.7"
          )
          .fromTo(
            contentRef.current,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            "-=0.35"
          )
          .fromTo(
            formRef.current,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
            },
            "-=0.45"
          )
          .fromTo(
            badgeRef.current,
            {
              opacity: 0,
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
            "-=0.3"
          );
      }, pageRef);
  
      return () => ctx.revert();
    }, []);
  
    const handleSubmit = (
      event: FormEvent<HTMLFormElement>
    ) => {
      event.preventDefault();
  
      setError("");
  
      const success = login(
        email.trim(),
        password
      );
  
      if (!success) {
        setError("ایمیل یا رمز عبور اشتباه است.");
  
        gsap.fromTo(
          formRef.current,
          { x: -8 },
          {
            x: 8,
            duration: 0.08,
            repeat: 5,
            yoyo: true,
            clearProps: "x",
            ease: "power1.inOut",
          }
        );
  
        return;
      }
  
      gsap.to(pageRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.45,
        ease: "power2.in",
        onComplete: () => {
          navigate("/admin");
        },
      });
    };
  
    return (
      <main
        ref={pageRef}
        dir="rtl"
        className="min-h-screen overflow-hidden bg-[#f4f1ec]"
      >
        <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
          {/* IMAGE SIDE */}
          <section
            ref={imageRef}
            className="relative hidden min-h-screen overflow-hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=90"
              alt="NESA"
              className="absolute inset-0 h-full w-full object-cover"
            />
  
            <div className="absolute inset-0 bg-black/35" />
  
            {/* Decorative Lines */}
            <div className="absolute right-10 top-1/2 h-32 w-px -translate-y-1/2 bg-white/20" />
  
            <div className="absolute bottom-10 left-10 text-white/40">
              <span className="text-[9px] tracking-[0.4em]">
                NESA / 1405
              </span>
            </div>
  
            <div className="relative z-10 flex h-screen flex-col justify-between p-12">
              {/* Top */}
              <div>
                <span className="text-[10px] tracking-[0.4em] text-white/60">
                  NESA
                </span>
  
                <div className="mt-5 h-px w-16 bg-white/40" />
              </div>
  
              {/* Center */}
              <div className="max-w-lg">
                <span className="text-[10px] tracking-[0.25em] text-[#d8b895]">
                  PRIVATE SPACE
                </span>
  
                <h2 className="mt-5 font-['Estedad'] text-5xl font-semibold leading-[1.5] text-white">
                  مدیریت،
                  <br />
                  <span className="text-[#d8b895]">
                    با دقت بیشتر.
                  </span>
                </h2>
  
                <p className="mt-6 max-w-md text-sm leading-8 text-white/65">
                  همه چیز برای مدیریت محصولات، سفارش‌ها
                  و فروشگاه NESA در یک فضای یکپارچه.
                </p>
              </div>
  
              {/* Bottom */}
              <div className="flex items-center justify-between text-[9px] tracking-[0.2em] text-white/40">
                <span>ADMINISTRATION</span>
  
                <span>EST. 1405</span>
              </div>
            </div>
          </section>
  
          {/* LOGIN SIDE */}
          <section className="relative flex min-h-screen flex-col bg-[#f8f7f4]">
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#e5dfd6]" />
  
            {/* Header */}
            <div
              ref={logoRef}
              className="relative z-10 flex items-start justify-between px-6 py-7 sm:px-10 md:px-14"
            >
              <button
                type="button"
                onClick={() => navigate("/")}
                className="group flex items-center gap-2 text-[11px] text-[#77716a] transition-colors hover:text-[#8a6a4a]"
              >
                <FiArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
  
                بازگشت به سایت
              </button>
  
              <div className="text-right">
                <div className="font-['Estedad'] text-xl font-bold tracking-wide">
                  NESA
                </div>
  
                <div className="mt-1 text-[8px] tracking-[0.3em] text-[#8a6a4a]">
                  ADMIN PANEL
                </div>
              </div>
            </div>
  
            {/* Content */}
            <div className="relative z-10 flex flex-1 items-center px-6 py-10 sm:px-10 md:px-14">
              <div className="mx-auto w-full max-w-[430px]">
                {/* Intro */}
                <div ref={contentRef}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#8a6a4a]" />
  
                    <span className="text-[10px] tracking-[0.2em] text-[#8a6a4a]">
                      WELCOME BACK
                    </span>
                  </div>
  
                  <h1 className="mt-6 font-['Estedad'] text-4xl font-semibold leading-[1.5] sm:text-5xl">
                    خوش آمدید
                    <br />
                    <span className="text-[#8a6a4a]">
                      مدیر NESA.
                    </span>
                  </h1>
  
                  <p className="mt-5 max-w-sm text-xs leading-8 text-[#77716a]">
                    برای ورود به فضای مدیریت فروشگاه،
                    اطلاعات حساب خود را وارد کنید.
                  </p>
                </div>
  
                {/* Form */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-10"
                >
                  {/* Email */}
                  <div>
                    <label className="mb-2.5 block text-[11px] font-medium">
                      ایمیل
                    </label>
  
                    <div className="group relative">
                      <FiMail
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa49c] transition-colors group-focus-within:text-[#8a6a4a]"
                      />
  
                      <input
                        type="email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        placeholder="admin@nesa.com"
                        required
                        className="w-full border border-[#ded9d1] bg-transparent px-4 py-4 pr-11 text-sm outline-none transition-all duration-300 placeholder:text-[#b4afa8] focus:border-[#8a6a4a] focus:bg-white"
                      />
                    </div>
                  </div>
  
                  {/* Password */}
                  <div className="mt-5">
                    <label className="mb-2.5 block text-[11px] font-medium">
                      رمز عبور
                    </label>
  
                    <div className="group relative">
                      <FiLock
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aaa49c] transition-colors group-focus-within:text-[#8a6a4a]"
                      />
  
                      <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        placeholder="••••••••"
                        required
                        className="w-full border border-[#ded9d1] bg-transparent px-4 py-4 pr-11 text-sm outline-none transition-all duration-300 placeholder:text-[#b4afa8] focus:border-[#8a6a4a] focus:bg-white"
                      />
                    </div>
                  </div>
  
                  {/* Error */}
                  {error && (
                    <div className="mt-4 flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-3 text-[11px] text-red-600">
                      <FiShield size={15} />
                      {error}
                    </div>
                  )}
  
                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-7 flex w-full items-center justify-center gap-3 bg-[#181818] py-4 text-xs text-white transition-all duration-300 hover:bg-[#8a6a4a]"
                  >
                    ورود به پنل
  
                    <FiArrowLeft
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </button>
  
                  {/* Demo */}
                  <div
                    ref={badgeRef}
                    className="mt-6 border border-[#e4dfd7] bg-[#f2eee8] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#e5ddd2]">
                        <FiLock
                          size={14}
                          className="text-[#8a6a4a]"
                        />
                      </div>
  
                      <div>
                        <p className="text-[10px] font-medium">
                          دسترسی آزمایشی
                        </p>
  
                        <p className="mt-1 text-[9px] leading-6 text-[#88827a]">
                          admin@nesa.com
                          <br />
                          رمز عبور: 123456
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
  
            {/* Footer */}
            <div className="relative z-10 px-6 py-6 text-center sm:px-10 md:px-14">
              <div className="h-px bg-[#e5e1da]" />
  
              <p className="mt-5 text-[8px] tracking-[0.25em] text-[#aaa49c]">
                NESA ADMINISTRATION SYSTEM
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  }
  
  export default AdminLogin;