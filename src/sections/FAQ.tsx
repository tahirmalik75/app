import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "What's your typical project size?",
    answer:
      'I typically work on projects ranging from 2-week sprints to 3-month engagements. For larger initiatives, I partner with trusted contractors to scale the team as needed.',
  },
  {
    question: 'Do you work with existing teams?',
    answer:
      'Absolutely. I integrate seamlessly with in-house teams, adapting to your workflows and contributing code that matches your standards.',
  },
  {
    question: 'How do you handle handoff?',
    answer:
      'Every project includes comprehensive documentation, codebase walkthroughs, and knowledge transfer sessions. I ensure your team can maintain and extend the work independently.',
  },
  {
    question: "What's your availability?",
    answer:
      "I'm currently booking projects starting Q2 2026. I maintain limited concurrent engagements to ensure each client receives focused attention.",
  },
  {
    question: 'Can you support after launch?',
    answer:
      'Yes, I offer ongoing support and maintenance packages. This includes bug fixes, performance monitoring, and incremental feature development.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0C10] py-[10vh] z-[90]"
    >
      <div
        className={`max-w-[920px] mx-auto px-[clamp(18px,4vw,64px)] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2
          className="text-[#F4F6FA] font-semibold tracking-tight mb-10 text-center"
          style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
        >
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[rgba(244,246,250,0.08)] rounded-[14px] overflow-hidden transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[rgba(244,246,250,0.02)] transition-colors"
              >
                <span className="text-[#F4F6FA] font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#A7ACB8] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="text-[#A7ACB8] px-5 pb-5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:hello@devportfolio.pro"
            className="group text-[#FF4D2E] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            Still have questions? Email me
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
