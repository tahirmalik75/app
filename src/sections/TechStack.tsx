import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const stackGroups = [
  {
    label: 'Frontend',
    tools: 'React · Next.js · TypeScript · Tailwind',
  },
  {
    label: 'Backend',
    tools: 'Node · Express · PostgreSQL · Prisma',
  },
  {
    label: 'Infra',
    tools: 'AWS · Vercel · Docker · GitHub Actions',
  },
  {
    label: 'Workflow',
    tools: 'Figma · Linear · Notion · Slack',
  },
];

export function TechStack() {
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
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-50 py-[10vh]"
    >
      {/* Signature Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 5 90 Q 15 80 5 70"
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
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0 rotate-0'
                : 'opacity-0 -translate-x-[55vw] -rotate-[0.5deg]'
            }`}
            style={{ height: 'clamp(400px, 72vh, 600px)' }}
          >
            <img
              src="/images/stack-photo.jpg"
              alt="Tech stack"
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
            className={`flex flex-col justify-center lg:pl-8 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[55vw]'
            }`}
          >
            <h2
              className="text-[#F4F6FA] font-semibold tracking-tight mb-4"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              Tech Stack
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-8 leading-relaxed max-w-md">
              Modern, proven tools—chosen for speed, maintainability, and scale.
            </p>

            <div className="space-y-5">
              {stackGroups.map((group, index) => (
                <div
                  key={group.label}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-[6vh]'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <span className="text-[#FF4D2E] text-xs font-semibold tracking-wider uppercase">
                    {group.label}
                  </span>
                  <p className="text-[#F4F6FA] text-base mt-1">{group.tools}</p>
                </div>
              ))}
            </div>

            <button className="group mt-8 text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Read engineering notes
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
