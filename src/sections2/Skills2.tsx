import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'React / Next.js', level: 95, color: '#61dafb' },
  { name: 'TypeScript', level: 90, color: '#3178c6' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776ab' },
  { name: 'UI/UX Design', level: 88, color: '#ec4899' },
];

const technologies = [
  { name: 'React', icon: '/icons/react-svgrepo-com.svg' },
  { name: 'TypeScript', icon: '/icons/typescript-icon-svgrepo-com.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-icon-svgrepo-com.svg' },
  { name: 'Node.js', icon: '/icons/nodejs-icon-svgrepo-com.svg' },
  { name: 'Python', icon: '/icons/python-svgrepo-com.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb-svgrepo-com.svg' },
  { name: 'Git', icon: '/icons/git-svgrepo-com.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql-logo-svgrepo-com.svg' },
  { name: 'AWS', icon: '/icons/aws-svgrepo-com.svg' },
  { name: 'Docker', icon: '/icons/docker-svgrepo-com.svg' },
  { name: 'Tailwind', icon: '/icons/tailwind-svgrepo-com.svg' },
  { name: 'GraphQL', icon: '/icons/GraphQL.svg' },
];

export function Skills2() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          const duration = 1500;
          const steps = 50;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setAnimatedLevels(skills.map((s) => Math.floor(s.level * easeOut)));

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
      id="skills2"
      className="relative w-full py-24 z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My technical toolkit for building modern applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-zinc-400 text-sm">
                    {animatedLevels[index]}%
                  </span>
                </div>
                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${animatedLevels[index]}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Grid */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`glass-card p-4 text-center group hover:bg-white/10 transition-all duration-300 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <div className="mb-2 flex justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name + ' icon'}
                      className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="text-xs text-zinc-400">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
