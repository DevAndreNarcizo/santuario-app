"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-santuário-da-Fé.png" alt="Santuário da Fé Logo" width={50} height={50} />
            <span className={`font-serif text-xl font-semibold ${scrolled ? 'text-primary-text' : 'text-white'}`}>
              Santuário da Fé
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#igreja" className={`${scrolled ? 'text-secondary-text' : 'text-gray-200'} hover:text-primary-text transition-colors`}>
              A Igreja
            </Link>
            <Link href="#eventos" className={`${scrolled ? 'text-secondary-text' : 'text-gray-200'} hover:text-primary-text transition-colors`}>
              Eventos
            </Link>
            <Link href="#horarios" className={`${scrolled ? 'text-secondary-text' : 'text-gray-200'} hover:text-primary-text transition-colors`}>
              Horários
            </Link>
            <Link href="#oracao" className={`${scrolled ? 'text-secondary-text' : 'text-gray-200'} hover:text-primary-text transition-colors`}>
              Oração
            </Link>
            <Link href="#biblia" className={`${scrolled ? 'text-secondary-text' : 'text-gray-200'} hover:text-primary-text transition-colors`}>
              Bíblia
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${scrolled ? 'text-primary-text' : 'text-white'}`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
      >
        <Link href="#igreja" className="text-2xl text-primary-text text-white" onClick={toggleMenu}>A Igreja</Link>
        <Link href="#eventos" className="text-2xl text-primary-text text-white" onClick={toggleMenu}>Eventos</Link>
        <Link href="#horarios" className="text-2xl text-primary-text text-white" onClick={toggleMenu}>Horários</Link>
        <Link href="#oracao" className="text-2xl text-primary-text text-white" onClick={toggleMenu}>Oração</Link>
        <Link href="#biblia" className="text-2xl text-primary-text text-white" onClick={toggleMenu}>Bíblia</Link>
      </div>
    </>
  );
};

export default Header;
