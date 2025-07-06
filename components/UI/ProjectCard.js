/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  Dialog,
  DialogTitle,
  DialogBackdrop,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faQuoteLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ project }) {
  const {
    title,
    subtitle,
    content,
    tags,
    projectUrl,
    projectSource,
    type,
    gradient,
  } = project.fields;
  const image = project.fields.thumbnail.fields;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useRef(null);
  const gradientStyle = {
    'background-image': `linear-gradient(to top right, ${gradient.join(', ')})`,
  };

  return (
    <Link
      href={`/project/${title.toLowerCase().replaceAll(' ', '-')}`}
      style={gradientStyle}
      className="group p-4 flex flex-col gap-4 max-w-sm text-left rounded-xl hover:shadow group-focus-visible:shadow overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-md aspect-16/9 bg-white">
        <div className="absolute z-[1] h-full w-full bg-white opacity-10 translate-x-96 group-hover:translate-x-80 duration-75 rotate-45 scale-200 blur-sm" />
        <Image
          src={`https:${image.file.url}`}
          alt={image.description}
          width="300"
          height="200"
          className="object-cover w-full h-full scale-101 group-hover:scale-100 group-focus-visible:scale-100 transition duration-75 ease-in-out"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <p
            className="px-2 py-1 flex-none text-sm bg-white text-black rounded-sm"
            style={{
              background: `color-mix(in srgb, ${gradient[0]}, #fff 80%)`,
            }}
          >
            <span
              className="font-bold pr-1.5"
              style={{ color: `${gradient[gradient.length - 1]}` }}
            >
              |
            </span>
            {type}
          </p>
        </div>
        <h2 className="whitespace-nowrap text-2xl font-bold">{title}</h2>
        <p className="leading-4">{subtitle}</p>
      </div>
    </Link>
  );
}

function Tag({ tag }) {
  const tagSlug = tag.toLowerCase();

  return (
    <li key={tag}>
      <Link
        href={`/tag/${tagSlug}`}
        className="px-2 py-1 text-white text-sm font-bold bg-gray-800 rounded"
      >
        {tag}
      </Link>
    </li>
  );
}

// Edit the rendering for rich-text from Contentful:
function Content({ content }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.CODE]: (text) => (
        <span className="font-mono bg-black">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="">{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="first-of-type:mt-0 mt-6 text-2xl font-bold">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-xl font-bold">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-lg font-bold">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-lg">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="ml-8 pl-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="relative m-4 p-4 text-white leading-tight uppercase">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            height="32px"
            width="32px"
            className="absolute inset-0 text-4xl opacity-10"
          />
          {children}
        </div>
      ),
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
}
