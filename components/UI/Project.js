/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, useRef } from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faQuoteLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project({ project }) {
  const { title, content, tags, projectUrl, projectSource, type } =
    project.fields;
  const image = project.fields.thumbnail.fields;

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useRef(null);

  return (
    <>
      <button
        className="group relative flex-grow p-2 w-72 max-w-sm h-48 text-left bg-gray-900 rounded-xl hover:shadow group-focus-visible:shadow overflow-hidden" // padding-8
        type="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {/* Project Thumbnail */}
        <div className="absolute inset-0">
          <Image
            src={`https:${image.file.url}`}
            // src="https://placekitten.com/400/400"
            alt={image.description}
            height="200"
            width="400"
            objectFit="cover"
            className="group-hover:scale-105 group-focus-visible:scale-105 transition duration-500 ease-in-out"
          />
        </div>
        <p className="absolute left-0 top-4 pl-4 pr-6 py-1 text-sm bg-blue-600 rounded-r-full">
          {type}
        </p>
        <div className="absolute inset-0 mt-20 px-4 bg-gradient-to-b from-transparent to-black">
          <h2 className="pt-10 whitespace-nowrap text-2xl font-bold group-hover:translate-y-0 group-focus-visible:translate-y-0 translate-y-6 transition-all duration-500 ease-in-out">
            {title}
          </h2>
          <p className="text-gray-100 group-hover:-translate-y-0 group-focus-visible:-translate-y-0 translate-y-20 transition-all duration-500 ease-in-out">
            View This Project{' '}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
              height="12px"
              width="12px"
              className="inline"
            />
          </p>
        </div>
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          initialFocus={closeModal}
          className="z-[100] fixed inset-0 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="px-4 min-h-screen text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block align-middle h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              {/* Actual Overlay bit... */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="translate-y-20"
                enterTo="translate-y-0"
                leave="ease-in duration-300"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-20"
              >
                <div className="relative inline-block align-middle my-8 p-6 w-full max-w-4xl text-left text-white bg-gray-700 rounded shadow-xl overflow-hidden transform transition-all">
                  {/* Close Modal Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    ref={closeModal}
                    className="group absolute right-0 top-0 flex justify-center mr-6 mt-7 w-8 h-8 group-hover:text-black font-bold hover:bg-gray-100 rounded-full transition-colors duration-150"
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      height="20px"
                      width="20px"
                      className="self-center group-hover:text-black text-white duration-150"
                    />
                  </button>

                  <Dialog.Title
                    as="h3"
                    className="text-left text-white text-4xl font-bold pr-6"
                  >
                    {title}
                  </Dialog.Title>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-2 my-4">
                    {tags.map((tag) => (
                      <Tag tag={tag} key={tag} />
                    ))}
                  </ul>

                  {/* Body */}
                  <div className="mb-8 p-4 bg-gray-800 rounded">
                    <Content content={content} />
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4 self-end w-full">
                    {(projectSource && (
                      <a
                        href={projectSource}
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-2 px-4 py-2 text-white font-bold bg-gray-900 rounded"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="self-center h-6"
                        />
                        View Source
                      </a>
                    )) || (
                      <p className="flex gap-2 px-4 py-2 text-gray-300 font-bold bg-gray-900 rounded cursor-not-allowed">
                        Source Private
                      </p>
                    )}

                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="my-auto px-4 py-2 text-black font-bold bg-white rounded"
                    >
                      -&gt; Live Demo
                    </a>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function Tag({ tag }) {
  const tagSlug = tag.toLowerCase();

  return (
    <li key={tag}>
      <Link href={`/tag/${tagSlug}`}>
        <a className="px-2 py-1 text-white text-sm font-bold bg-gray-800 rounded">
          {tag}
        </a>
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
