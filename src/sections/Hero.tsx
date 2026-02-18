import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-10"
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <div className="relative w-full min-h-screen flex items-center px-[clamp(18px,4vw,64px)] py-[10vh]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[4vw] items-center">
          {/* Left: Logo Card */}
          <div
            className={`relative flex items-center justify-center rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] bg-[#181A20] transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-[40vw] scale-[0.98]'
            }`}
            style={{ height: 'clamp(400px, 72vh, 700px)' }}
          >
            <img
              src="/my-logo.png"
              alt="Logo"
              className="h-32 w-auto object-contain"
              style={{ maxHeight: '180px', margin: 'auto' }}
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center lg:pl-[2vw]">
            <h1
              className={`text-[#F4F6FA] font-semibold leading-[0.95] tracking-tight mb-6 transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ fontSize: 'clamp(36px, 5.2vw, 84px)' }}
            >
              <span className="inline-block">Design‑first</span>{' '}
              <span className="inline-block">engineering</span>{' '}
              <span className="inline-block">for</span>{' '}
              <span className="inline-block">modern</span>{' '}
              <span className="inline-block">teams.</span>
            </h1>

            <p
              className={`text-[#A7ACB8] text-lg lg:text-xl max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-500 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              I build fast, accessible interfaces and robust systems—so your
              product feels premium from day one.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={scrollToWork}
                className="group bg-[#FF4D2E] hover:bg-[#ff6b52] text-white px-8 py-4 rounded-[14px] font-medium flex items-center justify-center gap-3 btn-hover transition-colors"
              >
                View selected work
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
              <button className="group border border-[rgba(244,246,250,0.14)] hover:border-[rgba(244,246,250,0.25)] text-[#F4F6FA] px-8 py-4 rounded-[14px] font-medium flex items-center justify-center gap-3 btn-hover transition-colors">
                <Download size={18} />
                Download résumé
              </button>
            </div>

            <p
              className={`text-[#A7ACB8] text-sm mt-6 tracking-wide transition-all duration-700 delay-900 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              React · TypeScript · Node · AWS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
