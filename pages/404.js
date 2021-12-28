import Button from '../components/UI/Button';

export default function Custom404() {
  return (
    <div className="mt-20 p-4 max-w-lg mx-auto self-center">
      <p className="w-full text-center text-8xl font-black leading-none pb-10 text-gray-600 opacity-20 select-none">
        404
      </p>

      <p className=" text-2xl font-bold uppercase">
        <span className="text-blue-300">OOPS! </span>Task failed successfully.
      </p>
      <p className="pb-10 text-gray-100">
        Looks like you&apos;ve found a page that doesn&apos;t exist. How about
        we head back home, okay?
      </p>

      <Button href="/">Homepage</Button>
    </div>
  );
}
