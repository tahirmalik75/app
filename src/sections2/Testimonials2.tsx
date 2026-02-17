import { useEffect, useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '/images2/client-1.jpg',
    content:
      'Working with this developer was an absolute pleasure. They delivered our platform ahead of schedule and the quality exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    image: '/images2/client-2.jpg',
    content:
      'Exceptional technical skills combined with great communication. They understood our vision perfectly and brought it to life with stunning attention to detail.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Design Studio X',
    image: '/images2/client-3.jpg',
    content:
      'The best developer I have worked with. Fast, reliable, and incredibly talented. Our website performance improved by 300% after the rebuild.',
    rating: 5,
  },
];

export function Testimonials2() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials2"
      className="relative w-full py-24 z-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Feedback from people I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote
              size={60}
              className="absolute top-6 right-6 text-white/5"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-white font-bold">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-zinc-400 text-sm">
                    {testimonials[activeIndex].role} at{' '}
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-indigo-500 w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
