import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/UI/Button';

export default function success() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold pb-4">Thanks for reaching out!</h1>
      <div className="inline-block">
        <Button href="/" icon={faArrowLeft} color="gray">
          Homepage
        </Button>
      </div>
    </div>
  );
}
