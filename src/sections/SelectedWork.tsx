import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Design System',
    image: '/images/work-design-system.jpg',
  },
  {
    id: 2,
    title: 'SaaS Platform',
    image: '/images/work-saas-platform.jpg',
  },
  {
    id: 3,
    title: 'E‑commerce',
    image: '/images/work-ecommerce.jpg',
  },
];

export function SelectedWork() {
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
      id="work"
      className="relative min-h-screen w-full bg-[#0B0C10] overflow-hidden z-20 py-[10vh]"
    >
      {/* Signature Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 5 85 Q 15 75 25 80 Q 35 85 45 70 Q 55 55 65 60 Q 75 65 85 50 Q 95 35 95 25"
          fill="none"
          stroke="#FF4D2E"
          strokeWidth="0.3"
          strokeLinecap="round"
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </svg>

      <div className="relative w-full px-[clamp(18px,4vw,64px)] py-[clamp(18px,3vh,40px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(14px,2.2vw,28px)]">
          {/* Top Left - Project A */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] card-hover group transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-[50vw]'
            }`}
            style={{ height: 'clamp(250px, 34vh, 350px)' }}
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-[#0B0C10]/80 backdrop-blur-sm text-[#F4F6FA] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-[rgba(244,246,250,0.08)]">
                {projects[0].title}
              </span>
            </div>
          </div>

          {/* Top Right - Project B */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] card-hover group md:col-span-2 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-[50vw]'
            }`}
            style={{ height: 'clamp(250px, 34vh, 350px)' }}
          >
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-[#0B0C10]/80 backdrop-blur-sm text-[#F4F6FA] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-[rgba(244,246,250,0.08)]">
                {projects[1].title}
              </span>
            </div>
          </div>

          {/* Bottom Left - Title Block */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[20vh]'
            }`}
          >
            <h2
              className="text-[#F4F6FA] font-semibold tracking-tight mb-4"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              Selected Work
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-6 leading-relaxed">
              A few recent builds—landing systems, dashboards, and interactive
              product experiences.
            </p>
            <button className="group text-[#FF4D2E] font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Explore all projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Bottom Right - Project C */}
          <div
            className={`relative rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.45)] card-hover group md:col-span-2 transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[60vh] scale-[0.96]'
            }`}
            style={{ height: 'clamp(300px, 40vh, 400px)' }}
          >
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-[#0B0C10]/80 backdrop-blur-sm text-[#F4F6FA] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-[rgba(244,246,250,0.08)]">
                {projects[2].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
