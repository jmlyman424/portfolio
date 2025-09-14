import Image from 'next/image';
import { createClient } from 'contentful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectType from '../../components/UI/ProjectType';
import RichTextRender from '../../helpers/RichTextRender';

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
              tags.map((tag) => (
                <li
                  className="px-3 py-1 text-sm font-bold text-black bg-white rounded"
                  key={tag}
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
        <RichTextRender content={content} />

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
