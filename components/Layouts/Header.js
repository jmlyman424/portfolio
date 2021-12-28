import Link from 'next/link';
import { Fragment } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { Popover, Transition } from '@headlessui/react';

const navLinks = [
  {
    path: '/#',
    label: 'Home',
    enabled: true,
  },
  {
    path: '/#projects',
    label: 'Projects',
    enabled: true,
  },
  {
    path: '/#resume',
    label: 'Resume',
    enabled: true,
  },
  {
    path: '/#contact',
    label: 'Contact',
    enabled: true,
  },
  {
    path: '/test',
    label: 'Test',
    enabled: false,
  },
];

function NavLinks({ styles }) {
  return navLinks.map((navLinks) => {
    if (!navLinks.enabled) return null;
    return (
      <Popover.Button as="li" key={navLinks.label}>
        <Link href={navLinks.path}>
          <a className={styles}>{navLinks.label}</a>
        </Link>
      </Popover.Button>
    );
  });
}

function DesktopMenu() {
  return (
    <Popover as="nav" className="hidden gap-4 my-auto md:flex">
      <ul className="flex gap-4">
        <NavLinks styles="py-2 px-6 text-gray-700 hover:text-black transition-all duration-200 cursor-pointer" />
      </ul>
    </Popover>
  );
}

function MobileMenu() {
  return (
    <Popover as={Fragment}>
      {({ open }) => (
        <>
          <Popover.Button aria-label="menu">
            <MenuIcon className="hover:translate-y-[.1rem] p-1 w-8 h-8 text-gray-500 hover:bg-gray-100 rounded cursor-pointer transition-all duration-500 md:hidden" />
          </Popover.Button>

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
              <Popover.Panel
                className="absolute z-10 right-0 top-1 flex justify-center mt-14 w-full h-screen bg-gray-900 overflow-hidden md:hidden"
                static
              >
                <nav className="flex my-auto">
                  <ul className="flex flex-col gap-12 text-center text-2xl">
                    <NavLinks styles="py-2 px-6 text-white hover:text-gray-400 transition-all duration-200 cursor-pointer" />
                  </ul>
                </nav>
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
}

export default function Header() {
  return (
    <header className="sticky z-50 top-0 w-full bg-white shadow">
      <div className="flex flex-wrap items-center justify-between align-middle mx-auto px-8 py-3 max-w-screen-2xl">
        <div className="flex align-middle">
          <Link href="/">
            <a className="bg-blue-600 rounded-b-lg rounded-r-lg">
              <h1 className="flex-basis my-auto px-2 py-1 text-white text-xl font-medium">
                JL
              </h1>
            </a>
          </Link>
          <p className="my-auto pl-4 font-bold">Joseph M. Lyman</p>
        </div>

        <div className="flex align-middle">
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
