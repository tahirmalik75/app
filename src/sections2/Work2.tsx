import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images2/project-1.jpg',
    description: 'A modern e-commerce platform with real-time inventory and seamless checkout.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: '/images2/project-2.jpg',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    tech: ['React', 'D3.js', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: '/images2/project-3.jpg',
    description: 'Secure mobile banking application with biometric authentication.',
    tech: ['React Native', 'Firebase', 'Plaid'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Development',
    image: '/images2/project-4.jpg',
    description: 'Creative portfolio website with stunning animations and interactions.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'AI Tool Interface',
    category: 'UI/UX Design',
    image: '/images2/project-5.jpg',
    description: 'AI-powered content generation tool with intuitive interface.',
    tech: ['React', 'OpenAI', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Social Media App',
    category: 'Mobile Development',
    image: '/images2/project-6.jpg',
    description: 'Social networking app with real-time messaging and stories.',
    tech: ['React Native', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Development'];

export function Work2() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work2"
      className="relative w-full py-24 z-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across web, mobile, and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card overflow-hidden card-lift transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400"
                    >
                      {tech}
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
