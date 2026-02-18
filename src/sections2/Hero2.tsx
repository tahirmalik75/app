import { useEffect, useState, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function Hero2() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about2');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.querySelector('#work2');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-zinc-300 font-medium">
            Full-Stack Developer & UI Designer
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Crafting</span>
          <br />
          <span className="gradient-text">Digital Experiences</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          We Turn Your Vision into High-Converting Digital Experiences Modern, Fast & SEO-Optimized Websites That Actually Grow Your Business
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={scrollToWork}
            className="group btn-primary text-white px-8 py-4 rounded-full font-medium flex items-center gap-3"
          >
            View My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => document.querySelector('#contact2')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-white px-8 py-4 rounded-full font-medium"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '5+', label: 'Years Exp.' },
            { value: '30+', label: 'Clients' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card px-4 py-4 text-center"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown size={32} className="animate-bounce-slow" />
      </button>
    </section>
  );
}
