import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, PenTool, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Scope',
    description: 'Understand goals, users, and constraints',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Prototype',
    description: 'Wireframes to high-fidelity mockups',
  },
  {
    number: '03',
    icon: Code,
    title: 'Build & Integrate',
    description: 'Clean code with modern stack',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Test & Optimize',
    description: 'Performance and accessibility checks',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Ship & Support',
    description: 'Launch and ongoing maintenance',
  },
];

export function Process() {
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
      id="process"
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-40 py-[10vh]"
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
              src="/images/process-photo.jpg"
              alt="Development process"
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
              Process
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-8 leading-relaxed max-w-md">
              A tight loop of discovery, build, and polish—so we ship fast
              without breaking quality.
            </p>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex items-center gap-4 p-3 rounded-[12px] border border-[rgba(244,246,250,0.08)] hover:border-[rgba(244,246,250,0.18)] transition-all duration-500 group ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-[8vh]'
                  }`}
                  style={{ transitionDelay: `${150 + index * 70}ms` }}
                >
                  <span className="text-[#FF4D2E] font-semibold text-sm w-8">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#14161B] flex items-center justify-center group-hover:bg-[#FF4D2E]/10 transition-colors">
                    <step.icon
                      size={16}
                      className="text-[#A7ACB8] group-hover:text-[#FF4D2E] transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#F4F6FA] font-medium text-sm">
                      {step.title}
                    </h3>
                    <p className="text-[#A7ACB8] text-xs">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group mt-8 text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Book a discovery call
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
