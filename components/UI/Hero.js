import { Transition } from '@headlessui/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[32rem] object-cover">
      <div className="relative z-10 inset-0 flex gap-8 p-8 pb-20 h-full md:container justify-center">
        <Transition
          as="div"
          show
          appear
          enter="transition-all ease-out duration-1000"
          enterFrom="translate-y-12 opacity-0"
          enterTo="translate-y-0 opacity-100"
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="pb-4 text-6xl text-center font-black ">
            Beautiful Interfaces
            <br />
            Clean Code <br />
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-custom-blue">
              Smarter Decisions
            </span>
          </h1>
        </Transition>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <Image src="/Left.svg" alt="" width="221px" height="417px" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <Image src="/Right.svg" alt="" width="250px" height="422px" />
      </div>
    </div>
  );
}
