import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Eye, Zap, Users, Layers } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'Clarity over noise',
    description: "If it doesn't help the user, it doesn't ship.",
  },
  {
    icon: Zap,
    title: 'Performance is UX',
    description: 'Every interaction should feel instant.',
  },
  {
    icon: Users,
    title: 'Accessibility by default',
    description: 'Build for everyone, then enhance.',
  },
  {
    icon: Layers,
    title: 'Systems, not one‑offs',
    description: 'Reuse, document, and iterate.',
  },
];

export function Principles() {
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
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-[60] py-[10vh]"
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
              className="text-[#F4F6FA] font-semibold tracking-tight mb-4"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              Principles
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-8 leading-relaxed max-w-md">
              A few rules I keep front‑and‑center on every project.
            </p>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className={`flex items-start gap-4 p-4 rounded-[14px] border border-[rgba(244,246,250,0.08)] hover:border-[rgba(244,246,250,0.18)] transition-all duration-500 group ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-[5vh]'
                  }`}
                  style={{ transitionDelay: `${100 + index * 70}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#14161B] flex items-center justify-center group-hover:bg-[#FF4D2E]/10 transition-colors flex-shrink-0">
                    <principle.icon size={20} className="text-[#FF4D2E]" />
                  </div>
                  <div>
                    <h3 className="text-[#F4F6FA] font-medium">
                      {principle.title}
                    </h3>
                    <p className="text-[#A7ACB8] text-sm">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group mt-8 text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              How I work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Right Photo */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-[55vw] scale-[0.98]'
            }`}
            style={{ height: 'clamp(400px, 72vh, 600px)' }}
          >
            <img
              src="/images/principles-photo.jpg"
              alt="Minimal workspace"
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
