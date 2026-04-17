
'use client';

import { useState, useEffect } from 'react';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#experiences' },
  { label: 'Business', href: '#business' },
  { label: 'Faq', href: '#faq' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[108] bg-white/90 backdrop-blur-md border-b border-[#eee]">
        <div className="container flex items-center justify-between py-2 md:py-3 mx-auto px-5">
          {/* Logo */}
          <a href="/" className="group relative z-[110]">
            <img
              src="/WEBSITE12-Photoroom.png"
              alt="Vintage Times"
              className="h-10 w-auto object-contain md:h-12"
            />
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {menuItems.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  <a
                    href={item.href}
                    className="text-[0.875rem] font-medium text-[#222020] hover:text-[#9d9a95] transition-colors"
                  >
                    {item.label}
                  </a>
                  {index < menuItems.length - 1 && <span className="mx-1 text-[#222020]">,</span>}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#form"
              className="flex items-center gap-1 text-[0.875rem] font-semibold text-[#222020] group"
            >
              <span>Be the headline</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222020" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222020" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="16" y2="12" />
                <line x1="4" y1="17" x2="12" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — placed OUTSIDE header to avoid container clipping */}
      <div
        className={`fixed inset-0 z-[105] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ backgroundColor: '#faf9f6' }}
        onClick={closeMenu}
      >
        {/* Solid background fill to prevent bleed-through */}
        <div className="absolute inset-0" style={{ backgroundColor: '#faf9f6' }}></div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col h-full pt-24 px-8 pb-10 justify-between safe-area-inset"
          onClick={(event) => event.stopPropagation()}
        >

          {/* Navigation Links */}
          <nav id="mobile-navigation" className="flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  className="overflow-hidden"
                  style={{
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms`,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 text-[2.15rem] font-normal italic leading-[1.05] text-[#222020] hover:text-[#9b4136] transition-colors active:scale-[0.98]"
                    style={{ fontFamily: "'Times New Roman', 'Iowan Old Style', Georgia, serif" }}
                  >
                    {item.label}
                  </a>
                  {index < menuItems.length - 1 && (
                    <div className="w-full h-[1px]" style={{ backgroundColor: '#e8e6e3' }}></div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div
            className="flex flex-col gap-5"
            style={{
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)',
              opacity: isMenuOpen ? 1 : 0,
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 400ms',
            }}
          >
            {/* CTA Button */}
            <a
              href="#form"
              onClick={closeMenu}
              className="w-full py-4 text-center font-bold tracking-[0.15em] text-[13px] uppercase rounded-full transition-all active:scale-[0.97]"
              style={{ backgroundColor: '#222020', color: '#ffffff' }}
            >
              Be the headline
            </a>

            {/* Contact Row */}
            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid #e8e6e3' }}>
              <a href="tel:+917075746236" className="text-[13px] font-medium text-[#222020]" style={{ fontFamily: "'Onest', sans-serif" }}>
                +91 70757 46236
              </a>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/vintagetimes.in/" target="_blank" rel="noreferrer" className="text-[11px] uppercase font-bold tracking-wider text-[#222020] hover:text-[#9b4136] transition-colors">
                  Insta
                </a>
                <a href="https://wa.me/917075746236" target="_blank" rel="noreferrer" className="text-[11px] uppercase font-bold tracking-wider text-[#222020] hover:text-[#9b4136] transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9d9a95]">© 2026 Vintage Times</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
