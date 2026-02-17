import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const metrics = [
  {
    value: '+34%',
    label: 'Conversion lift',
  },
  {
    value: '-42%',
    label: 'Time-to-interactive',
  },
  {
    value: '99.99%',
    label: 'Uptime target',
  },
  {
    value: '<0.2s',
    label: 'Interaction response',
  },
];

export function Results() {
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
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-[70] py-[10vh]"
    >
      {/* Signature Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 55 90 Q 75 85 95 90"
          fill="none"
          stroke="#FF4D2E"
          strokeWidth="0.3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative w-full px-[clamp(18px,4vw,64px)] py-[clamp(18px,3vh,40px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(14px,2.2vw,28px)] w-full">
          {/* Left Photo */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] order-2 lg:order-1 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-[55vw]'
            }`}
            style={{ height: 'clamp(400px, 72vh, 600px)' }}
          >
            <img
              src="/images/results-photo.jpg"
              alt="Analytics dashboard"
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

          {/* Right Panel */}
          <div
            className={`flex flex-col justify-center lg:pl-8 order-1 lg:order-2 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[55vw]'
            }`}
          >
            <h2
              className="text-[#F4F6FA] font-semibold tracking-tight mb-4"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              Results
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-8 leading-relaxed max-w-md">
              Real outcomes from recent engagements.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`p-5 rounded-[14px] border border-[rgba(244,246,250,0.08)] hover:border-[rgba(244,246,250,0.18)] transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-[8vh] scale-[0.96]'
                  }`}
                  style={{ transitionDelay: `${150 + index * 80}ms` }}
                >
                  <span
                    className="text-[#FF4D2E] font-bold block mb-1"
                    style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-[#A7ACB8] text-sm">{metric.label}</span>
                </div>
              ))}
            </div>

            <button className="group mt-8 text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Request case studies
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
