import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  return (
    <div
      className="text-center w-full md:max-w-3xl mt-10 bg-gray-800
    p-8 md:rounded mx-auto"
    >
      <h1 className="text-3xl font-black pb-4">Hey There!</h1>
      <p className="pb-2">
        You&apos;re searching for the{' '}
        <span className="text-pink-400 font-bold">{router.query.project}</span>{' '}
        project.
      </p>
      <p className="pb-2">
        Unfortunately, that feature is still under development. In the meantime,
        feel free to enjoy this picture of a kitten. 😺
      </p>

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
