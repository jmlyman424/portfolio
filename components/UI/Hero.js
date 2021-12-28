import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

export default function Hero() {
  return (
    <div className="h-[calc(100vh-4rem)] relative w-full bg-gray-800 bg-streaks bg-cover bg-center object-cover">
      <div className="absolute z-0 inset-0 h-full bg-gradient-to-br from-gray-800 to-black opacity-80" />
      <div className="absolute z-10 inset-0 flex gap-8 p-8 pb-20 h-full md:container">
        <Transition
          as="div"
          show
          appear
          enter="transition-all ease-out duration-1000"
          enterFrom="-translate-x-12 opacity-0"
          enterTo="translate-x-0 opacity-100"
          className="flex flex-col justify-center text-center lg:text-left"
        >
          {/* <div className="flex flex-col text-center justify-center lg:text-left"> */}
          <h1 className="pb-4 text-6xl font-black">
            I create beautiful, performant websites
          </h1>
          <p className="pt-2 text-gray-200 text-lg tracking-widest uppercase">
            Frontend Web Developer
          </p>
          <div className="mt-20 inline-block">
            <Button size="lg" icon={faFileAlt} href="/#projects" color="pink">
              View Portfolio
            </Button>
          </div>
          {/* </div> */}
        </Transition>
        <div className="hidden flex-col justify-center w-4/5 h-full lg:flex">
          <Image
            src="/img/coloredStreaks.png"
            alt="converged lines with a pink to blue gradient"
            width="800"
            height="800"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="bottom-[-1px] absolute w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[200%] h-[81px] md:w-[calc(100%+1.3px)] relative block"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="text-gray-800 fill-current"
          />
        </svg>
      </div>
    </div>
  );
}
