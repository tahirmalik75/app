import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-[80] py-[10vh]"
    >
      {/* Signature Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 95 90 Q 85 80 95 70"
          fill="none"
          stroke="#FF4D2E"
          strokeWidth="0.3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative w-full px-[clamp(18px,4vw,64px)] py-[clamp(18px,3vh,40px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(14px,2.2vw,28px)] w-full">
          {/* Left Panel */}
          <div
            className={`flex flex-col justify-center lg:pr-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-[55vw]'
            }`}
          >
            <h2
              className="text-[#F4F6FA] font-semibold tracking-tight mb-8"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              What clients say
            </h2>

            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[4vh]'
              }`}
            >
              <Quote size={32} className="text-[#FF4D2E] mb-4 opacity-50" />
              <blockquote className="text-[#F4F6FA] text-xl lg:text-2xl leading-relaxed mb-6">
                "He shipped a complex dashboard in weeks—not months. The craft
                was obvious, but the communication was what made the project
                calm."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#14161B] flex items-center justify-center">
                  <span className="text-[#FF4D2E] font-semibold text-sm">PL</span>
                </div>
                <div>
                  <p className="text-[#F4F6FA] font-medium text-sm">
                    Product Lead
                  </p>
                  <p className="text-[#A7ACB8] text-xs">Fintech Startup</p>
                </div>
              </div>
            </div>

            <button className="group mt-8 text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Read more testimonials
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Right Portrait */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-[55vw] scale-[0.98]'
            }`}
            style={{ height: 'clamp(400px, 72vh, 600px)' }}
          >
            <img
              src="/images/testimonial-portrait.jpg"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
            {/* Corner mark */}
            <div className="absolute top-6 left-6">
              <div className="w-8 h-8 relative">
                <div className="absolute top-0 left-0 w-4 h-0.5 bg-[#FF4D2E]" />
                <div className="absolute top-0 left-0 w-0.5 h-4 bg-[#FF4D2E]" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
