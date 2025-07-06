import Link from 'next/link';
import { Fragment, useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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

function ToggleTheme() {
  const checkIsDarkSchemePreferred = () =>
    // window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    false;

  const [isDark, setIsDark] = useState(checkIsDarkSchemePreferred());
  console.log('initial colorscheme: ', checkIsDarkSchemePreferred());

  function handleThemeChange() {
    setIsDark(!isDark);
  }

  return (
    <FontAwesomeIcon
      icon={isDark ? faSun : faMoon}
      onClick={handleThemeChange}
      className="inline fa-fw text-xl text-black dark:text-white hover:text-accent-1 cursor-pointer"
    />
  );
}

function DesktopMenu() {
  return (
    <Popover as="nav" className="hidden gap-4 my-auto md:flex">
      <ul className="flex gap-6">
        <NavLinks className="py-2 text-gray-700 dark:text-white font-semibold hover:text-accent-1 transition-all duration-200 cursor-pointer" />
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
          <ToggleTheme />
          <PopoverButton aria-label="menu">
            <MenuIcon className="p-1 w-8 h-8 text-gray-500 hover:bg-gray-100 rounded cursor-pointer transition-all duration-500 md:hidden" />
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
                className="absolute z-10 right-0 top-1 flex justify-center mt-14 w-full h-screen bg-white dark:bg-darkmode overflow-hidden md:hidden"
                static
              >
                <nav className="flex my-auto">
                  <ul className="flex flex-col gap-12 text-center text-2xl">
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
  return (
    <header className="sticky z-50 top-0 w-full bg-white dark:bg-darkmode shadow">
      <div className="flex flex-wrap items-center justify-between align-middle md:min-h-16 mx-auto px-8 py-3 max-w-screen-2xl">
        <div className="flex align-middle">
          <Link href="/" className="font-semibold dark:text-white">
            Joseph Lyman
          </Link>
        </div>

        <div className="flex align-middle gap-6">
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
