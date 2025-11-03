import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'activities', label: 'Activities' },
  { id: 'registration', label: 'Registration Info' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          onClick={() => handleScroll('home')}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#1764CE] grid place-items-center text-white font-bold">IJ</div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">LKP Indo Jaya</p>
            <p className="text-xs text-gray-500">PKL Internship Program</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-medium text-gray-700 hover:text-[#1764CE] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#registration"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('registration');
            }}
            className="ml-2 inline-flex items-center rounded-md bg-[#1764CE] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register Now
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left px-2 py-2 rounded-md text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('registration')}
              className="mt-2 w-full inline-flex items-center justify-center rounded-md bg-[#1764CE] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
