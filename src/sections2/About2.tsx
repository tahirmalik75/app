import { useEffect, useState, useRef } from 'react';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Clean Code', color: '#6366f1' },
  { icon: Palette, label: 'UI Design', color: '#ec4899' },
  { icon: Sparkles, label: 'Animations', color: '#06b6d4' },
  { icon: Zap, label: 'Performance', color: '#f43f5e' },
];

export function About2() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
              projects: Math.floor(50 * easeOut),
              years: Math.floor(5 * easeOut),
              clients: Math.floor(30 * easeOut),
            });
            
            if (step >= steps) clearInterval(timer);
          }, interval);
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about2"
      className="relative min-h-screen w-full py-24 z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-[32px] blur-2xl" />
              
              {/* Image container with gradient border */}
              <div className="gradient-border relative overflow-hidden">
                <img
                  src="/images2/profile.jpg"
                  alt="Profile"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 animate-float">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-zinc-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
              About Me
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Turning Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              I'm a passionate full-stack developer with a keen eye for design. 
              I specialize in creating modern, responsive web applications that 
              not only look great but also deliver exceptional user experiences.
            </p>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              With over 5 years of experience, I've worked with startups and 
              established companies to bring their digital visions to life. 
              I believe in clean code, thoughtful design, and continuous learning.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`flex items-center gap-3 glass-card px-4 py-3 transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon size={20} style={{ color: skill.color }} />
                  </div>
                  <span className="text-white font-medium">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* Counter Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {counters.projects}+
                </div>
                <div className="text-sm text-zinc-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {counters.years}+
                </div>
                <div className="text-sm text-zinc-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {counters.clients}+
                </div>
                <div className="text-sm text-zinc-500">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
