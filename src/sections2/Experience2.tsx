import { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    period: '2022 - Present',
    description:
      'Leading development of enterprise SaaS platforms. Managing a team of 5 developers and architecting scalable solutions.',
    achievements: [
      'Reduced application load time by 60%',
      'Implemented CI/CD pipeline',
      'Mentored junior developers',
    ],
    color: '#6366f1',
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'StartupX',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description:
      'Built MVP from scratch and scaled to 100K+ users. Worked across the entire stack with React, Node.js, and AWS.',
    achievements: [
      'Launched 3 major product features',
      'Optimized database queries',
      'Built real-time notification system',
    ],
    color: '#ec4899',
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Creative Agency Y',
    location: 'New York, NY',
    period: '2019 - 2020',
    description:
      'Developed responsive websites for various clients. Collaborated with designers to implement pixel-perfect designs.',
    achievements: [
      'Delivered 20+ client projects',
      'Mastered React and modern CSS',
      'Received client excellence award',
    ],
    color: '#06b6d4',
  },
];

export function Experience2() {
  const [isVisible, setIsVisible] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate timeline line
          setTimeout(() => setLineHeight(100), 300);
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
      id="experience2"
      className="relative w-full py-24 z-10"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10">
            <div
              className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1500 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 transition-all duration-300 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}
                  style={{
                    backgroundColor: '#050508',
                    borderColor: exp.color,
                    boxShadow: `0 0 20px ${exp.color}50`,
                    transitionDelay: `${400 + index * 200}ms`,
                  }}
                />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="glass-card p-6 group hover:bg-white/5 transition-colors">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${exp.color}20` }}
                      >
                        <Briefcase size={20} style={{ color: exp.color }} />
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-zinc-300"
                        >
                          <span style={{ color: exp.color }}>→</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
