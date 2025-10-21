import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function RichTextRender({ content }) {
  const options = {
    renderText: (text) =>
      text
        .split('\n')
        .reduce(
          (children, textSegment, index) => [
            ...children,
            index > 0 && <br key={index} />,
            textSegment,
          ],
          []
        ),
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.CODE]: (text) => (
        <p className="p-2 text-white bg-black rounded-md">
          <span className="font-mono">{text}</span>
        </p>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <div className="pb-4">{children}</div>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="pt-6 pb-2 text-2xl font-bold first-of-type:mt-0">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="pt-4 pb-2 text-xl font-bold">{children}</h4>
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
        <li className="pl-1 ml-8">{children}</li>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const image = node.data.target.fields.file;
        const { fields } = node.data.target;
        return (
          <figure className="p-2 mb-4 bg-gray-100 rounded dark:bg-gray-800">
            <a
              href={`https:${image.url}`}
              target="_blank"
              title="Open image in a new tab"
              rel="noreferrer"
            >
              <Image
                src={`https:${image.url}`}
                height={image.details.image.height}
                width={image.details.image.width}
                alt={node.data.target.fields.description}
                className="max-h-[500px] object-contain"
                // unoptimized
              />
            </a>
            <figcaption className="px-2 pt-2 text-sm italic text-gray-700 dark:text-gray-200">
              {fields.description}
            </figcaption>
          </figure>
        );
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="relative p-4 m-4 leading-tight text-white uppercase">
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
