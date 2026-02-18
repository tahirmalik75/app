import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
            ? 'bg-[#0B0C10]/90 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-[clamp(18px,4vw,64px)] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/my-logo.png" alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#A7ACB8] hover:text-[#F4F6FA] transition-colors text-sm font-medium link-underline"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#FF4D2E] hover:bg-[#ff6b52] text-white px-5 py-2.5 rounded-[14px] text-sm font-medium btn-hover transition-colors"
            >
              Start a project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F4F6FA] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0C10]/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-[#F4F6FA] text-2xl font-medium hover:text-[#FF4D2E] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#FF4D2E] hover:bg-[#ff6b52] text-white px-8 py-3 rounded-[14px] text-lg font-medium mt-4"
          >
            Start a project
          </button>
        </div>
      </div>
    </>
  );
}
