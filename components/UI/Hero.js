/* eslint-disable react/jsx-no-comment-textnodes */
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import WaveSVG from '../SVG/Wave';

export default function Hero() {
  return (
    <section className="relative w-full py-32">
      <div className="absolute inset-0 overflow-hidden bg-darkmode">
        <div className="invisible stars dark:visible" />
      </div>

      <div className="relative max-w-[90rem] mx-auto min-h-[32rem] z-10 inset-0 flex flex-col lg:flex-row gap-8 p-8 lg:justify-between justify-center items-center">
        <Transition
          as="div"
          show
          appear
          enter="transition-all ease-out duration-1000"
          enterFrom="translate-y-12 opacity-0"
          enterTo="translate-y-0 opacity-100"
          className="flex flex-col justify-center text-center lg:text-left max-w-[70ch] text-white"
        >
          <p className="text-lg font-bold uppercase">
            Design
            <span className="px-1 text-accent-1">//</span>
            Collaborate
            <span className="px-1 text-accent-2">//</span>
            Develop
          </p>
          <h1 className="pb-4 text-[8vw] leading-[8vw] lg:text-6xl lg:leading-16 font-black uppercase">
            Achieve more, <br /> together.
          </h1>
          <p className="text-lg">
            I create fully custom, hand-coded websites designed for performance,
            aesthetics, and readable code. Take a look at my projects to see
            what I can do — and feel free to reach out if you&apos;d like to
            connect.
          </p>
          <div className="flex justify-center gap-8 mt-6 whitespace-nowrap lg:justify-start">
            <a
              href="#contact"
              className="uppercase px-12 py-4 bg-[#f4f4f4] hover:bg-accent-1 hover:text-white dark:hover:text-accent-1 dark:hover:bg-white text-black font-semibold shadow-button shadow-accent-1 text-center rounded-full transition-all duration-150"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="px-12 py-4 font-semibold text-center text-white uppercase transition-all duration-150 rounded-full hover:bg-accent-1"
            >
              Projects
            </a>
          </div>
        </Transition>
        <Image src="/img/mockup.png" height="370" width="389" />
      </div>
      <WaveSVG className="absolute left-0 w-full -bottom-1 fill-white dark:fill-darkmode" />
    </section>
  );
}
