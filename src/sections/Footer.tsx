import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const socialLinks = [
  { icon: '/icons/facebook-svgrepo-com.svg', href: 'https://facebook.com/', label: 'Facebook' },
  { icon: '/icons/instagram-svgrepo-com.svg', href: 'https://instagram.com/', label: 'Instagram' },
  { icon: '/icons/tiktok-svgrepo-com.svg', href: 'https://tiktok.com/', label: 'TikTok' },
];

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-[#14161B] py-8 z-[100] border-t border-[rgba(244,246,250,0.08)]">
      <div className="max-w-[1200px] mx-auto px-[clamp(18px,4vw,64px)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-[#F4F6FA] font-semibold">DevPortfolio</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#0B0C10] flex items-center justify-center hover:bg-[#FF4D2E]/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.label} className="h-6 w-6 object-contain" />
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#A7ACB8] text-sm hover:text-[#F4F6FA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
