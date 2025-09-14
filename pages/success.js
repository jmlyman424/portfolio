import Button from '../components/UI/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function success() {
  return (
    <div className="flex flex-col items-center justify-center mt-header-offset pt-header-offset">
      <h1 className="text-4xl font-bold pb-4">Thanks for reaching out!</h1>
      <p className="max-w-[70ch]">
        Your message has been sent; I'll respond as soon as I get to it. In the
        meantime, feel free to check out the rest of my portfolio, or if you
        have enjoyed this site, feel free to share it with others on social
        media.
        <br />
        Thanks again!
        <br />
        -Joe
      </p>
      <div className="inline-block">
        <Button href="/" icon={faArrowLeft} color="gray">
          Homepage
        </Button>
      </div>
    </div>
  );
}
