import Image from 'next/image';

export default function Tag() {
  return (
    <div
      className="text-center w-full md:max-w-3xl mt-10 bg-gray-800
    p-8 md:rounded mx-auto"
    >
      <h1 className="text-3xl font-black pb-4">Projects</h1>
      <p className="pb-2">This is my projects repository</p>
      <div className="pt-4">
        <Image
          src="http://placecats.com/800/800"
          height="300"
          width="300"
          objectFit="contain"
          className="mx-auto rounded-full"
        />
      </div>
    </div>
  );
}
