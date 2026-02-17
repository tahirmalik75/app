import { useState, useEffect, useRef } from 'react';
import { Mail, Calendar, MapPin, Send } from 'lucide-react';

const budgetRanges = [
  'Under $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#14161B] py-[10vh] z-[100]"
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(18px,4vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-[6vw]'
            }`}
          >
            <h2
              className="text-[#F4F6FA] font-semibold tracking-tight mb-4"
              style={{ fontSize: 'clamp(34px, 3.6vw, 56px)' }}
            >
              Let's build something precise.
            </h2>
            <p className="text-[#A7ACB8] text-base lg:text-lg mb-10 leading-relaxed">
              Tell me what you're shipping. I'll reply within 1–2 business days.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:hello@devportfolio.pro"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B0C10] flex items-center justify-center group-hover:bg-[#FF4D2E]/10 transition-colors">
                  <Mail size={20} className="text-[#FF4D2E]" />
                </div>
                <div>
                  <p className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-[#F4F6FA] font-medium group-hover:text-[#FF4D2E] transition-colors">
                    hello@devportfolio.pro
                  </p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#0B0C10] flex items-center justify-center group-hover:bg-[#FF4D2E]/10 transition-colors">
                  <Calendar size={20} className="text-[#FF4D2E]" />
                </div>
                <div>
                  <p className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-0.5">
                    Calendar
                  </p>
                  <p className="text-[#F4F6FA] font-medium group-hover:text-[#FF4D2E] transition-colors">
                    Book a 20‑min call
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0B0C10] flex items-center justify-center">
                  <MapPin size={20} className="text-[#FF4D2E]" />
                </div>
                <div>
                  <p className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-[#F4F6FA] font-medium">Remote (UTC−5)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`bg-[#0B0C10] rounded-[22px] p-6 lg:p-8 border border-[rgba(244,246,250,0.08)] transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0 translate-y-0'
                : 'opacity-0 translate-x-[6vw] translate-y-5'
            }`}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FF4D2E]/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-[#FF4D2E]" />
                </div>
                <h3 className="text-[#F4F6FA] font-semibold text-xl mb-2">
                  Message sent!
                </h3>
                <p className="text-[#A7ACB8]">
                  I'll get back to you within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#14161B] border border-[rgba(244,246,250,0.08)] rounded-[12px] px-4 py-3 text-[#F4F6FA] placeholder-[#A7ACB8]/50 focus:border-[#FF4D2E] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#14161B] border border-[rgba(244,246,250,0.08)] rounded-[12px] px-4 py-3 text-[#F4F6FA] placeholder-[#A7ACB8]/50 focus:border-[#FF4D2E] focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#14161B] border border-[rgba(244,246,250,0.08)] rounded-[12px] px-4 py-3 text-[#F4F6FA] placeholder-[#A7ACB8]/50 focus:border-[#FF4D2E] focus:outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-2 block">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#14161B] border border-[rgba(244,246,250,0.08)] rounded-[12px] px-4 py-3 text-[#F4F6FA] focus:border-[#FF4D2E] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[#A7ACB8] text-xs uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-[#14161B] border border-[rgba(244,246,250,0.08)] rounded-[12px] px-4 py-3 text-[#F4F6FA] placeholder-[#A7ACB8]/50 focus:border-[#FF4D2E] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF4D2E] hover:bg-[#ff6b52] text-white px-8 py-4 rounded-[14px] font-medium flex items-center justify-center gap-3 btn-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
