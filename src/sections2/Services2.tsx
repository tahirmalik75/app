import { useEffect, useState, useRef } from 'react';
import { Monitor, Smartphone, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, and TypeScript.',
    features: ['React & Next.js', 'TypeScript', 'Node.js Backend', 'API Integration'],
    color: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'Creating beautiful, intuitive interfaces that users love. From wireframes to high-fidelity prototypes.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Developing cross-platform mobile applications that deliver native-like experiences on iOS and Android.',
    features: ['React Native', 'Cross-platform', 'Native Features', 'App Store Deploy'],
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.3)',
  },
];

export function Services2() {
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
      id="services2"
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
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end solutions for your digital needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group glass-card p-8 card-lift relative overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon size={28} style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: service.color }}
                  />
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
