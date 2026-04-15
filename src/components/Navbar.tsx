import { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';

const navItems = [
  { label: 'Atividades', href: '#activities' },
  { label: 'Produção', href: '#production' },
  { label: 'Latão', href: '#brass' },
  { label: 'Sobre a MCT', href: '#about' },
  { label: 'Sustentabilidade', href: '#sustainability' },
  { label: 'Qualidade', href: '#quality' },
  { label: 'Contactos', href: '#contact' },
];

interface Props {
  onAdminClick: () => void;
}

export default function Navbar({ onAdminClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            MCT
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onAdminClick}
            className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              scrolled
                ? 'border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-600'
                : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
            }`}
          >
            <Lock size={13} />
            Admin
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-lg text-stone-700 hover:bg-stone-50 hover:text-stone-900 font-medium text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onAdminClick(); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-amber-600 hover:bg-amber-50 font-medium text-sm transition-colors mt-1"
          >
            <Lock size={14} />
            Área de Admin
          </button>
        </div>
      )}
    </header>
  );
}
