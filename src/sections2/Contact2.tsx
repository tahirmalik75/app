import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Contact2() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
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


  return (
    <section
      ref={sectionRef}
      id="contact2"
      className="relative w-full py-24 z-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="mailto:hello@devstudio.pro"
                className="flex items-center gap-4 glass-card p-4 group hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Mail size={20} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm">Email</div>
                  <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                    connect.dreamdev@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card p-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <MapPin size={20} className="text-pink-400" />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm">Location</div>
                  <div className="text-white font-medium">
                    Pakistan
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-zinc-400 text-sm mb-4">Follow Me</div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">Available for Work</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Currently accepting new projects for Q2 2026. Let's discuss your ideas!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Your message has been sent successfully!
                  </h3>
                  <p className="text-zinc-400 text-lg">
                    Thank you for reaching out. We appreciate your interest and will connect with you soon. If your project is urgent, feel free to email us directly at <span className="text-indigo-400">connect.dreamdev@gmail.com</span>.
                  </p>
                  <p className="text-zinc-400 mt-4">
                    We look forward to collaborating with you!
                  </p>
                </div>
              ) : (
                <form
                  action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`}
                  method="POST"
                  className="space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
                      method: 'POST',
                      body: formData,
                      headers: { 'Accept': 'application/json' },
                    });
                    setSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-zinc-400 text-sm mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 text-sm mb-2 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-indigo-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-zinc-400 text-sm mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-indigo-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 text-sm mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
