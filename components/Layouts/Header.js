'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import ThemeSwitch from '../UI/ThemeSwitch';

const navLinks = [
  {
    path: '/#',
    label: 'Home',
    enabled: true,
  },
  {
    path: '/#about',
    label: 'About',
    enabled: true,
  },
  {
    path: '/#portfolio',
    label: 'Portfolio',
    enabled: true,
  },
  {
    path: '/#contact',
    label: 'Contact',
    enabled: true,
  },
];

function NavLinks({ className }) {
  return navLinks.map((navLinks) => {
    if (!navLinks.enabled) return null;
    return (
      <PopoverButton as="li" key={navLinks.label}>
        <Link href={navLinks.path} className={className}>
          {navLinks.label}
        </Link>
      </PopoverButton>
    );
  });
}

function DesktopMenu() {
  return (
    <Popover as="nav" className="hidden gap-4 my-auto md:flex">
      <ul className="flex gap-6">
        <NavLinks className="py-2 font-semibold text-gray-700 transition-all duration-200 cursor-pointer dark:text-white hover:text-accent-1" />
        {/* <ToggleTheme /> */}
      </ul>
    </Popover>
  );
}

function MobileMenu() {
  return (
    <Popover as={Fragment}>
      {({ open }) => (
        <>
          <ThemeSwitch />
          <PopoverButton aria-label="menu">
            <MenuIcon className="w-8 h-8 p-1 transition-all duration-500 rounded cursor-pointer hover:bg-gray-100 md:hidden" />
          </PopoverButton>

          {open && (
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <PopoverPanel
                className="absolute right-0 z-10 flex justify-center w-full h-screen overflow-hidden bg-white top-1 mt-14 dark:bg-darkmode md:hidden"
                static
              >
                <nav className="flex my-auto">
                  <ul className="flex flex-col gap-12 text-2xl text-center">
                    <NavLinks styles="py-2 px-6 text-black hover:text-accent-1 dark:text-white transition-all duration-200 cursor-pointer" />
                  </ul>
                </nav>
              </PopoverPanel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
}

export default function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 100 ? setAtTop(false) : setAtTop(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyles = atTop ? 'top-8 px-8 max-w-[105rem]' : 'top-0 max-w-full';

  return (
    <header
      className={`h-0 mx-auto sticky z-50 transition-all duration-300 font-display ${headerStyles}`}
    >
      <div
        className={`shadow-xl shadow-gray-600/20 backdrop-blur-sm bg-white/90 dark:bg-darkmode/30 ${atTop ? 'rounded-xl' : ''}`}
      >
        <div className="flex flex-wrap items-center justify-between px-8 py-3 mx-auto align-middle max-w-content md:min-h-16">
          <div className="flex align-middle">
            <Link href="/" className="font-semibold dark:text-white">
              {/* Joseph Lyman */}
              <Image
                src="/Logo.svg"
                height="40"
                width="160"
                alt="logo"
                className="dark:invert"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <DesktopMenu />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
