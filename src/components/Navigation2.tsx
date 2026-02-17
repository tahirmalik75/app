import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about2' },
  { label: 'Services', href: '#services2' },
  { label: 'Work', href: '#work2' },
  { label: 'Skills', href: '#skills2' },
  { label: 'Experience', href: '#experience2' },
  { label: 'Contact', href: '#contact2' },
];

export function Navigation2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/50 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white font-bold text-xl"
            >
              Dream <span className="gradient-text">Dev</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-zinc-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact2')}
                className="ml-4 btn-primary text-white px-5 py-2.5 rounded-full text-sm font-medium"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-white text-2xl font-medium hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact2')}
            className="mt-4 btn-primary text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
