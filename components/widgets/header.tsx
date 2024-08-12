"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from '@/components/widgets/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsProductsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProductsMenuOpen(false);
  };

  return (
    <header className="absolute w-full left-0 top-0 h-32 z-50 bg-blue-300">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <Logo />
        <section>
          <ul className={`lg:flex items-center gap-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <Link
                href="/"
                className="relative text-indigo-950 text-xl font-medium transition-colors duration-300 before:absolute
                before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-indigo-950 before:rounded-full
                before:transition-all before:duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#nosotros"
                className="relative text-indigo-950 text-xl font-medium transition-colors duration-300 before:absolute
                before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-indigo-950 before:rounded-full
                before:transition-all before:duration-300 hover:before:w-full"
              >
                Nosotros
              </Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/"
                className="relative text-indigo-950 text-xl font-medium transition-colors duration-300 before:absolute
                before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-indigo-950 before:rounded-full
                before:transition-all before:duration-300 hover:before:w-full"
              >
                Productos
              </Link>
              <ul className={`absolute left-0 mt-2 w-full text-xl text-indigo-950 bg-rose-100 border border-gray-200 rounded-md ${isProductsMenuOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/tortas">Tortas</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/tartas">Tartas</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/shots">Shots</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/"
                className="relative text-indigo-950 text-xl font-medium transition-colors duration-300 before:absolute
                before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-indigo-950 before:rounded-full
                before:transition-all before:duration-300 hover:before:w-full"
              >
                Política de Devolución
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="relative text-indigo-950 text-xl font-medium transition-colors duration-300 before:absolute
                before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-indigo-950 before:rounded-full
                before:transition-all before:duration-300 hover:before:w-full"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <button onClick={toggleMenu} className="relative lg:hidden">
            <span className="block w-8 h-0.5 bg-indigo-950 mb-2"></span>
            <span className="block w-8 h-0.5 bg-indigo-950 mb-2"></span>
            <span className="block w-8 h-0.5 bg-indigo-950"></span>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;

