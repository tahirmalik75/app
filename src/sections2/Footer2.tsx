import { Heart } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="relative w-full py-8 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            Dream<span className="gradient-text"> Dev</span>
          </div>
          {/* Copyright */}
          <div className="text-zinc-400 text-sm">
            All Right Reserved Designed By{' '}
            <a className="border-b border-zinc-400 hover:text-pink-500 transition-colors" href="https://www.instagram.com/dream.devx" target="_blank" rel="noopener noreferrer">
              Dream.Devx
            </a>
          </div>
          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
