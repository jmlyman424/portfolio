import { Transition } from '@headlessui/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full object-cover">
      <div className="relative h-[32rem] z-10 inset-0 flex gap-8 p-8 pb-20 justify-center">
        <Transition
          as="div"
          show
          appear
          enter="transition-all ease-out duration-1000"
          enterFrom="translate-y-12 opacity-0"
          enterTo="translate-y-0 opacity-100"
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="pb-4 md:text-6xl text-center font-black text-4xl">
            Beautiful Interfaces
            <br />
            Clean Code <br />
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-[#3B9187] to-[#5D96E3]">
              Smarter Decisions
            </span>
          </h1>
        </Transition>

        <div className="absolute flex justify-between w-full min-w-6xl">
          <Image src="/Left.svg" alt="" width="221" height="417" />
          <Image src="/Right.svg" alt="" width="221" height="417" />
        </div>
      </div>
    </div>
  );
}
