import Image from 'next/image';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faGithub } from '@fortawesome/free-solid-svg-icons';
import ProjectType from '../../components/UI/ProjectType';

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'project' });
  const posts = res.items;

  const paths = posts.map((post) => ({
    params: { project: post.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.project,
    limit: 1,
  });

  return {
    props: {
      project: res.items[0],
      all: res,
    },
  };
}

export default function Project({ project }) {
  const { title, subtitle, content, tags, type, projectUrl, projectSource } =
    project.fields;
  const image = project.fields.thumbnail.fields;
  const gradient = project.fields.gradient ?? ['black', '#333'];
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top right, ${gradient.join(', ')})`,
  };

  return (
    <>
      <div className="pt-header-offset" style={gradientStyle}>
        <div className="max-w-[75ch] mx-auto py-16 px-8 text-white text-shadow-black">
          <ProjectType color={gradient[0]}>{type}</ProjectType>
          <h1 className="pt-2 text-4xl font-black">{title}</h1>
          <h2 className="text-xl font-bold">{subtitle}</h2>
          <ul className="flex flex-wrap gap-2 my-4">
            {tags &&
              tags.map((tag, i) => (
                <li
                  className="px-3 py-1 text-sm font-bold text-black bg-white rounded"
                  key={i}
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[75ch] mx-auto py-4 px-8">
        <Image
          src={`https:${image.file.url}`}
          alt={image.description}
          width="1920"
          height="1080"
          className="object-cover w-full h-full mb-8 -mt-12 transition duration-200 ease-in-out bg-white rounded-lg scale-101 group-hover:scale-100 group-focus-visible:scale-100"
        />
        <Content content={content} />

        {/* Project Links */}
        <div className="flex flex-wrap self-end w-full gap-4">
          {(projectSource && (
            <a
              href={projectSource}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 px-4 py-2 font-bold text-white bg-gray-900 rounded"
            >
              <FontAwesomeIcon icon={faGithub} className="self-center h-6" />
              View Source
            </a>
          )) || (
            <p className="flex gap-2 px-4 py-2 font-bold text-gray-300 bg-gray-900 rounded cursor-not-allowed">
              Source Private
            </p>
          )}

          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 my-auto font-bold text-black bg-white rounded"
          >
            -&gt; Live Demo
          </a>
        </div>
      </div>
    </>
  );
}

function Content({ content }) {
  const options = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
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
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <div className="pb-4">{children}</div>;
      },
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
        const fields = node.data.target.fields;
        return (
          <figure className="p-2 mb-4 bg-gray-100 rounded dark:bg-gray-800">
            <a
              href={`https://${image.url}`}
              target="_blank"
              title="Open image in a new tab"
            >
              <Image
                src={`https://${image.url}`}
                height={image.details.image.height}
                width={image.details.image.width}
                alt={node.data.target.fields.description}
                className="max-h-[500px] object-contain"
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
