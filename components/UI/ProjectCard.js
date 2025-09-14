import Image from 'next/image';
import Link from 'next/link';
import ProjectType from './ProjectType';

export default function ProjectCard({ project }) {
  const { title, subtitle, type, slug } = project.fields;
  const image = project.fields.thumbnail.fields;
  const gradient = project.fields.gradient ?? ['black', '#333'];
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top right, ${gradient.join(', ')})`,
  };

  return (
    <Link
      href={`/project/${slug}`}
      style={gradientStyle}
      className="group p-4 flex flex-col gap-4 max-w-sm text-left rounded-xl hover:scale-101 hover:shadow group-focus-visible:shadow overflow-hidden duration-200"
    >
      <div className="relative overflow-hidden rounded-md aspect-16/9 bg-white">
        <div className="absolute z-[1] h-full w-full bg-white opacity-10 translate-x-96 group-hover:translate-x-80 duration-200 rotate-45 scale-200 blur-sm" />
        <Image
          src={`https:${image.file.url}`}
          alt={image.description}
          width="300"
          height="200"
          className="object-cover w-full h-full scale-101 group-hover:scale-100 group-focus-visible:scale-100 transition duration-200 ease-in-out"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <ProjectType color={gradient[0]}>{type}</ProjectType>
        </div>
        <h2 className="whitespace-nowrap text-2xl text-white font-bold">
          {title}
        </h2>
        <p className="leading-4 text-white">{subtitle}</p>
      </div>
    </Link>
  );
}
