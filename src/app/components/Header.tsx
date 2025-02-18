'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="text-xl font-semibold relative z-[101]">
              Nellie.
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#work" className="text-sm hover:text-black/70 transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-sm hover:text-black/70 transition-colors">
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-sm px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300"
              >
                Let&apos;s Talk
              </Link>
              <Link 
                href="https://www.linkedin.com/in/nellie-farzaneh-3133a82b1/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Link>
            </nav>

            {/* Hamburger Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-[101]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute inset-0 top-16 bg-white shadow-lg">
            <div className="h-full flex flex-col items-center justify-center px-4 py-6">
              <nav className="flex flex-col items-center space-y-8 w-full max-w-sm mx-auto">
                <Link 
                  href="/#work" 
                  className="text-2xl font-medium w-full text-center py-4 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </Link>
                <Link 
                  href="/about" 
                  className="text-2xl font-medium w-full text-center py-4 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-2xl font-medium w-full text-center py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
                
                <div className="pt-12 w-full border-t border-gray-100">
                  <div className="flex justify-center pt-8">
                    <Link 
                      href="https://www.linkedin.com/in/nellie-farzaneh-3133a82b1/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] transition-all hover:scale-110"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}